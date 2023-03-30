import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector2 from "./Vector2.js";
import Matrix from "./Matrix.js";
import Quaternion from "./Quaternion.js";
import MathHelper from "./MathHelper.js";

export default class Vector3 extends Base {
    static get Backward() {
        return new Vector3(0, 0, 1);
    }

    static get Down() {
        return new Vector3(0, -1, 0);
    }

    static get Forward() {
        return new Vector3(0, 0, -1);
    }

    static get Left() {
        return new Vector3(-1, 0, 0);
    }

    static get One() {
        return new Vector3(1, 1, 1);
    }

    static get Right() {
        return new Vector3(1, 0, 0);
    }

    static get UnitX() {
        return new Vector3(1, 0, 0);
    }

    static get UnitY() {
        return new Vector3(0, 1, 0);
    }

    static get UnitZ() {
        return new Vector3(0, 0, 1);
    }

    static get Up() {
        return new Vector3(0, 1, 0);
    }

    static get Zero() {
        return new Vector3(0, 0, 0);
    }

    #x = 0;

    #y = 0;

    #z = 0;

    static #_constructor = function (...params) {
        Vector3.#_constructor = MethodOverload()
            .Add([], function () {
                return Vector3.#_constructor.call(this, 0, 0, 0);
            })
            .Add([Number], function (value) {
                return Vector3.#_constructor.call(this, value, value, value);
            })
            .Add([Number, Number, Number], function (x, y, z) {
                [this.X, this.Y, this.Z] = [x, y, z];
            })
            .Add([Vector2, Number], function (value, z) {
                return Vector3.#_constructor.call(this, value.X, value.Y, z);
            });

