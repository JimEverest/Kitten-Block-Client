#include "PS2X_lib.h"  //for v1.6

#define PS2_DAT        4  //14    
#define PS2_CMD        7  //15
#define PS2_SEL        8  //16
#define PS2_CLK        11  //17

PS2X ps2x; // create PS2 Controller Class
int error = 0;
byte type = 0;
byte vibrate = 0;

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

void doDcSpeed(int spdL, int spdR){
  //Serial.print(spdL);Serial.print(",");Serial.println(spdR);
  if(spdL<0){
    analogWrite(5,0);
    analogWrite(6,-spdL);
  }else{
    analogWrite(5,spdL);
    analogWrite(6,0);    
  }
  
  if(spdR<0){
    analogWrite(9,0);
    analogWrite(10,-spdR);  
  }else{
    analogWrite(9,spdR);
    analogWrite(10,0);  
  }
}

void setup() {
  Serial.begin(115200);
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


int fw,lr;

void loop() {
  if(error == 1) //skip loop if no controller found
    return; 
  ps2x.read_gamepad(false, vibrate); //read controller and set large motor to spin at 'vibrate' speed
  vibrate = ps2x.Analog(PSAB_CROSS);  //this will set the large motor vibrate speed based on how hard you press the blue (X) button
  fw = -(ps2x.Analog(PSS_LY)-127);
  lr = ps2x.Analog(PSS_LX)-128;
  /*
  Serial.print("Stick Values:");
  Serial.print(fw, DEC); //Left stick, Y axis. Other options: LX, RY, RX  
  Serial.print(",");
  Serial.print(lr, DEC); 
  Serial.print(" X:");
  Serial.println(vibrate);
  */

  doDcSpeed(fw+lr,fw-lr);
  delay(50);
}
