import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Champion } from "./champion.schema";

export type SkinDocument = HydratedDocument<Skin>;

@Schema()
export class Skin {
    @Prop({ unique: true, length: 50, required: true})
    name: string;

    @Prop({ type: mongoose.Schema.Types.String, ref: 'Champion' }) 
    champion: Champion; 
}

export const SkinsSchema = SchemaFactory.createForClass(Skin);