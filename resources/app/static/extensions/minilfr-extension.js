/**
 * Created by Riven on 2017/10/19 0019.
 */

var MinilfrExtension = function () {
};

MinilfrExtension.prototype.getInfo = function () {
    return {
        id: 'MiniLFR',

        name: 'MiniLFR',
        color1: '#6A7782',
        color2: '#424A51',
        color3: '#424A51',

        parser: 'parseCmd',

        blocks: [
            {
                opcode: 'spotlight',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Spotlight Left[LEFT] Right[RIGHT]',
                arguments: {
                    LEFT: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'eyeIndex',
                        defaultValue: 'ON'
                    },
                    RIGHT: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'eyeIndex',
                        defaultValue: 'ON'
                    }
                },
                func: 'spotlight'
            },
            {
                opcode: 'rgb-brightness',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'RGB Brightness [BRIGHT]',
                arguments: {
                    BRIGHT: {
                        type: Scratch.ArgumentType.SLIDERANALOGWR,
                        defaultValue: 100
                    }
                },
                func: 'rgbbrightness'
            },
            {
                opcode: 'rgb-bottom',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Bottom RGB [INDEX] [COLOR]',
                arguments: {
                    INDEX: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'rgbIndex',
                        defaultValue: 'ALL'
                    },
                    COLOR: {
                        type: Scratch.ArgumentType.COLORRGB
                    }
                },
                func: 'rgbBottom'
            },
            {
                opcode: 'rgb-bottom-off',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Bottom RGB Off',
                arguments: {},
                func: 'rgbBottomOff'
            },
            {
                opcode: 'rgb-head',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Head RGB [INDEX] [COLOR]',
                arguments: {
                    INDEX: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'rgbIndex',
                        defaultValue: 'ALL'
                    },
                    COLOR: {
                        type: Scratch.ArgumentType.COLORRGB
                    }
                },
                func: 'rgbHead'
            },
            {
                opcode: 'rgb-head-off',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Bottom Head Off',
                arguments: {},
                func: 'rgbHeadOff'
            },
            {
                opcode: 'rgb-ring',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Ring RGB [INDEX] [COLOR]',
                arguments: {
                    INDEX: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'rgbPix',
                        defaultValue: 'ALL'
                    },
                    COLOR: {
                        type: Scratch.ArgumentType.COLORRGB
                    }
                },
                func: 'rgbRing'
            },
            {
                opcode: 'rgb-ring-off',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Ring RGB Off',
                arguments: {},
                func: 'rgbRingOff',
                sepafter: 36
            },
            {
                opcode: 'wheelspeed',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Wheel Speed Left[SPDL] Right[SPDR]',
                arguments: {
                    SPDL: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    },
                    SPDR: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    }
                },
                func: 'wheelspeed'
            },
            {
                opcode: 'wheelspeeddelay',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Wheel Speed Left[SPDL] Right[SPDR] Delay[DELAY]ms',
                arguments: {
                    SPDL: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    },
                    SPDR: {
                        type: Scratch.ArgumentType.SLIDER,
                        defaultValue: 100
                    },
                    DELAY: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1000
                    }
                },
                func: 'wheelspeeddelay'
            },
            {
                opcode: 'stop',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Car Stop',
                func: 'stop',
                sepafter: 36
            },

            {
                opcode: 'buzzer',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Buzzer [FREQ]hz [DURATION]ms',
                arguments: {
                    FREQ: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 200
                    },
                    DURATION: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 500
                    }
                },
                func: 'buzzer'
            },
            {
                opcode: 'playmusic',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Play Music [NOTE]',
                arguments: {
                    NOTE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'g5:1 d c g4:2 b:1 c5:3 '
                    }
                },
                func: 'playmusic'
            },
            {
                opcode: 'sensor',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Linefollow Sensor [SENSOR]',
                arguments: {
                    SENSOR: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 2,
                        menu: 'lfrSensor'
                    }
                },
                func: 'sensor'
            },
            {
                opcode: 'distance',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Distance',
                func: 'distance'
            },
            {
                opcode: 'power',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Power',
                func: 'power'
            },
            {
                opcode: 'button',
                blockType: Scratch.BlockType.BOOLEAN,
                blockAllThreads: false,
                text: 'Button [BUTTON]',
                arguments: {
                    BUTTON: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '1',
                        menu: 'buttonList'
                    }
                },
                func: 'button'
            },
            {
                opcode: 'wheninfraget',
                blockType: Scratch.BlockType.HAT,
                blockAllThreads: false,
                text: 'If Infra Got [CMD]',
                arguments: {
                    CMD: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'infraCmd',
                        defaultValue: 'PLAY'
                    }
                },
                func: 'wheninfraget'
            },
            {
                opcode: 'infrarx',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Infra Receive',
                func: 'infrarx'
            },
            {
                opcode: 'infratx',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Infra Send [SEND]',
                arguments: {
                    SEND: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '1234'
                    }
                },
                func: 'infratx'
            },
            {
                opcode: 'mp3play',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'MP3 Play',
                func: 'mp3play'
            },
            {
                opcode: 'mp3loop',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'MP3 [DIR]',
                arguments: {
                    DIR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'NEXT',
                        menu: 'mp3direction'
                    }
                },
                func: 'mp3loop'
            },
            {
                opcode: 'mp3volumn',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'MP3 Volumn [VOLUMN]',
                arguments: {
                    VOLUMN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'UP',
                        menu: 'volumnList'
                    }
                },
                func: 'mp3volumn',
                sepafter: 36
            },
            {
                opcode: 'ledstring',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LED Matrix [STR]',
                arguments: {
                    STR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'hello world'
                    }
                },
                func: 'ledstring'
            },
            {
                opcode: 'ledmatrix',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LED Matrix [MAT]',
                arguments: {
                    MAT: {
                        type: Scratch.ArgumentType.LEDMATRIX,
                        defaultValue: '00000000024000000000042003c00000'
                    }
                },
                func: 'ledmatrix'
            },
            {
                opcode: 'ledmatrixclear',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LED Matrix Clear',
                func: 'ledmatrixclear'
            }
        ],
        menus: {
            motorIndex: ['LEFT', 'RIGHT', 'ALL'],
            eyeIndex: ['ON', 'OFF'],
            rgbIndex: ['LEFT', 'RIGHT', 'ALL'],
            noteIndex: ['Do', 'Re', 'Mi', 'Fa', 'So', 'Ra', 'Si'],
            beatIndex: ['1/8', '1/4', '1/2', '1', '2'],
            infraCmd: ['POWER', 'MENU', 'MUTE', 'MODE', '+', 'RETURN', 'BACK', 'PLAY', 'FORWARD', '0',
                '-', 'OK', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            colorMenu: ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'INDIEGO', 'BLUE', 'PURPLE', 'BLACK', 'WHITE'],
            rgbPix: ['ALL', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
            lfrSensor: ['0', '1', '2', '3', '4'],
            buttonList: ['1', '2'],
            volumnList: ['UP', 'DOWN'],
            mp3direction: ['NEXT', 'PREVIOUS']
        },
        translation_map: {
            zh: {
                'motorspeed': '小车电机 [MOTOR] 速度 [SPEED]',
                'carmove': '小车运动 前进[SPEED] 转向[TURN]',
                'wheelspeed': '车轮速度 左[SPDL] 右[SPDR]',
                'wheelspeeddelay': '车轮速度 左[SPDL] 右[SPDR] 延时[DELAY]ms',
                'stop': '小车停止',
                'sensor': '红外巡线传感器 [SENSOR]',
                'threshold': '阈值 [SENSOR]',
                'PID': 'PID [P] [I] [D]',
                'spotlight': '车头灯 左[LEFT] 右[RIGHT]',
                'distance': '超声波距离',
                'power': '小车电池电压',
                'button': '小车按键 [BUTTON]',
                'infrarx': '红外接收',
                'infratx': '红外发送 [SEND]',
                'wheninfraget': '当红外收到 [CMD]',
                'rgb-brightness': 'RGB亮度 [BRIGHT]',
                'rgb-bottom': '车底部RGB [INDEX] [COLOR]',
                'rgb-bottom-off': '车底部RGB 关闭',
                'rgb-head': '猫耳朵RGB [INDEX] [COLOR]',
                'rgb-head-off': '猫耳朵RGB 关闭',
                'rgb-ring': '灯环 RGB [INDEX] [COLOR]',
                'rgb-ring-off': '灯环RGB 关闭',
                'buzzer': '蜂鸣器 [FREQ]hz [DURATION]ms',
                'playmusic': '播放音乐 [NOTE]',
                'ledstring': 'LED矩阵 [STR]',
                'ledmatrix': 'LED矩阵 [MAT]',
                'lcdscreen': 'LCD屏幕 [TEXT]',
                'ledmatrixclear': 'LED矩阵 清屏',
                'mp3play': 'MP3 播放',
                'mp3volumn': 'MP3 音量 [VOLUMN]',
                'mp3loop': 'MP3 [DIR]',
                'mp3direction': {'NEXT': '下一首', 'PREVIOUS': '上一首'}
            },
            'zh-Hans': {
                'motorspeed': '馬達 [MOTOR] 速度 [SPEED]',
                'carmove': '移動速度 [SPEED] 轉向[TURN]',
                'wheelspeed': '車輪速度 左[SPDL] 右[SPDR]',
                'wheelspeeddelay': '車輪速度 左[SPDL] 右[SPDR] 延時[DELAY]ms',
                'stop': '停止移動',
                'sensor': '紅外巡線傳感器 [SENSOR]',
                'threshold': '閾值 [SENSOR]',
                'PID': 'PID [P] [I] [D]',
                'spotlight': '車頭燈 左[LEFT] 右[RIGHT]',
                'distance': '超聲波距離',
                'power': '小車電池電壓',
                'button': '小車按鍵 [BUTTON]',
                'infrarx': '紅外線接收訊息',
                'infratx': '紅外線發送 [SEND]',
                'wheninfraget': '當紅外線收到 [CMD]',
                'rgb-brightness': 'RGB亮度 [BRIGHT]',
                'rgb-bottom': '車底RGB [INDEX] [COLOR]',
                'rgb-bottom-off': '車底RGB 關閉',
                'rgb-head': '貓耳朵RGB [INDEX] [COLOR]',
                'rgb-head-off': '貓耳朵RGB 關閉',
                'rgb-ring': '燈環 RGB [INDEX] [COLOR]',
                'rgb-ring-off': '燈環RGB 關閉',
                'buzzer': '蜂鳴器 [FREQ]hz [DURATION]ms',
                'playmusic': '播放音樂 [NOTE]',
                'ledstring': 'LED矩陣 [STR]',
                'ledmatrix': 'LED矩陣 [MAT]',
                'lcdscreen': 'LCD屏幕 [TEXT]',
                'ledmatrixclear': 'LED矩陣 清屏',
                'mp3play': 'MP3 播放',
                'mp3volumn': 'MP3 音量 [VOLUMN]',
                'mp3loop': 'MP3 [DIR]',
                'mp3direction': {'NEXT': '下一首', 'PREVIOUS': '上一首'}
            },
            ko: {
                'motorspeed': '모터 속도 왼쪽 [MOTOR] 오른쪽 [SPEED]',
                'carmove': '小车运动 前进[SPEED] 转向[TURN]',
                'wheelspeed': '모터 속도 왼쪽[SPDL] 오른쪽 [SPDR]',
                'wheelspeeddelay': '[DELAY]ms 동안 모터 속도 왼쪽[SPDL] 오른쪽[SPDR]',
                'stop': '모터 정지',
                'sensor': '라인 센서 [SENSOR]',
                'spotlight': 'LED 왼쪽[LEFT] 오른쪽[RIGHT]',
                'distance': '장애물 거리 측정',
                'power': '전원 전압',
                'button': '버튼 [BUTTON]상태',
                'infrarx': '적외선 수신 값',
                'infratx': '적외선 송신 [SEND]',
                'wheninfraget': '적외선으로 [CMD]데이터를 수신했을 때',
                'rgb-brightness': 'RGB 밝기 [BRIGHT]',
                'rgb-bottom': '바닥 RGB LED [INDEX] [COLOR]',
                'rgb-bottom-off': '바닥 RGB LED 끄기',
                'rgb-head': '초음파 모듈 RGB LED [INDEX] [COLOR]',
                'rgb-head-off': 'RGB 초음파 모듈 링 끄기',
                'rgb-ring': 'RGB 라이트 링 [INDEX] [COLOR]',
                'rgb-ring-off': 'RGB 라이트 링 끄기',
                'buzzer': '부저 [FREQ]hz 로[DURATION]ms 재생',
                'playmusic': '음악 재생 [NOTE]',
                'ledstring': '매트릭스 화면 출력 [STR]',
                'ledmatrix': '매트릭스 화면 출력 [MAT]',
                'ledmatrixclear': '매트릭스 화면 초기화',
                'mp3play': 'MP3 재생',
                'mp3volumn': 'MP3 음량 [VOLUMN]'
            }
        }
    };
};

