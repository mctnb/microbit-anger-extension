const expressions: any = {
    "expString1": ">:(",
    "expString2": ">:D",
    "expString3:": ">:|",
    "expString4": ">:O",
    "expString5": ">:/"
}

namespace Anger {
    export function interrupt() {
        basic.showString(expressions["expString" + randint(1,5)]);
    }

    export function jumpscare() {
        basic.showIcon(IconNames.Angry);
        basic.clearScreen();
    }
}