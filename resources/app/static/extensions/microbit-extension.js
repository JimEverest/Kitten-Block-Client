/**
 * Created by Riven on 2017/10/25 0025.
 */

var MicrobitExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
MicrobitExtension.prototype.getInfo = function () {
    return {
        id: 'MicroBit',

        name: 'MicroBit',
        color1: '#F16C20',
        color2: '#C2561A',
        color3: '#C2561A',

        blocks: [
            {
                opcode: 'showledmat',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Show ICON [ICON]',
                arguments: {
                    ICON: {
                        type: Scratch.ArgumentType.BITLEDS,
                        defaultValue: '90009:09090:00900:09090:90009'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'showicon',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Show ICON [ICON]',
                arguments: {
                    ICON: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'imageMenu',
                        defaultValue: 'HEART'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'showstring',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Show String [STR]',
                arguments: {
                    STR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'hello'
                    }
                },
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'digiwrite',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Digital Write [PIN] value [LEVEL]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'P0',
                        menu: 'bitPins'
                    },
                    LEVEL: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'digiread',
                blockType: Scratch.BlockType.BOOLEAN,
                blockAllThreads: false,
                text: 'Digital Read [PIN]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'P0',
                        menu: 'bitPins'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'analogwrite',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Analog Write [PIN] value [VALUE]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'P0',
                        menu: 'bitPins'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 123
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'analogread',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Analog Read [PIN]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'P0',
                        menu: 'bitPins'
                    }
                },
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'musicplay',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Music Play [MUSIC]',
                arguments: {
                    MUSIC: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'musicMenu',
                        defaultValue: 'NYAN'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'musicpitch',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Music Pitch Freq[FREQ] Delay[LEN]ms',
                arguments: {
                    FREQ: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 880
                    },
                    LEN: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 100
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'button',
                blockType: Scratch.BlockType.BOOLEAN,
                blockAllThreads: false,
                text: 'Button [BUTTON]',
                arguments: {
                    BUTTON: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'A',
                        menu: 'buttonMenu'
                    }
                },
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'accelerometer',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Accelero Meter [DIRECTION]',
                arguments: {
                    DIRECTION: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'accMenu',
                        defaultValue: 'x'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'gesture',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Gesture',
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'radioswitch',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Radio [SWITCH]',
                arguments: {
                    SWITCH: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'onoffMenu',
                        defaultValue: 'on'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'radiosend',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Radio Send [TEXT]',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'hello'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'radioreceive',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Radio Receive',
                arguments: {
                },
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'print',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'serial print [TEXT]',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'hello'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'printvalue',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'serial print [TEXT] = [VALUE]',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'hello'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 100
                    }
                },
                func: 'noop'
            }
        ],
        menus: {
            imageMenu: ['HEART', 'HEART_SMALL', 'HAPPY', 'SMILE', 'SAD', 'CONFUSED',
                'ANGRY', 'ASLEEP', 'SURPRISED', 'SILLY', 'YES', 'NO', 'ARROW_N', 'ARROW_E', 'ARROW_S', 'ARROW_W'],
            musicMenu: ['DADADADUM', 'ENTERTAINER', 'PRELUDE', 'ODE', 'NYAN', 'RINGTONE',
                'FUNK', 'BLUES', 'BIRTHDAY', 'WEDDING', 'FUNERAL', 'PUNCHLINE', 'PYTHON',
                'BADDY', 'CHASE', 'BA_DING', 'WAWAWAWAA', 'JUMP_UP', 'JUMP_DOWN', 'POWER_UP', 'POWER_DOWN'],
            accMenu: ['x', 'y', 'z'],
            onoffMenu: ['on', 'off'],
            buttonMenu: ['A', 'B', 'A+B'],
            bitPins: ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8',
                'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16', 'P19', 'P20']

        },
        translation_map: {
            zh: {
                'button': '按键 [BUTTON]',
                'shownum': '显示数字 [NUMBER]',
                'showicon': '显示图标 [ICON]',
                'showstring': '显示文字 [STR]',
                'digiwrite': '数字写 [PIN] 值 [LEVEL]',
                'analogwrite': '模拟写 [PIN] 值 [VALUE]',
                'analogread': '模拟读 [PIN]',
                'digiread': '数字读 [PIN]',
                'musicplay': '音乐播放 [MUSIC]',
                'musicpitch': '音调 频率[FREQ] 延时[LEN]毫秒',
                'accelerometer': '加速度计 [DIRECTION]',
                'gesture': '手势',
                'compass': '指南针',
                'radioswitch': '无线开关 [SWITCH]',
                'radiosend': '无线发送 [TEXT]',
                'radioreceive': '无线接收',
                'print': '串口打印 [TEXT]',
                'printvalue': '串口打印 [TEXT] = [VALUE]'
            }
        }

    };
};

MicrobitExtension.prototype.noop = function () {
};

Scratch.extensions.register(new MicrobitExtension());
