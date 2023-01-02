const express=require('express');
const PORT=process.env.PORT||3000;
const app=express();
let path=require('path');
let {category,subcategory,product,type,dimension,delivery}=require('./routes');
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/category',category);
app.use('/subcategory',subcategory);
app.use('/product',product);
app.use('/type',type);
app.use('/dimension',dimension);
app.use('/delivery',delivery);
app.listen(PORT,()=>{
    console.log('Server started');
});