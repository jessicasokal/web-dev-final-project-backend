import mongoose from 'mongoose';
import webpageSchema from "./webpage-schema";
const webpageModel = mongoose.model(
    'WebpageModel',
    webpageSchema
)
export default webpageModel;