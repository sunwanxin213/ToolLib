import Base from "../Core/Base.js";
import MethodOverload from "../Core/MethodOverload.js";
import MathHelper from "./MathHelper.js";
import Vector2 from "./Vector2.js";

export default class CubicBezier extends Base {
    static get Linear() {
        return new CubicBezier(0, 0, 1, 1);
    }

    static get Ease() {
        return new CubicBezier(0.25, 0.1, 0.25, 1);
    }

    static get EaseIn() {
        return new CubicBezier(0.42, 0, 1, 1);
    }

    static get EaseOut() {
        return new CubicBezier(0, 0, 0.58, 1);
    }

    static get EaseInOut() {
        return new CubicBezier(0.42, 0, 0.58, 1);
    }

    static get EaseInSine() {
        return new CubicBezier(0.12, 0, 0.39, 0);
    }

    static get EaseOutSine() {
        return new CubicBezier(0.61, 1, 0.88, 1);
    }

    static get EaseInOutSine() {
        return new CubicBezier(0.37, 0, 0.63, 1);
    }

    static get EaseInQuad() {
        return new CubicBezier(0.11, 0, 0.5, 0);
    }

    static get EaseOutQuad() {
        return new CubicBezier(0.5, 1, 0.89, 1);
    }

    static get EaseInOutQuad() {
        return new CubicBezier(0.45, 0, 0.55, 1);
    }

    static get EaseInCubic() {
        return new CubicBezier(0.32, 0, 0.67, 0);
    }

    static get EaseOutCubic() {
        return new CubicBezier(0.33, 1, 0.68, 1);
    }

    static get EaseInOutCubic() {
        return new CubicBezier(0.65, 0, 0.35, 1);
    }

    static get EaseInQuart() {
        return new CubicBezier(0.5, 0, 0.75, 0);
    }

    static get EaseOutQuart() {
        return new CubicBezier(0.25, 1, 0.5, 1);
    }

    static get EaseInOutQuart() {
        return new CubicBezier(0.76, 0, 0.24, 1);
    }

    static get EaseInQuint() {
        return new CubicBezier(0.64, 0, 0.78, 0);
    }

    static get EaseOutQuint() {
        return new CubicBezier(0.22, 1, 0.36, 1);
    }

    static get EaseInOutQuint() {
        return new CubicBezier(0.83, 0, 0.17, 1);
    }

    static get EaseInExpo() {
        return new CubicBezier(0.7, 0, 0.84, 0);
    }

    static get EaseOutExpo() {
        return new CubicBezier(0.16, 1, 0.3, 1);
    }

    static get EaseInOutExpo() {
        return new CubicBezier(0.87, 0, 0.13, 1);
    }

    static get EaseInCirc() {
        return new CubicBezier(0.55, 0, 1, 0.45);
    }

    static get EaseOutCirc() {
        return new CubicBezier(0, 0.55, 0.45, 1);
    }

    static get EaseInOutCirc() {
        return new CubicBezier(0.85, 0, 0.15, 1);
    }

    static get EaseInBack() {
        return new CubicBezier(0.36, 0, 0.66, -0.56);
    }

    static get EaseOutBack() {
        return new CubicBezier(0.34, 1.56, 0.64, 1);
    }

    static get EaseInOutBack() {
        return new CubicBezier(0.68, -0.6, 0.32, 1.6);
    }

    static get EaseInElastic() {
        return new CubicBezier(0.7, -1, 0.84, 1);
    }

    static get EaseOutElastic() {
        return new CubicBezier(0.16, -1, 0.3, 2);
    }

    static get EaseInOutElastic() {
        return new CubicBezier(0.87, -1, 0.13, 2);
    }

    static get EaseInBounce() {
        return new CubicBezier(0.7, 1.56, 0.84, 1);
    }

    static get EaseOutBounce() {
        return new CubicBezier(0.16, -0.56, 0.3, 1);
    }

