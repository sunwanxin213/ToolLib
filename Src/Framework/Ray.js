import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Plane from "./Plane.js";
import BoundingBox from "./BoundingBox.js";
import BoundingFrustum from "./BoundingFrustum.js";
import BoundingSphere from "./BoundingSphere.js";

export default class Ray extends Base {
    #direction = null;

    #position = null;

    static #_constructor = function (...params) {
        Ray.#_constructor = MethodOverload()
            .Add([], function () {
                return Ray.#_constructor.call(this, Vector3.Zero, Vector3.Zero);
            })
            .Add([Vector3, Vector3], function (position, direction) {
                [this.Position, this.Direction] = [position, direction];
            });

        return Ray.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Position: {
                get() {
                    return this.#position;
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.#position = value;
                    })
            },
            Direction: {
                get() {
                    return this.#direction;
                },
                set: MethodOverload()
                    .Add([Vector3], function (value) {
                        this.#direction = value;
                    })
            }
        });

        return Ray.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.Position;
        yield this.Direction;
    };

    Equals(...params) {
        Ray.prototype.Equals = MethodOverload()
            .Add([Ray], function (other) {
                return this.Direction.Equals(other.Direction) &&
                    this.Position.Equals(other.Position);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Ray.prototype.Equals.call(this, ...params);
    };

    Intersects(...params) {
        Ray.prototype.Intersects = MethodOverload()
            .Add([BoundingBox], function (box) {
                let Epsilon = 1e-6;

                let tMin = null;
                let tMax = null;
                let positionX = this.Position.X;
                let positionY = this.Position.Y;
                let positionZ = this.Position.Z;
                let directionX = this.Direction.X;
                let directionY = this.Direction.Y;
                let directionZ = this.Direction.Z;

                if (Math.abs(directionX) < Epsilon) {
                    if (positionX < box.Min.X || positionX > box.Max.X) {
                        return null;
                    }
                } else {
                    tMin = (box.Min.X - positionX) / directionX;
                    tMax = (box.Max.X - positionX) / directionX;

                    if (tMin > tMax) {
                        let temp = tMin;
                        tMin = tMax;
                        tMax = temp;
                    }
                }

                if (Math.abs(directionY) < Epsilon) {
                    if (positionY < box.Min.Y || positionY > box.Max.Y) {
                        return null;
                    }
                } else {
                    let tMinY = (box.Min.Y - positionY) / directionY;
                    let tMaxY = (box.Max.Y - positionY) / directionY;

                    if (tMinY > tMaxY) {
                        let temp = tMinY;
                        tMinY = tMaxY;
                        tMaxY = temp;
                    }

                    if ((tMin !== null && tMin > tMaxY) || (tMax !== null && tMinY > tMax)) {
                        return null;
                    }

                    if (tMin === null || tMinY > tMin) {
                        tMin = tMinY;
                    }

                    if (tMax === null || tMaxY < tMax) {
                        tMax = tMaxY;
                    }
                }

                if (Math.abs(directionZ) < Epsilon) {
                    if (positionZ < box.Min.Z || positionZ > box.Max.Z) {
                        return null;
                    }
                }
                else {
                    let tMinZ = (box.Min.Z - positionZ) / directionZ;
                    let tMaxZ = (box.Max.Z - positionZ) / directionZ;

                    if (tMinZ > tMaxZ) {
                        let temp = tMinZ;
                        tMinZ = tMaxZ;
                        tMaxZ = temp;
                    }

                    if ((tMin !== null && tMin > tMaxZ) || (tMax !== null && tMinZ > tMax)) {
                        return null;
                    }

                    if (tMin === null || tMinZ > tMin) {
                        tMin = tMinZ;
                    }

                    if (tMax === null || tMaxZ < tMax) {
                        tMax = tMaxZ;
                    }
                }

                if ((tMin !== null && tMin < 0) && tMax > 0) {
                    return 0;
                }

                if (tMin < 0) {
                    return null;
                }

                return tMin;
            })
            .Add([BoundingFrustum], function (frustum) {
                return frustum.Intersects(this);
            })
            .Add([BoundingSphere], function (sphere) {
                let difference = Vector3.Subtract(sphere.Center, this.Position);

                let differenceLengthSquared = difference.LengthSquared();
                let sphereRadiusSquared = sphere.Radius * sphere.Radius;

                if (differenceLengthSquared < sphereRadiusSquared) {
                    return 0;
                }

                let distanceAlongRay = Vector3.Dot(this.Direction, difference);

                if (distanceAlongRay < 0) {
                    return null;
                }

                let dist = sphereRadiusSquared + distanceAlongRay * distanceAlongRay - differenceLengthSquared;

                return (dist < 0) ? null : distanceAlongRay - Math.sqrt(dist);
            })
            .Add([Plane], function (plane) {
                let den = Vector3.Dot(this.Direction, plane.Normal);
                if (Math.abs(den) < 0.00001) {
                    return null;
                }

                let result = (-plane.D - Vector3.Dot(plane.Normal, this.Position)) / den;

                if (result < 0.0) {
                    if (result < -0.00001) {
                        return null;
                    }

                    result = 0.0;
                }
                return result;
            });

        return Ray.prototype.Intersects.call(this, ...params);
    };

    ToString(...params) {
        Ray.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{Position:${this.Position.ToString()} Direction:${this.Direction.ToString()}}`;
            });

        return Ray.prototype.ToString.call(this, ...params);
    };
}
