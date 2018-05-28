void setup() {
  pinMode(11,OUTPUT);
  digitalWrite(11,0);
  pinMode(12,OUTPUT);
  digitalWrite(12,0);
}

void loop() {
  digitalWrite(11,0);
  digitalWrite(12,0);
  delay(2000);
  for(int i=0;i<3;i++){
    digitalWrite(11,1);
    digitalWrite(12,1);
    delay(300);
    digitalWrite(11,0);
    digitalWrite(12,0);
    delay(300);
  }

}
