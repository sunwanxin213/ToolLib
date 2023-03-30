import Enum from "../../Core/Enum.js";

/**
 * 介绍指定的控制器的类型。
 * @enum
 */
export default class GamePadType extends Enum<GamePadType> {
    /**
     * 控制器是一个备用吉他
     */
    static readonly AlternateGuitar: GamePadType;

    /**
     * 控制器是一个街机摇杆
     */
    static readonly ArcadeStick: GamePadType;

    /**
     * 控制器是一个很大的按钮键
     */
    static readonly BigButtonPad: GamePadType;

    /**
     * 控制器是一个跳舞毯
     */
    static readonly DancePad: GamePadType;

    /**
     * 控制器是一个架子鼓
     */
    static readonly DrumKit: GamePadType;

    /**
     * 控制器是一个飞行摇杆
     */
    static readonly FlightStick: GamePadType;

    /**
     * 控制器是一个手柄
     */
    static readonly GamePad: GamePadType;

    /**
     * 控制器是一个吉他
     */
    static readonly Guitar: GamePadType;

    /**
     * 控制器为未知类型
     */
    static readonly Unknown: GamePadType;

    /**
     * 控制器是一个方向盘
     */
    static readonly Wheel: GamePadType;
}