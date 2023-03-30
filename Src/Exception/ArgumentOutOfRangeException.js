import MethodOverload from "../Core/MethodOverload.js";
import ArgumentException from "./ArgumentException.js";

export default class ArgumentOutOfRangeException extends ArgumentException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        ArgumentOutOfRangeException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_ArgumentOutOfRangeException");
            })
            .Add([String], function (paramName) {
                superInit.call(this, "Arg_ArgumentOutOfRangeException", paramName);
            })
            .Add([String, String], function (paramName, message) {
                superInit.call(this, message, paramName);
            })
            .Other(superInit);

        return ArgumentOutOfRangeException.prototype.Init.call(this, ...params);
    }
}
