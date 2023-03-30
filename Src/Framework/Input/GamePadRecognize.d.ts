import Base from "../../Core/Base.js";
import GamePadMapping from "./GamePadMapping.js";
import GamePadType from "./GamePadType.js";

/**
 * 控制器产品信息和类型、布局识别。
 * @class
 */
export default class GamePadRecognize extends Base {
    /**
     * 销售商 ID。
     */
    readonly VendorId: String;

    /**
     * 产品 ID。
     */
    readonly ProductId: String;

    /**
     * 产品名称。
     */
    readonly Name: String;

    /**
     * 销售商名称。
     */
    readonly VendorName: String;

    /**
     * 控制器类型。
     */
    readonly Type: GamePadType;

    /**
     * 控制器映射。
     */
    readonly Mapping: GamePadMapping;

    /**
     * 初始化新的 GamePadRecognize 类实例。
     * @constructor
     * @param {Gamepad} gamePad 系统上的控制器实例。
     */
    constructor(gamePad: Gamepad);

    /**
     * 使用空白信息初始化新的 GamePadRecognize 类实例。
     * @constructor
     * @param {Gamepad} gamePad 系统上的控制器实例。
     */
    constructor(gamePad: null);
}