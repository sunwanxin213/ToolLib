import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector2 from "./Vector2.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";
import Quaternion from "./Quaternion.js";
import MathHelper from "./MathHelper.js";

export default class Vector4 extends Base {
    static get One() {
        return new Vector4(1, 1, 1, 1);
    }

    static get UnitW() {
        return new Vector4(0, 0, 0, 1);
    }

    static get UnitX() {
        return new Vector4(1, 0, 0, 0);
    }

    static get UnitY() {
        return new Vector4(0, 1, 0, 0);
    }

    static get UnitZ() {
        return new Vector4(0, 0, 1, 0);
    }

    static get Zero() {
        return new Vector4(0, 0, 0, 0);
    }

    #x = 0;

    #y = 0;

    #z = 0;

    #w = 0;

    static #_constructor = function (...params) {
        Vector4.#_constructor = MethodOverload()
            .Add([], function () {
                return Vector4.#_constructor.call(this, 0, 0, 0, 0);
            })
            .Add([Number], function (value) {
                return Vector4.#_constructor.call(this, value, value, value, value);
            })
            .Add([Number, Number, Number, Number], function (x, y, z, w) {
                [this.X, this.Y, this.Z, this.W] = [x, y, z, w];
            })
            .Add([Vector2, Number, Number], function (value, z, w) {
                return Vector4.#_constructor.call(this, value.X, value.Y, z, w);
            })
            .Add([Vector3, Number], function (value, w) {
                return Vector4.#_constructor.call(this, value.X, value.Y, value.Z, w);
            });

        return Vector4.#_constructor.call(this, ...params);
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

