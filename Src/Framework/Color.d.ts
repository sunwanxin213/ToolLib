import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Vector4 from "./Vector4.js";

/**
 * 呈现一个使用红色、绿色、蓝色和 alpha 数据的四色差颜色。
 * @class
 */
export default class Color extends Base {
    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：0 A：0。
     */
    static readonly Transparent: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：248 B：255 A：255。
     */
    static readonly AliceBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：235 B：215 A：255。
     */
    static readonly AntiqueWhite: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：255 A：255。
     */
    static readonly Aqua: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：127 G：255 B：212 A：255。
     */
    static readonly Aquamarine: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：255 B：255 A：255。
     */
    static readonly Azure: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：245 B：220 A：255。
     */
    static readonly Beige: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：228 B：196 A：255。
     */
    static readonly Bisque: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：0 A：255。
     */
    static readonly Black: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：235 B：205 A：255。
     */
    static readonly BlanchedAlmond: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：255 A：255。
     */
    static readonly Blue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：138 G：43 B：226 A：255。
     */
    static readonly BlueViolet: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：165 G：42 B：42 A：255。
     */
    static readonly Brown: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：222 G：184 B：135 A：255。
     */
    static readonly BurlyWood: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：95 G：158 B：160 A：255。
     */
    static readonly CadetBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：127 G：255 B：0 A：255。
     */
    static readonly Chartreuse: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：210 G：105 B：30 A：255。
     */
    static readonly Chocolate: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：127 B：80 A：255。
     */
    static readonly Coral: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：100 G：149 B：237 A：255。
     */
    static readonly CornflowerBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：248 B：220 A：255。
     */
    static readonly Cornsilk: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：220 G：20 B：60 A：255。
     */
    static readonly Crimson: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：255 A：255。
     */
    static readonly Cyan: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：139 A：255。
     */
    static readonly DarkBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：139 B：139 A：255。
     */
    static readonly DarkCyan: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：184 G：134 B：11 A：255。
     */
    static readonly DarkGoldenrod: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：169 G：169 B：169 A：255。
     */
    static readonly DarkGray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：100 B：0 A：255。
     */
    static readonly DarkGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：189 G：183 B：107 A：255。
     */
    static readonly DarkKhaki: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：139 G：0 B：139 A：255。
     */
    static readonly DarkMagenta: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：85 G：107 B：47 A：255。
     */
    static readonly DarkOliveGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：140 B：0 A：255。
     */
    static readonly DarkOrange: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：153 G：50 B：204 A：255。
     */
    static readonly DarkOrchid: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：139 G：0 B：0 A：255。
     */
    static readonly DarkRed: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：233 G：150 B：122 A：255。
     */
    static readonly DarkSalmon: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：143 G：188 B：139 A：255。
     */
    static readonly DarkSeaGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：72 G：61 B：139 A：255。
     */
    static readonly DarkSlateBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：47 G：79 B：79 A：255。
     */
    static readonly DarkSlateGray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：206 B：209 A：255。
     */
    static readonly DarkTurquoise: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：148 G：0 B：211 A：255。
     */
    static readonly DarkViolet: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：20 B：147 A：255。
     */
    static readonly DeepPink: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：191 B：255 A：255。
     */
    static readonly DeepSkyBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：105 G：105 B：105 A：255。
     */
    static readonly DimGray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：30 G：144 B：255 A：255。
     */
    static readonly DodgerBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：178 G：34 B：34 A：255。
     */
    static readonly Firebrick: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：250 B：240 A：255。
     */
    static readonly FloralWhite: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：34 G：139 B：34 A：255。
     */
    static readonly ForestGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：0 B：255 A：255。
     */
    static readonly Fuchsia: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：220 G：220 B：220 A：255。
     */
    static readonly Gainsboro: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：248 G：248 B：255 A：255。
     */
    static readonly GhostWhite: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：215 B：0 A：255。
     */
    static readonly Gold: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：218 G：165 B：32 A：255。
     */
    static readonly Goldenrod: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：128 B：128 A：255。
     */
    static readonly Gray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：128 B：0 A：255。
     */
    static readonly Green: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：173 G：255 B：47 A：255。
     */
    static readonly GreenYellow: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：255 B：240 A：255。
     */
    static readonly Honeydew: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：105 B：180 A：255。
     */
    static readonly HotPink: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：205 G：92 B：92 A：255。
     */
    static readonly IndianRed: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：75 G：0 B：130 A：255。
     */
    static readonly Indigo: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：240 A：255。
     */
    static readonly Ivory: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：230 B：140 A：255。
     */
    static readonly Khaki: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：230 G：230 B：250 A：255。
     */
    static readonly Lavender: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：240 B：245 A：255。
     */
    static readonly LavenderBlush: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：124 G：252 B：0 A：255。
     */
    static readonly LawnGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：250 B：205 A：255。
     */
    static readonly LemonChiffon: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：173 G：216 B：230 A：255。
     */
    static readonly LightBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：240 G：128 B：128 A：255。
     */
    static readonly LightCoral: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：224 G：255 B：255 A：255。
     */
    static readonly LightCyan: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：250 B：210 A：255。
     */
    static readonly LightGoldenrodYellow: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：144 G：238 B：144 A：255。
     */
    static readonly LightGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：211 G：211 B：211 A：255。
     */
    static readonly LightGray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：182 B：193 A：255。
     */
    static readonly LightPink: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：160 B：122 A：255。
     */
    static readonly LightSalmon: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：32 G：178 B：170 A：255。
     */
    static readonly LightSeaGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：135 G：206 B：250 A：255。
     */
    static readonly LightSkyBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：119 G：136 B：153 A：255。
     */
    static readonly LightSlateGray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：176 G：196 B：222 A：255。
     */
    static readonly LightSteelBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：224 A：255。
     */
    static readonly LightYellow: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：0 A：255。
     */
    static readonly Lime: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：50 G：205 B：50 A：255。
     */
    static readonly LimeGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：240 B：230 A：255。
     */
    static readonly Linen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：0 B：255 A：255。
     */
    static readonly Magenta: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：0 B：0 A：255。
     */
    static readonly Maroon: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：102 G：205 B：170 A：255。
     */
    static readonly MediumAquamarine: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：0 B：205 A：255。
     */
    static readonly MediumBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：186 G：85 B：211 A：255。
     */
    static readonly MediumOrchid: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：147 G：112 B：219 A：255。
     */
    static readonly MediumPurple: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：60 G：179 B：113 A：255。
     */
    static readonly MediumSeaGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：123 G：104 B：238 A：255。
     */
    static readonly MediumSlateBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：250 B：154 A：255。
     */
    static readonly MediumSpringGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：72 G：209 B：204 A：255。
     */
    static readonly MediumTurquoise: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：199 G：21 B：133 A：255。
     */
    static readonly MediumVioletRed: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：25 G：25 B：112 A：255。
     */
    static readonly MidnightBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：255 B：250 A：255。
     */
    static readonly MintCream: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：228 B：225 A：255。
     */
    static readonly MistyRose: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：228 B：181 A：255。
     */
    static readonly Moccasin: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：222 B：173 A：255。
     */
    static readonly NavajoWhite: Color;

