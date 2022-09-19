import ClassValidatorFields from "../../../@seedwork/validators/cross-validator-fields";
import { CategoryProperties } from "../entities/category";
import { IsNotEmpty, IsString, IsDate, IsBoolean, IsOptional, MaxLength } from "class-validator"

export class CategoryRules {

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsBoolean()
    @IsOptional()
    is_active: string

    @IsDate()
    @IsOptional()
    createdAt: Date

    constructor({ name, description, is_active, created_at }: CategoryProperties) {
        Object.assign(this, { name, description, is_active, created_at })
    }
}

export class CategoryValidator extends ClassValidatorFields<CategoryRules>{

    validate(data: CategoryProperties): boolean {
        return super.validate(new CategoryRules(data ?? {} as any))
    }
}

export default class CategoryValidatorFactory {
    static create() {
        return new CategoryValidator()
    }
}