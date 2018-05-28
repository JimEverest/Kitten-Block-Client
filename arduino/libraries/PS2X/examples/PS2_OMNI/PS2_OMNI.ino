#include <Arduino.h>
#include "PS2X_lib.h"  //for v1.6

#define PS2_DAT        2  //14    
#define PS2_CMD        3  //15
#define PS2_SEL        4  //16
#define PS2_CLK        11  //17

/*
Motor Mapping:

  M1     M2
    ROBOT
  M4     M3

*/
#define M1_A 5
#define M1_B 6
#define M2_A 9
#define M2_B 10
#define M3_A 7
#define M3_B 8
#define M4_A 12
#define M4_B 13

PS2X ps2x; // create PS2 Controller Class
int error = 0;
byte type = 0;
byte vibrate = 0;

unsigned long time = 0;
int counter = 0;
int spdM1, spdM2, spdM3, spdM4;
float cos45 = cos(PI/4);

#define pressures   true
//#define pressures   false
#define rumble      true
//#define rumble      false

int configJoystick(){
  error = ps2x.config_gamepad(PS2_CLK, PS2_CMD, PS2_SEL, PS2_DAT, pressures, rumble);
  
  if(error == 0){
    Serial.print("Found Controller, configured successful ");
    Serial.print("pressures = ");
	if (pressures)
	  Serial.println("true ");
	else
	  Serial.println("false");
	Serial.print("rumble = ");
	if (rumble)
	  Serial.println("true)");
	else
	  Serial.println("false");
    Serial.println("Try out all the buttons, X will vibrate the controller, faster as you press harder;");
    Serial.println("holding L1 or R1 will print out the analog stick values.");
    Serial.println("Note: Go to www.billporter.info for updates and to report bugs.");
  }  
  else if(error == 1)
    Serial.println("No controller found, check wiring, see readme.txt to enable debug. visit www.billporter.info for troubleshooting tips");
   
  else if(error == 2)
    Serial.println("Controller found but not accepting commands. see readme.txt to enable debug. Visit www.billporter.info for troubleshooting tips");

  else if(error == 3)
    Serial.println("Controller refusing to enter Pressures mode, may not support it. ");
  
//  Serial.print(ps2x.Analog(1), HEX);
  
  type = ps2x.readType(); 
  switch(type) {
    case 0:
      Serial.print("Unknown Controller type found ");
      break;
    case 1:
      Serial.print("DualShock Controller found ");
      break;
    case 2:
      Serial.print("GuitarHero Controller found ");
      break;
	case 3:
      Serial.print("Wireless Sony DualShock Controller found ");
      break;
   }
   return error;
}

void calcSpeed(int vspeed, int hspeed, int rspeed) {
  int tspd;


  // then map into 4 wheels
  tspd = vspeed/cos45;
  spdM1 = spdM4 = tspd;
  spdM2 = spdM3 = -tspd;
  tspd = hspeed/cos45;
  spdM1+=tspd;
  spdM2+=tspd;
  spdM3-=tspd;
  spdM4-=tspd;
  // no mapping for rotate
  spdM1+=rspeed;
  spdM2+=rspeed;
  spdM3+=rspeed;
  spdM4+=rspeed;
  
  // limit max and min value for each motor
  spdM1 = constrain(spdM1,-255,255);
  spdM2 = constrain(spdM2,-255,255);
  spdM3 = constrain(spdM3,-255,255);
  spdM4 = constrain(spdM4,-255,255);
  /*
  Serial.print("V=");Serial.print(vspeed);
  Serial.print(" ,H=");Serial.print(hspeed);
  Serial.print(" ,R=");Serial.print(rspeed);  
  Serial.print(" ,M1=");  Serial.print(spdM1);
  Serial.print(" ,M2=");  Serial.print(spdM2);
  Serial.print(" ,M3=");  Serial.print(spdM3);
  Serial.print(" ,M4=");  Serial.println(spdM4);
  */
}

void setup() {
  pinMode(M1_A, OUTPUT);
  pinMode(M1_B, OUTPUT);
  pinMode(M2_A, OUTPUT);
  pinMode(M2_B, OUTPUT);
  pinMode(M3_A, OUTPUT);
  pinMode(M3_B, OUTPUT);
  pinMode(M4_A, OUTPUT);
  pinMode(M4_B, OUTPUT);

  Serial.begin(115200);
  Serial.println("KittenBot Omini Robot");
  delay(300);  //added delay to give wireless ps2 module some time to startup, before configuring it
  //setup pins and settings: GamePad(clock, command, attention, data, Pressures?, Rumble?) check for error
  error = 1;
  pinMode(13,OUTPUT);
  while(error){
    delay(100);
    error = configJoystick();
    digitalWrite(13, !digitalRead(13));  
  }
  
}

char buf[64];
int8_t bufindex;

int fw,lr,ro;

void readJoystick(){
  ps2x.read_gamepad(false, vibrate); //read controller and set large motor to spin at 'vibrate' speed
  vibrate = ps2x.Analog(PSAB_CROSS);  //this will set the large motor vibrate speed based on how hard you press the blue (X) button
  
  fw = -(ps2x.Analog(PSS_LY)-127);
  lr = ps2x.Analog(PSS_LX)-128;
  ro = ps2x.Analog(PSS_RX)-128;
  /*
  Serial.print("Stick Values:");
  Serial.print(fw, DEC); //Left stick, Y axis. Other options: LX, RY, RX  
  Serial.print(",");
  Serial.print(lr, DEC); 
  Serial.print(",");
  Serial.print(ro, DEC); 
  Serial.print(" X:");
  Serial.println(vibrate);
  */
  calcSpeed(fw,lr,ro);
}

void loop() {
  if (micros() - time > 200) {
    time = micros();
    if (counter == abs(spdM1)) {
      digitalWrite(M1_A, 0);
      digitalWrite(M1_B, 0);
    }
    if (counter == abs(spdM2)) {
      digitalWrite(M2_A, 0);
      digitalWrite(M2_B, 0);
    }
    if (counter == abs(spdM3)) {
      digitalWrite(M3_A, 0);
      digitalWrite(M3_B, 0);
    }
    if (counter == abs(spdM4)) {
      digitalWrite(M4_A, 0);
      digitalWrite(M4_B, 0);
    }
    counter++;
    if (counter >= 255) {
      readJoystick();
      digitalWrite(M1_A, 0);
      digitalWrite(M1_B, 0);
      digitalWrite(M2_A, 0);
      digitalWrite(M2_B, 0);
      digitalWrite(M3_A, 0);
      digitalWrite(M3_B, 0);
      digitalWrite(M4_A, 0);
      digitalWrite(M4_B, 0);
      counter = 0;
      if (spdM1 > 0) {
        digitalWrite(M1_A, 1);
      } else if (spdM1 < 0) {
        digitalWrite(M1_B, 1);
      }
      if (spdM2 > 0) {
        digitalWrite(M2_A, 1);
      } else if (spdM2 < 0) {
        digitalWrite(M2_B, 1);
      }
      if (spdM3 > 0) {
        digitalWrite(M3_A, 1);
      } else if (spdM3 < 0) {
        digitalWrite(M3_B, 1);
      }
      if (spdM4 > 0) {
        digitalWrite(M4_A, 1);
      } else if (spdM4 < 0) {
        digitalWrite(M4_B, 1);
      }
    }

  }

}
