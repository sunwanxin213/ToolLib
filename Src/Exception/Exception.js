import MethodOverload from "../Core/MethodOverload.js";
import Message from "./Message.js";
import { COR_E_EXCEPTION } from "../System/__HResults.js";

export default class Exception extends Error {
    #helpLink = "";

    #hResult = COR_E_EXCEPTION;

    get StackTrace() {
        return this.stack;
    }

    get Message() {
        return this.message;
    }

    constructor(...params) {
        super(...params);

        this.name = this.constructor.name;

        Object.defineProperties(this, {
            HelpLink: {
                get() {
                    return this.#helpLink;
                },
                set: MethodOverload()
                    .Add([String], function (value) {
                        this.#helpLink = value;
                    })
            },
            HResult: {
                get() {
                    return this.#hResult;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#hResult = value;
                    })
            }
        });

        this.Init(...params);

        let newStack = "";

        this.stack.split('\n').forEach((s, i) => {
            if (!i) {
                newStack = s;
            } else {
                if (s.indexOf("MethodOverload") >= 0) {
                    return;
                }
                newStack += '\n' + s;
            }
        });

        this.stack = newStack;
    }

    static GetResourceString(...params) {
        Exception.GetResourceString = MethodOverload()
            .Add([String], function (message) {
                return Message[message] ?? message;
            })
            .Other(function (message, ...params) {
                let msg = Message[message] ?? message;
                return msg.replace(/\{(\d+)\}/g,
                    function (m, i) {
                        return params[i];
                    });
            });

        return Exception.GetResourceString.call(this, ...params);
    }

    Init(...params) {
        Exception.prototype.Init = MethodOverload()
            .Add([String], function (message) {
                this.message = this.GetResourceString(message);
            })
            .Other(function () { });

        return Exception.prototype.Init.call(this, ...params);
    }

    GetResourceString(...params) {
        return Exception.GetResourceString(...params);
    }

    SetErrorCode(...params) {
        Exception.prototype.SetErrorCode = MethodOverload()
            .Add([Number], function (hr) {
                this.HResult = hr;
            })
            .Other(function () { });

        return Exception.prototype.SetErrorCode.call(this, ...params);
    }
}
