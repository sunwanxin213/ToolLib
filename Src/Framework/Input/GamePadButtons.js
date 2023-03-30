import Base from "../../Core/Base.js";
import ButtonState from "./ButtonState.js";
import Buttons from "./Buttons.js";
import MethodOverload from "../../Core/MethodOverload.js";

export default class GamePadButtons extends Base {
    #buttons = 0;

    get _Buttons() {
        return this.#buttons;
    }

    get A() {
        return ((this.#buttons & Buttons.A) == Buttons.A) ? ButtonState.Pressed : ButtonState.Released;
    }

    get B() {
        return ((this.#buttons & Buttons.B) == Buttons.B) ? ButtonState.Pressed : ButtonState.Released;
    }

    get Back() {
        return ((this.#buttons & Buttons.Back) == Buttons.Back) ? ButtonState.Pressed : ButtonState.Released;
    }

    get X() {
        return ((this.#buttons & Buttons.X) == Buttons.X) ? ButtonState.Pressed : ButtonState.Released;
    }

    get Y() {
        return ((this.#buttons & Buttons.Y) == Buttons.Y) ? ButtonState.Pressed : ButtonState.Released;
    }

    get Start() {
        return ((this.#buttons & Buttons.Start) == Buttons.Start) ? ButtonState.Pressed : ButtonState.Released;
    }

    get LeftShoulder() {
        return ((this.#buttons & Buttons.LeftShoulder) == Buttons.LeftShoulder) ? ButtonState.Pressed : ButtonState.Released;
    }

    get LeftStick() {
        return ((this.#buttons & Buttons.LeftStick) == Buttons.LeftStick) ? ButtonState.Pressed : ButtonState.Released;
    }

    get RightShoulder() {
        return ((this.#buttons & Buttons.RightShoulder) == Buttons.RightShoulder) ? ButtonState.Pressed : ButtonState.Released;
    }

    get RightStick() {
        return ((this.#buttons & Buttons.RightStick) == Buttons.RightStick) ? ButtonState.Pressed : ButtonState.Released;
    }

    get BigButton() {
        return ((this.#buttons & Buttons.BigButton) == Buttons.BigButton) ? ButtonState.Pressed : ButtonState.Released;
    }

    get Home() {
        return ((this.#buttons & Buttons.Home) == Buttons.Home) ? ButtonState.Pressed : ButtonState.Released;
    }

    get Share() {
        return ((this.#buttons & Buttons.Share) == Buttons.Share) ? ButtonState.Pressed : ButtonState.Released;
    }

    get LeftSmallShoulderLeft() {
        return ((this.#buttons & Buttons.LeftSmallShoulderLeft) == Buttons.LeftSmallShoulderLeft) ? ButtonState.Pressed : ButtonState.Released;
    }

    get LeftSmallShoulderRight() {
        return ((this.#buttons & Buttons.LeftSmallShoulderRight) == Buttons.LeftSmallShoulderRight) ? ButtonState.Pressed : ButtonState.Released;
    }

    get RightSmallShoulderLeft() {
        return ((this.#buttons & Buttons.RightSmallShoulderLeft) == Buttons.RightSmallShoulderLeft) ? ButtonState.Pressed : ButtonState.Released;
    }

    get RightSmallShoulderRight() {
        return ((this.#buttons & Buttons.RightSmallShoulderRight) == Buttons.RightSmallShoulderRight) ? ButtonState.Pressed : ButtonState.Released;
    }

    get TouchPadButton() {
        return ((this.#buttons & Buttons.TouchPadButton) == Buttons.TouchPadButton) ? ButtonState.Pressed : ButtonState.Released;
    }

    static #_constructor = function (...params) {
        GamePadButtons.#_constructor = MethodOverload()
            .Add([Buttons], function (buttons) {
                this.#buttons = buttons;
            });

        return GamePadButtons.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadButtons.#_constructor.call(this, ...params);
    }
}