const eyeValueMap = {ON: 1, OFF: 0};
const motorIndexMap = {LEFT: 1, RIGHT: 2, ALL: 0};
const rgbIndexMap = {ALL: 0, LEFT: 1, RIGHT: 2};
const noteMap = {Do: 261, Re: 294, Mi: 329, Fa: 349, So: 392, Ra: 440, Si: 493};
const beatMap = {'1/8': 125, '1/4': 250, '1/2': 500, '1': 1000, '2': 2000};
const infraMap = {
    'FFA25D': 'POWER',
    'FF629D': 'MENU',
    'FFE21D': 'MUTE',
    'FF22DD': 'MODE',
    'FF02FD': '+',
    'FFC23D': 'RETURN',
    'FFE01F': 'BACK',
    'FFA857': 'PLAY',
    'FF906F': 'FORWARD',
    'FF6897': '0',
    'FF9867': '-',
    'FFB04F': 'OK',
    'FF30CF': '1',
    'FF18E7': '2',
    'FF7A85': '3',
    'FF10EF': '4',
    'FF38C7': '5',
    'FF5AA5': '6',
    'FF42BD': '7',
    'FF4AB5': '8',
    'FF52AD': '9'
};


const hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

MinilfrExtension.prototype.noop = function () {
};

MinilfrExtension.prototype.wheelspeed = function (args) {
    let cmd = `M200 ${args.SPDL} ${args.SPDR}\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.wheelspeeddelay = function (args) {
    let cmd = `M202 ${args.SPDL} ${args.SPDR} ${args.DELAY}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser', retry: 0, timeout: 2};
};

