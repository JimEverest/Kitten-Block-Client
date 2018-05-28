void setup() {
  Serial.begin(115200);

}

void loop() {
  delay(50);
  Serial.print(analogRead(A3));Serial.print(",");
  Serial.print(analogRead(A2));Serial.print(",");
  Serial.print(analogRead(A1));Serial.print(",");
  Serial.print(analogRead(A0));Serial.print(",");
  Serial.println(analogRead(A6));;  
}
