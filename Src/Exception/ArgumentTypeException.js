import MethodOverload from "../Core/MethodOverload.js";
import ArgumentException from "./ArgumentException.js";

export default class ArgumentTypeException extends ArgumentException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        ArgumentTypeException.prototype.Init = MethodOverload()
            .Add([String], function (paramName) {
                superInit.call(this, "Argument_TypeError", paramName);
            })
            .Add([String, String], function (paramName, type) {
                this.message = this.GetResourceString("Argument_TypeNotMatchError", paramName, type);
            })
            .Other(superInit);

        return ArgumentTypeException.prototype.Init.call(this, ...params);
    }
}
