import Base from "../../Core/Base.js";
import GamePadType from "./GamePadType.js";
import MethodOverload from "../../Core/MethodOverload.js";

export default class GamePadCapabilities extends Base {
    #isConnected = false;

    #hasHomeButton = false;

    #hasShareButton = false;

    #hasTouchPad = false;

    #hasTouchPadButton = false;

    #hasLeftSmallShoulderLeft = false;

    #hasRightSmallShoulderLeft = false;

    #hasLeftSmallShoulderRight = false;

    #hasRightSmallShoulderRight = false;

    #hasAButton = false;

    #hasBackButton = false;

    #hasBButton = false;

    #hasDPadDownButton = false;

    #hasDPadLeftButton = false;

    #hasDPadRightButton = false;

    #hasDPadUpButton = false;

    #hasLeftStickButton = false;

    #hasRightShoulderButton = false;

    #hasRightStickButton = false;

    #hasStartButton = false;

    #hasXButton = false;

    #hasYButton = false;

    #hasBigButton = false;

    #hasLeftXThumbStick = false;

    #hasLeftYThumbStick = false;

    #hasRightXThumbStick = false;

    #hasRightYThumbStick = false;

    #hasLeftTrigger = false;

    #hasRightTrigger = false;

    #hasLeftVibrationMotor = false;

    #hasRightVibrationMotor = false;

    #hasVoiceSupport = false;

