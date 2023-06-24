import { db } from "../../../../config/db";

export default async(req,res)=>{
var id = 1
var sql = "SELECT * FROM movimientos WHERE idUsuario = ?";




    db.query(sql,id,function(error,result){
        console.log(sql)
        if(error){
            console.log(sql)
            return res.send({
                status:"fail",
                message:error,
                result: result
            });
        }
        else{
            console.log(sql)
            return res.send({
                status:"success",
                message:"successfully registered",
                result: result
            });
        }
    })
}

  