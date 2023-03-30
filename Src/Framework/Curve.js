import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import CurveKeyCollection from "./CurveKeyCollection.js";
import CurveLoopType from "./CurveLoopType.js";
import CurveTangent from "./CurveTangent.js";

export default class Curve extends Base {
    #postLoop = null;

    #preLoop = null;

    #keys = null;

    get IsConstant() {
        return this.#keys.length <= 1;
    }

    get Keys() {
        return this.#keys;
    }

    static #_constructor = function (...params) {
        Curve.#_constructor = MethodOverload()
            .Add([], function () {
                this.#postLoop = CurveLoopType.Constant;
                this.#preLoop = CurveLoopType.Constant;
                this.#keys = new CurveKeyCollection();
            });

        return Curve.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            PostLoop: {
                get() {
                    return this.#postLoop;
                },
                set: MethodOverload()
                    .Add([CurveLoopType], function (value) {
                        this.#postLoop = value;
                    })
            },
            PreLoop: {
                get() {
                    return this.#preLoop;
                },
                set: MethodOverload()
                    .Add([CurveLoopType], function (value) {
                        this.#preLoop = value;
                    })
            }
        });

        return Curve.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.PostLoop;
        yield this.PreLoop;
    };

    #GetNumberOfCycle = function (position) {
        let cycle = (position - this.Keys[0].Position) / (this.Keys[this.Keys.length - 1].Position - this.Keys[0].Position);
        if (cycle < 0) {
            cycle--;
        }
        return parseInt(cycle);
    };

    #GetCurvePosition = function (position) {
        let prev = this.Keys[0];
        let next;
        for (let i = 1; i < this.Keys.length; ++i) {
            next = this.Keys[i];
            if (next.Position >= position) {
                if (prev.Continuity == CurveContinuity.Step) {
                    if (position >= 1) {
                        return next.Value;
                    }
                    return prev.Value;
                }
                let t = (position - prev.Position) / (next.Position - prev.Position);
                let ts = t * t;
                let tss = ts * t;
                return (2 * tss - 3 * ts + 1) * prev.Value + (tss - 2 * ts + t) * prev.TangentOut + (3 * ts - 2 * tss) * next.Value + (tss - ts) * next.TangentIn;
            }
            prev = next;
        }
        return 0;
    };

    Clone(...params) {
        Curve.prototype.Clone = MethodOverload()
            .Add([], function () {
                let curve = new Curve();

                curve.#keys = this.#keys.Clone();
                curve.#preLoop = this.#preLoop;
                curve.#postLoop = this.#postLoop;

                return curve;
            });

        return Curve.prototype.Clone.call(this, ...params);
    };

    ComputeTangent(...params) {
        Curve.prototype.ComputeTangent = MethodOverload()
            .Add([Number, CurveLoopType], function (keyIndex, tangentType) {
                this.ComputeTangent(keyIndex, tangentType, tangentType);
            })
            .Add([Number, CurveLoopType, CurveLoopType], function (keyIndex, tangentInType, tangentOutType) {
                let key = this.#keys[keyIndex];

                let p0, p, p1;
                p0 = p = p1 = key.Position;

                let v0, v, v1;
                v0 = v = v1 = key.Value;

                if (keyIndex > 0) {
                    p0 = this.#keys[keyIndex - 1].Position;
                    v0 = this.#keys[keyIndex - 1].Value;
                }

                let keyLength = this.#keys.length;
                if (keyIndex < keyLength - 1) {
                    p1 = this.#keys[keyIndex + 1].Position;
                    v1 = this.#keys[keyIndex + 1].Value;
                }

                switch (tangentInType) {
                    case CurveTangent.Flat:
                        key.TangentIn = 0;
                        break;
                    case CurveTangent.Linear:
                        key.TangentIn = v - v0;
                        break;
                    case CurveTangent.Smooth:
                        let pn = p1 - p0;
                        if (Math.abs(pn) < Number.EPSILON) {
                            key.TangentIn = 0;
                        } else {
                            key.TangentIn = (v1 - v0) * ((p - p0) / pn);
                        }
                        break;
                }

                switch (tangentOutType) {
                    case CurveTangent.Flat:
                        key.TangentOut = 0;
                        break;
                    case CurveTangent.Linear:
                        key.TangentOut = v1 - v;
                        break;
                    case CurveTangent.Smooth:
                        let pn = p1 - p0;
                        if (Math.abs(pn) < Number.EPSILON) {
                            key.TangentOut = 0;
                        } else {
                            key.TangentOut = (v1 - v0) * ((p1 - p) / pn);
                        }
                        break;
                }
            });

        return Curve.prototype.ComputeTangent.call(this, ...params);
    };

    ComputeTangents(...params) {
        Curve.prototype.ComputeTangents = MethodOverload()
            .Add([CurveLoopType], function (tangentType) {
                this.ComputeTangents(tangentType, tangentType);
            })
            .Add([CurveLoopType, CurveLoopType], function (tangentInType, tangentOutType) {
                for (let i = 0; i < this.Keys.length; ++i) {
                    this.ComputeTangent(i, tangentInType, tangentOutType);
                }
            });

        return Curve.prototype.ComputeTangents.call(this, ...params);
    };

    Evaluate(...params) {
        Curve.prototype.Evaluate = MethodOverload()
            .Add([Number], function (position) {
                if (this.Keys.length === 0) {
                    return 0;
                }

                if (this.Keys.length === 1) {
                    return this.Keys[0].Value;
                }

                let first = this.Keys[0];
                let last = this.Keys[this.Keys.length - 1];

                if (position < first.Position) {
                    switch (this.PreLoop) {
                        case CurveLoopType.Constant:
                            return first.Value;

                        case CurveLoopType.Linear:
                            return first.Value - first.TangentIn * (first.Position - position);

                        case CurveLoopType.Cycle:
                            let cycle = this.#GetNumberOfCycle(position);
                            let virtualPos = position - (cycle * (last.Position - first.Position));
                            return this.#GetCurvePosition(virtualPos);

                        case CurveLoopType.CycleOffset:
                            cycle = this.#GetNumberOfCycle(position);
                            virtualPos = position - (cycle * (last.Position - first.Position));
                            return (this.#GetCurvePosition(virtualPos) + cycle * (last.Value - first.Value));

                        case CurveLoopType.Oscillate:
                            cycle = this.#GetNumberOfCycle(position);
                            if (0 == cycle % 2) {
                                virtualPos = position - (cycle * (last.Position - first.Position));
                            } else {
                                virtualPos = last.Position - position + first.Position + (cycle * (last.Position - first.Position));
                            }
                            return this.#GetCurvePosition(virtualPos);
                    }
                } else if (position > last.Position) {
                    let cycle;
                    switch (this.PostLoop) {
                        case CurveLoopType.Constant:
                            return last.Value;

                        case CurveLoopType.Linear:
                            return last.Value + first.TangentOut * (position - last.Position);

                        case CurveLoopType.Cycle:
                            cycle = this.#GetNumberOfCycle(position);
                            let virtualPos = position - (cycle * (last.Position - first.Position));
                            return this.#GetCurvePosition(virtualPos);

                        case CurveLoopType.CycleOffset:
                            cycle = this.#GetNumberOfCycle(position);
                            virtualPos = position - (cycle * (last.Position - first.Position));
                            return (this.#GetCurvePosition(virtualPos) + cycle * (last.Value - first.Value));

                        case CurveLoopType.Oscillate:
                            cycle = this.#GetNumberOfCycle(position);
                            virtualPos = position - (cycle * (last.Position - first.Position));
                            if (0 == cycle % 2) {
                                virtualPos = position - (cycle * (last.Position - first.Position));
                            } else {
                                virtualPos = last.Position - position + first.Position + (cycle * (last.Position - first.Position));
                            }
                            return this.#GetCurvePosition(virtualPos);
                    }
                }

                return this.#GetCurvePosition(position);
            });

        return Curve.prototype.Evaluate.call(this, ...params);
    };
}
