import Base from "../../Core/Base.js";
import Collection from "../../System/Collections/ObjectModel/Collection.js";
import Vector2 from "../Vector2.js";
import Buttons from "./Buttons.js";
import GamePadButtons from "./GamePadButtons.js";
import GamePadDPad from "./GamePadDPad.js";
import GamePadThumbSticks from "./GamePadThumbSticks.js";
import GamePadTriggers from "./GamePadTriggers.js";

/**
 * 呈现关于控制器状态的特定信息，包括各种按钮和摇杆的当前状态。
 */
export default class GamePadState extends Base {
    /**
     * 返回识别控制器中所按按钮的架构。
     */
    readonly Buttons: GamePadButtons;

    /**
     * 返回识别控制器中所按方向键方向的架构。
     */
    readonly DPad: GamePadDPad;

    /**
     * 指示控制器是否已连接。
     */
    readonly IsConnected: Boolean;

    /**
     * 获取与该状态相关联的数据包数量。
     */
    readonly PacketNumber: Number;

    /**
     * 返回指示控制器摇杆 (thumbstick) 位置的架构。
     */
    readonly ThumbSticks: GamePadThumbSticks;

    /**
     * 返回识别控制器中扳机键位置的架构。
     */
    readonly Triggers: GamePadTriggers;

    /**
     * 使用指定的摇杆、扳机键和按钮值初始化新的 GamePadState 类实例。
     * @constructor
     * @param {Vector2} leftThumbStick 向左摇杆值。每个轴限制在 −1.0 到 1.0 之间。
     * @param {Vector2} rightThumbStick 向右摇杆值。每个轴限制在 −1.0 到 1.0 之间。
     * @param {Number} leftTrigger 向左扳机键值。该值被限制在 0.0 到 1.0 之间。
     * @param {Number} rightTrigger 向右扳机键值。该值被限制在 0.0 到 1.0 之间。
     * @param {Collection<Buttons>} buttons  初始化为按下状态的 Buttons 集合。
     */
    constructor(leftThumbStick: Vector2, rightThumbStick: Vector2, leftTrigger: Number, rightTrigger: Number, buttons: Collection<Buttons>);

    /**
     * 使用指定的 GamePadThumbSticks、GamePadTriggers、GamePadButtons 和 GamePadDPad，初始化新的 GamePadState 类实例。
     * @constructor
     * @param {GamePadThumbSticks} thumbSticks 初始 thumbstick 状态。
     * @param {GamePadTriggers} triggers 初始扳机键状态。
     * @param {GamePadButtons} buttons 初始按钮状态。
     * @param {GamePadDPad} dPad 初始方向键状态。
     */
    constructor(thumbSticks: GamePadThumbSticks, triggers: GamePadTriggers, buttons: GamePadButtons, dPad: GamePadDPad);

    /**
     * 确定指定的输入设备按钮在此 GamePadState 下是否已被按下。
     * @param {Buttons} button 要查询的按钮。使用 OR 位运算指定一个按钮或组合多个按钮。
     * @returns {Boolean} 是否已被按下。
     */
    IsButtonDown(button: Buttons): Boolean;

    /**
     * 确定指定的输入设备按钮在此 GamePadState 下是否处于正常弹起状态（未被按下）。
     * @param {Buttons} button 要查询的按钮。使用 OR 位运算指定一个按钮或组合多个按钮。
     * @returns {Boolean} 是否处于正常弹起状态（未被按下）。
     */
    IsButtonUp(button: Buttons): Boolean;
}