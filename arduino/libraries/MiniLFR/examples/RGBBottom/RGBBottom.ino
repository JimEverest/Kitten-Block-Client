#include "Adafruit_NeoPixel.h"
Adafruit_NeoPixel rgbled(2);

void setup() {
  rgbled.begin();
  rgbled.setPin(13);
}

void loop() {
  rgbled.setPixelColor(0,random(0,200),random(0,200),random(0,200));
  rgbled.setPixelColor(1,random(0,200),random(0,200),random(0,200));
  rgbled.show();
  delay(250);
}
