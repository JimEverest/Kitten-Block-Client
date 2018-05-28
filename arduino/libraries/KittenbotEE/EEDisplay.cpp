#include "config.h"
#include "Arduino.h"
#include "EEDisplay.h"


#ifdef USERGB
struct RGBMap{
	Adafruit_NeoPixel * rgb;
	int pin;
	int numpixels;
};
int rgbIdx;
RGBMap rgbAry[NUM_RGBARY];
void EEDisplay::rgbSetup(int pin, int numpixels, Adafruit_NeoPixel * neopix){
	neopix->begin();
	neopix->setPin(pin);
	neopix->setBrightness(100);
	rgbAry[rgbIdx].rgb = neopix;
	rgbAry[rgbIdx].pin = pin;
	rgbAry[rgbIdx].numpixels = numpixels;
	rgbIdx++;
}

void EEDisplay::rgbColor(int pin, int pix, int red, int green, int blue){
	for(int i=0;i<NUM_RGBARY;i++){
		if(rgbAry[i].pin == pin){
			rgbAry[i].rgb->setPixelColor(pix, red, green, blue);
			rgbAry[i].rgb->show();
			break;
		}
	}
}

void EEDisplay::rgbOff(int pin){
	for(int i=0;i<NUM_RGBARY;i++){
		if(rgbAry[i].pin == pin){
			rgbAry[i].rgb->clear();
			rgbAry[i].rgb->show();
			break;
		}
	}
}

void EEDisplay::rgbBrightness(int pin, int brightness){
	for(int i=0;i<NUM_RGBARY;i++){
		if(rgbAry[i].pin == pin){
			rgbAry[i].rgb->setBrightness(pix, brightness);
			break;
		}
	}
}
#endif

void EEDisplay::parseDisplayCommand(char * cmd){
	char * tmp;
	if(cmd[0] == 'D'){
		cmd+=1;
		int code = atoi(cmd);
		cmd = strtok_r(cmd, " ", &tmp);
		switch(code){
		  case 0:
			Serial.println("D0 "+String(DISPLAYLIBVERSION));
			break;
#ifdef USERGB
		  case 1: // set rgb
			{
			  int pin;
			  sscanf(tmp, "%d", &pin);
			  ledSetup(pin);
			}
			break;
		  case 2: // led display
			{
			  int pin, val;
			  sscanf(tmp, "%d %d", &pin, &val);
			  ledWrite(pin, val);
			}
			break;        
#endif


		}
	}
}
