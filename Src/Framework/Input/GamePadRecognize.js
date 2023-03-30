import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import GamePadMapping from "./GamePadMapping.js";
import GamePadType from "./GamePadType.js";

const ID_REGEXP_LIST = [
    // Chromium
    {
        regexp: /^(.*?)\s?\(.*?Vendor:\s?(\S{4})\sProduct:\s?(\S{4})?\)$/i,
        indexes: [1, 2, 3]
    },
    // FireFox
    {
        regexp: /^(\S{4})\-(\S{4})\-(.*)$/i,
        indexes: [3, 1, 2]
    }
];

const OTHER_DEVICES = [
    {
        ids: ["Xbox 360 Controller (XInput STANDARD GAMEPAD)", "xinput",
            // 下面这条是一个错误，在 Safari 上会将 Xbox 360 手柄错误识别为深圳山弯科技出品的 PS3/PC 手柄
            "2563-575-PS3/PC Gamepad"
        ],
        name: "Xbox 360 Controller",
        vendorId: "045E",
        productId: "028E",
        type: GamePadType.GamePad,
        mapping: "Xbox360"
    },
    // 下面这个数据是一个错误，在 Chrome 中，有时会将 Xbox 360 手柄错误识别为深圳山弯科技出品的 PS3/PC 手柄
    {
        name: "Xbox 360 Controller",
        vendorId: "2563",
        toVendorId: "045E",
        productId: "0575",
        toProductId: "028E",
        type: GamePadType.GamePad,
        mapping: "Xbox360"
    },
    {
        ids: ["Xbox Wireless Controller"],
        name: "Xbox Wireless Controller (model 1914)",
        vendorId: "045E",
        productId: "0B12",
        type: GamePadType.GamePad,
        mapping: "Xbox360"
    },
    {
        name: "Xbox One S Controller",
        vendorId: "045E",
        productId: "02FD",
        type: GamePadType.GamePad,
        mapping: "Xbox360"
    },
    {
        ids: ["Microsoft X-Box One S pad"],
        name: "Xbox One S Controller",
        vendorId: "045E",
        productId: "02EA",
        type: GamePadType.GamePad,
        mapping: "Xbox360"
    },
    {
        name: "Sixaxis (PS3)",
        vendorId: "054C",
        productId: "0268",
        type: GamePadType.GamePad,
        mapping: "PlayStation3"
    },
    {
        name: "DualShock (PS4)",
        vendorId: "054C",
        productId: "05C4",
        type: GamePadType.GamePad,
        mapping: "PlayStation4"
    },
    {
        ids: ["DualSense Wireless Controller Extended Gamepad"],
        name: "DualSense (PS5)",
        vendorId: "054C",
        productId: "0CE6",
        type: GamePadType.GamePad,
        mapping: "PlayStation5"
    },
    {
        ids: ["Pro Controller Extended Gamepad"],
        name: "Switch Pro Controller",
        vendorId: "057E",
        productId: "2009",
        type: GamePadType.GamePad,
        mapping: "SwitchPro"
    },
    {
        name: "Switch Joy-Con L",
        vendorId: "057E",
        productId: "2006",
        type: GamePadType.GamePad,
        mapping: "SwitchJoyConLeft"
    },
    {
        name: "Switch Joy-Con R",
        vendorId: "057E",
        productId: "2007",
        type: GamePadType.GamePad,
        mapping: "SwitchJoyConRight"
    },
    {
        name: "Switch Joy-Con L+R",
        vendorId: "057E",
        productId: "200E",
        type: GamePadType.GamePad,
        mapping: "SwitchJoyConLeftAndRight"
    }
];

const VENDOR_NAMES = {
    "045E": "Microsoft Corp.",
    "054C": "Sony Corp.",
    "057E": "Nintendo Co., Ltd",
    // 更多厂商列表在这里补充
}

export default class GamePadRecognize extends Base {
    #vendorId = "unknown";

    #productId = "unknown";

    #name = "unknown";

    #vendorName = "unknown";

    #type = GamePadType.GamePad;

    #mapping = null;

    get VendorId() {
        return this.#vendorId;
    }

    get ProductId() {
        return this.#productId;
    }

    get Name() {
        return this.#name;
    }

    get VendorName() {
        return this.#vendorName;
    }

    get Type() {
        return this.#type;
    }

    get Mapping() {
        return this.#mapping;
    }

    static #_constructor = function (...params) {
        GamePadRecognize.#_constructor = MethodOverload()
            .Add([globalThis["Gamepad"] || class None { }], function (gamePad) {
                this.#CheckIdsAndNames(gamePad);

                if (!this.#mapping) {
                    this.#mapping = GamePadMapping.Generic;
                }
            })
            .Add([[null]], function () {
                this.#mapping = GamePadMapping.Null;
            });

        return GamePadRecognize.#_constructor.call(this, ...params);
    }

    constructor(...params) {
        super();

        return GamePadRecognize.#_constructor.call(this, ...params);
    }

    #CheckIdsAndNames = function (gamePad) {
        for (let i = 0; i < ID_REGEXP_LIST.length; i++) {
            let item = ID_REGEXP_LIST[i];
            if (item.regexp.test(gamePad.id)) {
                let result = gamePad.id.match(item.regexp);
                this.#name = result[item.indexes[0]];
                this.#vendorId = result[item.indexes[1]].toUpperCase();
                this.#productId = result[item.indexes[2]].toUpperCase();
                break;
            }
        }

        for (let i = 0; i < OTHER_DEVICES.length; i++) {
            let item = OTHER_DEVICES[i];
            if ((item.vendorId == this.VendorId && item.productId == this.ProductId) || item?.ids?.includes(gamePad.id)) {
                this.#name = item.name;
                this.#vendorId = (item.toVendorId || item.vendorId).toUpperCase();
                this.#productId = (item.toProductId || item.productId).toUpperCase();
                this.#type = item.type;
                if (GamePadMapping[item.mapping]) {
                    this.#mapping = GamePadMapping[item.mapping];
                }
                break;
            }
        }

        if (VENDOR_NAMES[this.VendorId]) {
            this.#vendorName = VENDOR_NAMES[this.VendorId];
        }
    }
}