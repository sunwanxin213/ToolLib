import Enum from "../../Core/Enum.js";

/**
 * 指示控制器按键上的图案。
 * @enum
 */
export default class GamePadButtonPattern extends Enum<GamePadButtonPattern> {
    /**
     * 控制器按键为 ABYX 字母图案。
     */
    static readonly ABYX: GamePadButtonPattern;

    /**
     * 控制器按键为 PlayStation 图案。
     */
    static readonly PlayStation: GamePadButtonPattern;

    /**
     * 控制器按键为方向图案。
     */
    static readonly Direction: GamePadButtonPattern;
}