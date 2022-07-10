const mongoose = require('mongoose');
const options = {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}
module.exports = connectDB = async () => {
    try {
    await mongoose.connect((process.env.MONGO),options);
    console.log("mongodb connected")        
    } catch (error) {
    console.log("mongodb NOT connected")      
    }
}


