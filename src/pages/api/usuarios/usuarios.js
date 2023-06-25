import { db } from "../../../../config/db";

export default async(req,res)=>{
    var sql="INSERT INTO usuarios VALUES ('"+req.body.idUsuario+"','"+req.body.nombre+"','"+req.body.correo+"','"+req.body.contraseña+"')";
    db.query(sql,function(error,result){
        if(error){
            return res.send({
                status:"fail",
                message:error,
            })
        }
        else{
            return res.send({
                status:"success",
                message:"successfully registered",
            })
        }
    })
}

  