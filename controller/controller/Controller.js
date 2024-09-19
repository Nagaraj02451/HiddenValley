const formdata = require("../../Scheema/formdata");

const nodemailer = require("nodemailer");

const newPayment = async (req, res) => {

    try {

        const {adult  ,child , name ,phone , email , datesfirst , datessecond , property } =
        req.body;
      const newOrderCon = formdata({
        adult:adult,
        child : child,
        name : name,
        phone : phone,
        email : email,
        datesfirst : datesfirst,
        datessecond : datessecond,
        property : property
        
      });
  
     const condata =  await newOrderCon.save();
      res.send({
        msg: condata
        
      });
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: email ,  
        subject: "Conformation from Hilldenvalley",
        html: `
        <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">

        <br >
    
    <p style="padding:1px">  Name : ${ name}  ,</p>
    <p style="padding:2px">Email : ${email} , </p>
    <p  style="padding:2px">Number : ${phone}  ,</p>
    <p  style="padding:2px">Adult : ${adult}</p>
    <p  style="padding:2px">Child : ${child}</p>
    <p  style="padding:2px">Dates : ${datesfirst} ${datessecond}</p>
    <p  style="padding:2px">Property : ${property}</p>

     
     </div>
          
    
      `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
  
    })
    const mailOptionsB = {
        from: process.env.EMAIL,
        to: "hello@aweganyz.com" ,  
        subject: "Enquiry Details",
        html: `
        <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">

        <br >
  
    <p style="padding:1px">  Name : ${ name}  ,</p>
    <p style="padding:2px">Email : ${email} , </p>
    <p  style="padding:2px">Number : ${phone}  ,</p>
    <p  style="padding:2px">Adult : ${adult}</p>
    <p  style="padding:2px">Child : ${child}</p>
    <p  style="padding:2px">Dates : ${datesfirst} ${datessecond}</p>
    <p  style="padding:2px">Property : ${property}</p>
     
     </div>
          
          
    
      `
    };
  
    transporter.sendMail(mailOptionsB, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
  
    })
  
  
   
       
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}



module.exports = {
    newPayment,

}
