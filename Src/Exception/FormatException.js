import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class FormatException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        FormatException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_FormatException");
            })
            .Other(superInit);

        return FormatException.prototype.Init.call(this, ...params);
    }
}
