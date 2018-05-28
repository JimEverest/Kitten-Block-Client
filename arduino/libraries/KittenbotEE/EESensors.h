#ifndef EE_SENSORS_H
#define EE_SENSORS_H

#define SENSORLIBVERSION 0x1

#define ANALOG_SOUND 0x1
#define ANALOG_LIGHT 0x2
#define ANALOG_POTENTIAL 0x3
#define ANALOG_SOIL 0x4
#define ANALOG_RAINDROP 0x5
#define ANALOG_FLAME 0x6
#define ANALOG_SMOKE 0x7

#define DIGITAL_PIR 0x1
#define DIGITAL_TRACER 0x2
#define DIGITAL_TOUCH 0x3
#define DIGITAL_SOIL 0x4
#define DIGITAL_RAINDROP 0x5
#define DIGITAL_FLAME 0x6
#define DIGITAL_SMOKE 0x7
#define DIGITAL_HALL 0x8
#define DIGITAL_BUTTON 0x9
#define DIGITAL_BUMPER 0x10
#define DIGITAL_REED 0x11

#define DHT11_TEMP 0x1
#define DHT11_HUMI 0x2

// test define
//#define USEDIGISENSOR
//#define USEANALOGSENSOR
//#define USEDHT11
//#define USEDS18B20

class EESensors
{
    public:
    void digitalSensorSetup(int type, int pin);
    int digitalSensorRead(int type, int pin);
    
    void analogSensorSetup(int type, int pin);
    int analogSensorRead(int type, int pin);

    void dht11Setup(int pin);
    int dht11Read(int type, int pin);
    
    void ds18B20Setup(int pin);
    float ds18B20Read();
    float ds18B20Read(int index);
	
	int colorSensorRead(int sig, int s2, int s3, int mode);
	int colorSensorWB(int sig, int s2, int s3);

    void parseSensorCommand(char * cmd);
    
};

#endif

