const mongoose = require('mongoose');

const useschema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },

},
{
timestamps:true
});

const usemodel = mongoose.model('user',useschema);

module.exports = usemodel;