import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class InvalidOperationException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        InvalidOperationException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_InvalidOperationException");
            })
            .Other(superInit);

        return InvalidOperationException.prototype.Init.call(this, ...params);
    }
}
