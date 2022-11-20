import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Ability } from "src/common/interfaces";
import { ObjectTransform } from "src/common/transforms/json-parse.transform";

export class UpdateChampionDto {
    @IsOptional()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;

    @IsOptional()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    rol: string;

    @IsOptional()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    nickname: string;

    @IsOptional()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    description: string;

    @IsOptional()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    bio: string;

    @IsOptional()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    region: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    difficulty: number;

    @Transform(ObjectTransform)
    @IsOptional()
    Abilities: Ability[];
}
