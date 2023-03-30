import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class MemberAccessException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        MemberAccessException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "Arg_AccessException");
            })
            .Other(superInit);

        return MemberAccessException.prototype.Init.call(this, ...params);
    }
}
