const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name:{type:String,require:true},
    imgURL:{type:String,require:true},
    specialization  :{type:String,
        require:true,
        default:"Tech",
        enum:["Cardiologist", "Dermatologist", "Pediatrician", "Psychiatrist"]
    },
    experience:{type:Number,require:true},
    location:{type:String,require:true},
    date:{type:String,require:true},
    slots:{type:Number,require:true},
    fee:{type:Number,require:true}

},{
    versionKey:false
})

const doctorModel = mongoose.model("doctor",doctorSchema)

module.exports={
    doctorModel
}