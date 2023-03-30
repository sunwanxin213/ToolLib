import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Vector4 from "./Vector4.js";
import MathHelper from "./MathHelper.js";

export default class Color extends Base {
    static get Transparent() {
        return new Color(0, 0, 0, 0);
    }

    static get AliceBlue() {
        return new Color(240, 248, 255);
    }

    static get AntiqueWhite() {
        return new Color(250, 235, 215);
    }

    static get Aqua() {
        return new Color(0, 255, 255);
    }

    static get Aquamarine() {
        return new Color(127, 255, 212);
    }

    static get Azure() {
        return new Color(240, 255, 255);
    }

    static get Beige() {
        return new Color(245, 245, 220);
    }

    static get Bisque() {
        return new Color(255, 228, 196);
    }

    static get Black() {
        return new Color(0, 0, 0);
    }

    static get BlanchedAlmond() {
        return new Color(255, 235, 205);
    }

    static get Blue() {
        return new Color(0, 0, 255);
    }

    static get BlueViolet() {
        return new Color(138, 43, 226);
    }

    static get Brown() {
        return new Color(165, 42, 42);
    }

    static get BurlyWood() {
        return new Color(222, 184, 135);
    }

    static get CadetBlue() {
        return new Color(95, 158, 160);
    }

    static get Chartreuse() {
        return new Color(127, 255, 0);
    }

    static get Chocolate() {
        return new Color(210, 105, 30);
    }

    static get Coral() {
        return new Color(255, 127, 80);
    }

    static get CornflowerBlue() {
        return new Color(100, 149, 237);
    }

    static get Cornsilk() {
        return new Color(255, 248, 220);
    }

    static get Crimson() {
        return new Color(220, 20, 60);
    }

    static get Cyan() {
        return new Color(0, 255, 255);
    }

    static get DarkBlue() {
        return new Color(0, 0, 139);
    }

    static get DarkCyan() {
        return new Color(0, 139, 139);
    }

    static get DarkGoldenrod() {
        return new Color(184, 134, 11);
    }

    static get DarkGray() {
        return new Color(169, 169, 169);
    }

    static get DarkGreen() {
        return new Color(0, 100, 0);
    }

    static get DarkKhaki() {
        return new Color(189, 183, 107);
    }

    static get DarkMagenta() {
        return new Color(139, 0, 139);
    }

    static get DarkOliveGreen() {
        return new Color(85, 107, 47);
    }

    static get DarkOrange() {
        return new Color(255, 140, 0);
    }

    static get DarkOrchid() {
        return new Color(153, 50, 204);
    }

    static get DarkRed() {
        return new Color(139, 0, 0);
    }

    static get DarkSalmon() {
        return new Color(233, 150, 122);
    }

    static get DarkSeaGreen() {
        return new Color(143, 188, 139);
    }

    static get DarkSlateBlue() {
        return new Color(72, 61, 139);
    }

    static get DarkSlateGray() {
        return new Color(47, 79, 79);
    }

    static get DarkTurquoise() {
        return new Color(0, 206, 209);
    }

    static get DarkViolet() {
        return new Color(148, 0, 211);
    }

    static get DeepPink() {
        return new Color(255, 20, 147);
    }

    static get DeepSkyBlue() {
        return new Color(0, 191, 255);
    }

    static get DimGray() {
        return new Color(105, 105, 105);
    }

    static get DodgerBlue() {
        return new Color(30, 144, 255);
    }

    static get Firebrick() {
        return new Color(178, 34, 34);
    }

    static get FloralWhite() {
        return new Color(255, 250, 240);
    }

    static get ForestGreen() {
        return new Color(34, 139, 34);
    }

    static get Fuchsia() {
        return new Color(255, 0, 255);
    }

    static get Gainsboro() {
        return new Color(220, 220, 220);
    }

    static get GhostWhite() {
        return new Color(248, 248, 255);
    }

    static get Gold() {
        return new Color(255, 215, 0);
    }

    static get Goldenrod() {
        return new Color(218, 165, 32);
    }

    static get Gray() {
        return new Color(128, 128, 128);
    }

    static get Green() {
        return new Color(0, 128, 0);
    }

    static get GreenYellow() {
        return new Color(173, 255, 47);
    }

    static get Honeydew() {
        return new Color(240, 255, 240);
    }

    static get HotPink() {
        return new Color(255, 105, 180);
    }

    static get IndianRed() {
        return new Color(205, 92, 92);
    }

    static get Indigo() {
        return new Color(75, 0, 130);
    }

    static get Ivory() {
        return new Color(255, 255, 240);
    }

    static get Khaki() {
        return new Color(240, 230, 140);
    }

    static get Lavender() {
        return new Color(230, 230, 250);
    }

    static get LavenderBlush() {
        return new Color(255, 240, 245);
    }

    static get LawnGreen() {
        return new Color(124, 252, 0);
    }

    static get LemonChiffon() {
        return new Color(255, 250, 205);
    }

    static get LightBlue() {
        return new Color(173, 216, 230);
    }

