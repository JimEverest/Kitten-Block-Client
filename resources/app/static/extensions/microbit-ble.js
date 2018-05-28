/**
 * Created by Riven on 2018/2/28.
 */

const eventServiceUUID = 'E95D5404-251D-470A-A062-FA1922DFA9A8';

var MicrobitBleExtension = function () {

};

/**
 * @return {object} This extension's metadata.
 */
MicrobitBleExtension.prototype.getInfo = function () {
    return {
        id: 'MicrobitBle',

        name: 'MicrobitBle',
        color1: '#40BF4A',
        color2: '#2E8934',
        color3: '#2E8934',

        parser: 'bleCmd',

        blocks: [
            {
                opcode: 'dpadevent',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'DPAD Event [DPADEVENT]',
                arguments: {
                    DPADEVENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'A',
                        menu: 'DPadEvent'
                    }
                },
                func: 'dpadevent'
            }
        ],
        menus: {
            DPadEvent: ['A', 'B', 'C', 'D', '1', '2', '3', '4']
        },
        translation_map: {
            zh: {

            }
        }
    };
};

MicrobitBleExtension.prototype.noop = function () {
};

// todo only press down event here~
const dpadeventMap = {A: 1, B: 3, C: 5, D: 7, 1: 9, 2: 11, 3: 13, 4: 15};
MicrobitBleExtension.prototype.dpadevent = function (args) {
    let evt = dpadeventMap[args.DPADEVENT];
    if (evt){
        let cmd = [0x50, 0x04, evt, 0x00];
        return {devmsg: 1, type: 'ble', cmd: cmd, uuid: eventServiceUUID};
    }
};

Scratch.extensions.register(new MicrobitBleExtension());
