const mongoose=require('mongoose');

const connectdatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/renting_website",{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{
    console.log('mongodb is connected');
}).catch((err)=>{
    console.log(err);
});
}

module.exports=connectdatabase;