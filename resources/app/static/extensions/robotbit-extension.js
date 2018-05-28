/**
 * Created by Riven on 2017/11/3 0003.
 */

var RobotbitExtension = function () {
};


/**
 * @return {object} This extension's metadata.
 */
RobotbitExtension.prototype.getInfo = function () {
    return {
        id: 'RobotBit',

        name: 'RobotBit',
        color1: '#1395BA',
        color2: '#107895',
        color3: '#107895',

        blocks: [
            {
                opcode: 'motorspeed',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Motor [MOTOR] Move [SPEED]',
                arguments: {
                    MOTOR: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'motorIndex',
                        defaultValue: 'M1A'
                    },
                    SPEED: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'stepper',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Stepper [STEPPER] Turn [DIR]',
                arguments: {
                    STEPPER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'M1',
                        menu: 'stepperIndex'
                    },
                    DIR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'FORWARD',
                        menu: 'stepperDir'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'stop',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Stop',
                arguments: {},
                func: 'noop'
            },
            {
                opcode: 'servo',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Servo [CHANNEL] Degree [DEGREE]',
                arguments: {
                    CHANNEL: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'S1',
                        menu: 'servoIndex'
                    },
                    DEGREE: {
                        type: Scratch.ArgumentType.SLIDERSERVO,
                        defaultValue: 90
                    }
                },
                func: 'noop',
                sepafter: 36
            },
            {
                opcode: 'rgb-pixel',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'RGB [INDEX] [COLOR]',
                arguments: {
                    INDEX: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'rgbPix',
                        defaultValue: '1'
                    },
                    COLOR: {
                        type: Scratch.ArgumentType.COLORRGB
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'rgb-show',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'RGB Show',
                func: 'noop'
            }
            /*
            {
                opcode: 'ultrasonic',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Ultrasonic [PIN]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    }
                },
                func: 'noop'
            }
            */
        ],
        menus: {
            motorIndex: ['M1A', 'M1B', 'M2A', 'M2B'],
            stepperIndex: ['M1', 'M2'],
            stepperDir: ['FORWARD', 'BACKWARD'],
            servoIndex: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
            rgbPix: ['All', '1', '2', '3', '4']
        },
        translation_map: {
            zh: {
                'motorspeed': '电机 [MOTOR] 转动速度 [SPEED]',
                'stepper': '步进电机 [STEPPER] 方向 [DIR]',
                'stop': '停止',
                'servo': '舵机 [CHANNEL] 角度 [DEGREE]',
                'ultrasonic': '超声波 [PIN]',
                'rgb-show': 'RGB 显示'
            }
        }
    };
};

RobotbitExtension.prototype.noop = function () {
};

Scratch.extensions.register(new RobotbitExtension());
