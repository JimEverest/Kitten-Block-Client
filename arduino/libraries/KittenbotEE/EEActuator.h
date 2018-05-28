#ifndef EE_ACTUATOR_H
#define EE_ACTUATOR_H
#include <Servo.h>
#include "Adafruit_NeoPixel.h"

#define ACTUATORLIBVERSION 0x1
#define NUM_SERVOARY 12


#define MOTOR_L298N 0x1
#define MOTOR_L9110 0x2


class EEActuator
{
  public:
    void serveSetup(int pin, Servo * servo);
    void servoWrite(int pin, int value);

    void buzzTone(int pin, int freq, int t);
    void buzzMusic(int pin, const char * notes);
    void buzzNote(int pin, int note, int clap);

    void motorModule(int pinDir, int pinPwm, int speed);
	void motorBridge(int in1, int in2, int speed);

    void parseActuatorCommand(char * cmd);
};

#endif
