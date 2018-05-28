#include <Wire.h>
#include <L3G.h>
#include <EEPROM.h>
#include "MiniLFR.h"

L3G gyro;
MiniLFR mini;
int cnt = 0;
int filteredCount;
float diff;
float diffInte;
float gz=0;
float gzStill=0;
long lastmillis;

static union {
  struct {
    unsigned int sign;
    float dcdiff;
  } data;
  char buf[16];
} robotSetup;

void initRobotSetup() {
  int i;
  for (i = 0; i < 16; i++) {
    robotSetup.buf[i] = EEPROM.read(i);
  }
  if (robotSetup.data.sign != 1234) {
    memset(robotSetup.buf, 0, 16);
    robotSetup.data.sign = 1234;
    robotSetup.data.dcdiff = 1.0;
    syncRobotSetup();
  }
}

void syncRobotSetup()
{
  int i;
  for (i = 0; i < 16; i++) {
    EEPROM.write(i, robotSetup.buf[i]);
  }
}


void setup() {
  Serial.begin(115200);
  Wire.begin();
  initRobotSetup();
  if (!gyro.init())
  {
    Serial.println("Failed to autodetect gyro type!");
    while (1);
  }
  gyro.enableDefault();
  while(cnt++<20){
    gyro.read();
    gz = gz*0.7+(float)gyro.g.z*0.3;
    delay(50);
  }
  gzStill = gz;
  Serial.print("Dc Diff: ");Serial.println(robotSetup.data.dcdiff);
  Serial.print("Init Gz: ");Serial.println(gzStill);
  lastmillis = millis();
  mini.motorDiff = 1.0;
  diffInte = 0;
  mini.doCarMove(120,0);
}

void loop() {
  gyro.read();
  gz = gz*0.7+(float)gyro.g.z*0.3;
  delay(50);
  if(millis()-lastmillis>100){
    diff = gz - gzStill;
    lastmillis = millis();
    if(diff>1000){
      filteredCount = 0;
      diffInte+=0.02;
    }else if(diff<-1000){
      filteredCount = 0;
      diffInte-=0.02;
    }else{
      filteredCount++;
      if(filteredCount==6){
        robotSetup.data.dcdiff = 1.0 + diffInte;
        syncRobotSetup();
        mini.updateMotorSpeed(0,0);
        while(1);
      }
    }
    Serial.print(" Z: ");Serial.print(diff);
    Serial.print(" D: ");Serial.println(mini.motorDiff);
    mini.motorDiff = 1.0+diffInte;
    mini.doCarMove(120,0);
  }
  
  mini.updateMotorSpeed();
}
