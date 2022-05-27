const { crudOpera } = require("../models/indexModels");
function showError(err){
    if(err)console.log(err);
}
function index(req, res, next) {
    crudOpera.find({}, "", function(err, records){
        showError(err);
    res.json({
        successful:true,
        records
    });
    });
};
//create a post request named handlepost
function handlepost(req, res, next){
    const {name, course, year} = req.body;
    const addRecord = new crudOpera({
        name,
        course,
        year,
        createDate: Date.now
    });
    addRecord.save(function(err, newRecord){
        showError(err);
        res.json({
            successful:true,
            newRecord
        });

    });
    }



module.exports = {index, handlepost};
