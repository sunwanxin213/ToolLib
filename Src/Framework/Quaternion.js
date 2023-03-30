import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";

export default class Quaternion extends Base {
    static get Identity() {
        return new Quaternion(0, 0, 0, 1);
    }

    #x = 0;

    #y = 0;

    #z = 0;

    #w = 0;

    static #_constructor = function (...params) {
        Quaternion.#_constructor = MethodOverload()
            .Add([], function () {
                return Quaternion.#_constructor.call(this, 0, 0, 0, 0);
            })
            .Add([Number, Number, Number, Number], function (x, y, z, w) {
                [this.X, this.Y, this.Z, this.W] = [x, y, z, w];
            })
            .Add([Vector3, Number], function (vectorPart, scalarPart) {
                return Quaternion.#_constructor.call(this, vectorPart.X, vectorPart.Y, vectorPart.Z, scalarPart);
            });

        return Quaternion.#_constructor.call(this, ...params);
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
                        this.#x = value;
                    })
            },
            Y: {
                get() {
                    return this.#y;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#y = value;
                    })
            },
            Z: {
                get() {
                    return this.#z;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#z = value;
                    })
            },
            W: {
                get() {
                    return this.#w;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#w = value;
                    })
            }
        });

        return Quaternion.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.X;
        yield this.Y;
        yield this.Z;
        yield this.W;
    };

    static Add(...params) {
        Quaternion.Add = MethodOverload()
            .Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                return new Quaternion(
                    quaternion1.X + quaternion2.X,
                    quaternion1.Y + quaternion2.Y,
                    quaternion1.Z + quaternion2.Z,
                    quaternion1.W + quaternion2.W
                );
            });

        return Quaternion.Add.call(this, ...params);
    };

    static Concatenate(...params) {
        Quaternion.Concatenate = MethodOverload()
            .Add([Quaternion, Quaternion], function (value1, value2) {
                let x1 = value1.X;
                let y1 = value1.Y;
                let z1 = value1.Z;
                let w1 = value1.W;

                let x2 = value2.X;
                let y2 = value2.Y;
                let z2 = value2.Z;
                let w2 = value2.W;

                return new Quaternion(
                    ((x2 * w1) + (x1 * w2)) + ((y2 * z1) - (z2 * y1)),
                    ((y2 * w1) + (y1 * w2)) + ((z2 * x1) - (x2 * z1)),
                    ((z2 * w1) + (z1 * w2)) + ((x2 * y1) - (y2 * x1)),
                    (w2 * w1) - (((x2 * x1) + (y2 * y1)) + (z2 * z1))
                );
            });

        return Quaternion.Concatenate.call(this, ...params);
    };

    static Conjugate(...params) {
        Quaternion.Conjugate = MethodOverload()
            .Add([Quaternion], function (value) {
                return new Quaternion(-value.X, -value.Y, -value.Z, value.W);
            });

        return Quaternion.Conjugate.call(this, ...params);
    };

    static CreateFromAxisAngle(...params) {
        Quaternion.CreateFromAxisAngle = MethodOverload()
            .Add([Vector3, Number], function (axis, angle) {
                let half = angle * 0.5;
                let sin = Math.sin(half);
                let cos = Math.cos(half);
                return new Quaternion(axis.X * sin, axis.Y * sin, axis.Z * sin, cos);
            });

        return Quaternion.CreateFromAxisAngle.call(this, ...params);
    };

    static CreateFromRotationMatrix(...params) {
        Quaternion.CreateFromRotationMatrix = MethodOverload()
            .Add([Matrix], function (matrix) {
                let quaternion = new Quaternion();
                let sqrt;
                let half;
                let scale = matrix.M11 + matrix.M22 + matrix.M33;

                if (scale > 0.0) {
                    sqrt = Math.sqrt(scale + 1.0);
                    quaternion.W = sqrt * 0.5;
                    sqrt = 0.5 / sqrt;

                    quaternion.X = (matrix.M23 - matrix.M32) * sqrt;
                    quaternion.Y = (matrix.M31 - matrix.M13) * sqrt;
                    quaternion.Z = (matrix.M12 - matrix.M21) * sqrt;

                    return quaternion;
                }
                if ((matrix.M11 >= matrix.M22) && (matrix.M11 >= matrix.M33)) {
                    sqrt = Math.sqrt(1.0 + matrix.M11 - matrix.M22 - matrix.M33);
                    half = 0.5 / sqrt;

                    quaternion.X = 0.5 * sqrt;
                    quaternion.Y = (matrix.M12 + matrix.M21) * half;
                    quaternion.Z = (matrix.M13 + matrix.M31) * half;
                    quaternion.W = (matrix.M23 - matrix.M32) * half;

                    return quaternion;
                }
                if (matrix.M22 > matrix.M33) {
                    sqrt = Math.sqrt(1.0 + matrix.M22 - matrix.M11 - matrix.M33);
                    half = 0.5 / sqrt;

                    quaternion.X = (matrix.M21 + matrix.M12) * half;
                    quaternion.Y = 0.5 * sqrt;
                    quaternion.Z = (matrix.M32 + matrix.M23) * half;
                    quaternion.W = (matrix.M31 - matrix.M13) * half;

                    return quaternion;
                }
                sqrt = Math.sqrt(1.0 + matrix.M33 - matrix.M11 - matrix.M22);
                half = 0.5 / sqrt;

                quaternion.X = (matrix.M31 + matrix.M13) * half;
                quaternion.Y = (matrix.M32 + matrix.M23) * half;
                quaternion.Z = 0.5 * sqrt;
                quaternion.W = (matrix.M12 - matrix.M21) * half;

                return quaternion;
            });

        return Quaternion.CreateFromRotationMatrix.call(this, ...params);
    };

    static CreateFromYawPitchRoll(...params) {
        Quaternion.CreateFromYawPitchRoll = MethodOverload()
            .Add([Number, Number, Number], function (yaw, pitch, roll) {
                let halfRoll = roll * 0.5;
                let halfPitch = pitch * 0.5;
                let halfYaw = yaw * 0.5;

                let sinRoll = Math.sin(halfRoll);
                let cosRoll = Math.cos(halfRoll);
                let sinPitch = Math.sin(halfPitch);
                let cosPitch = Math.cos(halfPitch);
                let sinYaw = Math.sin(halfYaw);
                let cosYaw = Math.cos(halfYaw);

                return new Quaternion((cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll),
                    (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll),
                    (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll),
                    (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll));
            });

        return Quaternion.CreateFromYawPitchRoll.call(this, ...params);
    };

    static Divide(...params) {
        Quaternion.Divide = MethodOverload()
            .Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                let x = quaternion1.X;
                let y = quaternion1.Y;
                let z = quaternion1.Z;
                let w = quaternion1.W;
                let num14 = (((quaternion2.X * quaternion2.X) + (quaternion2.Y * quaternion2.Y)) + (quaternion2.Z * quaternion2.Z)) + (quaternion2.W * quaternion2.W);
                let num5 = 1 / num14;
                let num4 = -quaternion2.X * num5;
                let num3 = -quaternion2.Y * num5;
                let num2 = -quaternion2.Z * num5;
                let num = quaternion2.W * num5;
                let num13 = (y * num2) - (z * num3);
                let num12 = (z * num4) - (x * num2);
                let num11 = (x * num3) - (y * num4);
                let num10 = ((x * num4) + (y * num3)) + (z * num2);
                return new Quaternion(
                    ((x * num) + (num4 * w)) + num13,
                    ((y * num) + (num3 * w)) + num12,
                    ((z * num) + (num2 * w)) + num11,
                    (w * num) - num10
                );
            });

        return Quaternion.Divide.call(this, ...params);
    };

    static Dot(...params) {
        Quaternion.Dot = MethodOverload()
            .Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                return ((((quaternion1.X * quaternion2.X) + (quaternion1.Y * quaternion2.Y)) + (quaternion1.Z * quaternion2.Z)) + (quaternion1.W * quaternion2.W));
            });

        return Quaternion.Dot.call(this, ...params);
    };

    static Inverse(...params) {
        Quaternion.Inverse = MethodOverload()
            .Add([Quaternion], function (quaternion) {
                let num2 = (((quaternion.X * quaternion.X) + (quaternion.Y * quaternion.Y)) + (quaternion.Z * quaternion.Z)) + (quaternion.W * quaternion.W);
                let num = 1 / num2;
                return new Quaternion(
                    -quaternion.X * num,
                    -quaternion.Y * num,
                    -quaternion.Z * num,
                    quaternion.W * num
                );
            });

        return Quaternion.Inverse.call(this, ...params);
    };

    static Lerp = function () {
        Quaternion.Lerp = MethodOverload()
            .Add([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
                let num2 = 1 - amount;
                let quaternion = new Quaternion();
                let num5 = (((quaternion1.X * quaternion2.X) + (quaternion1.Y * quaternion2.Y)) + (quaternion1.Z * quaternion2.Z)) + (quaternion1.W * quaternion2.W);
                if (num5 >= 0) {
                    quaternion.X = (num2 * quaternion1.X) + (amount * quaternion2.X);
                    quaternion.Y = (num2 * quaternion1.Y) + (amount * quaternion2.Y);
                    quaternion.Z = (num2 * quaternion1.Z) + (amount * quaternion2.Z);
                    quaternion.W = (num2 * quaternion1.W) + (amount * quaternion2.W);
                }
                else {
                    quaternion.X = (num2 * quaternion1.X) - (amount * quaternion2.X);
                    quaternion.Y = (num2 * quaternion1.Y) - (amount * quaternion2.Y);
                    quaternion.Z = (num2 * quaternion1.Z) - (amount * quaternion2.Z);
                    quaternion.W = (num2 * quaternion1.W) - (amount * quaternion2.W);
                }
                let num4 = (((quaternion.X * quaternion.X) + (quaternion.Y * quaternion.Y)) + (quaternion.Z * quaternion.Z)) + (quaternion.W * quaternion.W);
                let num3 = 1 / Math.sqrt(num4);
                quaternion.X *= num3;
                quaternion.Y *= num3;
                quaternion.Z *= num3;
                quaternion.W *= num3;
                return quaternion;
            });

        return Quaternion.Lerp.call(this, ...params);
    };

    static Multiply(...params) {
        Quaternion.Multiply = MethodOverload()
            .Add([Quaternion, Number], function (quaternion1, scaleFactor) {
                return new Quaternion(
                    quaternion1.X * scaleFactor,
                    quaternion1.Y * scaleFactor,
                    quaternion1.Z * scaleFactor,
                    quaternion1.W * scaleFactor
                );
            })
            .Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                let x = quaternion1.X;
                let y = quaternion1.Y;
                let z = quaternion1.Z;
                let w = quaternion1.W;
                let num4 = quaternion2.X;
                let num3 = quaternion2.Y;
                let num2 = quaternion2.Z;
                let num = quaternion2.W;
                let num12 = (y * num2) - (z * num3);
                let num11 = (z * num4) - (x * num2);
                let num10 = (x * num3) - (y * num4);
                let num9 = ((x * num4) + (y * num3)) + (z * num2);
                return new Quaternion(
                    ((x * num) + (num4 * w)) + num12,
                    ((y * num) + (num3 * w)) + num11,
                    ((z * num) + (num2 * w)) + num10,
                    (w * num) - num9
                );
            });

        return Quaternion.Multiply.call(this, ...params);
    };

    static Negate(...params) {
        Quaternion.Negate = MethodOverload()
            .Add([Quaternion], function (quaternion) {
                return new Quaternion(-quaternion.X, -quaternion.Y, -quaternion.Z, -quaternion.W);
            });

        return Quaternion.Negate.call(this, ...params);
    };

    static Normalize(...params) {
        Quaternion.Normalize = MethodOverload()
            .Add([Quaternion], function (quaternion) {
                let num = 1 / (Math.sqrt((quaternion.X * quaternion.X) + (quaternion.Y * quaternion.Y) + (quaternion.Z * quaternion.Z) + (quaternion.W * quaternion.W)));
                return new Quaternion(
                    quaternion.X * num,
                    quaternion.Y * num,
                    quaternion.Z * num,
                    quaternion.W * num
                );
            });

        return Quaternion.Normalize.call(this, ...params);
    };

    static Slerp(...params) {
        Quaternion.Slerp = MethodOverload()
            .Add([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
                let num2;
                let num3;
                let num = amount;
                let num4 = (((quaternion1.X * quaternion2.X) + (quaternion1.Y * quaternion2.Y)) + (quaternion1.Z * quaternion2.Z)) + (quaternion1.W * quaternion2.W);
                let flag = false;
                if (num4 < 0) {
                    flag = true;
                    num4 = -num4;
                }
                if (num4 > 0.999999) {
                    num3 = 1 - num;
                    num2 = flag ? -num : num;
                }
                else {
                    let num5 = Math.acos(num4);
                    let num6 = (1.0 / Math.sin(num5));
                    num3 = (Math.sin((1 - num) * num5)) * num6;
                    num2 = flag ? ((-Math.sin(num * num5)) * num6) : ((Math.sin(num * num5)) * num6);
                }
                return new Quaternion(
                    (num3 * quaternion1.X) + (num2 * quaternion2.X),
                    (num3 * quaternion1.Y) + (num2 * quaternion2.Y),
                    (num3 * quaternion1.Z) + (num2 * quaternion2.Z),
                    (num3 * quaternion1.W) + (num2 * quaternion2.W)
                );
            });

        return Quaternion.Slerp.call(this, ...params);
    };

    static Subtract(...params) {
        Quaternion.Subtract = MethodOverload()
            .Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                return new Quaternion(
                    quaternion1.X - quaternion2.X,
                    quaternion1.Y - quaternion2.Y,
                    quaternion1.Z - quaternion2.Z,
                    quaternion1.W - quaternion2.W
                );
            });

        return Quaternion.Subtract.call(this, ...params);
    };

    Conjugate(...params) {
        Quaternion.prototype.Conjugate = MethodOverload()
            .Add([], function () {
                this.X = -this.X;
                this.Y = -this.Y;
                this.Z = -this.Z;
            });

        return Quaternion.prototype.Conjugate.call(this, ...params);
    };

    Equals(...params) {
        Quaternion.prototype.Equals = MethodOverload()
            .Add([Quaternion], function (other) {
                return (this.X === other.X) &&
                    (this.Y === other.Y) &&
                    (this.Z === other.Z) &&
                    (this.W === other.W);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Quaternion.prototype.Equals.call(this, ...params);
    };

    Length(...params) {
        Quaternion.prototype.Length = MethodOverload()
            .Add([], function () {
                return Math.sqrt((this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W));
            });

        return Quaternion.prototype.Length.call(this, ...params);
    };

    LengthSquared(...params) {
        Quaternion.prototype.LengthSquared = MethodOverload()
            .Add([], function () {
                return (this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W);
            });

        return Quaternion.prototype.LengthSquared.call(this, ...params);
    };

    Normalize(...params) {
        Quaternion.prototype.Normalize = MethodOverload()
            .Add([], function () {
                let num = 1 / (Math.sqrt((this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W)));
                this.X *= num;
                this.Y *= num;
                this.Z *= num;
                this.W *= num;
            });

        return Quaternion.prototype.Normalize.call(this, ...params);
    };

    ToString(...params) {
        Quaternion.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{X:${this.X} Y:${this.Y} Z:${this.Z} W:${this.W}}`;
            });

        return Quaternion.prototype.ToString.call(this, ...params);
    };
}
