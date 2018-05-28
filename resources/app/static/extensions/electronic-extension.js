/**
 * Created by Riven on 2017/12/6.
 */

var ElectronicExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
ElectronicExtension.prototype.getInfo = function () {
    return {
        id: 'Electronic',

        name: 'Electronic',

        color1: '#3c6478',
        color2: '#0d3d56',

        parser: 'parseCmd',

        blocks: [
            {
                opcode: 'sensorAnalog',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Analog Sensor [SENSOR] Pin [PIN]',
                cmdIndex: 1,
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
                func: 'sensorAnalog'
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
                        defaultValue: 'A0',
                        menu: 'digiPin'
                    }
                },
                func: 'sensorDigit'
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
                func: 'dht11'
            },
            {
                opcode: 'temp18b20',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: '18B20 [PIN]',
                cmdIndex: 2,
                arguments: {
                    PIN: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '10',
                        menu: 'digiPin'
                    }
                },
                func: 'temp18b20'
            }
        ],
        menus: {
            analogList: ['Sound', 'Light', 'Potential'],
            digiList: ['PIR', 'TRACER', 'TOUCH', 'SMOKE'],
            digiPin: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                'A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogPin: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'],
            analogWritePin: ['3', '5', '6', '9', '10', '11'],
            dht11function: ['Temperature', 'Humidity']
        }
    };
};


Scratch.extensions.register(new ElectronicExtension());
