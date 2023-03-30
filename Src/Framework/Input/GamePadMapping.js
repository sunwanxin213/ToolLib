import Base from "../../Core/Base.js";
import MethodOverload from "../../Core/MethodOverload.js";
import Exception from "../../Exception/Exception.js";
import MemberAccessException from "../../Exception/MemberAccessException.js";
import GamePadButtonPattern from "./GamePadButtonPattern.js";

export default class GamePadMapping extends Base {
    static get Null() {
        return new GamePadMappingNull();
    }

    static get Generic() {
        return new GamePadMappingGeneric();
    }

    static get Xbox360() {
        return new GamePadMappingXbox360();
    }

    static get PlayStation3() {
        return new GamePadMappingPlayStation3();
    }

    static get PlayStation4() {
        return new GamePadMappingPlayStation4();
    }

    static get PlayStation5() {
        return new GamePadMappingPlayStation5();
    }

    static get SwitchPro() {
        return new GamePadMappingSwitchPro();
    }

    static get SwitchJoyConLeft() {
        return new GamePadMappingSwitchJoyConLeft();
    }

    static get SwitchJoyConRight() {
        return new GamePadMappingSwitchJoyConRight();
    }

    static get SwitchJoyConLeftAndRight() {
        return new GamePadMappingSwitchJoyConLeftAndRight();
    }

    #buttonPattern = GamePadButtonPattern.ABYX;

    #dPadUp = -1;

    #dPadDown = -1;

    #dPadLeft = -1;

    #dPadRight = -1;

    #start = -1;

    #back = -1;

    #home = -1;

    #share = -1;

    #leftStick = -1;

    #rightStick = -1;

    #leftShoulder = -1;

    #rightShoulder = -1;

    #leftSmallShoulderLeft = -1;

    #rightSmallShoulderLeft = -1;

    #leftSmallShoulderRight = -1;

    #rightSmallShoulderRight = -1;

    #touchPadButton = -1;

    #bigButton = -1;

    #a = -1;

    #b = -1;

    #x = -1;

    #y = -1;

    #leftThumbstickLeft = -1;

    #rightTrigger = -1;

    #leftTrigger = -1;

    #rightThumbstickUp = -1;

    #rightThumbstickDown = -1;

    #rightThumbstickRight = -1;

    #rightThumbstickLeft = -1;

    #leftThumbstickUp = -1;

    #leftThumbstickDown = -1;

    #leftThumbstickRight = -1;

    static #_constructor = function (...params) {
        GamePadMapping.#_constructor = MethodOverload()
            .Add([], function () { });

        return GamePadMapping.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        if (new.target === GamePadMapping) {
            throw new MemberAccessException(Exception.GetResourceString("Acc_CreateAbstEx", "GamePadMapping"));
        }

        Base.DefineProperties(this, {
            ButtonPattern: {
                get() {
                    return this.#buttonPattern;
                },
                set: MethodOverload()
                    .Add([GamePadButtonPattern], function (value) {
                        this.#buttonPattern = value;
                    })
            },
            Home: {
                get() {
                    return this.#home;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#home = value;
                    })
            },
            Share: {
                get() {
                    return this.#share;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#share = value;
                    })
            },
            DPadUp: {
                get() {
                    return this.#dPadUp;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#dPadUp = value;
                    })
            },
            DPadDown: {
                get() {
                    return this.#dPadDown;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#dPadDown = value;
                    })
            },
            DPadLeft: {
                get() {
                    return this.#dPadLeft;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#dPadLeft = value;
                    })
            },
            DPadRight: {
                get() {
                    return this.#dPadRight;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#dPadRight = value;
                    })
            },
            Start: {
                get() {
                    return this.#start;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#start = value;
                    })
            },
            Back: {
                get() {
                    return this.#back;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#back = value;
                    })
            },
            LeftStick: {
                get() {
                    return this.#leftStick;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftStick = value;
                    })
            },
            RightStick: {
                get() {
                    return this.#rightStick;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightStick = value;
                    })
            },
            LeftShoulder: {
                get() {
                    return this.#leftShoulder;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftShoulder = value;
                    })
            },
            RightShoulder: {
                get() {
                    return this.#rightShoulder;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightShoulder = value;
                    })
            },
            LeftSmallShoulderLeft: {
                get() {
                    return this.#leftSmallShoulderLeft;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftSmallShoulderLeft = value;
                    })
            },
            RightSmallShoulderLeft: {
                get() {
                    return this.#rightSmallShoulderLeft;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightSmallShoulderLeft = value;
                    })
            },
            LeftSmallShoulderRight: {
                get() {
                    return this.#leftSmallShoulderRight;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftSmallShoulderRight = value;
                    })
            },
            RightSmallShoulderRight: {
                get() {
                    return this.#rightSmallShoulderRight;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightSmallShoulderRight = value;
                    })
            },
            TouchPadButton: {
                get() {
                    return this.#touchPadButton;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#touchPadButton = value;
                    })
            },
            BigButton: {
                get() {
                    return this.#bigButton;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#bigButton = value;
                    })
            },
            A: {
                get() {
                    return this.#a;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#a = value;
                    })
            },
            B: {
                get() {
                    return this.#b;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#b = value;
                    })
            },
            X: {
                get() {
                    return this.#x;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#x = value;
                    })
            },
            Y: {
                get() {
                    return this.#y;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#y = value;
                    })
            },
            LeftThumbstickLeft: {
                get() {
                    return this.#leftThumbstickLeft;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftThumbstickLeft = value;
                    })
            },
            LeftThumbstickRight: {
                get() {
                    return this.#leftThumbstickRight;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftThumbstickRight = value;
                    })
            },
            LeftThumbstickUp: {
                get() {
                    return this.#leftThumbstickUp;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftThumbstickUp = value;
                    })
            },
            LeftThumbstickDown: {
                get() {
                    return this.#leftThumbstickDown;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftThumbstickDown = value;
                    })
            },
            RightTrigger: {
                get() {
                    return this.#rightTrigger;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightTrigger = value;
                    })
            },
            LeftTrigger: {
                get() {
                    return this.#leftTrigger;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#leftTrigger = value;
                    })
            },
            RightThumbstickLeft: {
                get() {
                    return this.#rightThumbstickLeft;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightThumbstickLeft = value;
                    })
            },
            RightThumbstickRight: {
                get() {
                    return this.#rightThumbstickRight;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightThumbstickRight = value;
                    })
            },
            RightThumbstickUp: {
                get() {
                    return this.#rightThumbstickUp;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightThumbstickUp = value;
                    })
            },
            RightThumbstickDown: {
                get() {
                    return this.#rightThumbstickDown;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#rightThumbstickDown = value;
                    })
            }
        });

        return GamePadMapping.#_constructor.call(this, ...params);
    }
}

