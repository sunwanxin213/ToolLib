import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import ButtonState from "./ButtonState.js";

/**
 * 识别正在按下控制器方向键上的哪个方向。
 * @class
 */
export default class GamePadDPad extends Base {
    /**
     * 识别控制器方向键上的“向左”方向是否按下。
     */
    readonly Left: ButtonState;

    /**
     * 识别是否按下了控制器方向键上的“向右”方向。
     */
    readonly Right: ButtonState;

    /**
     * 识别是否按下了控制器方向键上的“向上”方向。
     */
    readonly Up: ButtonState;

    /**
     * 识别是否按下了控制器方向键上的“向下”方向。
     */
    readonly Down: ButtonState;

    /**
     * 初始化新的 GamePadDPad 类实例。
     * @constructor
     * @param upValue 方向键向上按钮状态。
     * @param downValue 方向键向下按钮状态。
     * @param leftValue 方向键向左按钮状态。
     * @param rightValue 方向键向右按钮状态。
     */
    constructor(upValue: ButtonState, downValue: ButtonState, leftValue: ButtonState, rightValue: ButtonState);
}