        return Vector4.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.X;
        yield this.Y;
        yield this.Z;
        yield this.W;
    };

    static Add(...params) {
        Vector4.Add = MethodOverload()
            .Add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.X + value2.X,
                    value1.Y + value2.Y,
                    value1.Z + value2.Z,
                    value1.W + value2.W
                );
            });

        return Vector4.Add.call(this, ...params);
    };

    static Barycentric(...params) {
        Vector4.Barycentric = MethodOverload()
            .Add([Vector4, Vector4, Vector4, Number, Number], function (value1, value2, value3, amount1, amount2) {
                return new Vector4(
                    MathHelper.Barycentric(value1.X, value2.X, value3.X, amount1, amount2),
                    MathHelper.Barycentric(value1.Y, value2.Y, value3.Y, amount1, amount2),
                    MathHelper.Barycentric(value1.Z, value2.Z, value3.Z, amount1, amount2),
                    MathHelper.Barycentric(value1.W, value2.W, value3.W, amount1, amount2)
                );
            });

        return Vector4.Barycentric.call(this, ...params);
    };

    static CatmullRom(...params) {
        Vector4.CatmullRom = MethodOverload()
            .Add([Vector4, Vector4, Vector4, Vector4, Number], function (value1, value2, value3, value4, amount) {
                return new Vector4(
                    MathHelper.CatmullRom(value1.X, value2.X, value3.X, value4.X, amount),
                    MathHelper.CatmullRom(value1.Y, value2.Y, value3.Y, value4.Y, amount),
                    MathHelper.CatmullRom(value1.Z, value2.Z, value3.Z, value4.Z, amount),
                    MathHelper.CatmullRom(value1.W, value2.W, value3.W, value4.W, amount)
                );
            });

        return Vector4.CatmullRom.call(this, ...params);
    };

    static Clamp(...params) {
        Vector4.Clamp = MethodOverload()
            .Add([Vector4, Vector4, Vector4], function (value1, min, max) {
                return new Vector4(
                    MathHelper.Clamp(value1.X, min.X, max.X),
                    MathHelper.Clamp(value1.Y, min.Y, max.Y),
                    MathHelper.Clamp(value1.Z, min.Z, max.Z),
                    MathHelper.Clamp(value1.W, min.W, max.W)
                );
            });

        return Vector4.Clamp.call(this, ...params);
    };

    static Distance(...params) {
        Vector4.Distance = MethodOverload()
            .Add([Vector4, Vector4], function (value1, value2) {
                let result = this.DistanceSquared(value1, value2);
                return Math.sqrt(result);
            });

        return Vector4.Distance.call(this, ...params);
    };

    static DistanceSquared(...params) {
        Vector4.DistanceSquared = MethodOverload()
            .Add([Vector4, Vector4], function (value1, value2) {
                return (value1.W - value2.W) * (value1.W - value2.W) +
                    (value1.X - value2.X) * (value1.X - value2.X) +
                    (value1.Y - value2.Y) * (value1.Y - value2.Y) +
                    (value1.Z - value2.Z) * (value1.Z - value2.Z);
            });

        return Vector4.DistanceSquared.call(this, ...params);
    };

    static Divide(...params) {
        Vector4.Divide = MethodOverload()
            .Add([Vector4, Number], function (value1, divider) {
                let factor = 1 / divider;
                return new Vector4(
                    value1.X * factor,
                    value1.Y * factor,
                    value1.Z * factor,
                    value1.W * factor
                );
            })
            .Add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.X / value2.X,
                    value1.Y / value2.Y,
                    value1.Z / value2.Z,
                    value1.W / value2.W
                );
            });

        return Vector4.Divide.call(this, ...params);
    };

    static Dot(...params) {
        Vector4.Dot = MethodOverload()
            .Add([Vector4, Vector4], function (vector1, vector2) {
                return vector1.X * vector2.X + vector1.Y * vector2.Y + vector1.Z * vector2.Z + vector1.W * vector2.W;
            });

        return Vector4.Dot.call(this, ...params);
    };

    static Hermite(...params) {
        Vector4.Hermite = MethodOverload()
            .Add([Vector4, Vector4, Vector4, Vector4, Number], function (value1, tangent1, value2, tangent2, amount) {
                return new Vector4(
                    MathHelper.Hermite(value1.X, tangent1.X, value2.X, tangent2.X, amount),
                    MathHelper.Hermite(value1.Y, tangent1.Y, value2.Y, tangent2.Y, amount),
                    MathHelper.Hermite(value1.Z, tangent1.Z, value2.Z, tangent2.Z, amount),
                    MathHelper.Hermite(value1.W, tangent1.W, value2.W, tangent2.W, amount)
                );
            });

        return Vector4.Hermite.call(this, ...params);
    };

    static Lerp(...params) {
        Vector4.Lerp = MethodOverload()
            .Add([Vector4, Vector4, Number], function (value1, value2, amount) {
                return new Vector4(
                    MathHelper.Lerp(value1.X, value2.X, amount),
                    MathHelper.Lerp(value1.Y, value2.Y, amount),
                    MathHelper.Lerp(value1.Z, value2.Z, amount),
                    MathHelper.Lerp(value1.W, value2.W, amount)
                );
            });

        return Vector4.Lerp.call(this, ...params);
    };

    static Max(...params) {
        Vector4.Max = MethodOverload()
            .Add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    MathHelper.Max(value1.X, value2.X),
                    MathHelper.Max(value1.Y, value2.Y),
                    MathHelper.Max(value1.Z, value2.Z),
                    MathHelper.Max(value1.W, value2.W)
                );
            });

        return Vector4.Max.call(this, ...params);
    };

    static Min(...params) {
        Vector4.Min = MethodOverload()
            .Add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    MathHelper.Min(value1.X, value2.X),
                    MathHelper.Min(value1.Y, value2.Y),
                    MathHelper.Min(value1.Z, value2.Z),
                    MathHelper.Min(value1.W, value2.W)
                );
            });

        return Vector4.Min.call(this, ...params);
    };

    static Multiply(...params) {
        Vector4.Multiply = MethodOverload()
            .Add([Vector4, Number], function (value1, scaleFactor) {
                return new Vector4(
                    value1.X * scaleFactor,
                    value1.Y * scaleFactor,
                    value1.Z * scaleFactor,
                    value1.W * scaleFactor
                );
            })
            .Add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.X * value2.X,
                    value1.Y * value2.Y,
                    value1.Z * value2.Z,
                    value1.W * value2.W
                );
            });

        return Vector4.Multiply.call(this, ...params);
    };

    static Negate(...params) {
        Vector4.Negate = MethodOverload()
            .Add([Vector4], function (value) {
                return new Vector4(-value.X, -value.Y, -value.Z, -value.W);
            });

        return Vector4.Negate.call(this, ...params);
    };

    static Normalize(...params) {
        Vector4.Normalize = MethodOverload()
            .Add([Vector4], function (vector) {
                let factor = Math.sqrt((value.X * value.X) + (value.Y * value.Y) + (value.Z * value.Z) + (value.W * value.W));
                factor = 1 / factor;
                return new Vector4(value.X * factor, value.Y * factor, value.Z * factor, value.W * factor);
            });

        return Vector4.Normalize.call(this, ...params);
    };

    static SmoothStep(...params) {
        Vector4.SmoothStep = MethodOverload()
            .Add([Vector4, Vector4, Number], function (value1, value2, amount) {
                return new Vector4(
                    MathHelper.SmoothStep(value1.X, value2.X, amount),
                    MathHelper.SmoothStep(value1.Y, value2.Y, amount),
                    MathHelper.SmoothStep(value1.Z, value2.Z, amount),
                    MathHelper.SmoothStep(value1.W, value2.W, amount)
                );
            });

        return Vector4.SmoothStep.call(this, ...params);
    };

    static Subtract(...params) {
        Vector4.Subtract = MethodOverload()
            .Add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.X - value2.X,
                    value1.Y - value2.Y,
                    value1.Z - value2.Z,
                    value1.W - value2.W
                );
            });

        return Vector4.Subtract.call(this, ...params);
    };

    static Transform(...params) {
        Vector4.Transform = MethodOverload()
            .Add([Vector2, Matrix], function (position, matrix) {
                return new Vector4(
                    (position.X * matrix.M11) + (position.Y * matrix.M21) + matrix.M41,
                    (position.X * matrix.M12) + (position.Y * matrix.M22) + matrix.M42,
                    (position.X * matrix.M13) + (position.Y * matrix.M23) + matrix.M43,
                    (position.X * matrix.M14) + (position.Y * matrix.M24) + matrix.M44
                );
            })
            .Add([Vector2, Quaternion], function (value, rotation) {
                let x2 = rotation.X + rotation.X;
                let y2 = rotation.Y + rotation.Y;
                let z2 = rotation.Z + rotation.Z;

                let wx2 = rotation.W * x2;
                let wy2 = rotation.W * y2;
                let wz2 = rotation.W * z2;
                let xx2 = rotation.X * x2;
                let xy2 = rotation.X * y2;
                let xz2 = rotation.X * z2;
                let yy2 = rotation.Y * y2;
                let yz2 = rotation.Y * z2;
                let zz2 = rotation.Z * z2;

                return new Vector4(value.X * (1.0 - yy2 - zz2) + value.Y * (xy2 - wz2),
                    value.X * (xy2 + wz2) + value.Y * (1.0 - xx2 - zz2),
                    value.X * (xz2 - wy2) + value.Y * (yz2 + wx2),
                    1.0);
            })
            .Add([Vector3, Matrix], function (position, matrix) {
                return new Vector4(
                    (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + matrix.M41,
                    (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + matrix.M42,
                    (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + matrix.M43,
                    (position.X * matrix.M14) + (position.Y * matrix.M24) + (position.Z * matrix.M34) + matrix.M44
                );
            })
            .Add([Vector3, Quaternion], function (value, rotation) {
                let x2 = rotation.X + rotation.X;
                let y2 = rotation.Y + rotation.Y;
                let z2 = rotation.Z + rotation.Z;

                let wx2 = rotation.W * x2;
                let wy2 = rotation.W * y2;
                let wz2 = rotation.W * z2;
                let xx2 = rotation.X * x2;
                let xy2 = rotation.X * y2;
                let xz2 = rotation.X * z2;
                let yy2 = rotation.Y * y2;
                let yz2 = rotation.Y * z2;
                let zz2 = rotation.Z * z2;

                return new Vector4(value.X * (1.0 - yy2 - zz2) + value.Y * (xy2 - wz2) + value.Z * (xz2 + wy2),
                    value.X * (xy2 + wz2) + value.Y * (1.0 - xx2 - zz2) + value.Z * (yz2 - wx2),
                    value.X * (xz2 - wy2) + value.Y * (yz2 + wx2) + value.Z * (1.0 - xx2 - yy2),
                    1.0);
            })
            .Add([Vector4, Matrix], function (vector, matrix) {
                return new Vector4(
                    (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + (position.W * matrix.M41),
                    (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + (position.W * matrix.M42),
                    (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + (position.W * matrix.M43),
                    (position.X * matrix.M14) + (position.Y * matrix.M24) + (position.Z * matrix.M34) + (position.W * matrix.M44)
                );
            })
            .Add([Vector4, Quaternion], function (value, rotation) {
                let x2 = rotation.X + rotation.X;
                let y2 = rotation.Y + rotation.Y;
                let z2 = rotation.Z + rotation.Z;

                let wx2 = rotation.W * x2;
                let wy2 = rotation.W * y2;
                let wz2 = rotation.W * z2;
                let xx2 = rotation.X * x2;
                let xy2 = rotation.X * y2;
                let xz2 = rotation.X * z2;
                let yy2 = rotation.Y * y2;
                let yz2 = rotation.Y * z2;
                let zz2 = rotation.Z * z2;

                return new Vector4(value.X * (1.0 - yy2 - zz2) + value.Y * (xy2 - wz2) + value.Z * (xz2 + wy2),
                    value.X * (xy2 + wz2) + value.Y * (1.0 - xx2 - zz2) + value.Z * (yz2 - wx2),
                    value.X * (xz2 - wy2) + value.Y * (yz2 + wx2) + value.Z * (1.0 - xx2 - yy2),
                    value.W);
            })
            .Add([Array, Number, Matrix, Array, Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new Error(`Source array 的长度比 sourceIndex + length 小。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new Error(`Destination array 的长度比 destinationIndex + length 小。`);
                }

                for (let i = 0; i < length; i++) {
                    let value = sourceArray[sourceIndex + i];
                    destinationArray[destinationIndex + i] = this.Transform(value, matrix);
                }
            })
            .Add([Array, Number, Quaternion, Array, Number, Number], function (sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new Error(`Source array 的长度比 sourceIndex + length 小。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new Error(`Destination array 的长度比 destinationIndex + length 小。`);
                }

                for (let i = 0; i < length; i++) {
                    let value = sourceArray[sourceIndex + i];
                    destinationArray[destinationIndex + i] = this.Transform(value, rotation);
                }
            })
            .Add([Array, Matrix, Array], function (sourceArray, matrix, destinationArray) {
                this.Transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .Add([Array, Quaternion, Array], function (sourceArray, rotation, destinationArray) {
                this.Transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector4.Transform.call(this, ...params);
    };

    Equals(...params) {
        Vector4.prototype.Equals = MethodOverload()
            .Add([Vector4], function (other) {
                return (this.X === other.X) &&
                    (this.Y === other.Y) &&
                    (this.Z === other.Z) &&
                    (this.W === other.W);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Vector4.prototype.Equals.call(this, ...params);
    };

    Length(...params) {
        Vector4.prototype.Length = MethodOverload()
            .Add([], function () {
                return Math.sqrt((this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W));
            });

        return Vector4.prototype.Length.call(this, ...params);
    };

    LengthSquared(...params) {
        Vector4.prototype.LengthSquared = MethodOverload()
            .Add([], function () {
                return (this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W);
            });

        return Vector4.prototype.LengthSquared.call(this, ...params);
    };

    Normalize(...params) {
        Vector4.prototype.Normalize = MethodOverload()
            .Add([], function () {
                let factor = Math.sqrt((this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W));
                factor = 1 / factor;
                this.X *= factor;
                this.Y *= factor;
                this.Z *= factor;
                this.W *= factor;
            });

        return Vector4.prototype.Normalize.call(this, ...params);
    };

    ToString(...params) {
        Vector4.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{X:${this.X} Y:${this.Y} Z:${this.Z} W:${this.W}}`;
            });

        return Vector4.prototype.ToString.call(this, ...params);
    };
}