    static get EaseInOutBounce() {
        return new CubicBezier(0.87, 1.56, 0.13, 1);
    }

    #dontCalc = false;

    #x1 = 0;

    #y1 = 0;

    #x2 = 0;

    #y2 = 0;

    #v1 = null;

    #v2 = null;

    #v3 = null;

    get V1() {
        return new Vector2(0, 0);
    }

    get V2() {
        return new Vector2(this.X1, this.Y1);
    }

    get V3() {
        return new Vector2(this.X2, this.Y2);
    }

    get V4() {
        return new Vector2(1, 1);
    }

    static #_constructor = function (...params) {
        CubicBezier.#_constructor = MethodOverload()
            .Add([], function () {
                return CubicBezier.#_constructor.call(this, 0, 0, 1, 1);
            })
            .Add([Vector2, Vector2], function (v1, v2) {
                return CubicBezier.#_constructor.call(this, v1.X, v1.Y, v2.X, v2.Y);
            })
            .Add([Number, Number, Number, Number], function (x1, y1, x2, y2) {
                this.#dontCalc = true;
                this.X1 = x1;
                this.Y1 = y1;
                this.X2 = x2;
                this.Y2 = y2;
                this.#v1 = new Vector2();
                this.#v2 = new Vector2();
                this.#v3 = new Vector2();
                this.#dontCalc = false;
                this.#Calc();
            });

        return CubicBezier.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            X1: {
                get() {
                    return this.#x1;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#x1 = MathHelper.Clamp(value, 0, 1);
                        this.#Calc();
                    })
            },
            Y1: {
                get() {
                    return this.#y1;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#y1 = value;
                        this.#Calc();
                    })
            },
            X2: {
                get() {
                    return this.#x2;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#x2 = MathHelper.Clamp(value, 0, 1);
                        this.#Calc();
                    })
            },
            Y2: {
                get() {
                    return this.#y2;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#y2 = value;
                        this.#Calc();
                    })
            }
        });

        return CubicBezier.#_constructor.call(this, ...params);
    }

    #Calc() {
        if (this.#dontCalc) {
            return;
        }

        this.#v3.X = 3 * this.#x1;
        this.#v3.Y = 3 * this.#y1;
        this.#v2.X = 3 * (this.#x2 - this.#x1) - this.#v3.X;
        this.#v2.Y = 3 * (this.#y2 - this.#y1) - this.#v3.Y;
        this.#v1.X = 1 - this.#v3.X - this.#v2.X;
        this.#v1.Y = 1 - this.#v3.Y - this.#v2.Y;
    }

    #GetX(...params) {
        CubicBezier.prototype.GetX = MethodOverload()
            .Add([Number], function (t) {
                return ((this.#v1.X * t + this.#v2.X) * t + this.#v3.X) * t;
            });

        return CubicBezier.prototype.GetX.call(this, ...params);
    }

    #GetY(...params) {
        CubicBezier.prototype.GetY = MethodOverload()
            .Add([Number], function (t) {
                return ((this.#v1.Y * t + this.#v2.Y) * t + this.#v3.Y) * t;
            });

        return CubicBezier.prototype.GetY.call(this, ...params);
    }

    Solve(...params) {
        CubicBezier.prototype.Solve = MethodOverload()
            .Add([Number], function (x) {
                if (x === 0 || x === 1) {
                    return this.#GetY(x);
                }

                let t = x;
                for (let i = 0; i < 8; i++) {
                    let g = this.#GetX(t) - x;
                    if (Math.abs(g) < Number.EPSILON) {
                        return this.#GetY(t);
                    }

                    let d = (3 * this.#v1.X * t + 2 * this.#v2.X) * t + this.#v3.X;
                    if (Math.abs(d) < 1e-6) {
                        break;
                    }

                    t -= g / d;
                }

                return this.#GetY(t);
            });

        return CubicBezier.prototype.Solve.call(this, ...params);
    }
}