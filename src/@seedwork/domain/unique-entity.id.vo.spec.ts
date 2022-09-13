import { validate as uuidValidate } from "uuid";
import InvalidUuidError from "../errors/invalide-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"

describe("UniqueEntityId unit test", () => {

    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

    it("should throw error when uuid is invalid", () => {
        //const validateSpy = spyValidateMethod();
        expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    });

    it("should accept a uuid passed in constructor", () => {
        const vo = new UniqueEntityId("cf3c14a7-0b2c-464e-b30b-a8e4d14f97b1")
        const uuid = "cf3c14a7-0b2c-464e-b30b-a8e4d14f97b1"
        expect(vo.id).toBe(uuid)
        expect(validateSpy).toHaveBeenCalled();
    })

    it("should create and validate a new ID ", () => {
        const vo = new UniqueEntityId()
        expect(uuidValidate(vo.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalled();
    })
})