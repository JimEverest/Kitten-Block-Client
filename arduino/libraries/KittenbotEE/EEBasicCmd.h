#ifndef EE_BASIC_H
#define EE_BASIC_H

void parseBasicCmd(char * cmd) {
  char * tmp;
  if (cmd[0] == 'M') {
    cmd += 1;
    int code = atoi(cmd);
    cmd = strtok_r(cmd, " ", &tmp);
    switch(code){
      case 1:
        {
          int pin, mode;
          sscanf(tmp, "%d %d", &pin, &mode);
          pinMode(pin, mode);
        }
        break;
      case 2:
        {
          int pin, mode;
          sscanf(tmp, "%d %d", &pin, &value);
          digitalWrite(pin,value);
        }
        break;
      case 3:
        {
          int pin, val;
          sscanf(tmp, "%d", &pin);
          val = digitalRead(pin);
          Serial.println("M3 "+String(val));
        }
        break;
      case 4:
        {
          int pin, val;
          sscanf(tmp, "%d %d", &pin, &val);
          analogWrite(pin, val);
        }
        break;
      case 5:
        {
          int pin, val;
          sscanf(tmp, "%d", &pin);
          val = analogRead(pin);
          Serial.println("M5 "+String(val));
        }
        break;
  }
}

#endif
