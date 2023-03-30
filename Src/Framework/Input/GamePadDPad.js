import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import ButtonState from "./ButtonState.js";

export default class GamePadDPad extends Base {
    #left = null;

    #right = null;

    #up = null;

    #down = null;

    get Left() {
        return this.#left;
    }

    get Right() {
        return this.#right;
    }

    get Up() {
        return this.#up;
    }

    get Down() {
        return this.#down;
    }

    static #_constructor = function (...params) {
        GamePadDPad.#_constructor = MethodOverload()
            .Add([ButtonState, ButtonState, ButtonState, ButtonState], function (upValue, downValue, leftValue, rightValue) {
                this.#left = leftValue;
                this.#right = rightValue;
                this.#up = upValue;
                this.#down = downValue;
            });

        return GamePadDPad.#_constructor.call(this, ...params);
    }

    constructor(...params) {
        super();

        return GamePadDPad.#_constructor.call(this, ...params);
    }
}