    static get LightCoral() {
        return new Color(240, 128, 128);
    }

    static get LightCyan() {
        return new Color(224, 255, 255);
    }

    static get LightGoldenrodYellow() {
        return new Color(250, 250, 210);
    }

    static get LightGreen() {
        return new Color(144, 238, 144);
    }

    static get LightGray() {
        return new Color(211, 211, 211);
    }

    static get LightPink() {
        return new Color(255, 182, 193);
    }

    static get LightSalmon() {
        return new Color(255, 160, 122);
    }

    static get LightSeaGreen() {
        return new Color(32, 178, 170);
    }

    static get LightSkyBlue() {
        return new Color(135, 206, 250);
    }

    static get LightSlateGray() {
        return new Color(119, 136, 153);
    }

    static get LightSteelBlue() {
        return new Color(176, 196, 222);
    }

    static get LightYellow() {
        return new Color(255, 255, 224);
    }

    static get Lime() {
        return new Color(0, 255, 0);
    }

    static get LimeGreen() {
        return new Color(50, 205, 50);
    }

    static get Linen() {
        return new Color(250, 240, 230);
    }

    static get Magenta() {
        return new Color(255, 0, 255);
    }

    static get Maroon() {
        return new Color(128, 0, 0);
    }

    static get MediumAquamarine() {
        return new Color(102, 205, 170);
    }

    static get MediumBlue() {
        return new Color(0, 0, 205);
    }

    static get MediumOrchid() {
        return new Color(186, 85, 211);
    }

    static get MediumPurple() {
        return new Color(147, 112, 219);
    }

    static get MediumSeaGreen() {
        return new Color(60, 179, 113);
    }

    static get MediumSlateBlue() {
        return new Color(123, 104, 238);
    }

    static get MediumSpringGreen() {
        return new Color(0, 250, 154);
    }

    static get MediumTurquoise() {
        return new Color(72, 209, 204);
    }

    static get MediumVioletRed() {
        return new Color(199, 21, 133);
    }

    static get MidnightBlue() {
        return new Color(25, 25, 112);
    }

    static get MintCream() {
        return new Color(245, 255, 250);
    }

    static get MistyRose() {
        return new Color(255, 228, 225);
    }

    static get Moccasin() {
        return new Color(255, 228, 181);
    }

    static get NavajoWhite() {
        return new Color(255, 222, 173);
    }

    static get Navy() {
        return new Color(0, 0, 128);
    }

    static get OldLace() {
        return new Color(253, 245, 230);
    }

    static get Olive() {
        return new Color(128, 128, 0);
    }

    static get OliveDrab() {
        return new Color(107, 142, 35);
    }

    static get Orange() {
        return new Color(255, 165, 0);
    }

    static get OrangeRed() {
        return new Color(255, 69, 0);
    }

    static get Orchid() {
        return new Color(218, 112, 214);
    }

    static get PaleGoldenrod() {
        return new Color(238, 232, 170);
    }

    static get PaleGreen() {
        return new Color(152, 251, 152);
    }

    static get PaleTurquoise() {
        return new Color(175, 238, 238);
    }

    static get PaleVioletRed() {
        return new Color(219, 112, 147);
    }

    static get PapayaWhip() {
        return new Color(255, 239, 213);
    }

    static get PeachPuff() {
        return new Color(255, 218, 185);
    }

    static get Peru() {
        return new Color(205, 133, 63);
    }

    static get Pink() {
        return new Color(255, 192, 203);
    }

    static get Plum() {
        return new Color(221, 160, 221);
    }

    static get PowderBlue() {
        return new Color(176, 224, 230);
    }

    static get Purple() {
        return new Color(128, 0, 128);
    }

    static get Red() {
        return new Color(255, 0, 0);
    }

    static get RosyBrown() {
        return new Color(188, 143, 143);
    }

    static get RoyalBlue() {
        return new Color(65, 105, 225);
    }

    static get SaddleBrown() {
        return new Color(139, 69, 19);
    }

    static get Salmon() {
        return new Color(250, 128, 114);
    }

    static get SandyBrown() {
        return new Color(244, 164, 96);
    }

    static get SeaGreen() {
        return new Color(46, 139, 87);
    }

    static get SeaShell() {
        return new Color(255, 245, 238);
    }

    static get Sienna() {
        return new Color(160, 82, 45);
    }

    static get Silver() {
        return new Color(192, 192, 192);
    }

    static get SkyBlue() {
        return new Color(135, 206, 235);
    }

    static get SlateBlue() {
        return new Color(106, 90, 205);
    }

    static get SlateGray() {
        return new Color(112, 128, 144);
    }

    static get Snow() {
        return new Color(255, 250, 250);
    }

    static get SpringGreen() {
        return new Color(0, 255, 127);
    }

    static get SteelBlue() {
        return new Color(70, 130, 180);
    }

    static get Tan() {
        return new Color(210, 180, 140);
    }

    static get Teal() {
        return new Color(0, 128, 128);
    }

    static get Thistle() {
        return new Color(216, 191, 216);
    }

