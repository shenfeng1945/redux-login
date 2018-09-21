import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
   username: String,
   email: String,
   password: String,
   created: String,
})

export default mongoose.model('User',userSchema);