MinilfrExtension.prototype.stop = function (args) {
    let cmd = 'M200 0 0\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.sensor = function (args) {
    let cmd = 'M1 ' + args.SENSOR + '\r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser'};
};

MinilfrExtension.prototype.threshold = function (args) {
    let cmd = 'M4 ' + args.SENSOR + '\r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser'};
};

MinilfrExtension.prototype.pid = function (args) {
    let cmd = 'M3 ' + args.P + ' ' + args.I + ' ' + args.D + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.spotlight = function (args) {
    // todo: refact firmware to fix left right exchange
    let cmd = 'M6 ' + eyeValueMap[args.LEFT] + ' ' + eyeValueMap[args.RIGHT] + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.distance = function (args) {
    let cmd = 'M7 \r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser'};
};

MinilfrExtension.prototype.power = function (args) {
    let cmd = 'M8 \r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser'};
};

MinilfrExtension.prototype.button = function (args) {
    let cmd = `M9 ${args.BUTTON}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser'};
};

MinilfrExtension.prototype.infrarx = function (args) {
    let cmd = 'M11 \r\n';
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser'};
};

MinilfrExtension.prototype.infratx = function (args) {
    let cmd = 'M12 ' + args.SEND + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbbrightness = function (args) {
    let cmd = 'M14 ' + args.BRIGHT + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbHead = function (args) {
    const color = hexToRgb(args.COLOR);
    let cmd = 'M16 ' + rgbIndexMap[args.INDEX] + ' ' + color.r + ' ' + color.g + ' ' + color.b + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbHeadOff = function (args) {
    let cmd = 'M16 0 0 0 0\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbRing = function (args) {
    const color = hexToRgb(args.COLOR);
    if (args.INDEX === 'ALL'){
        args.INDEX = 0;
    }
    let cmd = 'M22 ' + args.INDEX + ' ' + color.r + ' ' + color.g + ' ' + color.b + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbRingOff = function (args) {
    let cmd = 'M22 0 0 0 0\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbBottom = function (args) {
    const color = hexToRgb(args.COLOR);
    let cmd = 'M13 ' + rgbIndexMap[args.INDEX] + ' ' + color.r + ' ' + color.g + ' ' + color.b + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.rgbBottomOff = function (args) {
    let cmd = 'M13 0 0 0 0\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.buzzer = function (args) {
    let cmd = 'M18 ' + args.FREQ + ' ' + args.DURATION + '\r\n';
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.playmusic = function (args) {
    let cmd = `M17 ${args.NOTE}\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.wheninfraget = function (args) {
    return true; // hat match filtered
};

MinilfrExtension.prototype.ledstring = function (args) {
    let cmd = `M20 ${args.STR}\r\n`;
    return {devmsg: 1, type: 'report', cmd: cmd, parser: 'MiniLFR.parser', retry: 0};
};

MinilfrExtension.prototype.ledmatrix = function (args) {
    let cmd = `M21 ${args.MAT}\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.ledmatrixclear = function (args) {
    let cmd = `M21 00000000000000000000000000000000\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.mp3play = function (args) {
    let cmd = `M30 0 0 100\r\n`;
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.mp3loop = function (args) {
    let cmd = `M30 0 1 100\r\n`;
    if (args.DIR === 'PREVIOUS'){
        cmd = `M30 1 0 100\r\n`;
    }
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.mp3volumn = function (args) {
    let cmd = `M30 0 1 500\r\n`;
    if (args.VOLUMN === 'UP'){
        cmd = `M30 1 0 500\r\n`;
    }
    return {devmsg: 1, type: 'cmd', cmd: cmd};
};

MinilfrExtension.prototype.parseCmd = function (msg) {
    let tmp = msg.trim().split(' ');
    tmp = tmp.filter(n => { return n !== ''});
    if (tmp[0].indexOf('M10') > -1){
        return parseInt(tmp[1], 10);
    } else if (tmp[0].indexOf('M11') > -1){
        if (infraMap.hasOwnProperty(tmp[1])){
            const infraCmd = infraMap[tmp[1]];
            return infraCmd;
        }
        if (tmp[1] === 'FFFFFFFF'){
            return 'None';
        }
        return tmp[1];
    } else if (tmp[0].indexOf('M20') > -1){
        return null;
    } else if (tmp[0].indexOf('M4') > -1){
        return parseInt(tmp[2], 10);
    } else if (tmp[0].indexOf('M7') > -1){
        return parseFloat(tmp[1]);
    } else if (tmp[0].indexOf('M8') > -1){
        return parseFloat(tmp[1]);
    } else if (tmp[0].indexOf('M9') > -1){
        return parseInt(tmp[1], 10);
    } else if (tmp[0].indexOf('M1') > -1){
        return parseInt(tmp[2], 10);
    }
};

Scratch.extensions.register(new MinilfrExtension());
