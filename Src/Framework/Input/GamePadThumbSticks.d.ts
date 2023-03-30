import Base from "../../Core/Base.js";
import Vector2 from "../Vector2.js";

/**
 * 在控制器上呈现左/右摇杆 (thumbstick) 位置的结构。
 * @class
 */
export default class GamePadThumbSticks extends Base {
    /**
     * 将控制器左摇杆 (thumbstick) 的位置作为 2D 矢量返回。
     */
    readonly Left: Vector2;

    /**
     * 将控制器右摇杆 (thumbstick) 的位置作为 2D 矢量返回。
     */
    readonly Right: Vector2;

    /**
     * 初始化新的 GamePadThumbSticks 类实例。
     * @constructor
     * @param {Vector2} leftThumbstick 向左摇杆值。每个轴限制在 −1.0 到 1.0 之间。
     * @param {Vector2} rightThumbstick 向右摇杆值。每个轴限制在 −1.0 到 1.0 之间。
     */
    constructor(leftThumbstick: Vector2, rightThumbstick: Vector2);

    /**
     * 设置死区
     * @static
     * @param {Number} leftDeadZone 左摇杆死区
     * @param {Number} rightDeadZone 右摇杆死区
     */
    static SetDeadZone(leftDeadZone: Number, rightDeadZone: Number);
}