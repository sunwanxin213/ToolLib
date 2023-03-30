import Enum from "../../Core/Enum.js";

/**
 * 指定死区处理的类型以便在调用 GetState 时应用于控制器模拟摇杆。
 * @enum
 */
export default class GamePadDeadZone extends Enum<GamePadDeadZone> {
    /**
     * 每个摇杆的值不会进行处理，它会由 GetState 作为“原始”值返回。如果您打算实施自己的死区处理，这是最佳方案。
     */
    static readonly None: GamePadDeadZone;

    /**
     * 每个摇杆的 X 和 Y 位置都针对死区单独进行比较。调用 GetState 时，该设置是默认设置。
     */
    static readonly IndependentAxes: GamePadDeadZone;

    /**
     * 将每个摇杆的组合 X 和 Y 位置与死区进行比较。当该摇杆被用作二维控制表面时（例如当在第一人称视角游戏中控制一个角色的视角时），这可以比 IndependentAxes 提供更好的控制。
     */
    static readonly Circular: GamePadDeadZone;
}
