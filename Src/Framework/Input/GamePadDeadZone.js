import Enum from "../../Core/Enum.js";

export default class GamePadDeadZone extends Enum {
    static #none = new GamePadDeadZone(0, "None");

    static #independentAxes = new GamePadDeadZone(1, "IndependentAxes");

    static #circular = new GamePadDeadZone(2, "Circular");

    static get None() {
        return this.#none;
    }

    static get IndependentAxes() {
        return this.#independentAxes;
    }

    static get Circular() {
        return this.#circular;
    }
}
