import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Skill } from '../common/interfaces/skill.interface';

export type ChampionDocument = HydratedDocument<Champion>;

@Schema()
export class Champion {
    @Prop({ length: 50, required: true})
    name: string;

    @Prop({ length: 50, required: true})
    rol: string;

    @Prop({ length: 50, required: true})
    nickname: string;

    @Prop({required: true})
    description: string;

    @Prop({ required: true})
    bio: string;

    @Prop({ length: 50, required: true})
    region: string;

    @Prop({ required: true})
    difficulty: number;

    @Prop({ length: 50, required: true, default: 'Active'})
    status: string;

    @Prop({ default: Date.now, required: true})
    creationDate: Date;

    @Prop({ required: false})
    modificationDate?: Date;

    @Prop() 
    skills: Skill[];
}
export const ChampionsSchema = SchemaFactory.createForClass(Champion);