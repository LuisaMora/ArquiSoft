import { db } from "../../../../config/db";

export default async(req,res)=>{
    var sql="INSERT INTO movimientos VALUES ('"+req.body.idMovimiento+"','"+req.body.descripcion+"','"+req.body.monto+"','"+req.body.fecha+"','"+req.body.descuento+"','"+req.body.tipo+"','"+req.body.idUsuario+"')";
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

  