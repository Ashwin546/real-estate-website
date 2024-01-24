 const Property=require('../models/propertySchema');
 // all property viewer 
 const User=require('../models/UserSchema');
 const allProperty=async (req,res)=>{
    try{
        const allProperties =await Property.find();
        res.status(200).json({
            allProperties,
        })
    }
    catch(error){
          res.status(500).json({
            message: "error in fetching properties",
            error
        });
    }
 };
 const viewProperty=async (req,res)=>{
    
    try {
        const { type, buyOrRent, location } = req.body;
    
        // Build a dynamic query based on provided parameters
        const query = {};
        if (type) query.type = type;
        if (buyOrRent) query.forSale = buyOrRent === 'buy';
        if (location) query.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive search
    
        const properties = await Property.find(query);
    
        res.json(properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
 }
 const addProperty=async (req,res)=>{
    
    try {
        const {description,type,location,bedrooms,bathrooms,area,price,forSale} = req.body;
        if (!description || !type || !location || !bedrooms || !bathrooms || !area || !price || !forSale) {
            
            return res.status(400).json({ error: 'Missing required fields' });
        }
    
    // let images= [];

    // if (req.files) {
    //   // Upload each image to Cloudinary
    //   const uploads = req.files.map(async (file) => {
    //     const result = await cloudinary.uploader.upload(file.buffer.toString('base64'), { folder: 'property-images' });
    //     images.push(result.secure_url);
    //   });

    //   await Promise.all(uploads);
    // }

    const property = new Property({
      description,
      type,
      location,
      bedrooms,
      bathrooms,
      price,
      
      area,
      //images,
      forSale,
      postedBy: req.user._id,
    });
    
    const pushProperty=await property.save();
    let user=await User.findById(req.user._id);
    user.Posts.push(pushProperty._id);

    await user.save();
   

    res.status(201).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const deleteProperty=async (req,res)=>{
    try {
        const delProp=await Property.findById(req.params.id);
          if(!delProp){
            return res.status(404).json({
            success: false,
            message: "Post not found",
           });
        }
        if (delProp.postedBy.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        
        await delProp.deleteOne();
        const user = await User.findById(req.user._id);

        const index = user.Posts.indexOf(req.params.id);
        user.Posts.splice(index, 1);

        await user.save();

        res.status(200).json({
        success: true,
        message: "property deleted",
        });
    } catch (error) {
        res.status(500).json(
          {
            message:error.message,
          }
        )
    }
}
 module.exports={viewProperty,addProperty,allProperty,deleteProperty}

 