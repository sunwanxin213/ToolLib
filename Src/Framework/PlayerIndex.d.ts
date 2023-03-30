import Enum from "../Core/Enum.js";

/**
 * 指定与玩家相关联的游戏控制器。
 * @enum
 */
export default class PlayerIndex extends Enum {
    /**
     * 第一个控制器。
     * @static
     * @readonly
     */
    static readonly One: PlayerIndex;

    /**
     * 第二个控制器。
     * @static
     * @readonly
     */
    static readonly Two: PlayerIndex;

    /**
     * 第三个控制器。
     * @static
     * @readonly
     */
    static readonly Three: PlayerIndex;

    /**
     * 第四个控制器。
     * @static
     * @readonly
     */
    static readonly Four: PlayerIndex;

    /**
     * 第五个控制器。
     * @static
     * @readonly
     */
    static readonly Five: PlayerIndex;

    /**
     * 第六个控制器。
     * @static
     * @readonly
     */
    static readonly Six: PlayerIndex;

    /**
     * 第七个控制器。
     * @static
     * @readonly
     */
    static readonly Seven: PlayerIndex;

    /**
     * 第八个控制器。
     * @static
     * @readonly
     */
    static readonly Eight: PlayerIndex;
}
