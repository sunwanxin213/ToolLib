import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";
import Plane from "./Plane.js";
import Ray from "./Ray.js";
import BoundingSphere from "./BoundingSphere.js";
import BoundingBox from "./BoundingBox.js";
import ContainmentType from "./ContainmentType.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

export default class BoundingFrustum extends Base {
    static get CornerCount() {
        return 8;
    }

    static get #PlaneCount() {
        return 6;
    }

    #matrix = null;

    #corners = new Array(BoundingFrustum.CornerCount);

    #planes = new Array(BoundingFrustum.#PlaneCount);

    get Near() {
        return this.#planes[0];
    }

    get Far() {
        return this.#planes[1];
    }

    get Left() {
        return this.#planes[2];
    }

    get Right() {
        return this.#planes[3];
    }

    get Top() {
        return this.#planes[4];
    }

    get Bottom() {
        return this.#planes[5];
    }

    static #_constructor = function (...params) {
        BoundingFrustum.#_constructor = MethodOverload()
            .Add([Matrix], function (value) {
                this.Matrix = value;
            });

        return BoundingFrustum.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Matrix: {
                get() {
                    return this.#matrix;
                },
                set: MethodOverload()
                    .Add([Matrix], function (value) {
                        this.#matrix = value;

                        this.#CreatePlanes();
                        this.#CreateCorners();
                    })
            }
        });

        return BoundingFrustum.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.Matrix;
    };

    #CreateCorners = function () {
        const p = this.#planes;
        const c = this.#corners;
        c[0] = this.#IntersectionPoint(p[0], p[2], p[4]);
        c[1] = this.#IntersectionPoint(p[0], p[3], p[4]);
        c[2] = this.#IntersectionPoint(p[0], p[3], p[5]);
        c[3] = this.#IntersectionPoint(p[0], p[2], p[5]);
        c[4] = this.#IntersectionPoint(p[1], p[2], p[4]);
        c[5] = this.#IntersectionPoint(p[1], p[3], p[4]);
        c[6] = this.#IntersectionPoint(p[1], p[3], p[5]);
        c[7] = this.#IntersectionPoint(p[1], p[2], p[5]);
    };

    #CreatePlanes = function () {
        const m = this.#matrix;
        const p = this.#planes;
        p[0] = new Plane(-m.M13, -m.M23, -m.M33, -m.M43);
        p[1] = new Plane(m.M13 - m.M14, m.M23 - m.M24, m.M33 - m.M34, m.M43 - m.M44);
        p[2] = new Plane(-m.M14 - m.M11, -m.M24 - m.M21, -m.M34 - m.M31, -m.M44 - m.M41);
        p[3] = new Plane(m.M11 - m.M14, m.M21 - m.M24, m.M31 - m.M34, m.M41 - m.M44);
        p[4] = new Plane(m.M12 - m.M14, m.M22 - m.M24, m.M32 - m.M34, m.M42 - m.M44);
        p[5] = new Plane(-m.M14 - m.M12, -m.M24 - m.M22, -m.M34 - m.M32, -m.M44 - m.M42);

        this.#NormalizePlane(p[0]);
        this.#NormalizePlane(p[1]);
        this.#NormalizePlane(p[2]);
        this.#NormalizePlane(p[3]);
        this.#NormalizePlane(p[4]);
        this.#NormalizePlane(p[5]);
    };

    #IntersectionPoint = function (a, b, c) {
        let v1, v2, v3;
        let cross = Vector3.Cross(b.Normal, c.Normal);

        let f = Vector3.Dot(a.Normal, cross);
        f *= -1.0;

        cross = Vector3.Cross(b.Normal, c.Normal);
        v1 = Vector3.Multiply(cross, a.D);

        cross = Vector3.Cross(c.Normal, a.Normal);
        v2 = Vector3.Multiply(cross, b.D);

        cross = Vector3.Cross(a.Normal, b.Normal);
        v3 = Vector3.Multiply(cross, c.D);

        let x = (v1.X + v2.X + v3.X) / f;
        let y = (v1.Y + v2.Y + v3.Y) / f;
        let z = (v1.Z + v2.Z + v3.Z) / f;
        return new Vector3(x, y, z);
    };

    #NormalizePlane = function (p) {
        let factor = 1 / p.Normal.Length();
        p.Normal.X *= factor;
        p.Normal.Y *= factor;
        p.Normal.Z *= factor;
        p.D *= factor;
    };

    Contains(...params) {
        BoundingFrustum.prototype.Contains = MethodOverload()
            .Add([BoundingBox], function (box) {
                let intersects = false;
                let planeCount = BoundingFrustum.#PlaneCount;
                for (let i = 0; i < planeCount; ++i) {
                    let planeIntersectionType = box.Intersects(this.#planes[i]);
                    switch (planeIntersectionType) {
                        case PlaneIntersectionType.Front:
                            return ContainmentType.Disjoint;
                        case PlaneIntersectionType.Intersecting:
                            intersects = true;
                            break;
                    }
                }
                return intersects ? ContainmentType.Intersects : ContainmentType.Contains;
            })
            .Add([BoundingFrustum], function (frustum) {
                if (this === frustum) {
                    return ContainmentType.Contains;
                }

                let intersects = false;
                let planeCount = BoundingFrustum.#PlaneCount;
                for (let i = 0; i < planeCount; ++i) {
                    let planeIntersectionType = frustum.Intersects(this.#planes[i]);
                    switch (planeIntersectionType) {
                        case PlaneIntersectionType.Front:
                            return ContainmentType.Disjoint;
                        case PlaneIntersectionType.Intersecting:
                            intersects = true;
                            break;
                    }
                }
                return intersects ? ContainmentType.Intersects : ContainmentType.Contains;
            })
            .Add([BoundingSphere], function (sphere) {
                let intersects = false;
                let planeCount = BoundingFrustum.#PlaneCount;
                for (let i = 0; i < planeCount; ++i) {
                    let planeIntersectionType = sphere.Intersects(this.#planes[i]);
                    switch (planeIntersectionType) {
                        case PlaneIntersectionType.Front:
                            return ContainmentType.Disjoint;
                        case PlaneIntersectionType.Intersecting:
                            intersects = true;
                            break;
                    }
                }
                return intersects ? ContainmentType.Intersects : ContainmentType.Contains;
            })
            .Add([Vector3], function (point) {
                let planeCount = BoundingFrustum.#PlaneCount;
                for (let i = 0; i < planeCount; ++i) {
                    let plane = this.#planes[i];
                    if (point.X * plane.Normal.X + point.Y * plane.Normal.Y + point.Z * plane.Normal.Z + plane.D > 0) {
                        return ContainmentType.Disjoint;
                    }
                }
                return ContainmentType.Contains;
            });

        return BoundingFrustum.prototype.Contains.call(this, ...params);
    };

    Equals(...params) {
        BoundingFrustum.prototype.Equals = MethodOverload()
            .Add([BoundingFrustum], function (other) {
                return this.Matrix.Equals(other.Matrix);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return BoundingFrustum.prototype.Equals.call(this, ...params);
    };

    GetCorners(...params) {
        BoundingFrustum.prototype.GetCorners = MethodOverload()
            .Add([], function () {
                let vec3Arr = [];
                let corners = this.#corners;
                for (let i = 0; i < corners.length; i++) {
                    vec3Arr.push(new Vector3(
                        corners[i].X,
                        corners[i].Y,
                        corners[i].Z
                    ));
                }
                return vec3Arr;
            })
            .Add([Array], function (corners) {
                if (corners.length < BoundingFrustum.CornerCount) {
                    throw new RangeError("corners 超出范围。");
                }

                let _corners = this.#corners;
                for (let i = 0; i < _corners.length; i++) {
                    corners[i].X = _corners[i].X;
                    corners[i].Y = _corners[i].Y;
                    corners[i].Z = _corners[i].Z;
                }
            });

        return BoundingFrustum.prototype.GetCorners.call(this, ...params);
    };

    Intersects(...params) {
        BoundingFrustum.prototype.Intersects = MethodOverload()
            .Add([BoundingBox], function (box) {
                let containment = this.Contains(box);
                return containment !== ContainmentType.Disjoint;
            })
            .Add([BoundingFrustum], function (frustum) {
                return this.Contains(frustum) !== ContainmentType.Disjoint;
            })
            .Add([BoundingSphere], function (sphere) {
                let containment = this.Contains(sphere);
                return containment !== ContainmentType.Disjoint;
            })
            .Add([Plane], function (plane) {
                let corners = this.#corners;
                let result = plane.Intersects(corners[0]);
                for (var i = 1; i < corners.length; i++) {
                    if (plane.Intersects(corners[i]) != result) {
                        result = PlaneIntersectionType.Intersecting;
                    }
                }
                return result;
            })
            .Add([Ray], function (ray) {
                let ctype = this.Contains(ray.Position);

                switch (ctype) {
                    case ContainmentType.Disjoint:
                        return null;
                    case ContainmentType.Contains:
                        return 0.0;
                    case ContainmentType.Intersects:
                        return 0.0;
                    //throw new NotImplementedException();
                    default:
                        throw new RangeError();
                }
            });

        return BoundingFrustum.prototype.Intersects.call(this, ...params);
    };

    ToString(...params) {
        BoundingFrustum.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{Near:${this.Near.ToString()} Far:${this.Far.ToString()} Left:${this.Left.ToString()} Right:${this.Right.ToString()} Top:${this.Top.ToString()} Bottom:${this.Bottom.ToString()}`;
            });

        return BoundingFrustum.prototype.ToString.call(this, ...params);
    };
}
