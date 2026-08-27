import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    company: { type: String, required: false},
    message: { type: String, required: true},
});

export const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);