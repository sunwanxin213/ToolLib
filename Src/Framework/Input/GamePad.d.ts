import Base from "../../Core/Base.js";
import PlayerIndex from "../PlayerIndex.js";
import GamePadCapabilities from "./GamePadCapabilities.js";
import GamePadDeadZone from "./GamePadDeadZone.js";
import GamePadRecognize from "./GamePadRecognize.js";
import GamePadState from "./GamePadState.js";

/**
 * 允许检索用户与控制器的交互并设置控制器振动电动机。
 * @static
 * @class
 */
export default class GamePad extends Base {
    /**
     * 检索控制器的功能。
     * @static
     * @param {PlayerIndex} playerIndex 要查询的控制器索引。
     * @returns {GamePadCapabilities} 返回介绍控制器功能的实例对象。
     */
    static GetCapabilities(playerIndex: PlayerIndex): GamePadCapabilities;

    /**
     * 检索控制器的产品信息。
     * @static
     * @param {PlayerIndex} playerIndex 要查询的控制器索引。
     * @returns {GamePadRecognize} 返回含有控制器产品信息、类型和布局识别的实例对象。
     */
    static GetRecognize(playerIndex: PlayerIndex): GamePadRecognize;

    /**
     * 获取游戏控制器的当前状态。
     * @static
     * @param {PlayerIndex} playerIndex 要查询的控制器索引。
     * @returns {GamePadState} 返回控制器当前状态的实例对象。
     */
    static GetState(playerIndex: PlayerIndex): GamePadState;

    /**
     * 利用模拟摇杆位置的指定盲区，获取游戏控制器的当前状态。
     * @static
     * @param {PlayerIndex} playerIndex 要查询的控制器索引。
     * @param {GamePadDeadZone} deadZoneMode 指定要使用的盲区类型的枚举值。
     * @returns {GamePadState} 返回控制器当前状态的实例对象。
     */
    static GetState(playerIndex: PlayerIndex, deadZoneMode: GamePadDeadZone): GamePadState;

    /**
     * 在控制器上设置振动电动机速度。
     * @static
     * @param {PlayerIndex} playerIndex 标识要设置的控制器的玩家索引。
     * @param {Number} leftMotor 左电动机的速度，介于 0.0 和 1.0 间。该电动机是一个低频率电动机。
     * @param {Number} rightMotor 右电动机的速度，介于 0.0 和 1.0 间。该电动机是一个高频率电动机。
     * @returns {Boolean} 返回控制器是否成功执行振动操作。
     */
    static SetVibration(playerIndex: PlayerIndex, leftMotor: Number, rightMotor: Number): Boolean;
}