    static get Tomato() {
        return new Color(255, 99, 71);
    }

    static get Turquoise() {
        return new Color(64, 224, 208);
    }

    static get Violet() {
        return new Color(238, 130, 238);
    }

    static get Wheat() {
        return new Color(245, 222, 179);
    }

    static get White() {
        return new Color(255, 255, 255);
    }

    static get WhiteSmoke() {
        return new Color(245, 245, 245);
    }

    static get Yellow() {
        return new Color(255, 255, 0);
    }

    static get YellowGreen() {
        return new Color(154, 205, 50);
    }

    #r = 0;

    #g = 0;

    #b = 0;

    #a = 0;

    static #_constructor = function (...params) {
        Color.#_constructor = MethodOverload()
            .Add([], function () {
                return Color.#_constructor.call(this, 0, 0, 0, 0);
            })
            .Add([Number, Number, Number], function (r, g, b) {
                return Color.#_constructor.call(this, r, g, b, 255);
            })
            .Add([Vector3], function (vector) {
                return Color.#_constructor.call(this, vector.X * 255, vector.Y * 255, vector.Z * 255, 255);
            })
            .Add([Vector4], function (vector) {
                return Color.#_constructor.call(this, vector.X * 255, vector.Y * 255, vector.Z * 255, vector.W * 255);
            })
            .Add([Number, Number, Number, Number], function (r, g, b, a) {
                [this.R, this.G, this.B, this.A] = [r, g, b, a];
            });

        return Color.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            R: {
                get() {
                    return this.#r;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#r = MathHelper.Clamp(value | 0, 0, 255);
                    })
            },
            G: {
                get() {
                    return this.#g;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#g = MathHelper.Clamp(value | 0, 0, 255);
                    })
            },
            B: {
                get() {
                    return this.#b;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#b = MathHelper.Clamp(value | 0, 0, 255);
                    })
            },
            A: {
                get() {
                    return this.#a;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#a = MathHelper.Clamp(value | 0, 0, 255);
                    })
            },
            PackedValue: {
                get() {
                    // FIXME
                    return (this.A << 24) | (this.B << 16) | (this.G << 8) | (this.R);
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        // FIXME
                        this.R = value & 0xFF;
                        this.G = value >> 8 & 0xFF;
                        this.B = value >> 16 & 0xFF;
                        this.A = value >> 24 & 0xFF;
                    })
            }
        });

        return Color.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.R;
        yield this.G;
        yield this.B;
        yield this.A;
    };

    static FromNonPremultiplied(...params) {
        Color.FromNonPremultiplied = MethodOverload()
            .Add([Number, Number, Number, Number], function (r, g, b, a) {
                return new Color(r * a / 255, g * a / 255, b * a / 255, a);
            })
            .Add([Vector4], function (vector) {
                return new Color(
                    vector.X * vector.W * 255,
                    vector.Y * vector.W * 255,
                    vector.Z * vector.W * 255,
                    vector.W * 255
                );
            });

        return Color.FromNonPremultiplied.call(this, ...params);
    };

    static Lerp(...params) {
        Color.Lerp = MethodOverload()
            .Add([Color, Color, Number], function (value1, value2, amount) {
                amount = MathHelper.Clamp(amount, 0, 1);
                return new Color(
                    MathHelper.lerp(value1.R, value2.R, amount),
                    MathHelper.lerp(value1.G, value2.G, amount),
                    MathHelper.lerp(value1.B, value2.B, amount),
                    MathHelper.lerp(value1.A, value2.A, amount)
                );
            });

        return Color.Lerp.call(this, ...params);
    };

    static Multiply(...params) {
        Color.Multiply = MethodOverload()
            .Add([Color, Number], function (value, scale) {
                return new Color(
                    (value.R * scale),
                    (value.G * scale),
                    (value.B * scale),
                    (value.A * scale)
                );
            });

        return Color.Multiply.call(this, ...params);
    };

    Equals(...params) {
        Color.prototype.Equals = MethodOverload()
            .Add([Color], function (other) {
                return (this.R === other.R) &&
                    (this.G === other.G) &&
                    (this.B === other.B) &&
                    (this.A === other.A);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Color.prototype.Equals.call(this, ...params);
    };

    ToString(...params) {
        Color.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{R:${this.R} G:${this.G} B:${this.B} A:${this.A}}`;
            });

        return Color.prototype.ToString.call(this, ...params);
    };

    ToVector3(...params) {
        Color.prototype.ToVector3 = MethodOverload()
            .Add([], function () {
                return new Vector3(
                    this.R / 255,
                    this.G / 255,
                    this.B / 255
                );
            });

        return Color.prototype.ToVector3.call(this, ...params);
    };

    ToVector4(...params) {
        Color.prototype.ToVector4 = MethodOverload()
            .Add([], function () {
                return new Vector4(
                    this.R / 255,
                    this.G / 255,
                    this.B / 255,
                    this.A / 255
                );
            });

        return Color.prototype.ToVector4.call(this, ...params);
    };
}
