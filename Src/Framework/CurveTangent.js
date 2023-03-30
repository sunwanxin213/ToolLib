import Enum from "../Core/Enum.js";

export default class CurveTangent extends Enum {
    static #flat = new CurveTangent(0, "Flat");

    static #linear = new CurveTangent(1, "Linear");

    static #smooth = new CurveTangent(2, "Smooth");

    static get Flat() {
        return this.#flat;
    }

    static get Linear() {
        return this.#linear;
    }

    static get Smooth() {
        return this.#smooth;
    }
}
