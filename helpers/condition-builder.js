generateConditionOr=(req,res)=>{
  
    let okeys=Object.keys(req.query);
    let ovalues=Object.values(req.query);
    console.log(ovalues);
    conditions=[];
    for (let i=0;i<okeys.length;i++){
        for (let j=0;j<ovalues.length;j++)
        {
            if(i==j){
            let condition={};
           condition[okeys[i]]=ovalues[j];
           conditions.push(condition);
           
            }
        }
    }
   return conditions;
}
module.exports={generateConditionOr};