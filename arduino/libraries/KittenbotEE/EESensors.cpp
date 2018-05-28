#include "config.h"
#include "Arduino.h"
#include "OneWire.h"
#include "DallasTemperature.h"
#include "EESensors.h"
#include "dht11.h"

#ifdef USEDHT11
dht11 DHT11;
#endif
#ifdef USEDS18B20
OneWire onewire;
DallasTemperature ds18b20(&onewire);
#endif

void EESensors::digitalSensorSetup(int type, int pin){
  pinMode(pin, INPUT);
}

int EESensors::digitalSensorRead(int type, int pin){
  return digitalRead(pin);
}

void EESensors::analogSensorSetup(int type, int pin){
  
}

int EESensors::analogSensorRead(int type, int pin){
  return analogRead(pin);
}

#ifdef USEDHT11
void EESensors::dht11Setup(int pin){
  
}

int EESensors::dht11Read(int type, int pin){
  DHT11.read(pin);
  if(type == DHT11_HUMI){
    return DHT11.humidity;
  }else{
    return DHT11.temperature;
  }
}
#endif
#ifdef USEDS18B20
void EESensors::ds18B20Setup(int pin){
  onewire.updatePin(pin);
  ds18b20.begin();
}

float EESensors::ds18B20Read(){
  return ds18B20Read(0);
}

float EESensors::ds18B20Read(int index){
  ds18b20.requestTemperatures();
  return ds18b20.getTempCByIndex(index);
}
#endif
#ifdef USECOLORSENSOR
int wbr,wbg,wbb;
// s0 high, s1 low
int EESensors::colorSensorRead(int sig, int s2, int s3, int mode){
	int frequency = 0;
	int red,green,blue,alpha;
	unsigned int color;
	pinMode(s2, OUTPUT);
	pinMode(s3, OUTPUT);
	pinMode(sig, INPUT);
	// read
	if(mode == 0){
		digitalWrite(s2,LOW);
		digitalWrite(s3,LOW);
		frequency = pulseIn(sig, LOW);
		//Serial.println("Red "+String(frequency));
		red = 500 - (frequency - wbr);
		return max(red, 0);
	}else if(mode == 1){
		digitalWrite(s2,HIGH);
		digitalWrite(s3,HIGH);
		frequency = pulseIn(sig, LOW);
		//Serial.println("Green "+String(frequency));
		green = 500 - (frequency - wbg);
		return max(green, 0);
	}else if(mode == 2){
		digitalWrite(s2,LOW);
		digitalWrite(s3,HIGH);
		frequency = pulseIn(sig, LOW);
		//Serial.println("Blue "+String(frequency));
		blue = 500 - (frequency - wbb);
		return max(blue, 0);
	}
}

int EESensors::colorSensorWB(int sig, int s2, int s3){
	int frequency = 0;
	pinMode(s2, OUTPUT);
	pinMode(s3, OUTPUT);
	pinMode(sig, INPUT);
	for(int i=0;i<50;i++){
		digitalWrite(s2,LOW);
		digitalWrite(s3,LOW);
		frequency = pulseIn(sig, LOW);
		wbr = (wbr + frequency)/2;
		digitalWrite(s2,LOW);
		digitalWrite(s3,LOW);
		frequency = pulseIn(sig, LOW);
		wbg = (wbg + frequency)/2;
		digitalWrite(s2,LOW);
		digitalWrite(s3,LOW);
		frequency = pulseIn(sig, LOW);
		wbb = (wbb + frequency)/2;
	}
	Serial.println("WB "+String(wbr)+" "+String(wbg)+" "+String(wbb));
}

#endif

void EESensors::parseSensorCommand(char * cmd){
  char * tmp;
  if(cmd[0] == 'S'){
    cmd+=1;
    int code = atoi(cmd);
    cmd = strtok_r(cmd, " ", &tmp);
    switch(code){
      case 0:
        Serial.println("S0 "+String(SENSORLIBVERSION));
        break;
#ifdef USEDIGISENSOR
      case 1: // setup digital sensor
        {
          int pin, type;
          sscanf(tmp, "%d %d", &type, &pin);
          digitalSensorSetup(type, pin);
        }
        break;
      case 2: // digital read
        {
          int pin, type, ret;
          sscanf(tmp, "%d %d", &type, &pin);
          ret = digitalSensorRead(type, pin);
          Serial.println("S2 "+String(ret));
        }
        break;        
#endif
#ifdef USEANALOGSENSOR
      case 3: // setup analog sensor
        {
          int pin, type;
          sscanf(tmp, "%d %d", &type, &pin);
          analogSensorSetup(type, pin);
        }
        break;
      case 4: // analog read
        {
          int pin, type, ret;
          sscanf(tmp, "%d %d", &type, &pin);
          ret = analogSensorRead(type, pin);
          Serial.println("S4 "+String(ret));
        }
        break;        
#endif
#ifdef USEDHT11
      case 5:
        {
          int pin;
          sscanf(tmp, "%d", &pin);
          dht11Setup(pin);
        }
        break;
      case 6:
        {
          int pin, type, ret;
          sscanf(tmp, "%d %d", &type, &pin);
          ret = dht11Read(type, pin);
          Serial.println("S6 "+String(ret));
        }
        break;        
#endif
#ifdef USEDS18B20
      case 7:
        {
          int pin;
          sscanf(tmp, "%d", &pin);
          ds18B20Setup(pin);
        }
        break;
      case 8:
        {
          int index;
		  float temp;
          sscanf(tmp, "%d %d", &index);
          temp = ds18B20Read(index);
          Serial.println("S8 "+String(temp));
        }
        break;        
#endif
#ifdef USECOLORSENSOR
      case 9:
        {
          int sig,s2,s3,mode,ret;
          sscanf(tmp, "%d %d %d %d", &sig, &s2, &s3, &mode);
          ret = colorSensorRead(sig, s2, s3, mode);
          Serial.println("S9 "+String(ret));
        }
        break; 
      case 10:
        {
          int sig,s2,s3;
          sscanf(tmp, "%d %d %d", &sig, &s2, &s3);
          colorSensorWB(sig, s2, s3);
        }
        break; 
#endif

    }
  }
}


