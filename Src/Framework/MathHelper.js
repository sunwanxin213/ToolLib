import MethodOverload from "../Core/MethodOverload.js";

export default class MathHelper {
    static get E() {
        return 2.71828175;
    }

    static get Log10E() {
        return 0.4342945;
    }

    static get Log2E() {
        return 1.442695;
    }

    static get Pi() {
        return 3.14159274;
    }

    static get PiOver2() {
        return 1.57079637;
    }

    static get PiOver4() {
        return 0.7853982;
    }

    static get TwoPi() {
        return 6.28318548;
    }

    static Barycentric = MethodOverload()
        .Add([Number, Number, Number, Number, Number], function (value1, value2, value3, amount1, amount2) {
            return value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2;
        });

    static CatmullRom = MethodOverload()
        .Add([Number, Number, Number, Number, Number], function (value1, value2, value3, value4, amount) {
            let amountSquared = amount * amount;
            let amountCubed = amountSquared * amount;
            return 0.5 * (2.0 * value2 +
                (value3 - value1) * amount +
                (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * amountSquared +
                (3.0 * value2 - value1 - 3.0 * value3 + value4) * amountCubed);
        });

    static Clamp = MethodOverload()
        .Add([Number, Number, Number], function (value, min, max) {
            return Math.min(Math.max(value, min), max);
        });

    static Distance = MethodOverload()
        .Add([Number, Number], function (value1, value2) {
            return Math.abs(value1 - value2);
        });

    static Hermite = MethodOverload()
        .Add([Number, Number, Number, Number, Number], function (value1, tangent1, value2, tangent2, amount) {
            let result;
            let sCubed = amount * amount * amount;
            let sSquared = amount * amount;

            if (amount == 0) {
                result = value1;
            } else if (amount == 1) {
                result = value2;
            } else {
                result = (2 * value1 - 2 * value2 + tangent2 + tangent1) * sCubed +
                    (3 * value2 - 3 * value1 - 2 * tangent1 - tangent2) * sSquared +
                    tangent1 * amount +
                    value1;
            }

            return result;
        });

    static Lerp = MethodOverload()
        .Add([Number, Number, Number], function (value1, value2, amount) {
            return value1 + (value2 - value1) * amount;
        });

    static Max = MethodOverload()
        .Add([Number, Number], function (value1, value2) {
            return Math.max(value1, value2);
        });

    static Min = MethodOverload()
        .Add([Number, Number], function (value1, value2) {
            return Math.min(value1, value2);
        });

    static SmoothStep = MethodOverload()
        .Add([Number, Number, Number], function (value1, value2, amount) {
            let result = MathHelper.Clamp(amount, 0, 1);
            result = MathHelper.Hermite(value1, 0, value2, 0, result);

            return result;
        });

    static ToDegrees = MethodOverload()
        .Add([Number], function (radians) {
            // 57.29577793714917 = 180 / this.Pi
            return radians * 57.29577793714917;
        });

    static ToRadians = MethodOverload()
        .Add([Number], function (degrees) {
            // 0.017453293 = this.Pi / 180
            return degrees * 0.017453293;
        });

    static WrapAngle = MethodOverload()
        .Add([Number], function (angle) {
            if ((angle > -this.Pi) && (angle <= this.Pi)) {
                return angle;
            }

            angle %= this.TwoPi;

            if (angle <= -this.Pi) {
                return angle + this.TwoPi;
            }

            if (angle > this.Pi) {
                return angle - this.TwoPi;
            }

            return angle;
        });

    static IsPowerOfTwo = MethodOverload()
        .Add([Number], function (value) {
            return (value > 0) && ((value & (value - 1)) == 0);
        });

    static ClosesetMSAAPower = MethodOverload()
        .Add([Number], function (value) {
            if (value === 1) {
                return 0;
            }

            let result = value - 1;
            result |= result >> 1;
            result |= result >> 2;
            result |= result >> 4;
            result |= result >> 8;
            result |= result >> 16;
            result += 1;
            if (result == value) {
                return result;
            }
            return result >> 1;
        });
}
