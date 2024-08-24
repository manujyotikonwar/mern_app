const express = require('express');
const { default: mongoose } = require('mongoose');
const app= express();
const cors=require('cors')
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config();
app.use(cors());
const userRoutes=require('./routes/userRoutes')

mongoose.connect(process.env.URI)
        .then(()=>{
            console.log("connection succesfull");

            app.listen(process.env.PORT||8000);
        }
        ).catch((error)=>{
            console.log("error",error);
        }
        );

//creat
app.use('/',userRoutes); 

