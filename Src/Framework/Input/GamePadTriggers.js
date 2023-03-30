import Base from "../../Core/Base.js";
import MathHelper from "../MathHelper.js";
import MethodOverload from "../../Core/MethodOverload.js";

export default class GamePadTriggers extends Base {
    #left = 0;

    #right = 0;

    get Left() {
        return this.#left;
    }

    get Right() {
        return this.#right;
    }

    static #_constructor = function (...params) {
        GamePadTriggers.#_constructor = MethodOverload()
            .Add([Number, Number], function (leftTrigger, rightTrigger) {
                this.#left = MathHelper.Clamp(leftTrigger, 0, 1);
                this.#right = MathHelper.Clamp(rightTrigger, 0, 1);
            });

        return GamePadTriggers.#_constructor.call(this, ...params);
    }

    constructor(...params) {
        super();

        return GamePadTriggers.#_constructor.call(this, ...params);
    }

    ToString(...params) {
        GamePadTriggers.prototype.ToString = MethodOverload()
            .Add([], function () {
                return "[GamePadTriggers: Left=" + this.Left + ", Right=" + this.Right + "]";
            });

        return GamePadTriggers.prototype.ToString.call(this, ...params);
    }
}