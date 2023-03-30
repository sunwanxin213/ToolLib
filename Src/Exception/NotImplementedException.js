import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class NotImplementedException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        NotImplementedException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_NotImplementedException");
            })
            .Other(superInit);

        return NotImplementedException.prototype.Init.call(this, ...params);
    }
}
