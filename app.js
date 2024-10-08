//Extarnal Imports
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ejs = require('ejs')
const cookieParser = require('cookie-parser');
dotenv.config()

// Default imports
const path = require('path')

//Internal imports

const {notFoundHandlar, errorHandlar} = require('./Middleware/common/errorHandle');
const { cookie } = require('express-validator');

const loginRouter = require('./Router/loginRouter')
const userRouter = require('./Router/userRouter')
const inboxRouter = require('./Router/inboxRouter')




//connect MongoDB
mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>console.log('ModgoDB is Connected'))
.catch((err)=>console.log('err'))

//Request Parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//EJS or View engine
app.set('view engine', 'ejs')

// Static Folder
app.use(express.static(path.join(__dirname, "Public")))

// Cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET))


//Routing Setup
app.use('/', loginRouter)
app.use('/users', userRouter)
app.use('/inbox', inboxRouter)









//Error handleing Not Found
app.use(notFoundHandlar);


//Error handleing default 
app.use(errorHandlar)



app.listen(process.env.PORT, (req,res)=>{
    console.log(`Listing on Port ${process.env.PORT}`);
    
    
    
})



