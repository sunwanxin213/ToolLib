import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";
import Quaternion from "./Quaternion.js";
import MathHelper from "./MathHelper.js";

export default class Vector2 extends Base {
    static get One() {
        return new Vector2(1, 1);
    }

    static get UnitX() {
        return new Vector2(1, 0);
    }

    static get UnitY() {
        return new Vector2(0, 1);
    }

    static get Zero() {
        return new Vector2(0, 0);
    }

    #x = 0;

    #y = 0;

    static #_constructor = function (...params) {
        Vector2.#_constructor = MethodOverload()
            .Add([], function () {
                return Vector2.#_constructor.call(this, 0, 0);
            })
            .Add([Number], function (value) {
                return Vector2.#_constructor.call(this, value, value);
            })
            .Add([Number, Number], function (x, y) {
                [this.X, this.Y] = [x, y];
            });

        return Vector2.#_constructor.call(this, ...params);
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
            }
        });

        return Vector2.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.X;
        yield this.Y;
    };

    static Add(...params) {
        Vector2.Add = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.X + value2.X,
                    value1.Y + value2.Y
                );
            });

        return Vector2.Add.call(this, ...params);
    };

    static Barycentric(...params) {
        Vector2.Barycentric = MethodOverload()
            .Add([Vector2, Vector2, Vector2, Number, Number], function (value1, value2, value3, amount1, amount2) {
                return new Vector2(
                    MathHelper.Barycentric(value1.X, value2.X, value3.X, amount1, amount2),
                    MathHelper.Barycentric(value1.Y, value2.Y, value3.Y, amount1, amount2)
                );
            });

        return Vector2.Barycentric.call(this, ...params);
    };

    static CatmullRom(...params) {
        Vector2.CatmullRom = MethodOverload()
            .Add([Vector2, Vector2, Vector2, Vector2, Number], function (value1, value2, value3, value4, amount) {
                return new Vector2(
                    MathHelper.CatmullRom(value1.X, value2.X, value3.X, value4.X, amount),
                    MathHelper.CatmullRom(value1.Y, value2.Y, value3.Y, value4.Y, amount)
                );
            });

        return Vector2.CatmullRom.call(this, ...params);
    };

    static Clamp(...params) {
        Vector2.Clamp = MethodOverload()
            .Add([Vector2, Vector2, Vector2], function (value1, min, max) {
                return new Vector2(
                    MathHelper.Clamp(value1.X, min.X, max.X),
                    MathHelper.Clamp(value1.Y, min.Y, max.Y)
                );
            });

        return Vector2.Clamp.call(this, ...params);
    };

    static Distance(...params) {
        Vector2.Distance = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                let v1 = value1.X - value2.X;
                let v2 = value1.Y - value2.Y;
                return Math.sqrt((v1 * v1) + (v2 * v2));
            });

        return Vector2.Distance.call(this, ...params);
    };

    static DistanceSquared(...params) {
        Vector2.DistanceSquared = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                let v1 = value1.X - value2.X;
                let v2 = value1.Y - value2.Y;
                return (v1 * v1) + (v2 * v2);
            });

        return Vector2.DistanceSquared.call(this, ...params);
    };

    static Divide(...params) {
        Vector2.Divide = MethodOverload()
            .Add([Vector2, Number], function (value1, divider) {
                let factor = 1 / divider;
                return new Vector2(
                    value1.X * factor,
                    value1.Y * factor
                );
            })
            .Add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.X / value2.X,
                    value1.Y / value2.Y
                );
            });

        return Vector2.Divide.call(this, ...params);
    };

    static Dot(...params) {
        Vector2.Dot = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                return (value1.X * value2.X) + (value1.Y * value2.Y);
            });

        return Vector2.Dot.call(this, ...params);
    };

    static Hermite(...params) {
        Vector2.Hermite = MethodOverload()
            .Add([Vector2, Vector2, Vector2, Vector2, Number], function (value1, tangent1, value2, tangent2, amount) {
                return new Vector2(
                    MathHelper.Hermite(value1.X, tangent1.X, value2.X, tangent2.X, amount),
                    MathHelper.Hermite(value1.Y, tangent1.Y, value2.Y, tangent2.Y, amount)
                );
            });

        return Vector2.Hermite.call(this, ...params);
    };

    static Lerp(...params) {
        Vector2.Lerp = MethodOverload()
            .Add([Vector2, Vector2, Number], function (value1, value2, amount) {
                return new Vector2(
                    MathHelper.Lerp(value1.X, value2.X, amount),
                    MathHelper.Lerp(value1.Y, value2.Y, amount)
                );
            });

        return Vector2.Lerp.call(this, ...params);
    };

    static Max(...params) {
        Vector2.Max = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.X > value2.X ? value1.X : value2.X,
                    value1.Y > value2.Y ? value1.Y : value2.Y
                );
            });

        return Vector2.Max.call(this, ...params);
    };

    static Min(...params) {
        Vector2.Min = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.X < value2.X ? value1.X : value2.X,
                    value1.Y < value2.Y ? value1.Y : value2.Y
                );
            });

        return Vector2.Min.call(this, ...params);
    };

    static Multiply(...params) {
        Vector2.Multiply = MethodOverload()
            .Add([Vector2, Number], function (value1, scaleFactor) {
                return new Vector2(
                    value1.X * scaleFactor,
                    value1.Y * scaleFactor
                );
            })
            .Add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.X * value2.X,
                    value1.Y * value2.Y
                );
            });

        return Vector2.Multiply.call(this, ...params);
    };

    static Negate(...params) {
        Vector2.Negate = MethodOverload()
            .Add([Vector2], function (value) {
                return new Vector2(
                    -value.X,
                    -value.Y
                );
            });

        return Vector2.Negate.call(this, ...params);
    };

    static Normalize(...params) {
        Vector2.Normalize = MethodOverload()
            .Add([Vector2], function (value) {
                let val = 1.0 / Math.sqrt((value.X * value.X) + (value.Y * value.Y));
                return new Vector2(
                    value.X * val,
                    value.Y * val
                );
            });

        return Vector2.Normalize.call(this, ...params);
    };

    static Reflect(...params) {
        Vector2.Reflect = MethodOverload()
            .Add([Vector2, Vector2], function (vector, normal) {
                let val = 2.0 * ((vector.X * normal.X) + (vector.Y * normal.Y));
                return new Vector2(
                    vector.X - (normal.X * val),
                    vector.Y - (normal.Y * val)
                );
            });

        return Vector2.Reflect.call(this, ...params);
    };

    static SmoothStep(...params) {
        Vector2.SmoothStep = MethodOverload()
            .Add([Vector2, Vector2, Number], function (value1, value2, amount) {
                return new Vector2(
                    MathHelper.SmoothStep(value1.X, value2.X, amount),
                    MathHelper.SmoothStep(value1.Y, value2.Y, amount)
                );
            });

        return Vector2.SmoothStep.call(this, ...params);
    };

    static Subtract(...params) {
        Vector2.Subtract = MethodOverload()
            .Add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.X - value2.X,
                    value1.Y = value2.Y
                );
            });

        return Vector2.Subtract.call(this, ...params);
    };

    static Transform(...params) {
        Vector2.Transform = MethodOverload()
            .Add([Vector2, Matrix], function (position, matrix) {
                return new Vector2(
                    (position.X * matrix.M11) + (position.Y * matrix.M21) + matrix.M41,
                    (position.X * matrix.M12) + (position.Y * matrix.M22) + matrix.M42
                );
            })
            .Add([Vector2, Quaternion], function (value, rotation) {
                let rot1 = new Vector3(rotation.X + rotation.X, rotation.Y + rotation.Y, rotation.Z + rotation.Z);
                let rot2 = new Vector3(rotation.X, rotation.X, rotation.W);
                let rot3 = new Vector3(1, rotation.Y, rotation.Z);
                let rot4 = Vector3.Multiply(rot1, rot2);
                let rot5 = Vector3.Multiply(rot1, rot3);
                return new Vector2(
                    (value.X * (1.0 - rot5.Y - rot5.Z) + value.Y * (rot4.Y - rot4.Z)),
                    (value.X * (rot4.Y + rot4.Z) + value.Y * (1.0 - rot4.X - rot5.Z))
                );
            })
            .Add([Array, Number, Matrix, Array, Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new Error(`Source array 的长度比 sourceIndex + length 小。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new Error(`Destination array 的长度比 destinationIndex + length 小。`);
                }

                for (let x = 0; x < length; x++) {
                    let position = sourceArray[sourceIndex + x];
                    let destination = destinationArray[destinationIndex + x];
                    destination.X = (position.X * matrix.M11) + (position.Y * matrix.M21) + matrix.M41;
                    destination.Y = (position.X * matrix.M12) + (position.Y * matrix.M22) + matrix.M42;
                    destinationArray[destinationIndex + x] = destination;
                }
            })
            .Add([Array, Number, Quaternion, Array, Number, Number], function (sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new Error(`Source array 的长度比 sourceIndex + length 小。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new Error(`Destination array 的长度比 destinationIndex + length 小。`);
                }

                for (let x = 0; x < length; x++) {
                    var position = sourceArray[sourceIndex + x];
                    var destination = destinationArray[destinationIndex + x];

                    let v = this.Transform(position, rotation);

                    destination.X = v.X;
                    destination.Y = v.Y;

                    destinationArray[destinationIndex + x] = destination;
                }
            })
            .Add([Array, Matrix, Array], function (sourceArray, matrix, destinationArray) {
                this.Transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .Add([Array, Quaternion, Array], function (sourceArray, rotation, destinationArray) {
                this.Transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector2.Transform.call(this, ...params);
    };

    static TransformNormal(...params) {
        Vector2.TransformNormal = MethodOverload()
            .Add([Vector2, Matrix], function (normal, matrix) {
                return new Vector2(
                    (normal.X * matrix.M11) + (normal.Y * matrix.M21),
                    (normal.X * matrix.M12) + (normal.Y * matrix.M22)
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
                    let normal = sourceArray[sourceIndex + i];

                    destinationArray[destinationIndex + i] = new Vector2(
                        (normal.X * matrix.M11) + (normal.Y * matrix.M21),
                        (normal.X * matrix.M12) + (normal.Y * matrix.M22)
                    );
                }
            })
            .Add([Array, Matrix, Array], function (sourceArray, matrix, destinationArray) {
                if (destinationArray.length < sourceArray.length) {
                    throw new ArgumentException(`Destination array 的长度比 source array 的长度小。`);
                }

                for (let i = 0; i < sourceArray.length; i++) {
                    let normal = sourceArray[i];

                    destinationArray[i] = new Vector2(
                        (normal.X * matrix.M11) + (normal.Y * matrix.M21),
                        (normal.X * matrix.M12) + (normal.Y * matrix.M22)
                    );
                }
            });

        return Vector2.TransformNormal.call(this, ...params);
    };

    Equals(...params) {
        Vector2.prototype.Equals = MethodOverload()
            .Add([Vector2], function (other) {
                return (this.X === other.X) &&
                    (this.Y === other.Y);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Vector2.prototype.Equals.call(this, ...params);
    };

    Length(...params) {
        Vector2.prototype.Length = MethodOverload()
            .Add([], function () {
                return Math.sqrt((this.X * this.X) + (this.Y * this.Y));
            });

        return Vector2.prototype.Length.call(this, ...params);
    };

    LengthSquared(...params) {
        Vector2.prototype.LengthSquared = MethodOverload()
            .Add([], function () {
                return (this.X * this.X) + (this.Y * this.Y);
            });

        return Vector2.prototype.LengthSquared.call(this, ...params);
    };

    Normalize(...params) {
        Vector2.prototype.Normalize = MethodOverload()
            .Add([], function () {
                let val = 1.0 / Math.sqrt((this.X * this.X) + (this.Y * this.Y));
                this.X *= val;
                this.Y *= val;
            });

        return Vector2.prototype.Normalize.call(this, ...params);
    };

    ToString(...params) {
        Vector2.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{X:${this.X} Y:${this.Y}}`;
            });

        return Vector2.prototype.ToString.call(this, ...params);
    };
}
