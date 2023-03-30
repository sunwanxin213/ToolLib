import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Plane from "./Plane.js";
import Ray from "./Ray.js";
import BoundingSphere from "./BoundingSphere.js";
import BoundingFrustum from "./BoundingFrustum.js";
import ContainmentType from "./ContainmentType.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

export default class BoundingBox extends Base {
    static get CornerCount() {
        return 8;
    }

    static #GetMaxVector3() {
        return new Vector3(Number.MAX_SAFE_INTEGER);
    }

    static #GetMinVector3() {
        return new Vector3(Number.MIN_SAFE_INTEGER);
    }

    #max = null;

    #min = null;

    static #_constructor = function (...params) {
        BoundingBox.#_constructor = MethodOverload()
            .Add([], function () {
                return BoundingBox.#_constructor.call(this, Vector3.Zero, Vector3.Zero);
            })
            .Add([Vector3, Vector3], function (min, max) {
                [this.Min, this.Max] = [min, max];
            });

        return BoundingBox.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Min: {
                get() {
                    return this.#min;
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.#min = value;
                    })
            },
            Max: {
                get() {
                    return this.#max;
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.#max = value;
                    })
            }
        });

        return BoundingBox.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.Min;
        yield this.Max;
    };

    static CreateFromPoints(...params) {
        BoundingBox.CreateFromPoints = MethodOverload()
            .Add([Array], function (points) {
                let empty = true;
                let minVec = BoundingBox.#GetMaxVector3();
                let maxVec = BoundingBox.#GetMinVector3();
                for (let i = 0; i < points.length; i++) {
                    let ptVector = points[i];
                    minVec.X = (minVec.X < ptVector.X) ? minVec.X : ptVector.X;
                    minVec.Y = (minVec.Y < ptVector.Y) ? minVec.Y : ptVector.Y;
                    minVec.Z = (minVec.Z < ptVector.Z) ? minVec.Z : ptVector.Z;

                    maxVec.X = (maxVec.X > ptVector.X) ? maxVec.X : ptVector.X;
                    maxVec.Y = (maxVec.Y > ptVector.Y) ? maxVec.Y : ptVector.Y;
                    maxVec.Z = (maxVec.Z > ptVector.Z) ? maxVec.Z : ptVector.Z;

                    empty = false;
                }

                if (empty) {
                    throw new Error();
                }

                return new BoundingBox(minVec, maxVec);
            });

        return BoundingBox.CreateFromPoints.call(this, ...params);
    };

    static CreateFromSphere(...params) {
        BoundingBox.CreateFromSphere = MethodOverload()
            .Add([BoundingSphere], function (sphere) {
                let corner = new Vector3(sphere.Radius);
                return new BoundingBox(
                    Vector3.Subtract(sphere.Center, corner),
                    Vector3.Add(sphere.Center, corner)
                );
            });

        return BoundingBox.CreateFromSphere.call(this, ...params);
    };

    static CreateMerged(...params) {
        BoundingBox.CreateMerged = MethodOverload()
            .Add([BoundingBox, BoundingBox], function (original, additional) {
                let vec3Min = new Vector3(
                    Math.min(original.Min.X, additional.Min.X),
                    Math.min(original.Min.Y, additional.Min.Y),
                    Math.min(original.Min.Z, additional.Min.Z)
                );

                let vec3Max = new Vector3(
                    Math.max(original.Max.X, additional.Max.X),
                    Math.max(original.Max.Y, additional.Max.Y),
                    Math.max(original.Max.Z, additional.Max.Z)
                );

                return new BoundingBox(vec3Min, vec3Max);
            });

        BoundingBox.CreateMerged.call(this, ...params);
    };

    Contains(...params) {
        BoundingBox.prototype.Contains = MethodOverload()
            .Add([BoundingBox], function (box) {
                if (box.Max.X < this.Min.X ||
                    box.Min.X > this.Max.X ||
                    box.Max.Y < this.Min.Y ||
                    box.Min.Y > this.Max.Y ||
                    box.Max.Z < this.Min.Z ||
                    box.Min.Z > this.Max.Z) {
                    return ContainmentType.Disjoint;
                }


                if (box.Min.X >= this.Min.X &&
                    box.Max.X <= this.Max.X &&
                    box.Min.Y >= this.Min.Y &&
                    box.Max.Y <= this.Max.Y &&
                    box.Min.Z >= this.Min.Z &&
                    box.Max.Z <= this.Max.Z) {
                    return ContainmentType.Contains;
                }

                return ContainmentType.Intersects;
            })
            .Add([BoundingFrustum], function (frustum) {
                let i;
                let contained;
                let corners = frustum.GetCorners();

                for (i = 0; i < corners.length; i++) {
                    contained = this.Contains(corners[i]);
                    if (contained === ContainmentType.Disjoint) {
                        break;
                    }
                }

                if (i === corners.length) {
                    return ContainmentType.Contains;
                }

                if (i !== 0) {
                    return ContainmentType.Intersects;
                }

                i++;
                for (; i < corners.length; i++) {
                    contained = this.Contains(corners[i]);
                    if (contained !== ContainmentType.Contains) {
                        return Jyo.ContainmentType.Intersects;
                    }
                }

                return ContainmentType.Contains;
            })
            .Add([BoundingSphere], function (sphere) {
                if (sphere.Center.X - this.Min.X >= sphere.Radius &&
                    sphere.Center.Y - this.Min.Y >= sphere.Radius &&
                    sphere.Center.Z - this.Min.Z >= sphere.Radius &&
                    this.Max.X - sphere.Center.X >= sphere.Radius &&
                    this.Max.Y - sphere.Center.Y >= sphere.Radius &&
                    this.Max.Z - sphere.Center.Z >= sphere.Radius) {
                    return ContainmentType.Contains;
                }

                let dmin = 0;

                let e = sphere.Center.X - this.Min.X;
                if (e < 0) {
                    if (e < -sphere.Radius) {
                        return ContainmentType.Disjoint;
                    }
                    dmin += e * e;
                } else {
                    e = sphere.Center.X - this.Max.X;
                    if (e > 0) {
                        if (e > sphere.Radius) {
                            return ContainmentType.Disjoint;
                        }
                        dmin += e * e;
                    }
                }

                e = sphere.Center.Y - this.Min.Y;
                if (e < 0) {
                    if (e < -sphere.Radius) {
                        return ContainmentType.Disjoint;
                    }
                    dmin += e * e;
                } else {
                    e = sphere.Center.Y - this.Max.Y;
                    if (e > 0) {
                        if (e > sphere.Radius) {
                            return ContainmentType.Disjoint;
                        }
                        dmin += e * e;
                    }
                }

                e = sphere.Center.Z - this.Min.Z;
                if (e < 0) {
                    if (e < -sphere.Radius) {
                        return ContainmentType.Disjoint;
                    }
                    dmin += e * e;
                } else {
                    e = sphere.Center.Z - this.Max.Z;
                    if (e > 0) {
                        if (e > sphere.Radius) {
                            return ContainmentType.Disjoint;
                        }
                        dmin += e * e;
                    }
                }

                if (dmin <= sphere.Radius * sphere.Radius) {
                    return ContainmentType.Intersects;
                }

                return ContainmentType.Disjoint;
            })
            .Add([Vector3], function (point) {
                if (point.X < this.Min.X ||
                    point.X > this.Max.X ||
                    point.Y < this.Min.Y ||
                    point.Y > this.Max.Y ||
                    point.Z < this.Min.Z ||
                    point.Z > this.Max.Z) {
                    return ContainmentType.Disjoint;
                }

                if (point.X == this.Min.X ||
                    point.X == this.Max.X ||
                    point.Y == this.Min.Y ||
                    point.Y == this.Max.Y ||
                    point.Z == this.Min.Z ||
                    point.Z == this.Max.Z) {
                    return ContainmentType.Intersects;
                }

                return ContainmentType.Contains;
            });

        return BoundingBox.prototype.Contains.call(this, ...params);
    };

    Equals(...params) {
        BoundingBox.prototype.Equals = MethodOverload()
            .Add([BoundingBox], function (box) {
                return this.Min.Equals(box.Min) &&
                    this.Max.Equals(box.Max);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return BoundingBox.prototype.Equals.call(this, ...params);
    };

    GetCorners(...params) {
        BoundingBox.prototype.GetCorners = MethodOverload()
            .Add([], function () {
                return [
                    new Vector3(this.Min.X, this.Max.Y, this.Max.Z),
                    new Vector3(this.Max.X, this.Max.Y, this.Max.Z),
                    new Vector3(this.Max.X, this.Min.Y, this.Max.Z),
                    new Vector3(this.Min.X, this.Min.Y, this.Max.Z),
                    new Vector3(this.Min.X, this.Max.Y, this.Min.Z),
                    new Vector3(this.Max.X, this.Max.Y, this.Min.Z),
                    new Vector3(this.Max.X, this.Min.Y, this.Min.Z),
                    new Vector3(this.Min.X, this.Min.Y, this.Min.Z)
                ];
            })
            .Add([Array], function (corners) {
                if (corners.length < 8) {
                    throw new Error("没有足够的 corners。");
                }

                corners[0].X = this.Min.X;
                corners[0].Y = this.Max.Y;
                corners[0].Z = this.Max.Z;
                corners[1].X = this.Max.X;
                corners[1].Y = this.Max.Y;
                corners[1].Z = this.Max.Z;
                corners[2].X = this.Max.X;
                corners[2].Y = this.Min.Y;
                corners[2].Z = this.Max.Z;
                corners[3].X = this.Min.X;
                corners[3].Y = this.Min.Y;
                corners[3].Z = this.Max.Z;
                corners[4].X = this.Min.X;
                corners[4].Y = this.Max.Y;
                corners[4].Z = this.Min.Z;
                corners[5].X = this.Max.X;
                corners[5].Y = this.Max.Y;
                corners[5].Z = this.Min.Z;
                corners[6].X = this.Max.X;
                corners[6].Y = this.Min.Y;
                corners[6].Z = this.Min.Z;
                corners[7].X = this.Min.X;
                corners[7].Y = this.Min.Y;
                corners[7].Z = this.Min.Z;
            });

        return BoundingBox.prototype.GetCorners.call(this, ...params);
    };

    Intersects(...params) {
        BoundingBox.prototype.Intersects = MethodOverload()
            .Add([BoundingBox], function (box) {
                if ((this.Max.X >= box.Min.X) && (this.Min.X <= box.Max.X)) {
                    if ((this.Max.Y < box.Min.Y) || (this.Min.Y > box.Max.Y)) {
                        return false;
                    }

                    return (this.Max.Z >= box.Min.Z) && (this.Min.Z <= box.Max.Z);
                }

                return false;
            })
            .Add([BoundingFrustum], function (frustum) {
                return frustum.Intersects(this);
            })
            .Add([BoundingSphere], function (sphere) {
                return this.Contains(sphere) !== ContainmentType.Disjoint;
            })
            .Add([Plane], function (plane) {
                let positiveVertex = new Vector3();
                let negativeVertex = new Vector3();

                if (plane.Normal.X >= 0) {
                    positiveVertex.X = this.Max.X;
                    negativeVertex.X = this.Min.X;
                } else {
                    positiveVertex.X = this.Min.X;
                    negativeVertex.X = this.Max.X;
                }

                if (plane.Normal.Y >= 0) {
                    positiveVertex.Y = this.Max.Y;
                    negativeVertex.Y = this.Min.Y;
                } else {
                    positiveVertex.Y = this.Min.Y;
                    negativeVertex.Y = this.Max.Y;
                }

                if (plane.Normal.Z >= 0) {
                    positiveVertex.Z = this.Max.Z;
                    negativeVertex.Z = this.Min.Z;
                } else {
                    positiveVertex.Z = this.Min.Z;
                    negativeVertex.Z = this.Max.Z;
                }

                let distance = plane.Normal.X * negativeVertex.X + plane.Normal.Y * negativeVertex.Y + plane.Normal.Z * negativeVertex.Z + plane.D;
                if (distance > 0) {
                    return PlaneIntersectionType.Front;
                }

                distance = plane.Normal.X * positiveVertex.X + plane.Normal.Y * positiveVertex.Y + plane.Normal.Z * positiveVertex.Z + plane.D;
                if (distance < 0) {
                    return PlaneIntersectionType.Back;
                }

                return PlaneIntersectionType.Intersecting;
            })
            .Add([Ray], function (ray) {
                return ray.Intersects(this);
            });

        return BoundingBox.prototype.Intersects.call(this, ...params);
    };

    ToString(...params) {
        BoundingBox.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{Min:${this.Min.ToString()} Max:${this.Max.ToString()}}`;
            });

        return BoundingBox.prototype.ToString.call(this, ...params);
    };
}
