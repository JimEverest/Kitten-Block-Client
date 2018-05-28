void doDcSpeed(int spdL, int spdR) {
  //spdR = -spdR;
  if (spdL < 0) {
    analogWrite(5, 0);
    analogWrite(6, -spdL);
  } else {
    analogWrite(5, spdL);
    analogWrite(6, 0);
  }

  if (spdR < 0) {
    analogWrite(9, 0);
    analogWrite(10, -spdR);
  } else {
    analogWrite(9, spdR);
    analogWrite(10, 0);
  }
}

void setup() {
  doDcSpeed(100,-100);
  delay(1000);
  doDcSpeed(-100,100);
  delay(1000);
  doDcSpeed(0,0);
}

void loop() {
  // put your main code here, to run repeatedly:

}
