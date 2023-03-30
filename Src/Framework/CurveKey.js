import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import CurveContinuity from "./CurveContinuity.js";

export default class CurveKey extends Base {
    get Position() {
        return this.#position;
    }

    #continuity = null;

    #position = 0;

    #tangentIn = 0;

    #tangentOut = 0;

    #value = 0;

    static #_constructor = function (...params) {
        CurveKey.#_constructor = MethodOverload()
            .Add([Number, Number], function (position, value) {
                return CurveKey.#_constructor.call(this, position, value, 0, 0, CurveContinuity.Smooth);
            })
            .Add([Number, Number, Number, Number], function (position, value, tangentIn, tangentOut) {
                return CurveKey.#_constructor.call(this, position, value, tangentIn, tangentOut, CurveContinuity.Smooth);
            })
            .Add([Number, Number, Number, Number, CurveContinuity], function (position, value, tangentIn, tangentOut, continuity) {
                [this.Continuity, this.TangentIn, this.TangentOut, this.Value] = [continuity, tangentIn, tangentOut, value];
                this.#position = position;
            });

        return CurveKey.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Continuity: {
                get() {
                    return this.#continuity;
                },
                set: MethodOverload()
                    .Add([CurveContinuity], function (value) {
                        this.#continuity = value;
                    })
            },
            TangentIn: {
                get() {
                    return this.#tangentIn;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#tangentIn = value;
                    })
            },
            TangentOut: {
                get() {
                    return this.#tangentOut;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#tangentOut = value;
                    })
            },
            Value: {
                get() {
                    return this.#value;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#value = value;
                    })
            }
        });

        return CurveKey.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.Continuity;
        yield this.Position;
        yield this.TangentIn;
        yield this.TangentOut;
        yield this.Value;
    };

    Clone(...params) {
        CurveKey.prototype.Clone = MethodOverload()
            .Add([], function () {
                return new CurveKey(this.Position, this.Value, this.TangentIn, this.TangentOut, this.Continuity);
            });

        return CurveKey.prototype.Clone.call(this, ...params);
    };

    CompareTo(...params) {
        CurveKey.prototype.CompareTo = MethodOverload()
            .Add([CurveKey], function (other) {
                if (this.Position > other.Position) {
                    return 1;
                } else if (this.Position < other.Position) {
                    return -1;
                } else {
                    return 0;
                }
            });

        return CurveKey.prototype.CompareTo.call(this, ...params);
    };

    Equals(...params) {
        CurveKey.prototype.Equals = MethodOverload()
            .Add([CurveKey], function (other) {
                return (this.Position === other.Position) &&
                    (this.Value === other.Value) &&
                    (this.TangentIn === other.TangentIn) &&
                    (this.TangentOut === other.TangentOut) &&
                    (this.Continuity === other.Continuity);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return CurveKey.prototype.Equals.call(this, ...params);
    };
}
