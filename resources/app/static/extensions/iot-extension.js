/**
 * Created by Riven on 2017/11/5 0005.
 */

const tryGetLocalIp = () => {
    try {
        const ip = window.require('./ip');
        return ip.address();
    } catch (e) {
        console.log(e);
        return 'kittenblock';
    }
};

var IotExtension = function () {

};

IotExtension.prototype.getInfo = function () {
    const localip = tryGetLocalIp();

    return {
        id: 'IoT',

        name: 'IoT',
        color1: '#1395BA',
        color2: '#107895',
        color3: '#107895',

        blocks: [
            {
                opcode: 'mqttConnect',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Connect MQTT [SERVER]',
                arguments: {
                    SERVER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: localip
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'mqttPub',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'MQTT Publish [TOPIC] [DATA]',
                arguments: {
                    TOPIC: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '/hello'
                    },
                    DATA: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'hello world'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'mqttSub',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'MQTT Subscribe [TOPIC]',
                arguments: {
                    TOPIC: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '/hello'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'mqttGot',
                blockType: Scratch.BlockType.HAT,
                blockAllThreads: false,
                text: 'MQTT [TOPIC] Got',
                arguments: {
                    TOPIC: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '/hello'
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'mqttData',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'Topic Data',
                func: 'noop'
            }
        ]
    };
};

IotExtension.prototype.hostreadvariable = function (args) {
    const v =  args.VAR;
    const ipaddr = args.IPADDR;
    const url = `http://${ipaddr}/iot.json?reason=load`;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    const ret =  JSON.parse(xmlHttp.responseText)[v];
    return ret;
};

IotExtension.prototype.hostsetvariable = function (args) {
    const v = args.VAR;
    const ipaddr = args.IPADDR;
    const value = args.VALUE;
    const url = `http://${ipaddr}/iot.json?reason=submit`;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', url, true);
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlHttp.send(`${v}=${value}`);
};

IotExtension.prototype.noop = function () {
};

Scratch.extensions.register(new IotExtension());
