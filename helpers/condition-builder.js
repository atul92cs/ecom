generateCondition=(req,res)=>{
     let {filter}=req.query;
     
     filter=filter.split(',');
  
    conditions=[];
    filter.forEach(element => {
        element=JSON.parse(element.replace(/[\[\]]/g, ''));
        console.log(element);
        conditions.push(element);
    }); 
    console.log(conditions);
   return conditions;
}
module.exports={generateCondition};