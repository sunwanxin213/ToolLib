import MethodOverload from "../Core/MethodOverload.js";
import SystemException from "./SystemException.js";

export default class ObjectDisposedException extends SystemException {
    constructor(...params) {
        super(...params);

        this.Init(...params);
    }

    Init(...params) {
        const superInit = super.Init;
        ObjectDisposedException.prototype.Init = MethodOverload()
            .Add([], function () {
                superInit.call(this, "ObjectDisposed_Generic");
            })
            .Add([String], function (objectName) {
                superInit.call(this, objectName, this.GetResourceString("ObjectDisposed_Generic"));
            })
            .Add([[String, null], String], function (paramName, message) {
                this.message = `${this.GetResourceString(message)}\r\n${this.GetResourceString("ObjectDisposed_ObjectName_Name", paramName)}`;
            })
            .Other(superInit);

        return ObjectDisposedException.prototype.Init.call(this, ...params);
    }
}
