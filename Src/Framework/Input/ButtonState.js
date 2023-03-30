import Enum from "../../Core/Enum.js";

export default class ButtonState extends Enum {
    static #released = new ButtonState(0, "Released");

    static #pressed = new ButtonState(1, "Pressed");

    static get Released() {
        return this.#released;
    }

    static get Pressed() {
        return this.#pressed;
    }
}
