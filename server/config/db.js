import mongoose from "mongoose";
import chalk from "chalk";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,);
        console.log(chalk.bold.bgCyan(`MongoDB connected: ${conn.connection.host}`));
    } catch (error) {
        console.error(chalk.bold.red(`MongoDB connection error' ${error.message}`));
        process.exit(1);
    }
    };
    export default connectDB;
