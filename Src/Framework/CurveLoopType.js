import Enum from "../Core/Enum.js";

export default class CurveLoopType extends Enum {
    static #constant = new CurveLoopType(0, "Constant");

    static #cycle = new CurveLoopType(1, "Cycle");

    static #cycleOffset = new CurveLoopType(2, "CycleOffset");

    static #oscillate = new CurveLoopType(3, "Oscillate");

    static #linear = new CurveLoopType(4, "Linear");

    static get Constant() {
        return this.#constant;
    }

    static get Cycle() {
        return this.#cycle;
    }

    static get CycleOffset() {
        return this.#cycleOffset;
    }

    static get Oscillate() {
        return this.#oscillate;
    }

    static get Linear() {
        return this.#linear;
    }
}
