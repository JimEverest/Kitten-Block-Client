#ifndef EE_DISPLAY_H
#define EE_DISPLAY_H

#include "Adafruit_NeoPixel.h"

#define DISPLAYLIBVERSION 0x1
#define NUM_RGBARY 5


class EEDisplay
{
    public:
	void rgbSetup(int pin, int numpixels, Adafruit_NeoPixel * neopixel);
	void rgbShow(int pin, int pix, int r, int g, int b);
	void rgbBrightness(int pin, int brightness);
	void rgbOff(int pin);

    void parseDisplayCommand(char * cmd);
    
};

#endif

