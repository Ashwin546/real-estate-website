const express =require('express');
const  dotenv =require ('dotenv');
const cookie=require('cookie-parser');
const db=require('./backend/config/mongodb.js')
const userRoutes=require('./backend/routes/userRoute.js')
const propertyRoutes=require('./backend/routes/propertyrenting.js');

dotenv.config({path:'./backend/config/config.env'});
const cloudinary=require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

db();


const app=express();


app.use(express.json())
app.use(cookie());


app.use('/api/user',userRoutes);
app.use('/api/property',propertyRoutes);


app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>');
})



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})