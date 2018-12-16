const express = require('express');
var router =express.Router();
var ObjId = require('mongoose').Types.ObjectId;

var {Customer} = require('../models/Customer_model');

router.get('/',(req, res)=>{
    Customer.find((err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving the data');
        }
    });
});

router.post('/',(req,res)=>{
    var cust = new Customer({
        //schema and model initialization at once
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        city:req.body.city,
        borrowings:[{
            video_id:req.body.video,
            date:req.body.date
        }]
    });
    cust.save((err, data)=>{
        if(!err){
           res.send(data);
        }else{
            console.log('an error occured' + JSON.stringify(err))
        }
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjId.isValid(req.params.id)){
        return res.status(400).send("No record with the given Id")

    }
    var customer = {
        firstName: req.body.firstname,
        lastName:req.body.lastname,
        address:req.body.address,
        city:req.body.city,
        borrowings:{
            video_id:req.id.body,
            date:req.date.body
        }
    };
    Customer.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{
        //new object passed to findAndUpdate is used to tell mongo to return the updated record or all the data
        if(!err){
            res.send(data);
        }else{
            console.log("Error in Customer Update" + JSON.stringify(err));

        }
    });
})

router.delete('/:id',(req,res)=>{
    if(!ObjId.isValid(req.params.id)){
        return res.status(400).send("No record with the given Id")

    }
    Customer.findByIdAndDelete(req.params.id,(err, data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(`Error occurred during deletion of id : ${JSON.stringify(err,undefined,2)}`);
        }
    })    
});

router.get('/:id',(req, res)=>{
    if(!ObjId.isValid(req.params.id)){
        return res.status(400).send(`No record with given Id: ${req.params.id}`)
    }
    Customer.findById(req.params.id,(err, data)=>{
        if(!err){
            res.send(data); 
        }else{
            console.log("Error in retrieving the ID " +JSON.stringify(err,undefined,2));
        }
    })
})

module.exports =router;