    #gamePadType = GamePadType.Unknown;

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            IsConnected: {
                get() {
                    return this.#isConnected;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#isConnected = value;
                    })
            },
            HasHomeButton: {
                get() {
                    return this.#hasHomeButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasHomeButton = value;
                    })
            },
            HasShareButton: {
                get() {
                    return this.#hasShareButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasShareButton = value;
                    })
            },
            HasLeftSmallShoulderLeft: {
                get() {
                    return this.#hasLeftSmallShoulderLeft;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftSmallShoulderLeft = value;
                    })
            },
            HasRightSmallShoulderLeft: {
                get() {
                    return this.#hasRightSmallShoulderLeft;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightSmallShoulderLeft = value;
                    })
            },
            HasLeftSmallShoulderRight: {
                get() {
                    return this.#hasLeftSmallShoulderRight;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftSmallShoulderRight = value;
                    })
            },
            HasRightSmallShoulderRight: {
                get() {
                    return this.#hasRightSmallShoulderRight;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightSmallShoulderRight = value;
                    })
            },
            HasTouchPad: {
                get() {
                    return this.#hasTouchPad;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasTouchPad = value;
                    })
            },
            HasTouchPadButton: {
                get() {
                    return this.#hasTouchPadButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasTouchPadButton = value;
                    })
            },
            HasAButton: {
                get() {
                    return this.#hasAButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasAButton = value;
                    })
            },
            HasBackButton: {
                get() {
                    return this.#hasBackButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasBackButton = value;
                    })
            },
            HasBButton: {
                get() {
                    return this.#hasBButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasBButton = value;
                    })
            },
            HasDPadDownButton: {
                get() {
                    return this.#hasDPadDownButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasDPadDownButton = value;
                    })
            },
            HasDPadLeftButton: {
                get() {
                    return this.#hasDPadLeftButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasDPadLeftButton = value;
                    })
            },
            HasDPadRightButton: {
                get() {
                    return this.#hasDPadRightButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasDPadRightButton = value;
                    })
            },
            HasDPadUpButton: {
                get() {
                    return this.#hasDPadUpButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasDPadUpButton = value;
                    })
            },
            HasLeftStickButton: {
                get() {
                    return this.#hasLeftStickButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftStickButton = value;
                    })
            },
            HasRightShoulderButton: {
                get() {
                    return this.#hasRightShoulderButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightShoulderButton = value;
                    })
            },
            HasRightStickButton: {
                get() {
                    return this.#hasRightStickButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightStickButton = value;
                    })
            },
            HasStartButton: {
                get() {
                    return this.#hasStartButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasStartButton = value;
                    })
            },
            HasXButton: {
                get() {
                    return this.#hasXButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasXButton = value;
                    })
            },
            HasYButton: {
                get() {
                    return this.#hasYButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasYButton = value;
                    })
            },
            HasBigButton: {
                get() {
                    return this.#hasBigButton;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasBigButton = value;
                    })
            },
            HasLeftXThumbStick: {
                get() {
                    return this.#hasLeftXThumbStick;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftXThumbStick = value;
                    })
            },
            HasLeftYThumbStick: {
                get() {
                    return this.#hasLeftYThumbStick;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftYThumbStick = value;
                    })
            },
            HasRightXThumbStick: {
                get() {
                    return this.#hasRightXThumbStick;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightXThumbStick = value;
                    })
            },
            HasRightYThumbStick: {
                get() {
                    return this.#hasRightYThumbStick;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightYThumbStick = value;
                    })
            },
            HasLeftTrigger: {
                get() {
                    return this.#hasLeftTrigger;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftTrigger = value;
                    })
            },
            HasRightTrigger: {
                get() {
                    return this.#hasRightTrigger;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightTrigger = value;
                    })
            },
            HasLeftVibrationMotor: {
                get() {
                    return this.#hasLeftVibrationMotor;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasLeftVibrationMotor = value;
                    })
            },
            HasRightVibrationMotor: {
                get() {
                    return this.#hasRightVibrationMotor;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasRightVibrationMotor = value;
                    })
            },
            HasVoiceSupport: {
                get() {
                    return this.#hasVoiceSupport;
                },
                set: MethodOverload()
                    .Add([Boolean], function (value) {
                        this.#hasVoiceSupport = value;
                    })
            },
            GamePadType: {
                get() {
                    return this.#gamePadType;
                },
                set: MethodOverload()
                    .Add([GamePadType], function (value) {
                        this.#gamePadType = value;
                    })
            }
        });
    }

    ToString(...params) {
        GamePadCapabilities.prototype.ToString = MethodOverload()
            .Add([], function () {
                return "[GamePadCapabilities: IsConnected=" + this.IsConnected +
                    ", HasAButton=" + this.HasAButton +
                    ", HasBackButton=" + this.HasBackButton +
                    ", HasBButton=" + this.HasBButton +
                    ", HasDPadDownButton=" + this.HasDPadDownButton +
                    ", HasDPadLeftButton=" + this.HasDPadLeftButton +
                    ", HasDPadRightButton=" + this.HasDPadRightButton +
                    ", HasDPadUpButton=" + this.HasDPadUpButton +
                    ", HasLeftShoulderButton=" + this.HasLeftShoulderButton +
                    ", HasLeftStickButton=" + this.HasLeftStickButton +
                    ", HasRightShoulderButton=" + this.HasRightShoulderButton +
                    ", HasRightStickButton=" + this.HasRightStickButton +
                    ", HasStartButton=" + this.HasStartButton +
                    ", HasXButton=" + this.HasXButton +
                    ", HasYButton=" + this.HasYButton +
                    ", HasBigButton=" + this.HasBigButton +
                    ", HasHomeButton=" + this.HasHomeButton +
                    ", HasShareButton=" + this.HasShareButton +
                    ", HasLeftSmallShoulderLeft=" + this.HasLeftSmallShoulderLeft +
                    ", HasLeftSmallShoulderRight=" + this.HasLeftSmallShoulderRight +
                    ", HasRightSmallShoulderLeft=" + this.HasRightSmallShoulderLeft +
                    ", HasRightSmallShoulderRight=" + this.HasRightSmallShoulderRight +
                    ", HasTouchPad=" + this.HasTouchPad +
                    ", HasTouchPadButton=" + this.HasTouchPadButton +
                    ", HasLeftXThumbStick=" + this.HasLeftXThumbStick +
                    ", HasLeftYThumbStick=" + this.HasLeftYThumbStick +
                    ", HasRightXThumbStick=" + this.HasRightXThumbStick +
                    ", HasRightYThumbStick=" + this.HasRightYThumbStick +
                    ", HasLeftTrigger=" + this.HasLeftTrigger +
                    ", HasRightTrigger=" + this.HasRightTrigger +
                    ", HasLeftVibrationMotor=" + this.HasLeftVibrationMotor +
                    ", HasRightVibrationMotor=" + this.HasRightVibrationMotor +
                    ", HasVoiceSupport=" + this.HasVoiceSupport +
                    ", GamePadType=" + this.GamePadType +
                    "]";
            });

        return GamePadCapabilities.prototype.ToString.call(this, ...params);
    }
}