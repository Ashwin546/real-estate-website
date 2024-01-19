const express =require('express');
const dotenv =require ('dotenv');
const cors = require('cors');
const cookie=require('cookie-parser');
const db=require('./config/mongodb.js')
const userRoutes=require('./routes/userRoute.js')
const propertyRoutes=require('./routes/propertyrenting.js');

dotenv.config({path:'./config/config.env'});
const cloudinary=require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

db();


const app=express();

app.use(cors());
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