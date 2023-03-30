import MethodOverload from "./MethodOverload.js";
import ObjectDisposedException from "../Exception/ObjectDisposedException.js";

export default class Base {
    #isDisposed = false;

    get IsDisposed() {
        return this.#isDisposed;
    }

    static get FullName() {
        return this.name;
    }

    get [Symbol.toStringTag]() {
        if (this.IsDisposed) {
            throw new ObjectDisposedException("null", "ObjectDisposed_Generic");
        }

        return this.constructor.name;
    }

    Equals(...params) {
        Base.prototype.Equals = MethodOverload()
            .Add([Object], function (obj) {
                if (this.IsDisposed) {
                    throw new ObjectDisposedException("null", "ObjectDisposed_Generic");
                }

                return this === obj;
            });

        return Base.prototype.Equals.call(this, ...params);
    }

    static DefineProperties(...params) {
        Base.DefineProperties = MethodOverload()
            .Add([Object, Object], function (obj, props) {
                for (let k in props) {
                    let o = props[k];
                    o.configurable = o.configurable ?? true;
                    o.enumerable = o.enumerable ?? true;
                }
                return Object.defineProperties(obj, props);
            });

        return Base.DefineProperties.call(this, ...params);
    }

    static Equals(...params) {
        Base.Equals = MethodOverload()
            .Add([Object, Object], function (objA, objB) {
                return objA.Equals(objB);
            });

        return Base.Equals.call(this, ...params);
    }

    static ReferenceEquals() {
        Base.ReferenceEquals = MethodOverload()
            .Add([Object, Object], function (objA, objB) {
                return "object" === typeof objA && "object" === typeof objB && objA === objB;
            });

        return Base.ReferenceEquals.call(this, ...params);
    }

    Dispose(...params) {
        Base.prototype.Dispose = MethodOverload()
            .Add([], function () {
                this.#isDisposed = true;

                return true;
            });

        return Base.prototype.Dispose.call(this, ...params);
    }

    ToString(...params) {
        Base.prototype.ToString = MethodOverload()
            .Add([], function () {
                if (this.IsDisposed) {
                    throw new ObjectDisposedException("null", "ObjectDisposed_Generic");
                }

                return this.constructor.name;
            });

        return Base.prototype.ToString.call(this, ...params);
    }

    GetType(...params) {
        Base.prototype.GetType = MethodOverload()
            .Add([], function () {
                return this.constructor;
            });

        return Base.prototype.GetType.call(this, ...params);
    }
}
