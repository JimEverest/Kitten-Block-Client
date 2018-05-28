void setup() {
  Serial.begin(115200);
  
}

void loop() {
  float v = ((float)analogRead(A7))/1024*5.0;
  Serial.println(v);
  delay(200);
}
