
void setup(){
  Serial.begin(115200);
  pinMode(7,INPUT);
  digitalWrite(7,0);
  pinMode(8,INPUT);
  digitalWrite(8,0);
}

void loop(){
  int b1,b2;
  b1 = digitalRead(7);
  b2 = digitalRead(8);
  Serial.print(b1);Serial.print(", ");Serial.println(b2);
}


