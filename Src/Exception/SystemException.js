import MethodOverload from "../Core/MethodOverload.js";
import Exception from "./Exception.js";

export default class SystemException extends Exception {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        SystemException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_SystemException");
            })
            .Other(superInit);

        return SystemException.prototype.Init.call(this, ...params);
    }
}
