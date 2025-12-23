import mongoose from "mongoose";
import { Schema, type Document } from "mongoose";


export interface Photo extends Document {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    camera?: {
        model?: string;
        iso?: number;
        aperture?: string;
        shutterSpeed?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const PhotoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        imageUrl: {
            type: String,   
            required: true,
            trim: true,
        },
        tags: [{
            type: String,
            lowercase: true,
            trim: true,
        }],
        camera: {
            model: String,
            iso: Number,
            aperture: String,
            shutterSpeed: String,
        }
            
    },
    { timestamps: true }
)

export default mongoose.model<Photo>("Photo", PhotoSchema);