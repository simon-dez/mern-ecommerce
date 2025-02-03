
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    });

    // Hash the password before saving the user
    userSchema.pre('save', async function(next){
        if(!this.isModified('password')){
            next();
        }
        this.password = await bcrypt.hash(this.password, 12);
    next();
    });

    // Compare user password

    userSchema.methods.comparePassword = async function(password){
        return await bcrypt.compare(password, this.password);
    };

    export default mongoose.model("User", userSchema);