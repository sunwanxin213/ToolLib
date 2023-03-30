import Enum from "../../Core/Enum.js";

/**
 * 识别控制器按钮的状态。
 * @class
 */
export default class ButtonState extends Enum<ButtonState> {
    /**
     * 按钮已松开。
     */
    static readonly Released: ButtonState;

    /**
     * 按钮已按下。
     */
    static readonly Pressed: ButtonState;
}
