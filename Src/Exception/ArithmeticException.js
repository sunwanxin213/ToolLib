import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class ArithmeticException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        ArithmeticException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_ArithmeticException");
            })
            .Other(superInit);

        return ArithmeticException.prototype.Init.call(this, ...params);
    }
}
