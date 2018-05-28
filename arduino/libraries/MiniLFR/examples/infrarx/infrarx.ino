
#include <IRremote.h>

IRrecv irrecv;

decode_results results;

void setup()
{
  Serial.begin(115200);
  irrecv.attach(2);
  irrecv.enableIRIn();
}

void loop() {
  if (irrecv.decode(&results)) {
    Serial.println(results.value, HEX);
    irrecv.resume(); // Receive the next value
  }
  delay(100);
}
