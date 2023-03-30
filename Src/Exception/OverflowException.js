import MethodOverload from "../Core/MethodOverload.js";
import ArithmeticException from "./ArithmeticException.js";

export default class OverflowException extends ArithmeticException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        OverflowException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_OverflowException");
            })
            .Other(superInit);

        return OverflowException.prototype.Init.call(this, ...params);
    }
}
