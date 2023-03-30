import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Quaternion from "./Quaternion.js";
import Plane from "./Plane.js";
import MathHelper from "./MathHelper.js";

export default class Matrix extends Base {
    static get Identity() {
        return new Matrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }

    #m11 = 0;

    #m12 = 0;

    #m13 = 0;

    #m14 = 0;

    #m21 = 0;

    #m22 = 0;

    #m23 = 0;

    #m24 = 0;

    #m31 = 0;

    #m32 = 0;

    #m33 = 0;

    #m34 = 0;

    #m41 = 0;

    #m42 = 0;

    #m43 = 0;

    #m44 = 0;

    static #_constructor = function (...params) {
        Matrix.#_constructor = MethodOverload()
            .Add([], function () {
                return Matrix.#_constructor.call(this,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0
                );
            })
            .Add([Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number], function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
                [
                    this.M11, this.M12, this.M13, this.M14,
                    this.M21, this.M22, this.M23, this.M24,
                    this.M31, this.M32, this.M33, this.M34,
                    this.M41, this.M42, this.M43, this.M44
                ] = [
                        m11, m12, m13, m14,
                        m21, m22, m23, m24,
                        m31, m32, m33, m34,
                        m41, m42, m43, m44
                    ];
            });

        return Matrix.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            M11: {
                get() {
                    return this.#m11;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m11 = value;
                    })
            },
            M12: {
                get() {
                    return this.#m12;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m12 = value;
                    })
            },
            M13: {
                get() {
                    return this.#m13;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m13 = value;
                    })
            },
            M14: {
                get() {
                    return this.#m14;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m14 = value;
                    })
            },
            M21: {
                get() {
                    return this.#m21;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m21 = value;
                    })
            },
            M22: {
                get() {
                    return this.#m22;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m22 = value;
                    })
            },
            M23: {
                get() {
                    return this.#m23;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m23 = value;
                    })
            },
            M24: {
                get() {
                    return this.#m24;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m24 = value;
                    })
            },
            M31: {
                get() {
                    return this.#m31;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m31 = value;
                    })
            },
            M32: {
                get() {
                    return this.#m32;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m32 = value;
                    })
            },
            M33: {
                get() {
                    return this.#m33;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m33 = value;
                    })
            },
            M34: {
                get() {
                    return this.#m34;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m34 = value;
                    })
            },
            M41: {
                get() {
                    return this.#m41;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m41 = value;
                    })
            },
            M42: {
                get() {
                    return this.#m42;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m42 = value;
                    })
            },
            M43: {
                get() {
                    return this.#m43;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m43 = value;
                    })
            },
            M44: {
                get() {
                    return this.#m44;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#m44 = value;
                    })
            },
            Backward: {
                get() {
                    return new Vector3(this.M31, this.M32, this.M33);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M31 = value.X;
                        this.M32 = value.Y;
                        this.M33 = value.Z;
                    })
            },
            Down: {
                get() {
                    return new Vector3(-this.M21, -this.M22, -this.M23);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M21 = -value.X;
                        this.M22 = -value.Y;
                        this.M23 = -value.Z;
                    })
            },
            Forward: {
                get() {
                    return new Vector3(-this.M31, -this.M32, -this.M33);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M31 = -value.X;
                        this.M32 = -value.Y;
                        this.M33 = -value.Z;
                    })
            },
            Left: {
                get() {
                    return new Vector3(-this.M11, -this.M12, -this.M13);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M11 = -value.X;
                        this.M12 = -value.Y;
                        this.M13 = -value.Z;
                    })
            },
            Right: {
                get() {
                    return new Vector3(this.M11, this.M12, this.M13);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M11 = value.X;
                        this.M12 = value.Y;
                        this.M13 = value.Z;
                    })
            },
            Translation: {
                get() {
                    return new Vector3(this.M41, this.M42, this.M43);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M41 = value.X;
                        this.M42 = value.Y;
                        this.M43 = value.Z;
                    })
            },
            Up: {
                get() {
                    return new Vector3(this.M21, this.M22, this.M23);
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.M21 = value.X;
                        this.M22 = value.Y;
                        this.M23 = value.Z;
                    })
            }
        });

        return Matrix.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.M11;
        yield this.M12;
        yield this.M13;
        yield this.M14;
        yield this.M21;
        yield this.M22;
        yield this.M23;
        yield this.M24;
        yield this.M31;
        yield this.M32;
        yield this.M33;
        yield this.M34;
        yield this.M41;
        yield this.M42;
        yield this.M43;
        yield this.M44;
    };

    static Add(...params) {
        Matrix.Add = MethodOverload()
            .Add([Matrix, Matrix], function (matrix1, matrix2) {
                return new Matrix(
                    matrix1.M11 + matrix2.M11,
                    matrix1.M12 + matrix2.M12,
                    matrix1.M13 + matrix2.M13,
                    matrix1.M14 + matrix2.M14,
                    matrix1.M21 + matrix2.M21,
                    matrix1.M22 + matrix2.M22,
                    matrix1.M23 + matrix2.M23,
                    matrix1.M24 + matrix2.M24,
                    matrix1.M31 + matrix2.M31,
                    matrix1.M32 + matrix2.M32,
                    matrix1.M33 + matrix2.M33,
                    matrix1.M34 + matrix2.M34,
                    matrix1.M41 + matrix2.M41,
                    matrix1.M42 + matrix2.M42,
                    matrix1.M43 + matrix2.M43,
                    matrix1.M44 + matrix2.M44
                );
            });

        return Matrix.Add.call(this, ...params);
    };

    static CreateBillboard(...params) {
        Matrix.CreateBillboard = MethodOverload()
            .Add([Vector3, Vector3, Vector3, [Vector3, null]], function (objectPosition, cameraPosition, cameraUpVector, cameraForwardVector) {
                let vector = new Vector3(
                    objectPosition.X - cameraPosition.X,
                    objectPosition.Y - cameraPosition.Y,
                    objectPosition.Z - cameraPosition.Z
                );
                let vector2 = new Vector3();
                let vector3 = new Vector3();
                let num = vector.LengthSquared();
                if (num < 0.0001) {
                    if (null === cameraForwardVector) {
                        vector = Vector3.Forward
                    } else {
                        vector.X = -cameraForwardVector.X;
                        vector.Y = -cameraForwardVector.Y;
                        vector.Z = -cameraForwardVector.Z;
                    }
                }
                else {
                    vector = Vector3.Multiply(vector, (1 / (Math.sqrt(num))));
                }
                vector3 = Vector3.Cross(cameraUpVector, vector);
                vector3.Normalize();
                vector2 = Vector3.Cross(vector, vector3);
                return new Matrix(
                    vector3.X, vector3.Y, vector3.Z, 0,
                    vector2.X, vector2.Y, vector2.Z, 0,
                    vector.X, vector.Y, vector.Z, 0,
                    objectPosition.X, objectPosition.Y, objectPosition.Z, 1
                );
            });

        return Matrix.CreateBillboard.call(this, ...params);
    };

    static CreateConstrainedBillboard(...params) {
        Matrix.CreateConstrainedBillboard = MethodOverload()
            .Add([Vector3, Vector3, Vector3, [Vector3, null], [Vector3, null]], function (objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector) {
                let num;
                let vector = new Vector3();
                let vector2 = new Vector3(
                    objectPosition.X - cameraPosition.X,
                    objectPosition.Y - cameraPosition.Y,
                    objectPosition.Z - cameraPosition.Z
                );
                let vector3 = new Vector3();

                let num2 = vector2.LengthSquared();
                if (num2 < 0.0001) {
                    if (null === cameraForwardVector) {
                        vector2 = Vector3.Forward
                    } else {
                        vector2.X = -cameraForwardVector.X;
                        vector2.Y = -cameraForwardVector.Y;
                        vector2.Z = -cameraForwardVector.Z;
                    }
                }
                else {
                    vector2 = Vector3.Multiply(vector2, (1 / (Math.sqrt(num2))));
                }
                let vector4 = rotateAxis;
                num = Vector3.Dot(rotateAxis, vector2);
                if (Math.abs(num) > 0.9982547) {
                    let vec3Forward = vector3.Forward;
                    if (objectForwardVector instanceof Vector3) {
                        vector = objectForwardVector;
                        num = Vector3.Dot(rotateAxis, vector);
                        if (Math.abs(num) > 0.9982547) {
                            num = ((rotateAxis.X * vec3Forward.X) + (rotateAxis.Y * vec3Forward.Y)) + (rotateAxis.Z * vec3Forward.Z);
                            vector = (Math.abs(num) > 0.9982547) ? Vector3.Right : vec3Forward;
                        }
                    }
                    else {
                        num = ((rotateAxis.X * vec3Forward.X) + (rotateAxis.Y * vec3Forward.Y)) + (rotateAxis.Z * vec3Forward.Z);
                        vector = (Math.abs(num) > 0.9982547) ? Vector3.Right : vec3Forward;
                    }
                    vector3 = Vector3.Cross(rotateAxis, vector);
                    vector3.Normalize();
                    vector = Vector3.Cross(vector3, rotateAxis);
                    vector.Normalize();
                }
                else {
                    vector3 = Vector3.Cross(rotateAxis, vector2);
                    vector3.Normalize();
                    vector = Vector3.Cross(vector3, vector4);
                    vector.Normalize();
                }
                return new Matrix(
                    vector3.X, vector3.Y, vector3.Z, 0,
                    vector4.X, vector4.Y, vector4.Z, 0,
                    vector.X, vector.Y, vector.Z, 0,
                    objectPosition.X, objectPosition.Y, objectPosition.Z, 1
                );
            });

        return Matrix.CreateConstrainedBillboard.call(this, ...params);
    };

    static CreateFromAxisAngle(...params) {
        Matrix.CreateFromAxisAngle = MethodOverload()
            .Add([Vector3, Number], function (axis, angle) {
                let x = axis.X;
                let y = axis.Y;
                let z = axis.Z;
                let num2 = Math.sin(angle);
                let num = Math.cos(angle);
                let num11 = x * x;
                let num10 = y * y;
                let num9 = z * z;
                let num8 = x * y;
                let num7 = x * z;
                let num6 = y * z;
                return new Matrix(
                    num11 + (num * (1 - num11)), (num8 - (num * num8)) + (num2 * z), (num7 - (num * num7)) - (num2 * y), 0,
                    (num8 - (num * num8)) - (num2 * z), num10 + (num * (1 - num10)), (num6 - (num * num6)) + (num2 * x), 0,
                    (num7 - (num * num7)) + (num2 * y), (num6 - (num * num6)) - (num2 * x), num9 + (num * (1 - num9)), 0,
                    0, 0, 0, 1
                );
            });

        return Matrix.CreateFromAxisAngle.call(this, ...params);
    };

    static CreateFromQuaternion(...params) {
        Matrix.CreateFromQuaternion = MethodOverload()
            .Add([Quaternion], function (quaternion) {
                let num9 = quaternion.X * quaternion.X;
                let num8 = quaternion.Y * quaternion.Y;
                let num7 = quaternion.Z * quaternion.Z;
                let num6 = quaternion.X * quaternion.Y;
                let num5 = quaternion.Z * quaternion.W;
                let num4 = quaternion.Z * quaternion.X;
                let num3 = quaternion.Y * quaternion.W;
                let num2 = quaternion.Y * quaternion.Z;
                let num = quaternion.X * quaternion.W;
                return new Matrix(
                    1 - (2 * (num8 + num7)), 2 * (num6 + num5), 2 * (num4 - num3), 0,
                    2 * (num6 - num5), 1 - (2 * (num7 + num9)), 2 * (num2 + num), 0,
                    2 * (num4 + num3), 2 * (num2 - num), 1 - (2 * (num8 + num9)), 0,
                    0, 0, 0, 1
                );
            });

        return Matrix.CreateFromQuaternion.call(this, ...params);
    };

    static CreateFromYawPitchRoll(...params) {
        Matrix.CreateFromYawPitchRoll = MethodOverload()
            .Add([Number, Number, Number], function (yaw, pitch, roll) {
                let quaternion = Quaternion.CreateFromYawPitchRoll(yaw, pitch, roll);
                return this.CreateFromQuaternion(quaternion);
            });

        return Matrix.CreateFromYawPitchRoll.call(this, ...params);
    };

    static CreateLookAt(...params) {
        Matrix.CreateLookAt = MethodOverload()
            .Add([Vector3, Vector3, Vector3], function (cameraPosition, cameraTarget, cameraUpVector) {
                let vector = Vector3.Normalize(Vector3.Subtract(cameraPosition, cameraTarget));
                let vector2 = Vector3.Normalize(Vector3.Cross(cameraUpVector, vector));
                let vector3 = Vector3.Cross(vector, vector2);
                return new Matrix(
                    vector2.X, vector3.X, vector.X, 0,
                    vector2.Y, vector3.Y, vector.Y, 0,
                    vector2.Z, vector3.Z, vector.Z, 0,
                    -Vector3.Dot(vector2, cameraPosition), -Vector3.Dot(vector3, cameraPosition), -Vector3.Dot(vector, cameraPosition), 1
                );
            });

        return Matrix.CreateLookAt.call(this, ...params);
    };

    static CreateOrthographic(...params) {
        Matrix.CreateOrthographic = MethodOverload()
            .Add([Number, Number, Number, Number], function (width, height, zNearPlane, zFarPlane) {
                let result = new Matrix();
                result.M11 = 2 / width;
                result.M12 = result.M13 = result.M14 = 0;
                result.M22 = 2 / height;
                result.M21 = result.M23 = result.M24 = 0;
                result.M33 = 1 / (zNearPlane - zFarPlane);
                result.M31 = result.M32 = result.M34 = 0;
                result.M41 = result.M42 = 0;
                result.M43 = zNearPlane / (zNearPlane - zFarPlane);
                result.M44 = 1;
                return result;
            });

        return Matrix.CreateOrthographic.call(this, ...params);
    };

    static CreateOrthographicOffCenter(...params) {
        Matrix.CreateOrthographicOffCenter = MethodOverload()
            .Add([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, zNearPlane, zFarPlane) {
                return new Matrix(
                    (2.0 / (right - left)), 0, 0, 0,
                    0, (2.0 / (top - bottom)), 0, 0,
                    0, 0, (1.0 / (zNearPlane - zFarPlane)), 0,
                    ((left + right) / (left - right)), ((top + bottom) / (bottom - top)), (zNearPlane / (zNearPlane - zFarPlane)), 1
                );
            });

        return Matrix.CreateOrthographicOffCenter.call(this, ...params);
    };

    static CreatePerspective(...params) {
        Matrix.CreatePerspective = MethodOverload()
            .Add([Number, Number, Number, Number], function (width, height, nearPlaneDistance, farPlaneDistance) {
                if (nearPlaneDistance <= 0) {
                    throw new Error("nearPlaneDistance <= 0");
                }

                if (farPlaneDistance <= 0) {
                    throw new Error("farPlaneDistance <= 0");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new Error("nearPlaneDistance >= farPlaneDistance");
                }

                let result = new Matrix();
                result.M11 = (2 * nearPlaneDistance) / width;
                result.M22 = (2 * nearPlaneDistance) / height;
                result.M33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                result.M34 = -1;
                result.M43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                return result;
            });

        return Matrix.CreatePerspective.call(this, ...params);
    };

    static CreatePerspectiveFieldOfView(...params) {
        Matrix.CreatePerspectiveFieldOfView = MethodOverload()
            .Add([Number, Number, Number, Number], function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
                if ((fieldOfView <= 0) || (fieldOfView >= MathHelper.Pi)) {
                    throw new Error("fieldOfView <= 0 or >= PI");
                }

                if (nearPlaneDistance <= 0) {
                    throw new Error("nearPlaneDistance <= 0");
                }

                if (farPlaneDistance <= 0) {
                    throw new Error("farPlaneDistance <= 0");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new Error("nearPlaneDistance >= farPlaneDistance");
                }

                let result = new Matrix();
                let num = 1 / (Math.tan((fieldOfView * 0.5)));
                let num9 = num / aspectRatio;
                result.m11 = num9;
                result.m22 = num;
                result.m33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                result.m34 = -1;
                result.m43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                return result;
            });

        return Matrix.CreatePerspectiveFieldOfView.call(this, ...params);
    };

    static CreatePerspectiveOffCenter(...params) {
        Matrix.CreatePerspectiveOffCenter = MethodOverload()
            .Add([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, nearPlaneDistance, farPlaneDistance) {
                if (nearPlaneDistance <= 0) {
                    throw new Error("nearPlaneDistance <= 0");
                }

                if (farPlaneDistance <= 0) {
                    throw new Error("farPlaneDistance <= 0");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new Error("nearPlaneDistance >= farPlaneDistance");
                }

                let result = new Matrix();
                result.m11 = (2 * nearPlaneDistance) / (right - left);
                result.m22 = (2 * nearPlaneDistance) / (top - bottom);
                result.m31 = (left + right) / (right - left);
                result.m32 = (top + bottom) / (top - bottom);
                result.m33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                result.m34 = -1;
                result.m43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                return result;
            });

        return Matrix.CreatePerspectiveOffCenter.call(this, ...params);
    };

    static CreateReflection(...params) {
        Matrix.CreateReflection = MethodOverload()
            .Add([Plane], function (value) {
                let plane = Plane.Normalize(value);
                let x = plane.Normal.X;
                let y = plane.Normal.Y;
                let z = plane.Normal.Z;
                let num3 = -2 * x;
                let num2 = -2 * y;
                let num = -2 * z;
                return new Matrix(
                    (num3 * x) + 1, num2 * x, num * x, 0,
                    num3 * y, (num2 * y) + 1, num * y, 0,
                    num3 * z, num2 * z, (num * z) + 1, 0,
                    num3 * plane.D, num2 * plane.D, num * plane.D, 1
                );
            });

        return Matrix.CreateReflection.call(this, ...params);
    };

    static CreateRotationX(...params) {
        Matrix.CreateRotationX = MethodOverload()
            .Add([Number], function (radians) {
                let result = this.Identity;

                let val1 = Math.cos(radians);
                let val2 = Math.sin(radians);

                result.M22 = val1;
                result.M23 = val2;
                result.M32 = -val2;
                result.M33 = val1;
                return result;
            });

        return Matrix.CreateRotationX.call(this, ...params);
    };

    static CreateRotationY(...params) {
        Matrix.CreateRotationY = MethodOverload()
            .Add([Number], function (radians) {
                let result = this.Identity;

                let val1 = Math.cos(radians);
                let val2 = Math.sin(radians);

                result.M11 = val1;
                result.M13 = -val2;
                result.M31 = val2;
                result.M33 = val1;
                return result;
            });

        return Matrix.CreateRotationY.call(this, ...params);
    };

    static CreateRotationZ(...params) {
        Matrix.CreateRotationZ = MethodOverload()
            .Add([Number], function (radians) {
                let result = this.Identity;

                let val1 = Math.cos(radians);
                let val2 = Math.sin(radians);

                result.M11 = val1;
                result.M12 = val2;
                result.M21 = -val2;
                result.M22 = val1;
                return result;
            });

        return Matrix.CreateRotationZ.call(this, ...params);
    };

    static CreateScale(...params) {
        Matrix.CreateScale = MethodOverload()
            .Add([Number], function (scale) {
                return this.CreateScale(scale, scale, scale);
            })
            .Add([Number, Number, Number], function (xScale, yScale, zScale) {
                let result = new Matrix();
                result.M11 = xScale;
                result.M22 = yScale;
                result.M33 = zScale;
                result.M44 = 1;
                return result;
            })
            .Add([Vector3], function (scales) {
                return this.CreateScale(scales.X, scales.Y, scales.Z);
            });

        return Matrix.CreateScale.call(this, ...params);
    };

    static CreateShadow(...params) {
        Matrix.CreateShadow = MethodOverload()
            .Add([Vector3, Plane], function (lightDirection, plane) {
                let dot = (plane.Normal.X * lightDirection.X) + (plane.Normal.Y * lightDirection.Y) + (plane.Normal.Z * lightDirection.Z);
                let x = -plane.Normal.X;
                let y = -plane.Normal.Y;
                let z = -plane.Normal.Z;
                let d = -plane.D;

                return new Matrix(
                    (x * lightDirection.X) + dot, x * lightDirection.Y, x * lightDirection.Z, 0,
                    y * lightDirection.X, (y * lightDirection.Y) + dot, y * lightDirection.Z, 0,
                    z * lightDirection.X, z * lightDirection.Y, (z * lightDirection.Z) + dot, 0,
                    d * lightDirection.X, d * lightDirection.Y, d * lightDirection.Z, dot
                );
            });

        return Matrix.CreateShadow.call(this, ...params);
    };

    static CreateTranslation(...params) {
        Matrix.CreateTranslation = MethodOverload()
            .Add([Number, Number, Number], function (xPosition, yPosition, zPosition) {
                let result = new Matrix();
                result.M11 = 1;
                result.M22 = 1;
                result.M33 = 1;
                result.M41 = xPosition;
                result.M42 = yPosition;
                result.M43 = zPosition;
                result.M44 = 1;
                return result;
            })
            .Add([Vector3], function (position) {
                return this.CreateTranslation(position.X, position.Y, position.Z);
            });

        return Matrix.CreateTranslation.call(this, ...params);
    };

    static CreateWorld(...params) {
        Matrix.CreateWorld = MethodOverload()
            .Add([Vector3, Vector3, Vector3], function (position, forward, up) {
                let z = Vector3.Normalize(forward);
                let x = Vector3.Cross(forward, up);
                let y = Vector3.Cross(x, forward);
                x.Normalize();
                y.Normalize();

                let result = new Matrix();
                result.Right = x;
                result.Up = y;
                result.Forward = z;
                result.Translation = position;
                result.M44 = 1;
                return result;
            });

        return Matrix.CreateWorld.call(this, ...params);
    };

    static Divide(...params) {
        Matrix.Divide = MethodOverload()
            .Add([Matrix, Number], function (matrix1, divider) {
                let num = 1 / divider;
                return new Matrix(
                    matrix1.M11 * num, matrix1.M12 * num, matrix1.M13 * num, matrix1.M14 * num,
                    matrix1.M21 * num, matrix1.M22 * num, matrix1.M23 * num, matrix1.M24 * num,
                    matrix1.M31 * num, matrix1.M32 * num, matrix1.M33 * num, matrix1.M34 * num,
                    matrix1.M41 * num, matrix1.M42 * num, matrix1.M43 * num, matrix1.M44 * num
                );
            })
            .Add([Matrix, Matrix], function (matrix1, matrix2) {
                return new Matrix(
                    matrix1.M11 / matrix2.M11, matrix1.M12 / matrix2.M12, matrix1.M13 / matrix2.M13, matrix1.M14 / matrix2.M14,
                    matrix1.M21 / matrix2.M21, matrix1.M22 / matrix2.M22, matrix1.M23 / matrix2.M23, matrix1.M24 / matrix2.M24,
                    matrix1.M31 / matrix2.M31, matrix1.M32 / matrix2.M32, matrix1.M33 / matrix2.M33, matrix1.M34 / matrix2.M34,
                    matrix1.M41 / matrix2.M41, matrix1.M42 / matrix2.M42, matrix1.M43 / matrix2.M43, matrix1.M44 / matrix2.M44
                );
            });

        return Matrix.Divide.call(this, ...params);
    };

    static Invert(...params) {
        Matrix.Invert = MethodOverload()
            .Add([Matrix], function (matrix) {
                let result = new Matrix();
                let num1 = matrix.M11;
                let num2 = matrix.M12;
                let num3 = matrix.M13;
                let num4 = matrix.M14;
                let num5 = matrix.M21;
                let num6 = matrix.M22;
                let num7 = matrix.M23;
                let num8 = matrix.M24;
                let num9 = matrix.M31;
                let num10 = matrix.M32;
                let num11 = matrix.M33;
                let num12 = matrix.M34;
                let num13 = matrix.M41;
                let num14 = matrix.M42;
                let num15 = matrix.M43;
                let num16 = matrix.M44;
                let num17 = (num11 * num16 - num12 * num15);
                let num18 = (num10 * num16 - num12 * num14);
                let num19 = (num10 * num15 - num11 * num14);
                let num20 = (num9 * num16 - num12 * num13);
                let num21 = (num9 * num15 - num11 * num13);
                let num22 = (num9 * num14 - num10 * num13);
                let num23 = (num6 * num17 - num7 * num18 + num8 * num19);
                let num24 = -(num5 * num17 - num7 * num20 + num8 * num21);
                let num25 = (num5 * num18 - num6 * num20 + num8 * num22);
                let num26 = -(num5 * num19 - num6 * num21 + num7 * num22);
                let num27 = (1.0 / (num1 * num23 + num2 * num24 + num3 * num25 + num4 * num26));

                result.M11 = num23 * num27;
                result.M21 = num24 * num27;
                result.M31 = num25 * num27;
                result.M41 = num26 * num27;
                result.M12 = -(num2 * num17 - num3 * num18 + num4 * num19) * num27;
                result.M22 = (num1 * num17 - num3 * num20 + num4 * num21) * num27;
                result.M32 = -(num1 * num18 - num2 * num20 + num4 * num22) * num27;
                result.M42 = (num1 * num19 - num2 * num21 + num3 * num22) * num27;
                let num28 = (num7 * num16 - num8 * num15);
                let num29 = (num6 * num16 - num8 * num14);
                let num30 = (num6 * num15 - num7 * num14);
                let num31 = (num5 * num16 - num8 * num13);
                let num32 = (num5 * num15 - num7 * num13);
                let num33 = (num5 * num14 - num6 * num13);
                result.M13 = (num2 * num28 - num3 * num29 + num4 * num30) * num27;
                result.M23 = -(num1 * num28 - num3 * num31 + num4 * num32) * num27;
                result.M33 = (num1 * num29 - num2 * num31 + num4 * num33) * num27;
                result.M43 = -(num1 * num30 - num2 * num32 + num3 * num33) * num27;
                let num34 = (num7 * num12 - num8 * num11);
                let num35 = (num6 * num12 - num8 * num10);
                let num36 = (num6 * num11 - num7 * num10);
                let num37 = (num5 * num12 - num8 * num9);
                let num38 = (num5 * num11 - num7 * num9);
                let num39 = (num5 * num10 - num6 * num9);
                result.M14 = -(num2 * num34 - num3 * num35 + num4 * num36) * num27;
                result.M24 = (num1 * num34 - num3 * num37 + num4 * num38) * num27;
                result.M34 = -(num1 * num35 - num2 * num37 + num4 * num39) * num27;
                result.M44 = (num1 * num36 - num2 * num38 + num3 * num39) * num27;
                return result;
            });

        return Matrix.Invert.call(this, ...params);
    };

    static Lerp(...params) {
        Matrix.Lerp = MethodOverload()
            .Add([Matrix, Matrix, Number], function (matrix1, matrix2, amount) {
                return new Matrix(
                    matrix1.M11 + ((matrix2.M11 - matrix1.M11) * amount), matrix1.M12 + ((matrix2.M12 - matrix1.M12) * amount), matrix1.M13 + ((matrix2.M13 - matrix1.M13) * amount), matrix1.M14 + ((matrix2.M14 - matrix1.M14) * amount),
                    matrix1.M21 + ((matrix2.M21 - matrix1.M21) * amount), matrix1.M22 + ((matrix2.M22 - matrix1.M22) * amount), matrix1.M23 + ((matrix2.M23 - matrix1.M23) * amount), matrix1.M24 + ((matrix2.M24 - matrix1.M24) * amount),
                    matrix1.M31 + ((matrix2.M31 - matrix1.M31) * amount), matrix1.M32 + ((matrix2.M32 - matrix1.M32) * amount), matrix1.M33 + ((matrix2.M33 - matrix1.M33) * amount), matrix1.M34 + ((matrix2.M34 - matrix1.M34) * amount),
                    matrix1.M41 + ((matrix2.M41 - matrix1.M41) * amount), matrix1.M42 + ((matrix2.M42 - matrix1.M42) * amount), matrix1.M43 + ((matrix2.M43 - matrix1.M43) * amount), matrix1.M44 + ((matrix2.M44 - matrix1.M44) * amount)
                );
            });

        return Matrix.Lerp.call(this, ...params);
    };

    static Multiply(...params) {
        Matrix.Multiply = MethodOverload()
            .Add([Matrix, Number], function (matrix1, scaleFactor) {
                return new Matrix(
                    matrix1.M11 * scaleFactor, matrix1.M12 * scaleFactor, matrix1.M13 * scaleFactor, matrix1.M14 * scaleFactor,
                    matrix1.M21 * scaleFactor, matrix1.M22 * scaleFactor, matrix1.M23 * scaleFactor, matrix1.M24 * scaleFactor,
                    matrix1.M31 * scaleFactor, matrix1.M32 * scaleFactor, matrix1.M33 * scaleFactor, matrix1.M34 * scaleFactor,
                    matrix1.M41 * scaleFactor, matrix1.M42 * scaleFactor, matrix1.M43 * scaleFactor, matrix1.M44 * scaleFactor
                );
            })
            .Add([Matrix, Matrix], function (matrix1, matrix2) {
                let matrix = new Matrix();
                return Matrix.Multiply.call(this, matrix1, matrix2, matrix);
            })
            .Add([Matrix, Matrix, Matrix], function (matrix1, matrix2, outMatrix) {
                outMatrix.M11 = (((matrix1.M11 * matrix2.M11) + (matrix1.M12 * matrix2.M21)) + (matrix1.M13 * matrix2.M31)) + (matrix1.M14 * matrix2.M41);
                outMatrix.M12 = (((matrix1.M11 * matrix2.M12) + (matrix1.M12 * matrix2.M22)) + (matrix1.M13 * matrix2.M32)) + (matrix1.M14 * matrix2.M42);
                outMatrix.M13 = (((matrix1.M11 * matrix2.M13) + (matrix1.M12 * matrix2.M23)) + (matrix1.M13 * matrix2.M33)) + (matrix1.M14 * matrix2.M43);
                outMatrix.M14 = (((matrix1.M11 * matrix2.M14) + (matrix1.M12 * matrix2.M24)) + (matrix1.M13 * matrix2.M34)) + (matrix1.M14 * matrix2.M44);
                outMatrix.M21 = (((matrix1.M21 * matrix2.M11) + (matrix1.M22 * matrix2.M21)) + (matrix1.M23 * matrix2.M31)) + (matrix1.M24 * matrix2.M41);
                outMatrix.M22 = (((matrix1.M21 * matrix2.M12) + (matrix1.M22 * matrix2.M22)) + (matrix1.M23 * matrix2.M32)) + (matrix1.M24 * matrix2.M42);
                outMatrix.M23 = (((matrix1.M21 * matrix2.M13) + (matrix1.M22 * matrix2.M23)) + (matrix1.M23 * matrix2.M33)) + (matrix1.M24 * matrix2.M43);
                outMatrix.M24 = (((matrix1.M21 * matrix2.M14) + (matrix1.M22 * matrix2.M24)) + (matrix1.M23 * matrix2.M34)) + (matrix1.M24 * matrix2.M44);
                outMatrix.M31 = (((matrix1.M31 * matrix2.M11) + (matrix1.M32 * matrix2.M21)) + (matrix1.M33 * matrix2.M31)) + (matrix1.M34 * matrix2.M41);
                outMatrix.M32 = (((matrix1.M31 * matrix2.M12) + (matrix1.M32 * matrix2.M22)) + (matrix1.M33 * matrix2.M32)) + (matrix1.M34 * matrix2.M42);
                outMatrix.M33 = (((matrix1.M31 * matrix2.M13) + (matrix1.M32 * matrix2.M23)) + (matrix1.M33 * matrix2.M33)) + (matrix1.M34 * matrix2.M43);
                outMatrix.M34 = (((matrix1.M31 * matrix2.M14) + (matrix1.M32 * matrix2.M24)) + (matrix1.M33 * matrix2.M34)) + (matrix1.M34 * matrix2.M44);
                outMatrix.M41 = (((matrix1.M41 * matrix2.M11) + (matrix1.M42 * matrix2.M21)) + (matrix1.M43 * matrix2.M31)) + (matrix1.M44 * matrix2.M41);
                outMatrix.M42 = (((matrix1.M41 * matrix2.M12) + (matrix1.M42 * matrix2.M22)) + (matrix1.M43 * matrix2.M32)) + (matrix1.M44 * matrix2.M42);
                outMatrix.M43 = (((matrix1.M41 * matrix2.M13) + (matrix1.M42 * matrix2.M23)) + (matrix1.M43 * matrix2.M33)) + (matrix1.M44 * matrix2.M43);
                outMatrix.M44 = (((matrix1.M41 * matrix2.M14) + (matrix1.M42 * matrix2.M24)) + (matrix1.M43 * matrix2.M34)) + (matrix1.M44 * matrix2.M44);
                return outMatrix;
            });

        return Matrix.Multiply.call(this, ...params);
    };

    static Negate(...params) {
        Matrix.Negate = MethodOverload()
            .Add([Matrix], function (matrix) {
                return new Matrix(
                    -matrix.M11, -matrix.M12, -matrix.M13, -matrix.M14,
                    -matrix.M21, -matrix.M22, -matrix.M23, -matrix.M24,
                    -matrix.M31, -matrix.M32, -matrix.M33, -matrix.M34,
                    -matrix.M41, -matrix.M42, -matrix.M43, -matrix.M44
                );
            });

        return Matrix.Negate.call(this, ...params);
    };

    static Subtract(...params) {
        Matrix.Subtract = MethodOverload()
            .Add([Matrix, Matrix], function (matrix1, matrix2) {
                return new Matrix(
                    matrix1.M11 - matrix2.M11, matrix1.M12 - matrix2.M12, matrix1.M13 - matrix2.M13, matrix1.M14 - matrix2.M14,
                    matrix1.M21 - matrix2.M21, matrix1.M22 - matrix2.M22, matrix1.M23 - matrix2.M23, matrix1.M24 - matrix2.M24,
                    matrix1.M31 - matrix2.M31, matrix1.M32 - matrix2.M32, matrix1.M33 - matrix2.M33, matrix1.M34 - matrix2.M34,
                    matrix1.M41 - matrix2.M41, matrix1.M42 - matrix2.M42, matrix1.M43 - matrix2.M43, matrix1.M44 - matrix2.M44
                );
            });

        return Matrix.Subtract.call(this, ...params);
    };

    static Transform(...params) {
        Matrix.Transform = MethodOverload()
            .Add([Matrix, Quaternion], function (value, rotation) {
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

                let q11 = 1.0 - yy2 - zz2;
                let q21 = xy2 - wz2;
                let q31 = xz2 + wy2;

                let q12 = xy2 + wz2;
                let q22 = 1.0 - xx2 - zz2;
                let q32 = yz2 - wx2;

                let q13 = xz2 - wy2;
                let q23 = yz2 + wx2;
                let q33 = 1.0 - xx2 - yy2;

                return new Matrix(
                    value.M11 * q11 + value.M12 * q21 + value.M13 * q31, value.M11 * q12 + value.M12 * q22 + value.M13 * q32, value.M11 * q13 + value.M12 * q23 + value.M13 * q33, value.M14,
                    value.M21 * q11 + value.M22 * q21 + value.M23 * q31, value.M21 * q12 + value.M22 * q22 + value.M23 * q32, value.M21 * q13 + value.M22 * q23 + value.M23 * q33, value.M24,
                    value.M31 * q11 + value.M32 * q21 + value.M33 * q31, value.M31 * q12 + value.M32 * q22 + value.M33 * q32, value.M31 * q13 + value.M32 * q23 + value.M33 * q33, value.M34,
                    value.M41 * q11 + value.M42 * q21 + value.M43 * q31, value.M41 * q12 + value.M42 * q22 + value.M43 * q32, value.M41 * q13 + value.M42 * q23 + value.M43 * q33, value.M44
                );
            });

        return Matrix.Transform.call(this, ...params);
    };

    static Transpose(...params) {
        Matrix.Transpose = MethodOverload()
            .Add([Matrix], function (matrix) {
                return new Matrix(
                    matrix.M11, matrix.M21, matrix.M31, matrix.M41,
                    matrix.M12, matrix.M22, matrix.M32, matrix.M42,
                    matrix.M13, matrix.M23, matrix.M33, matrix.M43,
                    matrix.M14, matrix.M24, matrix.M34, matrix.M44
                );
            });

        return Matrix.Transpose.call(this, ...params);
    };

    Decompose(...params) {
        Matrix.prototype.Decompose = MethodOverload()
            .Add([Vector3, Quaternion, Vector3], function (scale, rotation, translation) {
                translation.X = this.M41;
                translation.Y = this.M42;
                translation.Z = this.M43;

                let xs = (Math.sign(this.M11 * this.M12 * this.M13 * this.M14) < 0) ? -1 : 1;
                let ys = (Math.sign(this.M21 * this.M22 * this.M23 * this.M24) < 0) ? -1 : 1;
                let zs = (Math.sign(this.M31 * this.M32 * this.M33 * this.M34) < 0) ? -1 : 1;

                scale.X = xs * Math.sqrt(this.M11 * this.M11 + this.M12 * this.M12 + this.M13 * this.M13);
                scale.Y = ys * Math.sqrt(this.M21 * this.M21 + this.M22 * this.M22 + this.M23 * this.M23);
                scale.Z = zs * Math.sqrt(this.M31 * this.M31 + this.M32 * this.M32 + this.M33 * this.M33);

                if (scale.X === 0.0 || scale.Y === 0.0 || scale.Z === 0.0) {
                    let qi = Quaternion.Identity;
                    rotation.X = qi.X;
                    rotation.Y = qi.Y;
                    rotation.Z = qi.Z;
                    rotation.W = qi.W;
                    return false;
                }

                let m1 = new Matrix(
                    this.M11 / scale.X, this.M12 / scale.X, this.M13 / scale.X, 0,
                    this.M21 / scale.Y, this.M22 / scale.Y, this.M23 / scale.Y, 0,
                    this.M31 / scale.Z, this.M32 / scale.Z, this.M33 / scale.Z, 0,
                    0, 0, 0, 1
                );

                m1 = Quaternion.CreateFromRotationMatrix(m1);

                rotation.X = m1.X;
                rotation.Y = m1.Y;
                rotation.Z = m1.Z;
                rotation.W = m1.W;
                return true;
            });

        return Matrix.prototype.Decompose.call(this, ...params);
    };

    Determinant(...params) {
        Matrix.prototype.Determinant = MethodOverload()
            .Add([], function () {
                let num22 = this.M11;
                let num21 = this.M12;
                let num20 = this.M13;
                let num19 = this.M14;
                let num12 = this.M21;
                let num11 = this.M22;
                let num10 = this.M23;
                let num9 = this.M24;
                let num8 = this.M31;
                let num7 = this.M32;
                let num6 = this.M33;
                let num5 = this.M34;
                let num4 = this.M41;
                let num3 = this.M42;
                let num2 = this.M43;
                let num = this.M44;
                let num18 = (num6 * num) - (num5 * num2);
                let num17 = (num7 * num) - (num5 * num3);
                let num16 = (num7 * num2) - (num6 * num3);
                let num15 = (num8 * num) - (num5 * num4);
                let num14 = (num8 * num2) - (num6 * num4);
                let num13 = (num8 * num3) - (num7 * num4);
                return ((((num22 * (((num11 * num18) - (num10 * num17)) + (num9 * num16))) - (num21 * (((num12 * num18) - (num10 * num15)) + (num9 * num14)))) + (num20 * (((num12 * num17) - (num11 * num15)) + (num9 * num13)))) - (num19 * (((num12 * num16) - (num11 * num14)) + (num10 * num13))));
            });

        return Matrix.prototype.Determinant.call(this, ...params);
    };

    Equals(...params) {
        Matrix.prototype.Equals = MethodOverload()
            .Add([Matrix], function (other) {
                return (this.M11 === other.M11) &&
                    (this.M22 === other.M22) &&
                    (this.M33 === other.M33) &&
                    (this.M44 === other.M44) &&
                    (this.M12 === other.M12) &&
                    (this.M13 === other.M13) &&
                    (this.M14 === other.M14) &&
                    (this.M21 === other.M21) &&
                    (this.M23 === other.M23) &&
                    (this.M24 === other.M24) &&
                    (this.M31 === other.M31) &&
                    (this.M32 === other.M32) &&
                    (this.M34 === other.M34) &&
                    (this.M41 === other.M41) &&
                    (this.M42 === other.M42) &&
                    (this.M43 === other.M43);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Matrix.prototype.Equals.call(this, ...params);
    };

    ToString(...params) {
        Matrix.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{ {M11:${this.M11} M12:${this.M12} M13:${this.M13} M14:${this.M14}} {M21:${this.M21} M22:${this.M22} M23:${this.M23} M24:${this.M24}} {M31:${this.M31} M32:${this.M32} M33:${this.M33} M34:${this.M34}} {M41:${this.M41} M42:${this.M42} M43:${this.M43} M44:${this.M44}} }`;
            });

        return Matrix.prototype.ToString.call(this, ...params);
    };
}
