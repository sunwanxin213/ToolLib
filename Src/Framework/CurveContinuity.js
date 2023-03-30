import Enum from "../Core/Enum.js";

export default class CurveContinuity extends Enum {
    static #smooth = new CurveContinuity(0, "Smooth");

    static #step = new CurveContinuity(1, "Step");

    static get Smooth() {
        return this.#smooth;
    }

    static get Step() {
        return this.#step;
    }
}
