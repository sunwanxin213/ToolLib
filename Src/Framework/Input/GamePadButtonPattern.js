import Enum from "../../Core/Enum.js";

export default class GamePadButtonPattern extends Enum {
    static #ABYX = new GamePadButtonPattern("ABYX");

    static #playStation = new GamePadButtonPattern("PlayStation");

    static #direction = new GamePadButtonPattern("Direction");

    static get ABYX() {
        return this.#ABYX;
    }

    static get PlayStation() {
        return this.#playStation;
    }

    static get Direction() {
        return this.#direction;
    }
}