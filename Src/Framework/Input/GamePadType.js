import Enum from "../../Core/Enum.js";

export default class GamePadType extends Enum {
    static #alternateGuitar = new GamePadType();

    static #arcadeStick = new GamePadType(3, "ArcadeStick");

    static #bigButtonPad = new GamePadType(768, "BigButtonPad");

    static #dancePad = new GamePadType(5, "DancePad");

    static #drumKit = new GamePadType(7, "DrumKit");

    static #flightStick = new GamePadType(4, "FlightStick");

    static #gamePad = new GamePadType(1, "GamePad");

    static #guitar = new GamePadType(6, "Guitar");

    static #unknown = new GamePadType(0, "Unknown");

    static #wheel = new GamePadType(2, "Wheel");

    static get AlternateGuitar() {
        return this.#alternateGuitar;
    }

    static get ArcadeStick() {
        return this.#arcadeStick;
    }

    static get BigButtonPad() {
        return this.#bigButtonPad;
    }

    static get DancePad() {
        return this.#dancePad;
    }

    static get DrumKit() {
        return this.#drumKit;
    }

    static get FlightStick() {
        return this.#flightStick;
    }

    static get GamePad() {
        return this.#gamePad;
    }

    static get Guitar() {
        return this.#guitar;
    }

    static get Unknown() {
        return this.#unknown;
    }

    static get Wheel() {
        return this.#wheel;
    }
}