    /**
     * 获取系统定义的颜色 R：0 G：0 B：128 A：255。
     */
    static readonly Navy: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：253 G：245 B：230 A：255。
     */
    static readonly OldLace: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：128 B：0 A：255。
     */
    static readonly Olive: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：107 G：142 B：35 A：255。
     */
    static readonly OliveDrab: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：165 B：0 A：255。
     */
    static readonly Orange: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：69 B：0 A：255。
     */
    static readonly OrangeRed: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：218 G：112 B：214 A：255。
     */
    static readonly Orchid: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：238 G：232 B：170 A：255。
     */
    static readonly PaleGoldenrod: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：152 G：251 B：152 A：255。
     */
    static readonly PaleGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：175 G：238 B：238 A：255。
     */
    static readonly PaleTurquoise: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：219 G：112 B：147 A：255。
     */
    static readonly PaleVioletRed: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：239 B：213 A：255。
     */
    static readonly PapayaWhip: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：218 B：185 A：255。
     */
    static readonly PeachPuff: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：205 G：133 B：63 A：255。
     */
    static readonly Peru: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：192 B：203 A：255。
     */
    static readonly Pink: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：221 G：160 B：221 A：255。
     */
    static readonly Plum: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：176 G：224 B：230 A：255。
     */
    static readonly PowderBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：128 G：0 B：128 A：255。
     */
    static readonly Purple: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：0 B：0 A：255。
     */
    static readonly Red: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：188 G：143 B：143 A：255。
     */
    static readonly RosyBrown: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：65 G：105 B：225 A：255。
     */
    static readonly RoyalBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：139 G：69 B：19 A：255。
     */
    static readonly SaddleBrown: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：250 G：128 B：114 A：255。
     */
    static readonly Salmon: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：244 G：164 B：96 A：255。
     */
    static readonly SandyBrown: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：46 G：139 B：87 A：255。
     */
    static readonly SeaGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：245 B：238 A：255。
     */
    static readonly SeaShell: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：160 G：82 B：45 A：255。
     */
    static readonly Sienna: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：192 G：192 B：192 A：255。
     */
    static readonly Silver: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：135 G：206 B：235 A：255。
     */
    static readonly SkyBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：106 G：90 B：205 A：255。
     */
    static readonly SlateBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：112 G：128 B：144 A：255。
     */
    static readonly SlateGray: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：250 B：250 A：255。
     */
    static readonly Snow: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：255 B：127 A：255。
     */
    static readonly SpringGreen: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：70 G：130 B：180 A：255。
     */
    static readonly SteelBlue: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：210 G：180 B：140 A：255。
     */
    static readonly Tan: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：0 G：128 B：128 A：255。
     */
    static readonly Teal: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：216 G：191 B：216 A：255。
     */
    static readonly Thistle: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：99 B：71 A：255。
     */
    static readonly Tomato: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：64 G：224 B：208 A：255。
     */
    static readonly Turquoise: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：238 G：130 B：238 A：255。
     */
    static readonly Violet: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：222 B：179 A：255。
     */
    static readonly Wheat: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：255 A：255。
     */
    static readonly White: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：245 G：245 B：245 A：255。
     */
    static readonly WhiteSmoke: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：255 G：255 B：0 A：255。
     */
    static readonly Yellow: Color;

