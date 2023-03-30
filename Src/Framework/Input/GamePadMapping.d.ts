import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import Exception from "../../Exception/Exception.js";
import MemberAccessException from "../../Exception/MemberAccessException.js";
import GamePadButtonPattern from "./GamePadButtonPattern.js";

/**
 * 控制器布局映射。
 * @class
 * @abstract
 */
export default class GamePadMapping extends Base {
    /**
     * 空布局映射
     */
    static readonly Null: GamePadMapping;

    /**
     * 通用布局映射
     */
    static readonly Generic: GamePadMapping;

    /**
     * Xbox 360 布局映射
     */
    static readonly Xbox360: GamePadMapping;

    /**
     * Xbox One 布局映射
     */
    static readonly XboxOne: GamePadMapping;

    /**
     * PlayStation 3 布局映射
     */
    static readonly PlayStation3: GamePadMapping;

    /**
     * PlayStation 4 布局映射
     */
    static readonly PlayStation4: GamePadMapping;

    /**
     * PlayStation 5 布局映射
     */
    static readonly PlayStation5: GamePadMapping;

    /**
     * Switch Pro 布局映射
     */
    static readonly SwitchPro: GamePadMapping;

    /**
     * Switch JoyCon 左手柄布局映射
     */
    static readonly SwitchJoyConLeft: GamePadMapping;

    /**
     * Switch JoyCon 右手柄布局映射
     */
    static readonly SwitchJoyConRight: GamePadMapping;

    /**
     * Switch JoyCon 左+右布局映射
     */
    static readonly SwitchJoyConLeftAndRight: GamePadMapping;

    /**
     * 控制器按键上的图案
     */
    ButtonPattern: GamePadButtonPattern;

    /**
     * 方向键向上键映射键位
     */
    DPadUp: Number;

    /**
     * 方向键下键映射键位
     */
    DPadDown: Number;

    /**
     * 方向键向左键映射键位
     */
    DPadLeft: Number;

    /**
     * 方向键向右键映射键位
     */
    DPadRight: Number;

    /**
     * START 按钮映射键位
     */
    Start: Number;

    /**
     * BACK 按钮映射键位
     */
    Back: Number;

    /**
     * 左摇杆按钮（按左摇杆）映射键位
     */
    LeftStick: Number;

    /**
     * 右摇杆按钮（按右摇杆）映射键位
     */
    RightStick: Number;

    /**
     * 左缓冲键 (shoulder) 按钮映射键位
     */
    LeftShoulder: Number;

    /**
     * 右缓冲键 (shoulder) 按钮映射键位
     */
    RightShoulder: Number;

    /**
     * 左小缓冲键左 (shoulder) 按钮映射键位
     */
    LeftSmallShoulderLeft: Button;

    /**
     * 右小缓冲键左 (shoulder) 按钮映射键位
     */
    RightSmallShoulderLeft: Button;

    /**
     * 左小缓冲键右 (shoulder) 按钮映射键位
     */
    LeftSmallShoulderRight: Button;

    /**
     * 右小缓冲键右 (shoulder) 按钮映射键位
     */
    RightSmallShoulderRight: Button;

    /**
     * 大按钮映射键位
     */
    BigButton: Number;

    /**
     * A 按钮映射键位
     */
    A: Number;

    /**
     * B 按钮映射键位
     */
    B: Number;

    /**
     * X 按钮映射键位
     */
    X: Number;

    /**
     * Y 按钮映射键位
     */
    Y: Number;

    /**
     * 左摇杆向左映射键位
     */
    LeftThumbstickLeft: Number;

    /**
     * 右扳机键映射键位
     */
    RightTrigger: Number;

    /**
     * 左扳机键映射键位
     */
    LeftTrigger: Number;

    /**
     * 右摇杆向上映射键位
     */
    RightThumbstickUp: Number;

    /**
     * 右摇杆向下映射键位
     */
    RightThumbstickDown: Number;

    /**
     * 右摇杆向右映射键位
     */
    RightThumbstickRight: Number;

    /**
     * 右摇杆向左映射键位
     */
    RightThumbstickLeft: Number;

    /**
     * 左摇杆向上映射键位
     */
    LeftThumbstickUp: Number;

    /**
     * 左摇杆向下映射键位
     */
    LeftThumbstickDown: Number;

    /**
     * 左摇杆向右映射键位
     */
    LeftThumbstickRight: Number;

    /**
     * 主页按钮映射键位
     */
    Home: Number;

    /**
     * 分享按钮映射键位
     */
    Share: Number;

    /**
     * 触摸板按钮键位
     */
    TouchPadButton: Number;
}