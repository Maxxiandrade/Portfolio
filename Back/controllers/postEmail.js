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
            from,
            to: 'maxiandrade62@gmail.com',
            subject,
            text
        }
    
        const transport = nodemailer.createTransport(config)
    
        const info = await transport.sendMail(mensaje)
        res.status(200).json(info)
    } catch (error) {
        res.status(400).json({error:error})
    }
    
    
};


module.exports = postEmail