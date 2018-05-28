/**
 * Created by Riven on 2017/12/6.
 */

var SensorsExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
SensorsExtension.prototype.getInfo = function () {
    return {
        id: 'Sensors',

        name: 'Sensors',

        color1: '#4CBFE6',
        color2: '#3C95B2',
        color3: '#3C95B2',

        parser: 'sensorCmd',

        blocks: [
            {
                opcode: 'sensorAnalog',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Analog Sensor [SENSOR] Pin [PIN]',
                arguments: {
                    SENSOR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Sound',
                        menu: 'analogList'
                    },
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'A0',
                        menu: 'analogPin'
                    }
                },
                func: 'sensorAnalog',
                sepafter: 36
            },
            {
                opcode: 'sensorDigit',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Digital Sensor [SENSOR] Pin [PIN]',
                arguments: {
                    SENSOR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'PIR',
                        menu: 'digiList'
                    },
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '4',
                        menu: 'digiPin'
                    }
                },
                func: 'sensorDigit',
                sepafter: 36
            },
            {
                opcode: 'dht11',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'DHT11 [FUNC] Pin [PIN]',
                arguments: {
                    FUNC: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Temperature',
                        menu: 'dht11function'
                    },
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '13',
                        menu: 'digiPin'
                    }
                },
                func: 'dht11',
                sepafter: 36
            },
            {
                opcode: 'ds18b20Setup',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Setup 18B20 Pin [PIN]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '4',
                        menu: 'digiPin'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'ds18b20',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: '18B20 Temperature',
                func: 'ds18b20',
                sepafter: 36
            },
            {
                opcode: 'colorSensorWb',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Color Sensor WhiteBalance [SIG] S2[S2] S3[S3]',
                arguments: {
                    SIG: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '4',
                        menu: 'digiPin'
                    },
                    S2: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '7',
                        menu: 'digiPin'
                    },
                    S3: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '8',
                        menu: 'digiPin'
                    }
                },
                func: 'colorSensorWb'
            },
            {
                opcode: 'colorSensor',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Color Sensor [SIG] S2[S2] S3[S3] Mode[MODE]',
                arguments: {
                    SIG: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '4',
                        menu: 'digiPin'
                    },
                    S2: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '7',
                        menu: 'digiPin'
                    },
                    S3: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '8',
                        menu: 'digiPin'
                    },
                    MODE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Red',
                        menu: 'colorMode'
                    }
                },
                func: 'colorSensor',
                sepafter: 36
            },
            {
                opcode: 'importSensor',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Import Sensor [SENSOR]',
                arguments: {
                    SENSOR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'DigitalSensor',
                        menu: 'sensorCatalog'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'parsecmd',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Parser Sensor Command',
                func: 'noop'
            }
        ],
        menus: {
            sensorCatalog: ['DigitalSensor', 'AnalogSensor', 'DHT11', 'DS18B20', 'Color'],
            analogList: ['Sound', 'Light', 'Potential', 'Soil', 'RainDrop', 'Flame', 'Smoke'],
            digiList: ['PIR', 'TRACER', 'TOUCH', 'Soil', 'RainDrop', 'Flame', 'Smoke', 'Hall', 'Button'],
            digiPin: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                'A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogPin: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogWritePin: ['3', '5', '6', '9', '10', '11'],
            dht11function: ['Temperature', 'Humidity'],
            colorMode: ['Red', 'Green', 'Blue', 'Alpha']
        },
        translation_map: {
            zh: {
                name: '传感器',
                sensorAnalogSetup: '配置 模拟传感器 [SENSOR] 引脚 [PIN]',
                sensorAnalog: '模拟传感器 [SENSOR] 引脚 [PIN]',
                sensorDigitSetup: '配置 数字传感器 [SENSOR] 引脚 [PIN]',
                sensorDigit: '数字传感器 [SENSOR] 引脚 [PIN]',
                dht11Setup: '配置 DHT11 引脚 [PIN]',
                dht11: 'DHT11 [FUNC] 引脚 [PIN]',
                ds18b20Setup: '配置 18B20 引脚 [PIN]',
                ds18b20: 'DS18B20 温度',
                importSensor: '导入传感器 [SENSOR]',
                sensorCatalog: {'DigitalSensor': '数字传感器', 'AnalogSensor': '模拟传感器'},
                parsecmd: '解析传感器命令',
                analogList: {'Sound': '声音', 'Light': '光线', 'Potential': '电位器',
                    'Soil': '土壤', 'RainDrop': '雨滴', 'Flame': '火焰', 'Smoke': '烟雾'},
                digiList: {'PIR': '人体感应', 'TRACER': '寻迹', 'TOUCH': '触摸', 'Soil': '土壤',
                    'RainDrop': '雨滴', 'Flame': '火焰', 'Smoke': '烟雾', 'Hall': '霍尔效应管', 'Button': '按键'},
                dht11function: {'Temperature': '温度', 'Humidity': '湿度'}

            }
        }
    };
};