class GamePadMappingNull extends GamePadMapping { }

class GamePadMappingGeneric extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingGeneric.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.A = 0;
                this.B = 1;
                this.X = 2;
                this.Y = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
                this.BigButton = 16;
            });

        return GamePadMappingGeneric.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingGeneric.#_constructor.call(this, ...params);
    }
}

class GamePadMappingXbox360 extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingXbox360.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.A = 0;
                this.B = 1;
                this.X = 2;
                this.Y = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
                this.BigButton = 16;
                // required Model 1914
                this.Share = 17;
            });

        return GamePadMappingXbox360.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingXbox360.#_constructor.call(this, ...params);
    }
}

class GamePadMappingPlayStation3 extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingPlayStation3.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.A = 0;
                this.B = 1;
                this.X = 2;
                this.Y = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
                this.BigButton = 16;
            });

        return GamePadMappingPlayStation3.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingPlayStation3.#_constructor.call(this, ...params);
    }
}

class GamePadMappingPlayStation4 extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingPlayStation4.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.A = 0;
                this.B = 1;
                this.X = 2;
                this.Y = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
                this.BigButton = 16;
                this.TouchPadButton = 17;
            });

        return GamePadMappingPlayStation4.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingPlayStation4.#_constructor.call(this, ...params);
    }
}

class GamePadMappingPlayStation5 extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingPlayStation5.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.A = 0;
                this.B = 1;
                this.X = 2;
                this.Y = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
                this.BigButton = 16;
                this.TouchPadButton = 17;
            });

        return GamePadMappingPlayStation5.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingPlayStation5.#_constructor.call(this, ...params);
    }
}

class GamePadMappingSwitchPro extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingSwitchPro.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.Home = 16;
                this.Share = 17;
                this.B = 0;
                this.A = 1;
                this.Y = 2;
                this.X = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
            });

        return GamePadMappingSwitchPro.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingSwitchPro.#_constructor.call(this, ...params);
    }
}

class GamePadMappingSwitchJoyConLeft extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingSwitchJoyConLeft.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.Direction;
                this.B = 0;
                this.A = 1;
                this.Y = 2;
                this.X = 3;
                this.LeftSmallShoulderLeft = 4;
                this.LeftSmallShoulderRight = 5;
                this.LeftTrigger = 6;
                this.LeftShoulder = 8;
                this.Back = 9;
                this.LeftStick = 10;
                this.Share = 16;
            });

        return GamePadMappingSwitchJoyConLeft.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingSwitchJoyConLeft.#_constructor.call(this, ...params);
    }
}

class GamePadMappingSwitchJoyConRight extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingSwitchJoyConRight.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.Direction;
                this.B = 0;
                this.A = 1;
                this.Y = 2;
                this.X = 3;
                this.RightSmallShoulderLeft = 4;
                this.RightSmallShoulderRight = 5;
                this.RightTrigger = 7;
                this.RightShoulder = 8;
                this.Start = 9;
                this.RightStick = 10;
                this.Home = 16;
            });

        return GamePadMappingSwitchJoyConRight.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingSwitchJoyConRight.#_constructor.call(this, ...params);
    }
}

class GamePadMappingSwitchJoyConLeftAndRight extends GamePadMapping {
    static #_constructor = function (...params) {
        GamePadMappingSwitchJoyConLeftAndRight.#_constructor = MethodOverload()
            .Add([], function () {
                this.ButtonPattern = GamePadButtonPattern.ABYX;
                this.B = 0;
                this.A = 1;
                this.Y = 2;
                this.X = 3;
                this.LeftShoulder = 4;
                this.RightShoulder = 5;
                this.LeftTrigger = 6;
                this.RightTrigger = 7;
                this.Back = 8;
                this.Start = 9;
                this.LeftStick = 10;
                this.RightStick = 11;
                this.DPadUp = 12;
                this.DPadDown = 13;
                this.DPadLeft = 14;
                this.DPadRight = 15;
                this.Home = 16;
                this.Share = 17;
                this.LeftSmallShoulderLeft = 18;
                this.LeftSmallShoulderRight = 19;
                this.RightSmallShoulderLeft = 20;
                this.RightSmallShoulderRight = 21;
            });

        return GamePadMappingSwitchJoyConLeftAndRight.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        return GamePadMappingSwitchJoyConLeftAndRight.#_constructor.call(this, ...params);
    }
}