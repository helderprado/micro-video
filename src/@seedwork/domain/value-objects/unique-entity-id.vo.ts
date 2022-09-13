import { v4 as uuid, validate as uuidValidate } from "uuid";
import InvalidUuidError from "../../errors/invalide-uuid.error";
import ValueObject from "./value-objects";

export default class UniqueEntityId extends ValueObject<string> {
    constructor(readonly id?: string) {
        super(id || uuid());
        this.validate();
    }

    private validate() {
        const isValid = uuidValidate(this.value);
        if (!isValid) {
            throw new InvalidUuidError();
        }
    }
}