const analogCommandMap = {Sound: 0x1, Light: 0x2, Potential: 0x3, Soil: 0x4, RainDrop: 0x5, Flame: 0x6, Smoke: 0x7};
const digitalCommandMap = {PIR: 0x1, TRACER: 0x2, TOUCH: 0x3, Soil: 0x4, RainDrop: 0x5, Flame: 0x6, Smoke: 0x7, Hall: 0x8, Button: 0x9};
const analogPinMap = {'A0': 14, 'A1': 15, 'A2': 16, 'A3': 17, 'A4': 18, 'A5': 19};
const dht11FuncMap = {Temperature: 0x1, Humidity: 0x2};

SensorsExtension.prototype.noop = function () {
};

SensorsExtension.prototype.sensorDigit = function (args) {
    const sensor = digitalCommandMap[args.SENSOR];
    if (args.PIN in analogPinMap){
        args.PIN = analogPinMap[args.PIN];
    }
    let cmd = `S2 ${sensor} ${args.PIN}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Sensors.parser'};
};

SensorsExtension.prototype.sensorAnalog = function (args) {
    const sensor = analogCommandMap[args.SENSOR];
    args.PIN = analogPinMap[args.PIN];
    let cmd = `S4 ${sensor} ${args.PIN}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Sensors.parser'};
};

SensorsExtension.prototype.dht11 = function (args) {
    const mode = dht11FuncMap[args.FUNC];
    if (args.PIN in analogPinMap){
        args.PIN = analogPinMap[args.PIN];
    }
    let cmd = `S6 ${mode} ${args.PIN}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Sensors.parser'};
};

SensorsExtension.prototype.ds18b20 = function (args) {
    let cmd = `S8\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Sensors.parser'};
};

SensorsExtension.prototype.colorSensor = function (args) {
    const modeMap = {Red: 0, Green: 1, Blue: 2, Alpha: 3};
    let cmd = `S9 ${args.SIG} ${args.S2} ${args.S3} ${modeMap[args.MODE]}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'Sensors.parser'};
};

SensorsExtension.prototype.colorSensorWb = function (args) {
    let cmd = `S10 ${args.SIG} ${args.S2} ${args.S3}\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

SensorsExtension.prototype.sensorCmd = function (msg) {
    let tmp = msg.trim().split(' ');
    tmp = tmp.filter(n => { return n !== ''});
    if (tmp[0].indexOf('S2') > -1){
        return parseInt(tmp[1], 10);
    } else if (tmp[0].indexOf('S4') > -1){
        return parseInt(tmp[1], 10);
    } else if (tmp[0].indexOf('S6') > -1){
        return parseFloat(tmp[1]);
    } else if (tmp[0].indexOf('S8') > -1){
        return parseFloat(tmp[1]);
    } else if (tmp[0].indexOf('S9') > -1){
        return parseInt(tmp[1], 10);
    }
};


Scratch.extensions.register(new SensorsExtension());
