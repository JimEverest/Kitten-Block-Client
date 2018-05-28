/**
   日期: 2017/11/8
   作者: bee
   描述: 巡线小车速度校准
*/
const int d_time = 100; //设定单位时间
int MA = 2;
int MB = 3; //脉冲输入引脚的定义
//MA接通道A 则MB需接通道B  影响应该也不大
int MA1 = 5;
int MA2 = 6;
int MB1 = 9;
int MB2 = 10; //电机输出引脚的定义 在M1上

int valMA = 0;
int valMB = 0; //用来储存两个电机的脉冲数

unsigned long times;
unsigned long newtime;//时间变量

void goMA(int PWM);
void goMB(int PWM);

void interrupt0();
void interrupt1();//子函数声明

void setup()
{
  Serial.begin(115200);//串口初始化

  pinMode(MA1, OUTPUT);
  pinMode(MA2, OUTPUT);
  pinMode(MB1, OUTPUT);
  pinMode(MB2, OUTPUT);

  pinMode(MA, INPUT);
  pinMode(MB, INPUT); //引脚的输入方式

  attachInterrupt(0, interrupt0, CHANGE);//当int.0电平改变时,触发中断函数1
  attachInterrupt(1, interrupt1, CHANGE);//当int.1电平改变时,触发中断函数2
  motorCalibration();

}
void motorCalibration()
{
  int calibrationFlag = 0;
  int motorDiff = 0;
  int valDiff = 0;
  // 1. start target motor
  Serial.println("M209 1.0");
  delay(200);

  while(calibrationFlag == 0){
    valMA = valMB = 0;
    Serial.println("M200 1 120");
    motorDiff += int(valDiff*0.5);
    Serial.println("M200 2 "+String(120+motorDiff));
    delay(1000);
    valDiff = (valMA - valMB);
    Serial.println("M200 0 0");
    Serial.print("A = " + String(valMA));
    Serial.println(" B = " + String(valMB));
    Serial.println("valdiff = " + String(valDiff));
    if(abs(valDiff)<5){
      calibrationFlag = 1;
      Serial.println("M209 "+String(1+float(motorDiff/120.0f)));
    }
    delay(1000);
  }
  
  // 2. start check
  Serial.println("#############################");
  valMA = valMB = 0;
  Serial.println("M200 0 120");
  delay(1000);
  Serial.println("M200 0 0");
  Serial.print("A = " + String(valMA));
  Serial.println(" B = " + String(valMB));
  valDiff = (valMA - valMB);
  Serial.println("valdiff = " + String(valDiff));
  
}
double i = 1.0;
int diff = 0;
void loop()
{
  
}

/***********************************子函数程序**********************************/
void interrupt0()
{
  valMA++;
}
void interrupt1()
{
  valMB++;
}
void goMA(int PWM)
{
  digitalWrite(MA1, LOW);
  analogWrite(MA2, PWM);
}
void goMB(int PWM)
{
  digitalWrite(MB1, LOW);
  analogWrite(MB2, PWM);
}


