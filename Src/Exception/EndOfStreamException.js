import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class EndOfStreamException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        EndOfStreamException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_EndOfStreamException");
            })
            .Other(superInit);

        return EndOfStreamException.prototype.Init.call(this, ...params);
    }
}
