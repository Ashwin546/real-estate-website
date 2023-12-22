const mongoose=require('mongoose');
const propertySchema= new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:['PG','flat','plot','house'],
        required:true
    },
    location: {
        type: String,
        required: true,
    },
    bedrooms:{
        type:Number,
        required:true,
    },
    bathrooms:{
        type:Number,
        required:true,
    },
    area:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    images: [{
         type: String, // URLs to property images
         
    }],
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Property =mongoose.model('Property',propertySchema);
module.exports=Property;