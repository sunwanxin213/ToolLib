import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";

export default class Point extends Base {
    static get Zero() {
        return new Point(0, 0);
    }

    #x = 0;

    #y = 0;

    static #_constructor = function (...params) {
        Point.#_constructor = MethodOverload()
            .Add([], function () {
                return Point.#_constructor.call(this, 0, 0);
            })
            .Add([Number, Number], function (x, y) {
                [this.X, this.Y] = [x, y];
            });

        return Point.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            X: {
                get() {
                    return this.#x;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#x = value | 0;
                    })
            },
            Y: {
                get() {
                    return this.#y;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#y = value | 0;
                    })
            }
        });

        return Point.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.X;
        yield this.Y;
    };

    Equals(...params) {
        Point.prototype.Equals = MethodOverload()
            .Add([Point], function (other) {
                return (this.X === other.X) &&
                    (this.Y === other.Y);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Point.prototype.Equals.call(this, ...params);
    };

    ToString(...params) {
        Point.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{X:${this.X} Y:${this.Y}}`;
            });

        return Point.prototype.ToString.call(this, ...params);
    };
}
