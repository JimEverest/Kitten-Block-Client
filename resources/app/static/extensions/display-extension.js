/**
 * Created by Riven on 2017/12/6.
 */

var DisplayExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
DisplayExtension.prototype.getInfo = function () {
    return {
        id: 'Display',

        name: 'Display',

        color1: '#F7C540',
        color2: '#C19932',
        color3: '#C19932',

        parser: 'parseCmd',

        blocks: [
            {
                opcode: 'lcdsetup',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LCD Setup Addr [ADDR]',
                arguments: {
                    ADDR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '0x27'
                    }
                },
                func: 'lcdsetup',
                blockDisabled: true
            },
            {
                opcode: 'lcdprint',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LCD Print [LINE]',
                arguments: {
                    LINE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello World'
                    }
                },
                func: 'lcdprint',
                blockDisabled: true
            },
            {
                opcode: 'lcdclear',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'LCD Clear',
                func: 'lcdclear',
                blockDisabled: true,
                sepafter: 36
            },
            {
                opcode: 'rgbsetup',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'RGB Setup [PIN] Pixel Num [NUMPIXELS]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'digiPin',
                        defaultValue: '4'
                    },
                    NUMPIXELS: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 16
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'rgbshow',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'RGB Pin [PIN] Pixel [PIX] [COLOR]',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'digiPin',
                        defaultValue: '4'
                    },
                    PIX: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    },
                    COLOR: {
                        type: Scratch.ArgumentType.COLOR
                    }
                },
                func: 'rgbshow'
            },
            {
                opcode: 'rgboff',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'RGB Pin [PIN] Off',
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'digiPin',
                        defaultValue: '4'
                    }
                },
                func: 'rgboff',
                sepafter: 36
            },
            {
                opcode: 'digitubesetup',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Digital Tube CLK [CLK] IO [IO]',
                arguments: {
                    CLK: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'digiPin',
                        defaultValue: '4'
                    },
                    IO: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'digiPin',
                        defaultValue: '5'
                    }
                },
                func: 'digitubesetup',
                blockDisabled: true
            },
            {
                opcode: 'digitubenumber',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Digital Tube Number [NUM]',
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '1234'
                    }
                },
                func: 'digitubenumber',
                blockDisabled: true,
                sepafter: 48
            },
            {
                opcode: 'importDisplay',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Import Display [DISPLAY]',
                arguments: {
                    DISPLAY: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'LCD',
                        menu: 'displayCatalog'
                    }
                },
                blockDisabled: true,
                func: 'noop'
            },
            {
                opcode: 'parsecmd',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Parser Display Command',
                func: 'noop'
            }
        ],
        menus: {
            analogList: ['Sound', 'Light', 'Potential'],
            digiList: ['PIR', 'TRACER', 'TOUCH', 'SMOKE'],
            digiPin: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                'A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            onoff: ['ON', 'OFF'],
            analogPin: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogWritePin: ['3', '5', '6', '9', '10', '11'],
            displayCatalog: ['LCD', 'RGB', 'DigitalTube']
        },
        translation_map: {
            zh: {
                name: '显示',
                lcdsetup: 'LCD 配置 地址[ADDR]',
                lcdprint: 'LCD 打印 [LINE]',
                lcdclear: 'LCD 清屏',
                rgbshow: 'RGB 引脚 [PIN] 像素 [PIX] [COLOR]',
                rgboff: 'RGB 引脚 [PIN] 关闭',
                digitubesetup: '数码管 CLK [CLK] IO [IO]',
                digitubenumber: '数码管 显示数字[NUM]',
                importDisplay: '导入显示模块 [DISPLAY]',
                parsecmd: '解析显示模块指令'
            }
        }
    };
};

DisplayExtension.prototype.noop = function () {
};


Scratch.extensions.register(new DisplayExtension());
