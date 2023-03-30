import Enum from "../../Core/Enum.js";

export default class Buttons extends Enum {
    static #none = new Buttons(0, "None");

    static #dPadUp = new Buttons(1, "DPadUp");

    static #dPadDown = new Buttons(2, "DPadDown");

    static #dPadLeft = new Buttons(4, "DPadLeft");

    static #dPadRight = new Buttons(8, "DPadRight");

    static #start = new Buttons(16, "Start");

    static #back = new Buttons(32, "Back");

    static #leftStick = new Buttons(64, "LeftStick");

    static #rightStick = new Buttons(128, "RightStick");

    static #leftShoulder = new Buttons(256, "LeftShoulder");

    static #rightShoulder = new Buttons(512, "RightShoulder");

    static #bigButtons = new Buttons(2048, "BigButtons");

    static #a = new Buttons(4096, "A");

    static #b = new Buttons(8192, "B");

    static #x = new Buttons(16384, "X");

    static #y = new Buttons(32768, "Y");

    static #leftThumbstickLeft = new Buttons(2097152, "LeftThumbstickLeft");

    static #rightTrigger = new Buttons(4194304, "RightTrigger");

    static #leftTrigger = new Buttons(8388608, "LeftTrigger");

    static #rightThumbstickUp = new Buttons(16777216, "RightThumbstickUp");

    static #rightThumbstickDown = new Buttons(33554432, "RightThumbstickDown");

    static #rightThumbstickRight = new Buttons(67108864, "RightThumbstickRight");

    static #rightThumbstickLeft = new Buttons(134217728, "RightThumbstickLeft");

    static #leftThumbstickUp = new Buttons(268435456, "LeftThumbstickUp");

    static #leftThumbstickDown = new Buttons(536870912, "LeftThumbstickDown");

    static #leftThumbstickRight = new Buttons(1073741824, "LeftThumbstickRight");

    static #home = new Buttons(2147483648, "Home");

    static #share = new Buttons(4294967296, "Share");

    static #leftSmallShoulderLeft = new Buttons(8589934592, "LeftSmallShoulderLeft");

    static #rightSmallShoulderLeft = new Buttons(17179869184, "RightSmallShoulderLeft");

    static #leftSmallShoulderRight = new Buttons(34359738368, "LeftSmallShoulderRight");

    static #rightSmallShoulderRight = new Buttons(68719476736, "RightSmallShoulderRight");

    static #touchPadButtons = new Buttons(137438953472, "TouchPadButtons");

    static get None() {
        return this.#none;
    }

    static get DPadUp() {
        return this.#dPadUp;
    }

    static get DPadDown() {
        return this.#dPadDown;
    }

    static get DPadLeft() {
        return this.#dPadLeft;
    }

    static get DPadRight() {
        return this.#dPadRight;
    }

    static get Start() {
        return this.#start;
    }

    static get Back() {
        return this.#back;
    }

    static get LeftStick() {
        return this.#leftStick;
    }

    static get RightStick() {
        return this.#rightStick;
    }

    static get LeftShoulder() {
        return this.#leftShoulder;
    }

    static get RightShoulder() {
        return this.#rightShoulder;
    }

    static get BigButtons() {
        return this.#bigButtons;
    }

    static get A() {
        return this.#a;
    }

    static get B() {
        return this.#b;
    }

    static get X() {
        return this.#x;
    }

    static get Y() {
        return this.#y;
    }

    static get LeftThumbstickLeft() {
        return this.#leftThumbstickLeft;
    }

    static get RightTrigger() {
        return this.#rightTrigger;
    }

    static get LeftTrigger() {
        return this.#leftTrigger;
    }

    static get RightThumbstickUp() {
        return this.#rightThumbstickUp;
    }

    static get RightThumbstickDown() {
        return this.#rightThumbstickDown;
    }

    static get RightThumbstickRight() {
        return this.#rightThumbstickRight;
    }

    static get RightThumbstickLeft() {
        return this.#rightThumbstickLeft;
    }

    static get LeftThumbstickUp() {
        return this.#leftThumbstickUp;
    }

    static get LeftThumbstickDown() {
        return this.#leftThumbstickDown;
    }

    static get LeftThumbstickRight() {
        return this.#leftThumbstickRight;
    }

    static get Home() {
        return this.#home;
    }

    static get Share() {
        return this.#share;
    }

    static get LeftSmallShoulderLeft() {
        return this.#leftSmallShoulderLeft;
    }

    static get RightSmallShoulderLeft() {
        return this.#rightSmallShoulderLeft;
    }

    static get LeftSmallShoulderRight() {
        return this.#leftSmallShoulderRight;
    }

    static get RightSmallShoulderRight() {
        return this.#rightSmallShoulderRight;
    }

    static get TouchPadButtons() {
        return this.#touchPadButtons;
    }
}
