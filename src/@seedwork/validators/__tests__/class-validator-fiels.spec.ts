import ClassValidatorFields from "../cross-validator-fields"
import * as libClassValidator from 'class-validator'

class StubClassValidator extends ClassValidatorFields<{ field: string }> { }


describe("ClassValidatorFields unit test", () => {
    it("should initialize with erros and validatedData variables with null", () => {
        const validator = new StubClassValidator()
        expect(validator.errors).toBeNull()
        expect(validator.validatedData).toBeNull()
    })

    it("should validate with erros", () => {

        const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidateSync.mockReturnValue([{ property: 'field', constraints: { 'isRequired': 'some error' } }])

        const validator = new StubClassValidator()

        expect(validator.validate(null)).toBeFalsy()
        expect(spyValidateSync).toHaveBeenCalled()
        expect(validator.validatedData).toBeNull()
        expect(validator.errors).toStrictEqual({ 'field': ['some error'] })
    })


    it("should validate without erros", () => {

        const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidateSync.mockReturnValue([])

        const validator = new StubClassValidator()

        expect(validator.validate({ field: 'value' })).toBeTruthy()
        expect(spyValidateSync).toHaveBeenCalled()
        expect(validator.validatedData).toStrictEqual({ field: 'value' })
        expect(validator.errors).toBeNull()
    })

})