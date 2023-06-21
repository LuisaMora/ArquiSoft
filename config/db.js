const {createPool}= require ('mysql');
const pool= createPool({
    host:"localhost",
    user:"root",
    password:"ServilyLulu123",
    port:3306,
    database:"gastos_web",
});

pool.getConnection((err)=>{
    if (err){
        console.log(err);
    }
    console.log("Conectado a la base de datos...");
});
module.exports = pool;