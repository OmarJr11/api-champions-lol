import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateSkinDto {
    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;
}
