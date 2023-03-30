import Base from "../../Core/Base.js";
import ButtonState from "./ButtonState.js";
import Buttons from "./Buttons.js";

/**
 * 识别控制器上的按钮是处于按下状态还是释放状态。
 * @class
 */
export default class GamePadButtons extends Base {
    /**
     * 识别控制器的 A 按钮是否按下。
     */
    readonly A: ButtonState;

    /**
     * 识别控制器的 B 按钮是否按下。
     */
    readonly B: ButtonState;

    /**
     * 识别控制器的 BACK 按钮是否按下。
     */
    readonly Back: ButtonState;

    /**
     * 识别控制器的 X 按钮是否已按下。
     */
    readonly X: ButtonState;

    /**
     * 识别控制器的 Y 按钮是否已按下。
     */
    readonly Y: ButtonState;

    /**
     * 识别控制器的“START”钮是否已按下。
     */
    readonly Start: ButtonState;

    /**
     * 识别控制器的左肩（缓冲键）按钮是否按下。
     */
    readonly LeftShoulder: ButtonState;

    /**
     * 识别控制器的左摇杆按钮是否按下（摇杆是否“按入”）。
     */
    readonly LeftStick: ButtonState;

    /**
     * 识别控制器的右肩（缓冲键）按钮是否已按下。
     */
    readonly RightShoulder: ButtonState;

    /**
     * 识别控制器的右摇杆按钮是否按下（摇杆处于“已点按”状态）。
     */
    readonly RightStick: ButtonState;

    /**
     * 识别 BigButton 按钮是否按下。
     */
    readonly BigButton: ButtonState;

    /**
     * 识别主页按钮是否按下。
     */
    readonly Home: ButtonState;

    /**
     * 识别分享按钮是否按下。
     */
    readonly Share: ButtonState;

    /**
     * 识别左小缓冲键左 (shoulder) 按钮是否按下。
     */
    readonly LeftSmallShoulderLeft: ButtonState;

    /**
     * 识别左小缓冲键右 (shoulder) 按钮是否按下。
     */
    readonly LeftSmallShoulderRight: ButtonState;

    /**
     * 识别右小缓冲键左 (shoulder) 按钮是否按下。
     */
    readonly RightSmallShoulderLeft: ButtonState;

    /**
     * 识别右小缓冲键右 (shoulder) 按钮是否按下。
     */
    readonly RightSmallShoulderRight: ButtonState;

    /**
     * 识别触摸板按钮是否按下。
     */
    readonly TouchPadButton: ButtonState;

    /**
     * 初始化新的 GamePadButtons 类实例，将指定按钮设置为已按下。
     * @constructor
     * @param {Buttons} buttons 初始化为按下状态的按钮。使用 OR 位运算指定一个按钮或组合多个按钮。
     */
    constructor(buttons: Buttons);
}