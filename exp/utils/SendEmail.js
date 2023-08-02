const nodemailer = require('nodemailer')
module.exports =async(email,subject, text)=>{
    const tranporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD_EMAIL
        }
        
    })
    
    const mailOption={
        from:process.env.EMAIL,
        to:email,
        subject:subject,
        text:text
    }
    tranporter.sendMail(mailOption,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log('email sent :' + info.response)
        }
    })

}
