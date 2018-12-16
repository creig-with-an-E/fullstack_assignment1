var express = require('express');
var router = express.Router();
var objID = require("mongoose").Types.ObjectId;

let {Video} =require("../models/video_model");
let {Booking} = require('../models/booking_model');

router.post('/',(req,res)=>{
      var video = new Video({
       title :req.body.title,
       runtime :req.body.runtime,
        genre :req.body.genre,
        rating:req.body.rating
     });
     video.save((err, data)=>{
         if(!err){
             res.send(data);
         }else{
             console.log(`Error occurred : ${JSON.stringify(err,undefined,2)}`);
         }
     });
    })

    router.get('/',(req,res)=>{
        Video.find((err,data)=>{
            if(!err){
                res.send(data);
            }else{
                console.log(`Error occured ${JSON.stringify(err,undefined,2)}`)
            }
        });
    });

    router.delete('/:id',(req, res)=>{
        //first check if ths is a valid id
        if(!objID.isValid(req.params.id)){
            res.sendStatus(400).send("Id not valid");
        }
        Video.findByIdAndDelete(req.params.id,(err, data)=>{
            if(!err){
                res.send(data);
            }else{
                console.log(`Error occurred during deletion of id : ${JSON.stringify(err,undefined,2)}`);
            }
        })   
    });

    router.put('/:id',(req,res)=>{
        if(!objID.isValid(req.params.id)){
            return res.status(400).send("No record with the given Id")
    
        }
        var Video = {
            title :req.body.title,
            runtime :req.body.runtime,
             genre :req.body.genre,
             rating:req.body.rating
            }
        });

        //this handles the customer checkout
        router.post('/checkout',(req, res)=>{
            var booking = new Booking({
                video_id:req.body.video_id,
                user_id:req.body.user_id,
                date:new Date()
            });
            booking.save((err, data)=>{
                if(err){
                    console.log(`Error occurred ${err}`);
                }
                else{
                    res.send(data)
                }
            });
        });


module.exports = router;