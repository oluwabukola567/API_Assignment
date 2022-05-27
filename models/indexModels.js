const mongoose = require("mongoose");
const {Schema} = mongoose;

const crudSchema = new Schema ({
    name: String,
    course: String,
    year: Number,
    createData: Date,
    modifyDate: Date
});

const crudOpera = mongoose.model("crude", crudSchema);


module.exports ={crudOpera} 