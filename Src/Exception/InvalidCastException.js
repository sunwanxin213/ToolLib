import MethodOverload from "../Core/MethodOverload.js";
import ArgumentException from "./ArgumentException.js";

export default class InvalidCastException extends ArgumentException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        InvalidCastException.prototype.Init = MethodOverload()
            .Other(superInit);

        return InvalidCastException.prototype.Init.call(this, ...params);
    }
}
