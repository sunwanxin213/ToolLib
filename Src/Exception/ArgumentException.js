import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class ArgumentException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        ArgumentException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_ArgumentException");
            })
            .Add([String, String], function (message, paramName) {
                this.message = `${this.GetResourceString(message)}\r\n${this.GetResourceString("Arg_ParamName_Name", paramName)}`;
            })
            .Other(superInit);

        return ArgumentException.prototype.Init.call(this, ...params);
    }
}
