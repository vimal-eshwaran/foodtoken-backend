import mongoose from "mongoose";


const databaseconnection = () => {
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect("mongodb+srv://vimalesh114:Eshwar114@cluster0.yxtfffb.mongodb.net/foodtoken",params)
        console.log("Mongodb connected")
    } catch (error) {
        console.log("Mongodb connection error",error)
    }
}

export default databaseconnection;
