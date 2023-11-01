require('dotenv').config();
const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
   service:'mail',
   auth:{
      user:process.env.EMAIL,
      pass:process.env.PASSWORD
   }
});
const mailOptions={
   from:process.env.EMAIL,
   to:process.env.EMAIL,
   subject:'Письмо отрпалвенное через nodemailer',
   text:'Текст самого пиьма'
}
transporter.sendMail(mailOptions,err=>{
   console.log(err)
})

//"scripts": {
//   "start": "react-scripts start",
//      "build": "react-scripts build",
//         "test": "react-scripts test",
//            "eject": "react-scripts eject",
//               "dev": "vite"
//},