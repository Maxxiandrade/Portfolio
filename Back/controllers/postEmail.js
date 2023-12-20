require('dotenv').config()
const {PASSWORD, MAIL} = process.env
const nodemailer = require('nodemailer');


const postEmail = async(req,res)=>{
    const {from, subject, text} = req.body
    try {
        const config = {
            service: 'gmail',
            port: 587,
            secure:true,
            auth:{
                user:MAIL,
                pass:PASSWORD
            }
        }
        const mensaje = {
            to: 'maxiandrade62@gmail.com',
            subject,
            text:`Enviado por : ${from}. ${text}`
        }
    
        const transport = nodemailer.createTransport(config)
    
        const info = await transport.sendMail(mensaje)
        res.status(200).send("peticion /send recibida correctamente")
    } catch (error) {
        res.status(400).json({error:error})
    }
    
    
};


module.exports = postEmail