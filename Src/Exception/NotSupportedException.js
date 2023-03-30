import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class NotSupportedException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        NotSupportedException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_NotSupportedException");
            })
            .Other(superInit);

        return NotSupportedException.prototype.Init.call(this, ...params);
    }
}