        return Vector3.#_constructor.call(this, ...params);
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
            }
        });

        return Vector3.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.X;
        yield this.Y;
        yield this.Z;
    };

    static Add(...params) {
        Vector3.Add = MethodOverload()
            .Add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.X + value2.X,
                    value1.Y + value2.Y,
                    value1.Z + value2.Z
                );
            });

        return Vector3.Add.call(this, ...params);
    };

    static Barycentric(...params) {
        Vector3.Barycentric = MethodOverload()
            .Add([Vector3, Vector3, Vector3, Number, Number], function (value1, value2, value3, amount1, amount2) {
                return new Vector3(
                    MathHelper.Barycentric(value1.X, value2.X, value3.X, amount1, amount2),
                    MathHelper.Barycentric(value1.Y, value2.Y, value3.Y, amount1, amount2),
                    MathHelper.Barycentric(value1.Z, value2.Z, value3.Z, amount1, amount2)
                );
            });

        return Vector3.Barycentric.call(this, ...params);
    };

    static CatmullRom(...params) {
        Vector3.CatmullRom = MethodOverload()
            .Add([Vector3, Vector3, Vector3, Vector3, Number], function (value1, value2, value3, value4, amount) {
                return new Vector3(
                    MathHelper.CatmullRom(value1.X, value2.X, value3.X, value4.X, amount),
                    MathHelper.CatmullRom(value1.Y, value2.Y, value3.Y, value4.Y, amount),
                    MathHelper.CatmullRom(value1.Z, value2.Z, value3.Z, value4.Z, amount)
                );
            });

        return Vector3.CatmullRom.call(this, ...params);
    };

    static Clamp(...params) {
        Vector3.Clamp = MethodOverload()
            .Add([Vector3, Vector3, Vector3], function (value1, min, max) {
                return new Vector3(
                    MathHelper.Clamp(value1.X, min.X, max.X),
                    MathHelper.Clamp(value1.Y, min.Y, max.Y),
                    MathHelper.Clamp(value1.Z, min.Z, max.Z)
                );
            });

        return Vector3.Clamp.call(this, ...params);
    };

    static Cross(...params) {
        Vector3.Cross = MethodOverload()
            .Add([Vector3, Vector3], function (vector1, vector2) {
                let x = vector1.Y * vector2.Z - vector2.Y * vector1.Z;
                let y = -(vector1.X * vector2.Z - vector2.X * vector1.Z);
                let z = vector1.X * vector2.Y - vector2.X * vector1.Y;
                return new Vector3(x, y, z);
            });

        return Vector3.Cross.call(this, ...params);
    };

    static Distance(...params) {
        Vector3.Distance = MethodOverload()
            .Add([Vector3, Vector3], function (value1, value2) {
                let result = this.DistanceSquared(value1, value2);
                return Math.sqrt(result);
            });

        return Vector3.Distance.call(this, ...params);
    };

    static DistanceSquared(...params) {
        Vector3.DistanceSquared = MethodOverload()
            .Add([Vector3, Vector3], function (value1, value2) {
                return (value1.X - value2.X) * (value1.X - value2.X) +
                    (value1.Y - value2.Y) * (value1.Y - value2.Y) +
                    (value1.Z - value2.Z) * (value1.Z - value2.Z);
            });

        return Vector3.DistanceSquared.call(this, ...params);
    };

    static Divide(...params) {
        Vector3.Divide = MethodOverload()
            .Add([Vector3, Number], function (value1, value2) {
                let factor = 1 / value2;
                return new Vector3(
                    value1.X * factor,
                    value1.Y * factor,
                    value1.Z * factor
                );
            })
            .Add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.X / value2.X,
                    value1.Y / value2.Y,
                    value1.Z / value2.Z
                );
            });

        return Vector3.Divide.call(this, ...params);
    };

    static Dot(...params) {
        Vector3.Dot = MethodOverload()
            .Add([Vector3, Vector3], function (vector1, vector2) {
                return vector1.X * vector2.X + vector1.Y * vector2.Y + vector1.Z * vector2.Z;
            });

        return Vector3.Dot.call(this, ...params);
    };

    static Hermite(...params) {
        Vector3.Hermite = MethodOverload()
            .Add([Vector3, Vector3, Vector3, Vector3, Number], function (value1, tangent1, value2, tangent2, amount) {
                return new Vector3(
                    MathHelper.Hermite(value1.X, tangent1.X, value2.X, tangent2.X, amount),
                    MathHelper.Hermite(value1.Y, tangent1.Y, value2.Y, tangent2.Y, amount),
                    MathHelper.Hermite(value1.Z, tangent1.Z, value2.Z, tangent2.Z, amount)
                );
            });

        return Vector3.Hermite.call(this, ...params);
    };

    static Lerp(...params) {
        Vector3.Lerp = MethodOverload()
            .Add([Vector3, Vector3, Number], function (value1, value2, amount) {
                return new Vector3(
                    MathHelper.Lerp(value1.X, value2.X, amount),
                    MathHelper.Lerp(value1.Y, value2.Y, amount),
                    MathHelper.Lerp(value1.Z, value2.Z, amount)
                );
            });

        return Vector3.Lerp.call(this, ...params);
    };

    static Max(...params) {
        Vector3.Max = MethodOverload()
            .Add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    MathHelper.Max(value1.X, value2.X),
                    MathHelper.Max(value1.Y, value2.Y),
                    MathHelper.Max(value1.Z, value2.Z)
                );
            });

        return Vector3.Max.call(this, ...params);
    };

    static Min(...params) {
        Vector3.Min = MethodOverload()
            .Add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    MathHelper.Min(value1.X, value2.X),
                    MathHelper.Min(value1.Y, value2.Y),
                    MathHelper.Min(value1.Z, value2.Z)
                );
            });

        return Vector3.Min.call(this, ...params);
    };

    static Multiply(...params) {
        Vector3.Multiply = MethodOverload()
            .Add([Vector3, Number], function (value1, scaleFactor) {
                return new Vector3(
                    value1.X * scaleFactor,
                    value1.Y * scaleFactor,
                    value1.Z * scaleFactor
                );
            })
            .Add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.X * value2.X,
                    value1.Y * value2.Y,
                    value1.Z * value2.Z
                );
            });

        return Vector3.Multiply.call(this, ...params);
    };

    static Negate(...params) {
        Vector3.Negate = MethodOverload()
            .Add([Vector3], function (value) {
                return new Vector3(-value.X, -value.Y, -value.Z);
            });

        return Vector3.Negate.call(this, ...params);
    };

    static Normalize(...params) {
        Vector3.Normalize = MethodOverload()
            .Add([Vector3], function (value) {
                let factor = this.Distance(value, this.Zero);
                factor = 1 / factor;
                return new Vector3(value.X * factor, value.Y * factor, value.Z * factor);
            });

        return Vector3.Normalize.call(this, ...params);
    };

    static Reflect(...params) {
        Vector3.Reflect = MethodOverload()
            .Add([Vector3, Vector3], function (vector, normal) {
                let dotProduct = ((vector.X * normal.X) + (vector.Y * normal.Y)) + (vector.Z * normal.Z);
                return new Vector3(
                    vector.X - (2.0 * normal.X) * dotProduct,
                    vector.Y - (2.0 * normal.Y) * dotProduct,
                    vector.Z - (2.0 * normal.Z) * dotProduct
                );
            });

        return Vector3.Reflect.call(this, ...params);
    };

    static SmoothStep(...params) {
        Vector3.SmoothStep = MethodOverload()
            .Add([Vector3, Vector3, Number], function (value1, value2, amount) {
                return new Vector3(
                    MathHelper.SmoothStep(value1.X, value2.X, amount),
                    MathHelper.SmoothStep(value1.Y, value2.Y, amount),
                    MathHelper.SmoothStep(value1.Z, value2.Z, amount)
                );
            });

        return Vector3.SmoothStep.call(this, ...params);
    };

    static Subtract(...params) {
        Vector3.Subtract = MethodOverload()
            .Add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.X - value2.X,
                    value1.Y - value2.Y,
                    value1.Z - value2.Z
                );
            });

        return Vector3.Subtract.call(this, ...params);
    };

    static Transform(...params) {
        Vector3.Transform = MethodOverload()
            .Add([Vector3, Matrix], function (position, matrix) {
                let x = (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + matrix.M41;
                let y = (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + matrix.M42;
                let z = (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + matrix.M43;
                return new Vector3(x, y, z);
            })
            .Add([Vector3, Quaternion], function (value, rotation) {
                let x = 2 * (rotation.Y * value.Z - rotation.Z * value.Y);
                let y = 2 * (rotation.Z * value.X - rotation.X * value.Z);
                let z = 2 * (rotation.X * value.Y - rotation.Y * value.X);
                return new Vector3(
                    value.X + x * rotation.W + (rotation.Y * z - rotation.Z * y),
                    value.Y + y * rotation.W + (rotation.Z * x - rotation.X * z),
                    value.Z + z * rotation.W + (rotation.X * y - rotation.Y * x)
                );
            })
            .Add([Array, Number, Matrix, Array, Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new Error(`Source array 的长度比 sourceIndex + length 小。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new Error(`Destination array 的长度比 destinationIndex + length 小。`);
                }

                for (let i = 0; i < length; i++) {
                    let position = sourceArray[sourceIndex + i];
                    destinationArray[destinationIndex + i] = new Vector3(
                        (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + matrix.M41,
                        (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + matrix.M42,
                        (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + matrix.M43
                    );
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
                    let position = sourceArray[sourceIndex + i];

                    let x = 2 * (rotation.Y * position.Z - rotation.Z * position.Y);
                    let y = 2 * (rotation.Z * position.X - rotation.X * position.Z);
                    let z = 2 * (rotation.X * position.Y - rotation.Y * position.X);

                    destinationArray[destinationIndex + i] = new Vector3(
                        position.X + x * rotation.W + (rotation.Y * z - rotation.Z * y),
                        position.Y + y * rotation.W + (rotation.Z * x - rotation.X * z),
                        position.Z + z * rotation.W + (rotation.X * y - rotation.Y * x)
                    );
                }
            })
            .Add([Array, Matrix, Array], function (sourceArray, matrix, destinationArray) {
                this.Transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .Add([Array, Quaternion, Array], function (sourceArray, rotation, destinationArray) {
                this.Transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector3.Transform.call(this, ...params);
    };

    static TransformNormal(...params) {
        Vector3.TransformNormal = MethodOverload()
            .Add([Vector3, Matrix], function (normal, matrix) {
                let x = (normal.X * matrix.M11) + (normal.Y * matrix.M21) + (normal.Z * matrix.M31);
                let y = (normal.X * matrix.M12) + (normal.Y * matrix.M22) + (normal.Z * matrix.M32);
                let z = (normal.X * matrix.M13) + (normal.Y * matrix.M23) + (normal.Z * matrix.M33);
                return new Vector3(x, y, z);
            })
            .Add([Array, Number, Matrix, Array, Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new Error(`Source array 的长度比 sourceIndex + length 小。`);
                }
                if (destinationArray.length < destinationIndex + length) {
                    throw new Error(`Destination array 的长度比 destinationIndex + length 小。`);
                }

                for (let x = 0; x < length; x++) {
                    let normal = sourceArray[sourceIndex + x];

                    destinationArray[destinationIndex + x] = new Vector3(
                        (normal.X * matrix.M11) + (normal.Y * matrix.M21) + (normal.Z * matrix.M31),
                        (normal.X * matrix.M12) + (normal.Y * matrix.M22) + (normal.Z * matrix.M32),
                        (normal.X * matrix.M13) + (normal.Y * matrix.M23) + (normal.Z * matrix.M33)
                    );
                }
            })
            .Add([Array, Matrix, Array], function (sourceArray, matrix, destinationArray) {
                if (destinationArray.length < sourceArray.length) {
                    throw new ArgumentException(`Destination array 的长度比 source array 的长度小。`);
                }

                for (let i = 0; i < sourceArray.Length; i++) {
                    let normal = sourceArray[i];

                    destinationArray[i] = new Vector3(
                        (normal.X * matrix.M11) + (normal.Y * matrix.M21) + (normal.Z * matrix.M31),
                        (normal.X * matrix.M12) + (normal.Y * matrix.M22) + (normal.Z * matrix.M32),
                        (normal.X * matrix.M13) + (normal.Y * matrix.M23) + (normal.Z * matrix.M33)
                    );
                }
            });

        return Vector3.TransformNormal.call(this, ...params);
    };

    Equals(...params) {
        Vector3.prototype.Equals = MethodOverload()
            .Add([Vector3], function (other) {
                return (this.X === other.X) &&
                    (this.Y === other.Y) &&
                    (this.Z === other.Z);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Vector3.prototype.Equals.call(this, ...params);
    };

    Length(...params) {
        Vector3.prototype.Length = MethodOverload()
            .Add([], function () {
                let result = Vector3.DistanceSquared(this, Vector3.Zero);
                return Math.sqrt(result);
            });

        return Vector3.prototype.Length.call(this, ...params);
    };

    LengthSquared(...params) {
        Vector3.prototype.LengthSquared = MethodOverload()
            .Add([], function () {
                return Vector3.DistanceSquared(this, Vector3.Zero);
            });

        return Vector3.prototype.LengthSquared.call(this, ...params);
    };

    Normalize(...params) {
        Vector3.prototype.Normalize = MethodOverload()
            .Add([], function () {
                let factor = this.Distance(this, Vector3.Zero);
                factor = 1 / factor;
                this.X *= factor;
                this.Y *= factor;
                this.Z *= factor;
            });

        return Vector3.prototype.Normalize.call(this, ...params);
    };

    ToString(...params) {
        Vector3.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{X:${this.X} Y:${this.Y} Z:${this.Z}}`;
            });

        return Vector3.prototype.ToString.call(this, ...params);
    };
}
