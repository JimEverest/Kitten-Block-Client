/**
 * Created by Riven on 2017/9/25 0025.
 */
var ArduinoExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
ArduinoExtension.prototype.getInfo = function () {
    return {
        id: 'Arduino',

        name: 'Arduino',

        color1: '#00979C',
        color2: '#008184',
        color3: '#008184',

        parser: 'parseCmd',

        blocks: [
            {
                opcode: 'arduinostart',
                blockType: Scratch.BlockType.CONDITIONAL,
                blockAllThreads: false,
                branchCount: 2,
                isTerminal: true,
                message2: 'loop',
                text: 'Arduino Setup',
                hatType: true,
                func: 'noop',
            },
            {
                opcode: 'serialreadline',
                blockType: Scratch.BlockType.CONDITIONAL,
                blockAllThreads: false,
                branchCount: 1,
                isTerminal: false,
                text: 'Serial Readline',
                func: 'noop'
            },
            {
                opcode: 'serialbegin',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Serial Begin [BAUD]',
                arguments: {
                    BAUD: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 115200
                    }
                },
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'pinmode',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Pin Mode [PIN] [MODE]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '13',
                        menu: 'digiPin'
                    },
                    MODE: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'pinMode',
                        defaultValue: 'OUTPUT'
                    }
                },
                func: 'pinMode'
            },
            {
                opcode: 'digitalwrite',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Digital Write [PIN] [VALUE]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '13',
                        menu: 'digiPin'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.NUMBER,
                        menu: 'level',
                        defaultValue: 'HIGH'
                    }
                },
                func: 'digitalWrite'
            },
            {
                opcode: 'analogwrite',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Analog Write [PIN] [VALUE]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'analogWritePin',
                        defaultValue: '3'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.SLIDERANALOGWR,
                        defaultValue: 120
                    }
                },
                func: 'analogWrite'
            },
            {
                opcode: 'digitalread',
                blockType: Scratch.BlockType.BOOLEAN,
                blockAllThreads: false,
                text: 'Digital Read [PIN]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '3',
                        menu: 'digiPin'
                    }
                },
                func: 'digitalRead'
            },
            {
                opcode: 'analogread',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Analog Read [PIN]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'A0',
                        menu: 'analogPin'
                    }
                },
                func: 'analogRead',
                sepafter: 36
            },
            {
                opcode: 'led',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LED [PIN] [VALUE]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '13',
                        menu: 'digiPin'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'onoff',
                        defaultValue: 'ON'
                    }
                },
                func: 'led'
            },
            {
                opcode: 'mapping',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Map [VAL] from [FROMLOW]~[FROMHIGH] to [TOLOW]~[TOHIGH]',
                arguments: {
                    VAL: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 100
                    },
                    FROMLOW: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0
                    },
                    FROMHIGH: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 255
                    },
                    TOLOW: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0
                    },
                    TOHIGH: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1024
                    }
                },
                func: 'mapping'
            },
            {
                opcode: 'println',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Serial Print [TEXT]',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello World'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'printvalue',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Serial Print [TEXT] = [VALUE]',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Apple'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 123
                    }
                },
                func: 'noop'
            }
        ],
        menus: {
            pinMode: ['INPUT', 'OUTPUT', 'INPUT_PULLUP'],
            level: ['HIGH', 'LOW'],
            onoff: ['ON', 'OFF'],
            digiPin: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                'A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogPin: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogWritePin: ['3', '5', '6', '9', '10', '11']
        },
        translation_map: {
            zh: {
                'pinmode': '引脚模式 [PIN] [MODE]',
                'digitalwrite': '数字写 [PIN] [VALUE]',
                'analogwrite': '模拟写 [PIN] [VALUE]',
                'digitalread': '数字读 [PIN]',
                'led': 'LED灯 [PIN] [VALUE]',
                'analogread': '模拟读 [PIN]',
                'ultrasonic': '超声波距离 trig[TRIG] echo[ECHO]',
                'mapping': '映射 [VAL] 从 [FROMLOW]~[FROMHIGH] 到 [TOLOW]~[TOHIGH]',
                'println': '串口打印 [TEXT]',
                'printvalue': '串口输出 [TEXT] = [VALUE]',
                'serialbegin': '串口 开始[BAUD]',
                'serialreadline': '串口 行读取',
                // menus
                'pinMode': {'INPUT': '输入', 'OUTPUT': '输出', 'INPUT_PULLUP': '上拉输入'},
                'level': {'HIGH': '高', 'LOW': '低'},
                'onoff': {'ON': '开', 'OFF': '关'}
            }
        }
    };
};

ArduinoExtension.prototype.noop = function () {
};

const pinModeMap = {INPUT: 0, OUTPUT: 1, INPUT_PULLUP: 2};
const levelMap = {HIGH: 1, LOW: 0};
const onoffMap = {ON: 0, OFF: 1};

ArduinoExtension.prototype.pinMode = function (args) {
    let cmd = 'M1 ' + args.PIN + ' ' + pinModeMap[args.MODE] + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ArduinoExtension.prototype.digitalWrite = function (args) {
    if (isNaN(args.VALUE)){
        args.VALUE = levelMap[args.VALUE];
    }
    let cmd = 'M2 ' + args.PIN + ' ' + args.VALUE + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ArduinoExtension.prototype.led = function (args) {
    if (isNaN(args.VALUE)){
        args.VALUE = onoffMap[args.VALUE];
    }
    let cmd = 'M2 ' + args.PIN + ' ' + args.VALUE + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ArduinoExtension.prototype.analogWrite = function (args) {
    let cmd = 'M4 ' + args.PIN + ' ' + args.VALUE + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ArduinoExtension.prototype.digitalRead = function (args) {
    let cmd = 'M3 ' + args.PIN + '\r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Arduino.parser'};
};

ArduinoExtension.prototype.analogRead = function (args) {
    let cmd = 'M5 ' + args.PIN + '\r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Arduino.parser'};
};

ArduinoExtension.prototype.ultrasonic = function (args) {
    let cmd = 'M250 ' + args.TRIG + ' ' + args.ECHO + '\r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Arduino.parser'};
};

ArduinoExtension.prototype.mapping = function (args) {
    const x = args.VAL;
    const in_min = args.FROMLOW;
    const in_max = args.FROMHIGH;
    const out_min = args.TOLOW;
    const out_max = args.TOHIGH;
    return parseFloat(((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)).toFixed(2);
};

ArduinoExtension.prototype.parseCmd = function (msg) {
    let tmp = msg.trim().split(' ');
    tmp = tmp.filter(n => { return n !== ''});
    if (tmp[0].indexOf('M3') > -1){
        return parseInt(tmp[2], 10);
    } else if (tmp[0].indexOf('M5') > -1){
        return parseInt(tmp[2], 10);
    } else if (tmp[0].indexOf('M250') > -1){
        return parseInt(tmp[1], 10);
    }
};

Scratch.extensions.register(new ArduinoExtension());
