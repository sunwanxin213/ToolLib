import Base from "../../Core/Base.js";

/**
 * 在控制器上定义左/右扳机键位置的结构。
 * @class
 */
export default class GamePadTriggers extends Base {
    /**
     * 识别控制器上的左扳机键位置。
     * @readonly
     */
    readonly Left: Number;

    /**
     * 识别控制器上右扳机键的位置。
     * @readonly
     */
    readonly Right: Number;

    /**
     * 初始化新的 GamePadTriggers 类实例。
     * @constructor
     * @param {Number} leftTrigger 向左扳机键值。该值被限制在 0.0 到 1.0 之间。
     * @param {Number} rightTrigger 向右扳机键值。该值被限制在 0.0 到 1.0 之间。
     */
    constructor(leftTrigger: Number, rightTrigger: Number);
}