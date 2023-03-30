import MethodOverload from "../Core/MethodOverload.js";
import ArgumentException from "./ArgumentException.js";
import Enum from "../Core/Enum.js";

export default class InvalidEnumArgumentException extends ArgumentException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        InvalidEnumArgumentException.prototype.Init = MethodOverload()
            .Add([String, Number, Enum], function (argumentName, invalidValue, enumClass) {
                this.message = `${this.GetResourceString("InvalidEnumArgument", argumentName, invalidValue, enumClass.name)}`;
            })
            .Other(superInit);

        return InvalidEnumArgumentException.prototype.Init.call(this, ...params);
    }
}
