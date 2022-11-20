import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { Skill } from 'src/common/interfaces';
import { ObjectTransform } from 'src/common/transforms/json-parse.transform';

export class CreateChampionDto {
    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    rol: string;

    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    nickname: string;

    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    description: string;

    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    bio: string;

    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    region: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    difficulty: number;

    @Transform(ObjectTransform)
    @IsNotEmpty()
    skills: Skill[];
}
