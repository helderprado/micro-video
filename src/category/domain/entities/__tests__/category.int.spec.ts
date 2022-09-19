import ValidationError from "../../../../@seedwork/errors/validaton-error"
import Category from "../category"

describe("Integration test for category", () => {

    describe("create method", () => {
        it("should be a invalid category when create", () => {
            expect(() => new Category({ name: null })).toThrow(new ValidationError("The name is required"))
            expect(() => new Category({ name: "" })).toThrow(new ValidationError("The name is required"))
            expect(() => new Category({ name: 5 as any })).toThrow(new ValidationError("The name must be a string"))
            expect(() => new Category({ name: "t".repeat(256) })).toThrow(new ValidationError("The name must be less or equal than 255 characters"))
        })

    })

    describe("update method", () => {
        it("should be a invalid category when create", () => {

            const category = new Category({ name: "Movie" })

            expect(() => category.update("", null)).toThrow(new ValidationError("The name is required"))
            expect(() => category.update(2 as any, null)).toThrow(new ValidationError("The name must be a string"))
            expect(() => category.update("t".repeat(256), "")).toThrow(new ValidationError("The name must be less or equal than 255 characters"))
        })
    })


})