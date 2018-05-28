#include "Adafruit_NeoPixel.h"
Adafruit_NeoPixel rgbled(2);

#define RED       11    //LED引脚
#define GREEN     12    //LED引脚
#define F_L  6
#define B_L  5
#define F_R  9
#define B_R  10

#define pinBuzzer  4
int i = 0;

void LED_test(){
  digitalWrite(RED, HIGH);
  digitalWrite(GREEN, HIGH);   
  delay(600); 
  digitalWrite(RED, LOW);
  digitalWrite(GREEN, LOW);
  Serial.println("1.LED test"); 
}

void Buzzer_test()
{
long frequency = 300; //频率, 单位Hz  
  
   //用tone()函数发出频率为frequency的波形  
   tone(pinBuzzer, frequency );  
   delay(500); //等待500毫秒  
     
   noTone(pinBuzzer);//停止发声  
   delay(10); //等待500毫秒 
   Serial.println("2.Buzzer test"); 
   
}
//void RGB_test(){
//
//     i = i+1;
//     if (i>2) i = 0;
//     if (i == 0)
//     {
//     rgbled.setPixelColor(0,255,0,0);
//     rgbled.setPixelColor(1,255,0,0);
//     rgbled.show();
//     }
//     else if(i == 1)
//     {
//     rgbled.setPixelColor(0,0,255,0);
//     rgbled.setPixelColor(1,0,255,0);
//     rgbled.show();
//     }
//     else
//     {
//     rgbled.setPixelColor(0,0,0,255);
//     rgbled.setPixelColor(1,0,0,255);
//     rgbled.show();
//     }  
//     Serial.println("3.RGB test"); 
////     Serial.println(i); 
//}
void LineFillow_test(){
  Serial.println("5.Line Fillow test:"); 
  Serial.println("---------------------"); 
for(int i=0;i<5;i++){
  Serial.print(analogRead(A3));Serial.print(",");
  Serial.print(analogRead(A2));Serial.print(",");
  Serial.print(analogRead(A1));Serial.print(",");
  Serial.print(analogRead(A0));Serial.print(",");
  Serial.println(analogRead(A6));  }
   if (!(analogRead(A3)&&analogRead(A2)&&analogRead(A1)&&analogRead(A0)&&analogRead(A6)&&1))
  {
    rgbled.setPixelColor(0,255,0,0);
    rgbled.setPixelColor(1,255,0,0);
    rgbled.show(); Serial.println("red");  
  } 
//  else if (  analogRead(A3)== 1023  )//||analogRead(A2)|| analogRead(A1)||analogRead(A0)||analogRead(A6) 
//
//  {
//    rgbled.setPixelColor(0,0,0,255);
//    rgbled.setPixelColor(1,0,0,255);
//    rgbled.show();Serial.println("blue"); 
//  }
  else  
  {
    rgbled.setPixelColor(0,0,255,0);
    rgbled.setPixelColor(1,0,255,0);
    rgbled.show(); Serial.println("green");   
  }
  Serial.println("---------------------"); 
}

void N20motor_Backward(){
  digitalWrite(F_L, HIGH);
  digitalWrite(B_L, LOW);
  digitalWrite(F_R, HIGH);
  digitalWrite(B_R, LOW);
  
}
void N20motor_Forward(){
  digitalWrite(F_L, LOW);
  digitalWrite(B_L, HIGH);
  digitalWrite(F_R, LOW);
  digitalWrite(B_R, HIGH);
}
void N20motor_Stop(){
  digitalWrite(F_L, LOW);
  digitalWrite(B_L, LOW);
  digitalWrite(F_R, LOW);
  digitalWrite(B_R, LOW);
}
void N20motor_Begin(){
 N20motor_Forward();
delay(200);
N20motor_Stop();
delay(200);
N20motor_Backward();
delay(200);
N20motor_Stop();
delay(200); 
Serial.println("4.N20motor test"); 
}
void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600);
 pinMode(pinBuzzer, OUTPUT); //设置pinBuzzer脚为输出状态  
 pinMode(RED,OUTPUT);
 pinMode(GREEN,OUTPUT);
 rgbled.begin();
 rgbled.setPin(13);
 pinMode(F_L,OUTPUT);
 pinMode(B_L,OUTPUT);
 pinMode(F_R,OUTPUT);
 pinMode(B_R,OUTPUT);
 pinMode(7,INPUT_PULLUP); 
 pinMode(8,INPUT_PULLUP); 
}
void loop() {

  // put your main code here, to run repeatedly:

Serial.println("/*********************/"); 
if (digitalRead(7) == 0)  Serial.println("Button1 is pressed"); 
else if (digitalRead(8) == 0)  Serial.println("Button2 is pressed"); 
else 
 {
 Serial.println("0.Button test(Press and hold key 1 or press 2)"); 
  LineFillow_test();
 LED_test();
 Buzzer_test();
// RGB_test();
 N20motor_Begin();

 }

}