    /**
     * 获取系统定义的颜色，具体值为 R：154 G：205 B：50 A：255。
     */
    static readonly YellowGreen: Color;

    /**
     * 获取或设置该 Color 的红色色差值。
     */
    R: Number;

    /**
     * 获取或设置该 Color 的绿色色差值。
     */
    G: Number;

    /**
     * 获取或设置该 Color 的蓝色部分值。
     */
    B: Number;

    /**
     * 获取或设置 alpha 部分值。
     */
    A: Number;

    /**
     * 获取当前颜色作为打包值。
     */
    PackedValue: Number;

    constructor();

    /**
     * 创建新的类实例。
     * @constructor
     * @param {Number} r 红色色差。
     * @param {Number} g 绿色色差。
     * @param {Number} b 蓝色色差。
     * @returns {Color} 新的类实例。
     */
    constructor(r: Number, g: Number, b: Number);

    /**
     * 创建新的类实例。
     * @constructor
     * @param {Number} r 红色色差。
     * @param {Number} g 绿色色差。
     * @param {Number} b 蓝色色差。
     * @param {Number} a Alpha 色差。
     * @returns {Color} 新的类实例。
     */
    constructor(r: Number, g: Number, b: Number, a: Number);

    /**
     * 创建新的类实例。
     * @constructor
     * @param {Vector3} vector 一个三色差颜色。
     * @returns {Color} 新的类实例。
     */
    constructor(vector: Vector3);

    /**
     * 创建新的类实例。
     * @constructor
     * @param {Vector4} vector 一个四色差颜色。
     * @returns {Color} 新的类实例。
     */
    constructor(vector: Vector4);

    /**
     * 将非预乘 alpha 颜色转换为包含预乘 alpha 的颜色。
     * @static
     * @param {Number} r 红色色差。
     * @param {Number} g 绿色色差。
     * @param {Number} b 蓝色色差。
     * @param {Number} a Alpha 色差。
     * @returns {Color} 新的类实例。
     */
    static FromNonPremultiplied(r: Number, g: Number, b: Number, a: Number): Color;

    /**
     * 将非预乘颜色转换为包含 alpha 的颜色数据。
     * @static
     * @param {Vector4} vector 一个四色差颜色。
     * @returns {Color} 新的类实例。
     */
    static FromNonPremultiplied(vector: Vector4): Color;

    /**
     * 线性插入颜色。
     * @static
     * @param {Color} value1 一个四色差颜色。
     * @param {Color} value2 一个四色差颜色。
     * @param {Number} amount 插值因子。
     * @returns {Color} 新的类实例。
     */
    static Lerp(value1: Color, value2: Color, amount: Number): Color;

    /**
     * 将每个颜色部分乘以缩放因子。
     * @static
     * @param {Color} value 四色差源颜色。
     * @param {Number} scale 缩放因子。
     * @returns {Color} 新的类实例。
     */
    static Multiply(value: Color, scale: Number): Color;

    /**
     * 测试一种颜色以查看它是否与此实例中的颜色相等。
     * @param {Color} other 一个四色差颜色。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: Color): Boolean;

    /**
     * 测试一个颜色对象的实例以查看它是否等于此对象。
     * @param {Object} obj 一个颜色对象。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 获取该对象的字符串呈现。
     * @returns {String} 该对象的字符串呈现。
     */
    ToString(): String;

    /**
     * 获取此对象的三色差矢量呈现。
     * @returns {Vector3} 此对象的三色差矢量呈现。
     */
    ToVector3(): Vector3;

    /**
     * 获取此对象的四色差矢量呈现。
     * @returns {Vector4} 此对象的四色差矢量呈现。
     */
    ToVector4(): Vector4;
}
