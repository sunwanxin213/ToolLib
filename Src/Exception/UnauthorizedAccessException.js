import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class UnauthorizedAccessException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        UnauthorizedAccessException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_UnauthorizedAccessException");
            })
            .Other(superInit);

        return UnauthorizedAccessException.prototype.Init.call(this, ...params);
    }
}
