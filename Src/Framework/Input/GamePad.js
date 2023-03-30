import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import MathHelper from "../MathHelper.js";
import PlayerIndex from "../PlayerIndex.js";
import Vector2 from "../Vector2.js";
import Buttons from "./Buttons.js";
import ButtonState from "./ButtonState.js";
import GamePadButtons from "./GamePadButtons.js";
import GamePadCapabilities from "./GamePadCapabilities.js";
import GamePadDeadZone from "./GamePadDeadZone.js";
import GamePadDPad from "./GamePadDPad.js";
import GamePadRecognize from "./GamePadRecognize.js";
import GamePadState from "./GamePadState.js";
import GamePadThumbSticks from "./GamePadThumbSticks.js";
import GamePadTriggers from "./GamePadTriggers.js";

export default class GamePad extends Base {
    static #gamePads = [];

    static #updateGamePadsTimer;

    static #GetInfoFromPlayerIndex = function (playerIndex) {
        for (let i = 0; i < this.#gamePads.length; i++) {
            if (this.#gamePads[i].playerIndex == playerIndex) {
                return this.#gamePads[i];
            }
        }
    }

    static #GamePadConnected = function (e) {
        console.dir(e);
        let gamePadRecognize = new GamePadRecognize(e.gamepad);
        let gamePadCapabilities = new GamePadCapabilities();
        let checkTable = [
            ["HasAButton", "A"],
            ["HasBButton", "B"],
            ["HasYButton", "Y"],
            ["HasXButton", "X"],
            ["HasHomeButton", "Home"],
            ["HasShareButton", "Share"],
            ["HasLeftSmallShoulderLeft", "LeftSmallShoulderLeft"],
            ["HasRightSmallShoulderLeft", "RightSmallShoulderLeft"],
            ["HasLeftSmallShoulderRight", "LeftSmallShoulderRight"],
            ["HasRightSmallShoulderRight", "RightSmallShoulderRight"],
            ["HasTouchPad", "TouchPadButton"],
            ["HasTouchPadButton", "TouchPadButton"],
            ["HasBackButton", "Back"],
            ["HasBigButton", "BigButton"],
            ["HasDPadDownButton", "DPadDown"],
            ["HasDPadUpButton", "DPadUp"],
            ["HasDPadLeftButton", "DPadLeft"],
            ["HasDPadRightButton", "DPadRight"],
            ["HasLeftShoulderButton", "LeftShoulder"],
            ["HasRightShoulderButton", "RightShoulder"],
            ["HasLeftStickButton", "LeftStick"],
            ["HasRightStickButton", "RightStick"],
            ["HasLeftTrigger", "LeftTrigger"],
            ["HasRightTrigger", "RightTrigger"],
            ["HasStartButton", "Start"]
        ]
        gamePadCapabilities.IsConnected = true;
        gamePadCapabilities.GamePadType = gamePadRecognize.Type;
        checkTable.forEach(v => {
            gamePadCapabilities[v[0]] = gamePadRecognize.Mapping[v[1]] >= 0;
        });

        if (e.gamepad.vibrationActuator) {
            if (e.gamepad.vibrationActuator.type === "dual-rumble" || e.gamepad.vibrationActuator.length >= 2) {
                gamePadCapabilities.HasLeftVibrationMotor = true;
                gamePadCapabilities.HasRightVibrationMotor = true;
            } else if (e.gamepad.vibrationActuator.type === "vibration" || e.gamepad.vibrationActuator.length == 1) {
                gamePadCapabilities.HasLeftVibrationMotor = true;
            }
        }

        if (typeof e.gamepad.axes[0] == "number") gamePadCapabilities.HasLeftXThumbStick = true;
        if (typeof e.gamepad.axes[1] == "number") gamePadCapabilities.HasLeftYThumbStick = true;
        if (typeof e.gamepad.axes[2] == "number") gamePadCapabilities.HasRightXThumbStick = true;
        if (typeof e.gamepad.axes[3] == "number") gamePadCapabilities.HasRightYThumbStick = true;

        gamePadCapabilities.HasVoiceSupport = false;

        let index = this.#gamePads.length;
        for (let i = 0; i < this.#gamePads.length; i++) {
            if (this.#gamePads[i].index == e.gamepad.index) {
                index = i;
                break;
            }
        }

        this.#gamePads[index] = {
            index: e.gamepad.index,
            playerIndex: PlayerIndex.GetEnumByValue(e.gamepad.index),
            gamePadCapabilities,
            gamePadRecognize,
            sourceData: e.gamepad
        };

        cancelAnimationFrame(this.#updateGamePadsTimer);
        this.#UpdateGamePads();
    }

    static #GamePadDisconnected = function (e) {
        for (let i = 0; i < this.#gamePads.length; i++) {
            if (this.#gamePads[i].index == e.gamepad.index) {
                this.#gamePads[i] = this.#CreateGamePadData(i);
                break;
            }
        }
    }

    static #CreateGamePadData = function (index) {
        return {
            index,
            playerIndex: PlayerIndex.GetEnumByValue(index),
            gamePadCapabilities: new GamePadCapabilities(),
            gamePadRecognize: new GamePadRecognize(null),
            sourceData: null
        };
    }

    static #UpdateGamePads = function () {
        let gamePads = navigator?.getGamepads?.();
        if (!gamePads) return;

        let hasFound = false;

        for (let i = 0; i < gamePads.length; i++) {
            if (!gamePads[i]) continue;
            let gamePadData = this.#gamePads[gamePads[i].index];
            if (gamePadData) {
                if (gamePadData._vibration && (gamePadData._vibration.leftMotor || gamePadData._vibration.rightMotor)) {
                    gamePadData.sourceData.vibrationActuator.playEffect(gamePadData.sourceData.vibrationActuator.type, {
                        startDelay: 0,
                        duration: 33,
                        weakMagnitude: gamePadData._vibration.rightMotor,
                        strongMagnitude: gamePadData._vibration.leftMotor
                    });
                }
                gamePadData.sourceData = gamePads[i];
                hasFound = true;
            }
        }

        if (!hasFound) return;

        this.#updateGamePadsTimer = requestAnimationFrame(this.#UpdateGamePads.bind(this));
    }

    static GetCapabilities(...params) {
        GamePad.GetCapabilities = MethodOverload()
            .Add([PlayerIndex], function (playerIndex) {
                return this.#GetInfoFromPlayerIndex(playerIndex).gamePadCapabilities;
            });

        return GamePad.GetCapabilities.call(this, ...params);
    }

    static GetRecognize(...params) {
        GamePad.GetRecognize = MethodOverload()
            .Add([PlayerIndex], function (playerIndex) {
                return this.#GetInfoFromPlayerIndex(playerIndex).gamePadRecognize;
            });

        return GamePad.GetRecognize.call(this, ...params);
    }

    static GetState(...params) {
        GamePad.GetState = MethodOverload()
            .Add([PlayerIndex, GamePadDeadZone], function (playerIndex, deadZoneMode) {
                let gamePad = this.#GetInfoFromPlayerIndex(playerIndex);
                let raw = gamePad.sourceData || {
                    buttons: [],
                    axes: [],
                    index: -1
                };
                let mapping = gamePad.gamePadRecognize.Mapping;

                let buttons = new GamePadButtons(new Buttons(
                    (raw.buttons[mapping.A]?.pressed ? Buttons.A : 0) |
                    (raw.buttons[mapping.B]?.pressed ? Buttons.B : 0) |
                    (raw.buttons[mapping.X]?.pressed ? Buttons.X : 0) |
                    (raw.buttons[mapping.Y]?.pressed ? Buttons.Y : 0) |
                    (raw.buttons[mapping.Back]?.pressed ? Buttons.Back : 0) |
                    (raw.buttons[mapping.Start]?.pressed ? Buttons.Start : 0) |
                    (raw.buttons[mapping.LeftShoulder]?.pressed ? Buttons.LeftShoulder : 0) |
                    (raw.buttons[mapping.LeftStick]?.pressed ? Buttons.LeftStick : 0) |
                    (raw.buttons[mapping.RightShoulder]?.pressed ? Buttons.RightShoulder : 0) |
                    (raw.buttons[mapping.RightStick]?.pressed ? Buttons.RightStick : 0) |
                    (raw.buttons[mapping.BigButton]?.pressed ? Buttons.BigButton : 0) |
                    (raw.buttons[mapping.Home]?.pressed ? Buttons.Home : 0) |
                    (raw.buttons[mapping.Share]?.pressed ? Buttons.Share : 0) |
                    (raw.buttons[mapping.LeftSmallShoulderLeft]?.pressed ? Buttons.LeftSmallShoulderLeft : 0) |
                    (raw.buttons[mapping.LeftSmallShoulderRight]?.pressed ? Buttons.LeftSmallShoulderRight : 0) |
                    (raw.buttons[mapping.RightSmallShoulderLeft]?.pressed ? Buttons.RightSmallShoulderLeft : 0) |
                    (raw.buttons[mapping.RightSmallShoulderRight]?.pressed ? Buttons.RightSmallShoulderRight : 0) |
                    (raw.buttons[mapping.TouchPadButton]?.pressed ? Buttons.TouchPadButton : 0)
                ));

                let dPad = new GamePadDPad(
                    raw.buttons[mapping.DPadUp]?.pressed ? ButtonState.Pressed : ButtonState.Released,
                    raw.buttons[mapping.DPadDown]?.pressed ? ButtonState.Pressed : ButtonState.Released,
                    raw.buttons[mapping.DPadLeft]?.pressed ? ButtonState.Pressed : ButtonState.Released,
                    raw.buttons[mapping.DPadRight]?.pressed ? ButtonState.Pressed : ButtonState.Released
                );

                let thumbSticks = new GamePadThumbSticks(
                    new Vector2(raw.axes[0] || 0, raw.axes[1] || 0),
                    new Vector2(raw.axes[2] || 0, raw.axes[3] || 0),
                    deadZoneMode,
                    deadZoneMode
                );

                let triggers = new GamePadTriggers(
                    raw.buttons[mapping.LeftTrigger]?.pressed ? raw.buttons[mapping.LeftTrigger]?.value : 0,
                    raw.buttons[mapping.RightTrigger]?.pressed ? raw.buttons[mapping.RightTrigger]?.value : 0
                );

                let state = new GamePadState(thumbSticks, triggers, buttons, dPad);
                state.IsConnected = gamePad.gamePadCapabilities.IsConnected;
                state.PacketNumber = raw.index;
                return state;
            })
            .Add([PlayerIndex], function (playerIndex) {
                return GamePad.GetState.call(this, playerIndex, GamePadDeadZone.IndependentAxes);
            });

        return GamePad.GetState.call(this, ...params);
    }

    static SetVibration(...params) {
        GamePad.SetVibration = MethodOverload()
            .Add([PlayerIndex, Number, Number], function (playerIndex, leftMotor, rightMotor) {
                leftMotor = MathHelper.Clamp(leftMotor, 0, 1);
                rightMotor = MathHelper.Clamp(rightMotor, 0, 1);

                let gamePad = this.#GetInfoFromPlayerIndex(playerIndex);

                if (gamePad) {
                    gamePad._vibration = {
                        leftMotor,
                        rightMotor
                    };
                    return true;
                }
                return false;
            });

        return GamePad.SetVibration.call(this, ...params);
    }

    static {
        for (let i = 0; i < 8; i++) {
            this.#gamePads[i] = this.#CreateGamePadData(i);
        }

        globalThis.addEventListener("gamepadconnected", this.#GamePadConnected.bind(this), false);
        globalThis.addEventListener("gamepaddisconnected", this.#GamePadDisconnected.bind(this), false);
        this.#UpdateGamePads();
    }
}