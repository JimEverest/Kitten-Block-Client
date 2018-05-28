/**
 * Created by Riven on 2017/12/13.
 */

var ActuatorExtension = function () {
};


/**
 * @return {object} This extension's metadata.
 */
ActuatorExtension.prototype.getInfo = function () {
    return {
        id: 'Actuator',

        name: 'Actuator',
        color1: '#40BF4A',
        color2: '#2E8934',
        color3: '#2E8934',

        parser: 'actuatorCmd',

        blocks: [
            {
                opcode: 'servoSetup',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Servo Setup Pin [PIN]',
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
                opcode: 'servoWrite',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Servo Write [PIN] Degree[DEG]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '4',
                        menu: 'digiPin'
                    },
                    DEG: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 90
                    }
                },
                func: 'servoWrite',
                sepafter: 36
            },
            {
                opcode: 'buzzer',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Buzzer Pin [PIN] Freq [FREQ] Delay [DELAY]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '5',
                        menu: 'digiPin'
                    },
                    FREQ: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 300
                    },
                    DELAY: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 500
                    }
                },
                func: 'buzzer'
            },
            {
                opcode: 'music',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Music Pin [PIN] Notes [NOTES]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '5',
                        menu: 'digiPin'
                    },
                    NOTES: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'g5:1 d c g4:2 b:1 c5:3 '
                    }
                },
                func: 'music',
                sepafter: 36
            },
            {
                opcode: 'relay',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Relay Pin [PIN] [ONOFF]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '5',
                        menu: 'digiPin'
                    },
                    ONOFF: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'ON',
                        menu: 'onoff'
                    }
                },
                func: 'relay',
                blockDisabled: true
            },
            {
                opcode: 'motorModule',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Motor [MOTOR] DIR[DIR] PWM[PWM] SPEED [SPEED]',
                arguments: {
                    MOTOR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'L298N',
                        menu: 'motorList'
                    },
                    DIR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '3',
                        menu: 'digiPin'
                    },
                    PWM: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '5',
                        menu: 'analogWritePin'
                    },
                    SPEED: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    }
                },
                func: 'motorModule'
            },
            {
                opcode: 'motorH',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Motor [MOTOR] IN1[IN1] IN2[IN2] SPEED [SPEED]',
                arguments: {
                    MOTOR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'DRV8833',
                        menu: 'motorHBridge'
                    },
                    IN1: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '3',
                        menu: 'analogWritePin'
                    },
                    IN2: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '5',
                        menu: 'analogWritePin'
                    },
                    SPEED: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    }
                },
                func: 'motorH'
            },
            {
                opcode: 'stepper',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Stepper [STEPPER] Dir [PINDIR] Pulse [PINPULSE]',
                arguments: {
                    STEPPER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'A4988',
                        menu: 'stepperList'
                    },
                    PINDIR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '7',
                        menu: 'digiPin'
                    },
                    PINPULSE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '8',
                        menu: 'digiPin'
                    }
                },
                func: 'noop',
                blockDisabled: true,
                sepafter: 36
            },
            {
                opcode: 'importActuator',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Import Actuator [ACT]',
                arguments: {
                    ACT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Motor',
                        menu: 'actuatorCatalog'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'parsecmd',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Parser Actuator Command',
                func: 'noop'
            }
        ],
        menus: {
            digiPin: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                'A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogWritePin: ['3', '5', '6', '9', '10', '11'],
            onoff: ['ON', 'OFF'],
            actuatorCatalog: ['Buzzer', 'Motor', 'Stepper', 'Relay'],
            outputList: ['Relay', 'Digital'],
            motorList: ['L298N', 'L9110'],
            motorHBridge: ['DRV8833', 'H-Bridge'],
            stepperList: ['A4988']
        },
        translation_map: {
            zh: {
                name: '执行器',
                servo: '舵机 引脚 [PIN] 角度 [DEGREE]',
                buzzer: '蜂鸣器 引脚 [PIN] 频率 [FREQ] 延时 [DELAY]',
                music: '音乐 引脚 [PIN] 音符 [NOTES]',
                output: '输出 [OUTPUT] 引脚 [PIN] [ONOFF]',
                dcmotor: '马达 [MOTOR] +[IN1] -[IN2] 速度 [SPEED]',
                stepper: '步进电机 [STEPPER] 方向 [PINDIR] 脉冲 [PINPULSE]',
                importActuator: '导入执行器 [ACT]',
                parsecmd: '解析执行器指令'
            }
        }
    };
};

ActuatorExtension.prototype.noop = function () {
};

ActuatorExtension.prototype.servoWrite = function (args) {
    let cmd = `A2 ${args.PIN} ${args.DEG}\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ActuatorExtension.prototype.buzzer = function (args) {
    let cmd = `A3 ${args.PIN} ${args.FREQ} ${args.DELAY}`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ActuatorExtension.prototype.note = function (args) {
    let cmd = `A4 ${args.PIN} ${args.NOTE}`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ActuatorExtension.prototype.music = function (args) {
    let cmd = `A5 ${args.PIN} ${args.NOTES}`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ActuatorExtension.prototype.motorModule = function (args) {
    let cmd = `A8 ${args.DIR} ${args.PWM} ${args.SPEED}`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

ActuatorExtension.prototype.motorH = function (args) {
    let cmd = `A9 ${args.IN1} ${args.IN2} ${args.SPEED}`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

Scratch.extensions.register(new ActuatorExtension());
