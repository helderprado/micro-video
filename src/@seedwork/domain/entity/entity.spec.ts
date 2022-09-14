import UniqueEntityId from "../value-objects/unique-entity-id.vo";
import Entity from "./entity";

class StubEntity extends Entity<{ prop1: string; prop2: number }> { }

describe("Entity unit test", () => {
    it("should set props and id", () => {
        const arrange = { prop1: "prop1", prop2: 10 }
        const entity = new StubEntity({ prop1: "prop1", prop2: 10 })
        expect(entity.props).toStrictEqual(arrange)
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).not.toBeNull()
    })

    it("should accept a valid uuid", () => {
        const arrange = { prop1: "prop1", prop2: 10 }
        const uniqueEntityId = new UniqueEntityId()
        const entity = new StubEntity(arrange, uniqueEntityId)
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).toBe(uniqueEntityId.value)
    })

    it("should convert a entity to a Javascript Object", () => {
        const arrange = { prop1: "prop1", prop2: 10 }
        const uniqueEntityId = new UniqueEntityId()
        const entity = new StubEntity(arrange, uniqueEntityId)
        expect(entity.toJSON()).toStrictEqual({ id: entity.id, ...arrange })
    })
})