import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Vector4 from "./Vector4.js";
import Quaternion from "./Quaternion.js";
import Matrix from "./Matrix.js";
import BoundingBox from "./BoundingBox.js";
import BoundingFrustum from "./BoundingFrustum.js";
import BoundingSphere from "./BoundingSphere.js";

export default class Plane extends Base {
    #normal = Vector3.Zero;

    #d = 0;

    static #_constructor = function (...params) {
        Plane.#_constructor = MethodOverload()
            .Add([], function () {
                return Plane.#_constructor.call(this, 0, 0, 0, 0);
            })
            .Add([Number, Number, Number, Number], function (a, b, c, d) {
                this.#normal.X = a;
                this.#normal.Y = b;
                this.#normal.Z = c;
                this.#d = d;
            })
            .Add([Vector3, Number], function (normal, d) {
                return Plane.#_constructor.call(this, normal.X, normal.Y, normal.Z, d);
            })
            .Add([Vector3, Vector3, Vector3], function (point1, point2, point3) {
                let ab = Vector3.Subtract(point2, point1);
                let ac = Vector3.Subtract(point3, point1);

                let cross = Vector3.Cross(ab, ac);
                let normal = Vector3.Normalize(cross);

                return Plane.#_constructor.call(this, normal.X, normal.Y, normal.Z, -(Vector3.Dot(normal, point1)));
            })
            .Add([Vector4], function (value) {
                return Plane.#_constructor.call(this, value.X, value.Y, value.Z, value.W);
            });

        return Plane.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Normal: {
                get() {
                    return this.#normal;
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.#normal = value;
                    })
            },
            D: {
                get() {
                    return this.#d;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#d = value;
                    })
            }
        });

        return Plane.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.Normal;
        yield this.D;
    };

    static Normalize(...params) {
        Plane.Normalize = MethodOverload()
            .Add([Plane], function (value) {
                let result = new Plane();
                let factor;
                result.Normal = Vector3.Normalize(value.Normal);
                factor = Math.sqrt(result.Normal.X * result.Normal.X + result.Normal.Y * result.Normal.Y + result.Normal.Z * result.Normal.Z) /
                    Math.sqrt(value.Normal.X * value.Normal.X + value.Normal.Y * value.Normal.Y + value.Normal.Z * value.Normal.Z);
                result.D = value.D * factor;
                return result;
            });

        return Plane.Normalize.call(this, ...params);
    };

    static Transform(...params) {
        Plane.Transform = MethodOverload()
            .Add([Plane, Matrix], function (plane, matrix) {
                let transformedMatrix = Matrix.Transpose(Matrix.Invert(matrix));
                let vector = new Vector4(plane.Normal, plane.D);
                let transformedVector = Vector4.Transform(vector, transformedMatrix);
                return new Plane(transformedVector);
            })
            .Add([Plane, Quaternion], function (plane, rotation) {
                let result = new Plane();
                result.Normal = Vector3.Transform(plane.Normal, rotation);
                result.D = plane.D;
                return result;
            });

        return Plane.Transform.call(this, ...params);
    };

    Dot(...params) {
        Plane.prototype.Dot = MethodOverload()
            .Add([Vector4], function (value) {
                return ((((this.Normal.X * value.X) + (this.Normal.Y * value.Y)) + (this.Normal.Z * value.Z)) + (this.D * value.W));
            });

        return Plane.prototype.Dot.call(this, ...params);
    };

    DotCoordinate(...params) {
        Plane.prototype.DotCoordinate = MethodOverload()
            .Add([Vector3], function (value) {
                return ((((this.Normal.X * value.X) + (this.Normal.Y * value.Y)) + (this.Normal.Z * value.Z)) + this.D);
            });

        return Plane.prototype.DotCoordinate.call(this, ...params);
    };

    DotNormal(...params) {
        Plane.prototype.DotNormal = MethodOverload()
            .Add([Vector3], function (value) {
                return (((this.Normal.X * value.X) + (this.Normal.Y * value.Y)) + (this.Normal.Z * value.Z));
            });

        return Plane.prototype.DotNormal.call(this, ...params);
    };

    Equals(...params) {
        Plane.prototype.Equals = MethodOverload()
            .Add([Plane], function (other) {
                return this.Normal.Equals(other.Normal) &&
                    (this.D === other.D);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Plane.prototype.Equals.call(this, ...params);
    };

    Intersects(...params) {
        Plane.prototype.Intersects = MethodOverload()
            .Add([BoundingBox], function (box) {
                return box.Intersects(this);
            })
            .Add([BoundingFrustum], function (frustum) {
                return frustum.Intersects(this);
            })
            .Add([BoundingSphere], function (sphere) {
                return sphere.Intersects(this);
            });

        return Plane.prototype.Intersects.call(this, ...params);
    };

    Normalize(...params) {
        Plane.prototype.Normalize = MethodOverload()
            .Add([], function () {
                let length = this.Normal.Length();
                let factor = 1 / length;
                this.Normal = Vector3.Multiply(Normal, factor);
                this.D *= factor;
            });

        return Plane.prototype.Normalize.call(this, ...params);
    };

    ToString(...params) {
        Plane.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{Normal:{X:${this.Normal.X} Y:${this.Normal.Y} Z:${this.Normal.Z}} D:${this.D}}`;
            });

        return Plane.prototype.ToString.call(this, ...params);
    };
}
