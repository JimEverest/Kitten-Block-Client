#include "Arduino.h"
#include "EEActuator.h"
#include "config.h"


#ifdef USESERVO
struct ServoMap{
	Servo * servo;
	int pin;
};
int servoIdx;
ServoMap servoAry[NUM_SERVOARY];

void EEActuator::serveSetup(int pin, Servo * servo){
	servo->attach(pin);
	servoAry[servoIdx].servo = servo;
	servoAry[servoIdx].pin = pin;
	servoIdx++;
}

void EEActuator::servoWrite(int pin, int value){
	for(int i=0;i<NUM_SERVOARY;i++){
		if(servoAry[i].pin == pin){
			servoAry[i].servo->write(value);
			break;
		}
	}
}

#endif

#ifdef USEBUZZ
void EEActuator::buzzTone(int pin, int freq, int t){
	tone(pin, freq, t);
}

void EEActuator::buzzNote(int pin, int note, int clap){
	int freq = 440.0f*pow(2, float(note-69)/12);
	int duration = clap * 125;
	tone(pin, freq, duration);
}

const int noteMap[] = {440, 494, 262, 294, 330, 349, 392};
void EEActuator::buzzMusic(int pin, const char * notes){
	int freq;
	int len = strlen(notes);
	int octave = 4;
	int duration = 500;
  Serial.println("Music "+String(len));
	for(int i=0;i<len;i++){
		if(notes[i]>='a' && notes[i]<='g'){
		  freq = noteMap[notes[i]-'a'];
		}else if(notes[i]=='r'){
		  freq = 0;
		}else if(notes[i]>='2' && notes[i]<='6'){
		  octave = notes[i] - '0';
		}else if(notes[i]==':'){
		  i++;
		  duration = (notes[i] - '0')*125;
		}else if(notes[i]==' '){ // play until we meet a space
		  freq *= pow(2, octave-4);
		  tone(pin, freq, duration);
      delay(duration);
		}
	}
}

#endif


#ifdef USEMOTOR
void EEActuator::motorModule(int pinDir, int pinPwm, int speed){
  pinMode(pinDir, OUTPUT);
  if(speed>=0){
    digitalWrite(pinDir, 1);
  }else{
    digitalWrite(pinDir, 0);
  }
  analogWrite(pinPwm, abs(speed));
}

void EEActuator::motorBridge(int in1, int in2, int speed){
  if(speed>=0){
    analogWrite(in1, abs(speed));
	analogWrite(in2, 0);
  }else{
    analogWrite(in1, 0);
	analogWrite(in2, abs(speed));
  }
}

#endif

void EEActuator::parseActuatorCommand(char * cmd){
  char * tmp;
  if(cmd[0] == 'A'){
    cmd+=1;
    int code = atoi(cmd);
    cmd = strtok_r(cmd, " ", &tmp);
    switch(code){
      case 0:
        Serial.println("A0 "+String(ACTUATORLIBVERSION));
        break;
#ifdef USESERVO
      case 2: // servo write
        {
          int pin, deg;
          sscanf(tmp, "%d %d", &pin, &deg);
          servoWrite(pin, deg);
        }
        break;
#endif
#ifdef USEBUZZ
      case 3: // buzz tone
        {
          int pin, freq, t;
          sscanf(tmp, "%d %d", &pin, &freq, &t);
          buzzTone(pin, freq, t);
        }
        break;
      case 4: // buzz note
        {
          int pin, note, clap;
          sscanf(tmp, "%d %d", &pin, &note, &clap);
          buzzNote(pin, note, clap);
        }
        break;
      case 5: // buzz music
        {
          int pin;
          sscanf(tmp, "%d ", &pin);
          strtok_r(0, " ", &tmp);
          buzzMusic(pin, tmp);
        }
        break;
        
#endif
#ifdef USEMOTOR
      case 8: // motor
        {
          int pinDir, pinPwm, spd;
          sscanf(tmp, "%d %d %d", &pinDir, &pinPwm, &spd);
          motorModule(pinDir, pinPwm, spd);
        }
        break;  
      case 9: // h bridge
        {
          int in1, in2, spd;
          sscanf(tmp, "%d %d %d", &in1, &in2, &spd);
          motorBridge(in1, in2, spd);
        }
        break;  
#endif

    }
  }	
}



