import Enum from "../../Core/Enum.js";

/**
 * 枚举输入设备按钮。
 * @enum
 */
export default class Buttons extends Enum<Buttons> {
    /**
     * 空键
     */
    static readonly None: Buttons;

    /**
     * 方向键向上键
     */
    static readonly DPadUp: Buttons;

    /**
     * 方向键下键
     */
    static readonly DPadDown: Buttons;

    /**
     * 方向键向左键
     */
    static readonly DPadLeft: Buttons;

    /**
     * 方向键向右键
     */
    static readonly DPadRight: Buttons;

    /**
     * START 按钮
     */
    static readonly Start: Buttons;

    /**
     * BACK 按钮
     */
    static readonly Back: Buttons;

    /**
     * 左摇杆按钮（按左摇杆）
     */
    static readonly LeftStick: Buttons;

    /**
     * 右摇杆按钮（按右摇杆）
     */
    static readonly RightStick: Buttons;

    /**
     * 左缓冲键 (shoulder) 按钮
     */
    static readonly LeftShoulder: Buttons;

    /**
     * 右缓冲键 (shoulder) 按钮
     */
    static readonly RightShoulder: Buttons;

    /**
     * 左小缓冲键左 (shoulder) 按钮
     */
    static readonly LeftSmallShoulderLeft: Buttons;

    /**
     * 右小缓冲键左 (shoulder) 按钮
     */
    static readonly RightSmallShoulderLeft: Buttons;

    /**
     * 左小缓冲键右 (shoulder) 按钮
     */
    static readonly LeftSmallShoulderRight: Buttons;

    /**
     * 右小缓冲键右 (shoulder) 按钮
     */
    static readonly RightSmallShoulderRight: Buttons;

    /**
     * 大按钮
     */
    static readonly BigButtons: Buttons;

    /**
     * A 按钮
     */
    static readonly A: Buttons;

    /**
     * B 按钮
     */
    static readonly B: Buttons;

    /**
     * X 按钮
     */
    static readonly X: Buttons;

    /**
     * Y 按钮
     */
    static readonly Y: Buttons;

    /**
     * 左摇杆向左
     */
    static readonly LeftThumbstickLeft: Buttons;

    /**
     * 右扳机键
     */
    static readonly RightTrigger: Buttons;

    /**
     * 左扳机键
     */
    static readonly LeftTrigger: Buttons;

    /**
     * 右摇杆向上
     */
    static readonly RightThumbstickUp: Buttons;

    /**
     * 右摇杆向下
     */
    static readonly RightThumbstickDown: Buttons;

    /**
     * 右摇杆向右
     */
    static readonly RightThumbstickRight: Buttons;

    /**
     * 右摇杆向左
     */
    static readonly RightThumbstickLeft: Buttons;

    /**
     * 左摇杆向上
     */
    static readonly LeftThumbstickUp: Buttons;

    /**
     * 左摇杆向下
     */
    static readonly LeftThumbstickDown: Buttons;

    /**
     * 左摇杆向右
     */
    static readonly LeftThumbstickRight: Buttons;

    /**
     * 主页按钮
     */
    static readonly Home: Buttons;

    /**
     * 分享按钮
     */
    static readonly Share: Buttons;

    /**
     * 触摸板按钮
     */
    static readonly TouchPadButtons: Buttons;
}
