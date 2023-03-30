import Base from "../../Core/Base.js";
import GamePadDeadZone from "./GamePadDeadZone.js";
import MethodOverload from "../../Core/MethodOverload.js";
import Vector2 from "../Vector2.js";
import Buttons from "./Buttons.js";
import MathHelper from "../MathHelper.js";
import ArgumentException from "../../Exception/ArgumentException.js";
import Exception from "../../Exception/Exception.js";

let leftThumbDeadZone = 0.24;
let rightThumbDeadZone = 0.24;

export default class GamePadThumbSticks extends Base {
    #_virtualButtons = null;

    #_left = null;

    #_right = null;

    get _VirtualButtons() {
        return this.#_virtualButtons;
    }

    get Left() {
        return this.#_left;
    }

    get Right() {
        return this.#_right;
    }

    static #_constructor = function (...params) {
        GamePadThumbSticks.#_constructor = MethodOverload()
            .Add([Vector2, Vector2], function (leftPosition, rightPosition) {
                return GamePadThumbSticks.#_constructor.call(this, leftPosition, rightPosition, GamePadDeadZone.None, GamePadDeadZone.None);
            })
            .Add([Vector2, Vector2, GamePadDeadZone, GamePadDeadZone], function (leftPosition, rightPosition, leftDeadZoneMode, rightDeadZoneMode) {
                this.#_left = this.#ApplyDeadZone(leftDeadZoneMode, leftThumbDeadZone, leftPosition);
                this.#_right = this.#ApplyDeadZone(rightDeadZoneMode, rightThumbDeadZone, rightPosition);

                this.#_virtualButtons = 0;

                if (leftPosition.X < -leftThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.LeftThumbstickLeft;
                } else if (leftPosition.X > leftThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.LeftThumbstickRight;
                }

                if (leftPosition.Y < -leftThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.LeftThumbstickUp;
                } else if (leftPosition.Y > leftThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.LeftThumbstickDown;
                }

                if (rightPosition.X < -rightThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.RightThumbstickLeft;
                } else if (rightPosition.X > rightThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.RightThumbstickRight;
                }

                if (rightPosition.Y < -rightThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.RightThumbstickUp;
                } else if (rightPosition.Y > rightThumbDeadZone) {
                    this.#_virtualButtons |= Buttons.RightThumbstickDown;
                }
            });

        return GamePadThumbSticks.#_constructor.call(this, ...params);
    }

    constructor(...params) {
        super();

        return GamePadThumbSticks.#_constructor.call(this, ...params);
    }

    static SetDeadZone(...params) {
        GamePadThumbSticks.SetDeadZone = MethodOverload()
            .Add([Number, Number], function (leftDeadZone, rightDeadZone) {
                if (leftDeadZone < 0 || leftDeadZone > 1) {
                    throw new ArgumentException(Exception.GetResourceString("ArgumentOutOfRange_Bounds_Lower_Upper", "0.0", "1.0"), "leftDeadZone");
                }

                if (rightDeadZone < 0 || rightDeadZone > 1) {
                    throw new ArgumentException(Exception.GetResourceString("ArgumentOutOfRange_Bounds_Lower_Upper", "0.0", "1.0"), "rightDeadZone");
                }

                leftThumbDeadZone = leftDeadZone;
                rightThumbDeadZone = rightDeadZone;
            });

        return GamePadThumbSticks.SetDeadZone.call(this, ...params);
    }

    #ApplyDeadZone = function (deadZoneMode, deadZone, thumbstickPosition) {
        let a = thumbstickPosition;
        switch (deadZoneMode) {
            case GamePadDeadZone.None:
                break;
            case GamePadDeadZone.IndependentAxes:
                thumbstickPosition = this.#ExcludeIndependentAxesDeadZone(thumbstickPosition, deadZone);
                break;
            case GamePadDeadZone.Circular:
                thumbstickPosition = this.#ExcludeCircularDeadZone(thumbstickPosition, deadZone);
                break;
        }

        if (deadZoneMode == GamePadDeadZone.Circular) {
            if (thumbstickPosition.LengthSquared() > 1) {
                thumbstickPosition.Normalize();
            }
        } else {
            thumbstickPosition = new Vector2(MathHelper.Clamp(thumbstickPosition.X, -1, 1), MathHelper.Clamp(thumbstickPosition.Y, -1, 1));
        }

        return thumbstickPosition;
    }

    #ExcludeIndependentAxesDeadZone = function (value, deadZone) {
        return new Vector2(this.#ExcludeAxisDeadZone(value.X, deadZone), this.#ExcludeAxisDeadZone(value.Y, deadZone));
    }

    #ExcludeAxisDeadZone = function (value, deadZone) {
        if (value < -deadZone) {
            value += deadZone;
        } else if (value > deadZone) {
            value -= deadZone;
        } else {
            return 0;
        }

        return value / (1 - deadZone);
    }

    #ExcludeCircularDeadZone = function (value, deadZone) {
        let originalLength = value.Length();
        if (originalLength <= deadZone) {
            return Vector2.Zero;
        }

        let newLength = (originalLength - deadZone) / (1 - deadZone);
        return Vector2.Multiply(value, (newLength / originalLength));
    }

    ToString(...params) {
        GamePadThumbSticks.prototype.ToString = MethodOverload()
            .Add([], function () {
                return "[GamePadThumbSticks: Left=" + this.Left.ToString() + ", Right=" + this.Right.ToString() + "]";
            });

        return GamePadThumbSticks.prototype.ToString.call(this, ...params);
    }
}