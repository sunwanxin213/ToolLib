import MethodOverload from "../Core/MethodOverload.js";
import ArgumentException from "./ArgumentException.js";

export default class ArgumentNullException extends ArgumentException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        ArgumentNullException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "ArgumentNull_Generic");
            })
            .Add([String], function (paramName) {
                superInit.call(this, "ArgumentNull_Generic", paramName);
            })
            .Add([String, String], function (paramName, message) {
                superInit.call(this, message, paramName);
            })
            .Other(superInit);

        return ArgumentNullException.prototype.Init.call(this, ...params);
    }
}
