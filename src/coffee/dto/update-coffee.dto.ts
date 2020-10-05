import { IsOptional, IsString } from 'class-validator'

export class UpdateCoffeeDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    brand?: string;

    @IsOptional()
    @IsString({each: true})
    flavors?: string[];
}