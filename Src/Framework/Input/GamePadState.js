import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import Vector2 from "../Vector2.js";
import Collection from "../../System/Collections/ObjectModel/Collection.js";
import Buttons from "./Buttons.js";
import GamePadThumbSticks from "./GamePadThumbSticks.js";
import GamePadTriggers from "./GamePadTriggers.js";
import GamePadButtons from "./GamePadButtons.js";
import GamePadDPad from "./GamePadDPad.js";
import ButtonState from "./ButtonState.js";

export default class GamePadState extends Base {
    #buttons = null;

    #dPad = null;

    #isConnected = false;

    #packetNumber = 0;

    #thumbSticks = null;

    #triggers = null;

    static #_constructor = function (...params) {
        GamePadState.#_constructor = MethodOverload()
            .Add([Vector2, Vector2, Number, Number, Collection.T(Buttons)], function (leftThumbStick, rightThumbStick, leftTrigger, rightTrigger, buttons) {
                return GamePadState.#_constructor.call(this,
                    new GamePadThumbSticks(leftThumbStick, rightThumbStick),
                    new GamePadTriggers(leftTrigger, rightTrigger),
                    new GamePadButtons(buttons),
                    new GamePadDPad(buttons)
                );
            })
            .Add([GamePadThumbSticks, GamePadTriggers, GamePadButtons, GamePadDPad], function (thumbSticks, triggers, buttons, dPad) {
                this.ThumbSticks = thumbSticks;
                this.Triggers = triggers;
                this.Buttons = buttons;
                this.DPad = dPad;
                this.IsConnected = true;
            });

        return GamePadState.#_constructor.call(this, ...params);
    }

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            Buttons: {
                get() {
                    return this.#buttons;
                },
                set: MethodOverload()
                    .Add([GamePadButtons], function (value) {
                        this.#buttons = value;
                    })
            },
            DPad: {
                get() {
                    return this.#dPad;
                },
                set: MethodOverload()
                    .Add([GamePadDPad], function (value) {
                        this.#dPad = value;
                    })
            },
            IsConnected: {
                get() {
                    return this.#isConnected;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#isConnected = value;
                    })
            },
            PacketNumber: {
                get() {
                    return this.#packetNumber;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#packetNumber = value;
                    })
            },
            ThumbSticks: {
                get() {
                    return this.#thumbSticks;
                },
                set: MethodOverload()
                    .Add([GamePadThumbSticks], function (value) {
                        this.#thumbSticks = value;
                    })
            },
            Triggers: {
                get() {
                    return this.#triggers;
                },
                set: MethodOverload()
                    .Add([GamePadTriggers], function (value) {
                        this.#triggers = value;
                    })
            }
        });

        return GamePadState.#_constructor.call(this, ...params);
    }

    #GetVirtualButtons = function () {
        let result = this.Buttons._Buttons;

        result |= this.ThumbSticks._VirtualButtons;

        if (this.DPad.Down == ButtonState.Pressed) result |= Buttons.DPadDown;
        if (this.DPad.Up == ButtonState.Pressed) result |= Buttons.DPadUp;
        if (this.DPad.Left == ButtonState.Pressed) result |= Buttons.DPadLeft;
        if (this.DPad.Right == ButtonState.Pressed) result |= Buttons.DPadRight;

        return result;
    }

    IsButtonDown(...params) {
        GamePadState.prototype.IsButtonDown = MethodOverload()
            .Add([Buttons], function (button) {
                return (this.#GetVirtualButtons() & button) == button;
            });

        return GamePadState.prototype.IsButtonDown.call(this, ...params);
    }

    IsButtonUp(...params) {
        GamePadState.prototype.IsButtonUp = MethodOverload()
            .Add([Buttons], function (button) {
                return (this.#GetVirtualButtons() & button) != button;
            });

        return GamePadState.prototype.IsButtonUp.call(this, ...params);
    }
}