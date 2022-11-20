import { Type } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateSkinDto {
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
    champion: string;
}
