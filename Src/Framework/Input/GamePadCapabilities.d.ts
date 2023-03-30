import Base from "../../Core/Base.js";
import GamePadType from "./GamePadType.js";

/**
 * 介绍控制器的功能（包括控制器类型），并识别该控制器是否支持语音。
 * @class
 */
export default class GamePadCapabilities extends Base {
    /**
     * 获取控制器类型。
     */
    readonly GamePadType: GamePadType;

    /**
     * 指示控制器是否具有主页按钮。
     */
    readonly HasHomeButton: Boolean;

    /**
     * 指示控制器是否具有分享按钮。
     */
    readonly HasShareButton: Boolean;

    /**
     * 指示控制器是否具有左小缓冲键左按钮。
     */
    readonly HasLeftSmallShoulderLeft: Boolean;

    /**
     * 指示控制器是否具有右小缓冲键左按钮。
     */
    readonly HasRightSmallShoulderLeft: Boolean;

    /**
     * 指示控制器是否具有左小缓冲键右按钮。
     */
    readonly HasLeftSmallShoulderRight: Boolean;

    /**
     * 指示控制器是否具有右小缓冲键右按钮。
     */
    readonly HasRightSmallShoulderRight: Boolean;

    /**
     * 指示控制器是否具有触摸板。
     */
    readonly HasTouchPad: Boolean;

    /**
     * 指示控制器是否具有触摸板按钮。
     */
    readonly HasTouchPadButton: Boolean;

    /**
     * 指示控制器是否具有 A 按钮。
     */
    readonly HasAButton: Boolean;

    /**
     * 指示控制器是否具有 BACK 按钮。
     */
    readonly HasBackButton: Boolean;

    /**
     * 指示控制器是否具有 B 按钮。
     */
    readonly HasBButton: Boolean;

    /**
     * 指示控制器是否具有 BigButton 按钮。
     */
    readonly HasBigButton: Boolean;

    /**
     * 指示控制器是否具有方向键向下按钮。
     */
    readonly HasDPadDownButton: Boolean;

    /**
     * 指示控制器是否具有方向键向左按钮。
     */
    readonly HasDPadLeftButton: Boolean;

    /**
     * 指示控制器是否具有方向键向右按钮。
     */
    readonly HasDPadRightButton: Boolean;

    /**
     * 指示控制器是否具有方向键向上按钮。
     */
    readonly HasDPadUpButton: Boolean;

    /**
     * 指示控制器是否具有左缓冲键按钮。
     */
    readonly HasLeftShoulderButton: Boolean;

    /**
     * 指示控制器在左模拟摇杆上是否具有数字按钮控件。
     */
    readonly HasLeftStickButton: Boolean;

    /**
     * 指示控制器是否具有左模拟扳机键。
     */
    readonly HasLeftTrigger: Boolean;

    /**
     * 指示控制器是否具有低频率振动电机。
     */
    readonly HasLeftVibrationMotor: Boolean;

    /**
     * 指示控制器是否支持左模拟控制做水平运动。
     */
    readonly HasLeftXThumbStick: Boolean;

    /**
     * 指示控制器是否支持左模拟控制做垂直运动。
     */
    readonly HasLeftYThumbStick: Boolean;

    /**
     * 指示控制器是否具有右缓冲键按钮。
     */
    readonly HasRightShoulderButton: Boolean;

    /**
     * 指示控制器在右模拟摇杆上是否具有数字按钮控件。
     */
    readonly HasRightStickButton: Boolean;

    /**
     * 显示控制器是否具有右模拟扳机键。
     */
    readonly HasRightTrigger: Boolean;

    /**
     * 指示控制器是否具有高频率振动电机。
     */
    readonly HasRightVibrationMotor: Boolean;

    /**
     * 指示控制器是否支持右模拟控制做水平运动。
     */
    readonly HasRightXThumbStick: Boolean;

    /**
     * 指示控制器是否支持右模拟控制做垂直运动。
     */
    readonly HasRightYThumbStick: Boolean;

    /**
     * 指示控制器是否具有 START 按钮。
     */
    readonly HasStartButton: Boolean;

    /**
     * 显示控制器是否支持语音。
     */
    readonly HasVoiceSupport: Boolean;

    /**
     * 指示控制器是否具有 X 按钮。
     */
    readonly HasXButton: Boolean;

    /**
     * 指示控制器是否具有 Y 按钮。
     */
    readonly HasYButton: Boolean;

    /**
     * 指示控制器是否已连接。
     */
    readonly IsConnected: Boolean;
}