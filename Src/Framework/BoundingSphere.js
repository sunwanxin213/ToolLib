import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";
import Plane from "./Plane.js";
import Ray from "./Ray.js";
import BoundingBox from "./BoundingBox.js";
import BoundingFrustum from "./BoundingFrustum.js";
import ContainmentType from "./ContainmentType.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

export default class BoundingSphere extends Base {
    #center = null;

    #radius = 0;

    static #_constructor = function (...params) {
        BoundingSphere.#_constructor = MethodOverload()
            .Add([], function () {
                return BoundingSphere.#_constructor.call(this, Vector3.Zero, 0);
            })
            .Add([Vector3, Number], function (center, radius) {
                [this.Center, this.Radius] = [center, radius];
            });

        return BoundingSphere.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Center: {
                get() {
                    return this.#center;
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.#center = value;
                    })
            },
            Radius: {
                get() {
                    return this.#radius;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#radius = value;
                    })
            }
        });

        return BoundingSphere.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.Center;
        yield this.Radius;
    };

    static CreateFromBoundingBox(...params) {
        BoundingSphere.CreateFromBoundingBox = MethodOverload()
            .Add([BoundingBox], function (box) {
                let center = new Vector3(
                    (box.Min.X + box.Max.X) / 2.0,
                    (box.Min.Y + box.Max.Y) / 2.0,
                    (box.Min.Z + box.Max.Z) / 2.0
                );

                let radius = Vector3.Distance(center, box.Max);

                return new BoundingSphere(center, radius);
            });

        return BoundingSphere.CreateFromBoundingBox.call(this, ...params);
    };

    static CreateFromFrustum(...params) {
        BoundingSphere.CreateFromFrustum = MethodOverload()
            .Add([BoundingFrustum], function (frustum) {
                return this.CreateFromPoints(frustum.GetCorners());
            });

        return BoundingSphere.CreateFromFrustum.call(this, ...params);
    };

    static CreateFromPoints(...params) {
        BoundingSphere.CreateFromPoints = MethodOverload()
            .Add([Array], function (points) {
                let minx = new Vector3(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
                let maxx = Vector3.Negate(minx);
                let miny = new Vector3(minx.X, minx.Y, minx.Z);
                let maxy = Vector3.Negate(minx);
                let minz = new Vector3(minx.X, minx.Y, minx.Z);
                let maxz = Vector3.Negate(minx);

                let numPoints = 0;
                points.forEach(function (pt) {
                    ++numPoints;

                    if (pt.X < minx.X) {
                        minx = pt;
                    }

                    if (pt.X > maxx.X) {
                        maxx = pt;
                    }

                    if (pt.Y < miny.Y) {
                        miny = pt;
                    }

                    if (pt.Y > maxy.Y) {
                        maxy = pt;
                    }

                    if (pt.Z < minz.Z) {
                        minz = pt;
                    }

                    if (pt.Z > maxz.Z) {
                        maxz = pt;
                    }
                });

                if (numPoints === 0) {
                    throw new Error("应该至少有一个 point 在 points 中。");
                }

                let sqDistX = Vector3.DistanceSquared(maxx, minx);
                let sqDistY = Vector3.DistanceSquared(maxy, miny);
                let sqDistZ = Vector3.DistanceSquared(maxz, minz);

                let min = minx;
                let max = maxx;

                if (sqDistY > sqDistX && sqDistY > sqDistZ) {
                    max = maxy;
                    min = miny;
                }

                if (sqDistZ > sqDistX && sqDistZ > sqDistY) {
                    max = maxz;
                    min = minz;
                }

                let center = Vector3.Multiply(Vector3.Add(min, max), 0.5);
                let radius = Vector3.Distance(max, center);

                let sqRadius = radius * radius;
                points.forEach(function (pt) {
                    let diff = Vector3.Subtract(pt, center);
                    let sqDist = diff.LengthSquared();
                    if (sqDist > sqRadius) {
                        let distance = Math.sqrt(sqDist);
                        let direction = Vector3.Divide(diff, distance);
                        let G = Vector3.Subtract(center, Vector3.Multiply(direction, radius));
                        center = Vector3.Divide(Vector3.Add(G, pt), 2);
                        radius = Vector3.Distance(pt, center);
                        sqRadius = radius * radius;
                    }
                });

                return new BoundingSphere(center, radius);
            });

        return BoundingSphere.CreateFromPoints.call(this, ...params);
    };

    static CreateMerged(...params) {
        BoundingSphere.CreateMerged = MethodOverload()
            .Add([BoundingSphere, BoundingSphere], function (original, additional) {
                let ocenterToaCenter = Vector3.Subtract(additional.Center, original.Center);
                let distance = ocenterToaCenter.Length();

                if (distance <= original.Radius + additional.Radius) {
                    if (distance <= original.Radius - additional.Radius) {
                        return new BoundingSphere(original.Center, original.Radius);
                    }

                    if (distance <= additional.Radius - original.Radius) {
                        return new BoundingSphere(additional.Center, additional.Radius);
                    }
                }

                let leftRadius = Math.max(original.Radius - distance, additional.Radius);
                let Rightradius = Math.max(original.Radius + distance, additional.Radius);
                ocenterToaCenter = Vector3.Add(ocenterToaCenter, Vector3.Multiply(ocenterToaCenter, (((leftRadius - Rightradius) / (2 * ocenterToaCenter.Length())))));

                return new BoundingSphere(
                    Vector3.Add(original.Center, ocenterToaCenter),
                    (leftRadius + Rightradius) / 2
                );
            });

        return BoundingSphere.CreateMerged.call(this, ...params);
    };

    Contains(...params) {
        BoundingSphere.prototype.Contains = MethodOverload()
            .Add([BoundingBox], function (box) {
                let inside = true;
                let corners = box.GetCorners();
                for (var i = 0; i < corners.length; i++) {
                    if (this.Contains(corners[i]) === ContainmentType.Disjoint) {
                        inside = false;
                        break;
                    }
                }

                if (inside) {
                    return ContainmentType.Contains;
                }

                let dmin = 0;

                if (this.Center.X < box.Min.X) {
                    dmin += (this.Center.X - box.Min.X) * (this.Center.X - box.Min.X);
                } else if (this.Center.X > box.Max.X) {
                    dmin += (this.Center.X - box.Max.X) * (this.Center.X - box.Max.X);
                }

                if (this.Center.Y < box.Min.Y) {
                    dmin += (this.Center.Y - box.Min.Y) * (this.Center.Y - box.Min.Y);
                } else if (this.Center.Y > box.Max.Y) {
                    dmin += (this.Center.Y - box.Max.Y) * (this.Center.Y - box.Max.Y);
                }

                if (this.Center.Z < box.Min.Z) {
                    dmin += (this.Center.Z - box.Min.Z) * (this.Center.Z - box.Min.Z);
                } else if (this.Center.Z > box.Max.Z) {
                    dmin += (this.Center.Z - box.Max.Z) * (this.Center.Z - box.Max.Z);
                }

                if (dmin <= this.Radius * this.Radius) {
                    return ContainmentType.Intersects;
                }

                return ContainmentType.Disjoint;
            })
            .Add([BoundingFrustum], function (frustum) {
                let inside = true;

                let corners = frustum.GetCorners();
                for (var i = 0; i < corners.length; i++) {
                    if (this.Contains(corners[i]) === ContainmentType.Disjoint) {
                        inside = false;
                        break;
                    }
                }

                if (inside) {
                    return ContainmentType.Contains;
                }

                let dmin = 0;

                if (dmin <= this.Radius * this.Radius) {
                    return ContainmentType.Intersects;
                }

                return ContainmentType.Disjoint;
            })
            .Add([BoundingSphere], function (sphere) {
                let sqDistance = Vector3.DistanceSquared(sphere.Center, this.Center);

                if (sqDistance > (sphere.Radius + this.Radius) * (sphere.Radius + this.Radius)) {
                    return ContainmentType.Disjoint;
                } else if (sqDistance <= (this.Radius - sphere.Radius) * (this.Radius - sphere.Radius)) {
                    return ContainmentType.Contains;
                } else {
                    return ContainmentType.Intersects;
                }
            })
            .Add([Vector3], function (point) {
                let sqRadius = this.Radius * this.Radius;
                let sqDistance = Vector3.DistanceSquared(point, this.Center);

                if (sqDistance > sqRadius) {
                    return ContainmentType.Disjoint;
                } else if (sqDistance < sqRadius) {
                    return ContainmentType.Contains;
                } else {
                    return ContainmentType.Intersects;
                }
            });

        return BoundingSphere.prototype.Contains.call(this, ...params);
    };

    Equals(...params) {
        BoundingSphere.prototype.Equals = MethodOverload()
            .Add([BoundingSphere], function (other) {
                return this.Center.Equals(other.Center) &&
                    this.Radius === other.Radius;
            })
            .Add([Object], function (obj) {
                return false;
            });

        return BoundingSphere.prototype.Equals.call(this, ...params);
    };

    Intersects(...params) {
        BoundingSphere.prototype.Intersects = MethodOverload()
            .Add([BoundingBox], function (box) {
                return box.Intersects(this);
            })
            .Add([BoundingFrustum], function (frustum) {
                return frustum.Intersects(this);
            })
            .Add([BoundingSphere], function (sphere) {
                let sqDistance = Vector3.DistanceSquared(sphere.Center, this.Center);

                if (sqDistance > (sphere.Radius + this.Radius) * (sphere.Radius + this.Radius)) {
                    return false;
                } else {
                    return true;
                }
            })
            .Add([Plane], function (plane) {
                let distance = Vector3.Dot(plane.Normal, this.Center);
                distance += plane.D;
                if (distance > this.Radius) {
                    return PlaneIntersectionType.Front;
                } else if (distance < -this.Radius) {
                    return PlaneIntersectionType.Back;
                } else {
                    return PlaneIntersectionType.Intersecting;
                }
            })
            .Add([Ray], function (ray) {
                return ray.Intersects(this);
            });

        return BoundingSphere.prototype.Intersects.call(this, ...params);
    };

    ToString(...params) {
        BoundingSphere.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{Center:${this.Center.ToString()} Radius:${this.Radius}}`;
            });

        return BoundingSphere.prototype.ToString.call(this, ...params);
    };

    Transform(...params) {
        BoundingSphere.prototype.Transform = MethodOverload()
            .Add([Matrix], function (matrix) {
                let sphere = new BoundingSphere();
                sphere.Center = Vector3.Transform(this.Center, matrix);
                sphere.Radius = this.Radius * (Math.sqrt(Math.max(((matrix.M11 * matrix.M11) +
                    (matrix.M12 * matrix.M12)) +
                    (matrix.M13 * matrix.M13),
                    Math.max(((matrix.M21 * matrix.M21) +
                        (matrix.M22 * matrix.M22)) +
                        (matrix.M23 * matrix.M23),
                        ((matrix.M31 * matrix.M31) +
                            (matrix.M32 * matrix.M32)) +
                        (matrix.M33 * matrix.M33)))));
                return sphere;
            });

        return BoundingSphere.prototype.Transform.call(this, ...params);
    };
}
