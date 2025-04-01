const mongoose = require('mongoose');

const mongodb = async ()=>{
await mongoose.connect("mongodb://localhost:27017/users")
.then(console.log("MongoDB database connected Successfully"))
.catch();
}
mongodb();
const userSchema = mongoose.Schema({
    image :String,
    email : String,
    name :String,
})

module.exports = mongoose.model("user",userSchema);