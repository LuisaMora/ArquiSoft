import { db } from "../../../../config/db";

export default async(req,res)=>{
    var sql="select * from usuarios";
    db.query(sql,function(error,result){
        if(error){
            return res.send({
                status:"fail",
                message:error,
                result
            })
        }
        else{
            return res.send({
                status:"success",
                message:"successfully registered",
                result
            })
        }
    })
}

  