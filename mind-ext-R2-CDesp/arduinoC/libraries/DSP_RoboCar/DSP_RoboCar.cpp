#include "DSP_RoboCar.h"


      DESP_Robot::DESP_Robot(){        
        speed = 100;   
        spdobj = new TB6612FNG(5,4,6,7);
        dspGyro = new DESP_Gyro();     
        servo_n = new Servo();
        leftMotorRatio = 1;
        rightMotorRatio = 1;
      }

      void DESP_Robot::init(){
        Serial.begin(115200);
        dspGyro->init();    
        setSpeed(120); //default speed
      }

      void DESP_Robot::setSpeed(int newspeed){        
        speed = newspeed;
        if (speed>255) speed = 255;
        leftSpeed = speed * leftMotorRatio;
        rightSpeed = speed * rightMotorRatio;
      }

      void DESP_Robot::setMotorRatio(float leftMot,float rightMot){
        if (leftMot==rightMot) {
          leftMotorRatio = 1;
          rightMotorRatio = 1;
        } else if (leftMot>rightMot) {
          leftMotorRatio = 1;
          rightMotorRatio = rightMot/leftMot; 
        } else {
          leftMotorRatio = leftMot/rightMot;
          rightMotorRatio = 1;
        }        
        setSpeed(speed);//recalculate
      }

      void DESP_Robot::forward(){
        spdobj->setSpeed(M1, CCW, rightSpeed);
        spdobj->setSpeed(M2, CW, leftSpeed);
      }

      void DESP_Robot::backward(){
        spdobj->setSpeed(M1, CW, rightSpeed);
        spdobj->setSpeed(M2, CCW, leftSpeed);
      }
       
      void DESP_Robot::stop(){
        spdobj->setSpeed(M1, CW, 0);
        spdobj->setSpeed(M2, CCW, 0);        
      }
       
      void DESP_Robot::left(){
        spdobj->setSpeed(M1, CCW, rightSpeed);
        spdobj->setSpeed(M2, CCW, leftSpeed);
      }
       
      void DESP_Robot::right(){
        spdobj->setSpeed(M1, CW, rightSpeed);
        spdobj->setSpeed(M2, CW, leftSpeed);
      }
      
      void DESP_Robot::readGyro(){
         dspGyro->checkGyro(); 
         dspGyro->setCurrentPosition();
      }

      int DESP_Robot::getDegrees(){
        readGyro();         
        return dspGyro->curbearing;
      }

      void DESP_Robot::turn(){
        int oldspeed = speed;
        setSpeed(70);
       // Serial.print("from:");Serial.print(dspGyro->curbearing); Serial.print(" To:");Serial.println(dspGyro->targbearing); 
       // delay(4000)    ;
       // readGyro(); 
       // Serial.print("from:");Serial.print(dspGyro->curbearing); Serial.print(" To:");Serial.println(dspGyro->targbearing); 
        
        do {
          readGyro();           
          int d= dspGyro->getDistance();
          //Serial.print("pos:");Serial.print(dspGyro->curbearing);Serial.print(" To:");Serial.print(dspGyro->targbearing); Serial.print(" Dist:");Serial.println(d);
         // Serial.print("pos:");Serial.print(dspGyro->curbearing); Serial.print(" Dist:");Serial.println(d);
          
          if (d>0) { //go right
            right(); //start moving          
            //Serial.println("turn right");
          }
          else { //go left
            left(); //start moving        
            //Serial.println("turn left");  
          }
         //delay(1000);
        } while (!dspGyro->isTargetReached(1));
        stop(); //stop moving        
       // Serial.print("Target Reached from:");Serial.print(lastAngle); Serial.print(" Now:");Serial.println(dspGyro->curbearing);
       // readGyro();
       // Serial.print("Target Reached from:");Serial.print(lastAngle); Serial.print(" Now:");Serial.println(dspGyro->curbearing);
        dspGyro->targetReached();        
        setSpeed( oldspeed);
        
      }

      void DESP_Robot::turnCompensate(){
          const float pi = 3.14;                    
          const float d=0.10; //the distance from the center of the rear wheels of the car to the pen in meters                    
          const float W=0.13; //The width of the car

          
          //for 120 speed we move 18.5 cm in 1 sec so
          float u=0.185; //the speed we move in meters per second
          float th= lastDeg * (pi/180); //degrees to radians
          float tmComp,tmBack;

          tmBack = (d*th)/u;  //backward time to move;
          tmComp = (d*th)/u;  //forward time to move;

          tmBack *= 0.415;
          tmComp *= 0.75;

          backward();  //1st compensation go back a little
          delay(tmBack*1000);
          stop();

          turn();

          forward(); //2nd compensatiοn go forward depanding on the turn degrees;
          delay(tmComp*1000);
          stop();
      }

      void DESP_Robot::turnLeft(int deg){     
        lastDeg = deg;             
        readGyro();
        lastAngle=dspGyro->curbearing;
        dspGyro->goLeft(deg);   
        turnCompensate();
      }
       
      void DESP_Robot::turnRight(int deg){  
        lastDeg = deg;
        readGyro();
        lastAngle=dspGyro->curbearing;
        dspGyro->goRight(deg);   
        turnCompensate();
      }      

      //===============================

      void DESP_Robot::setPenPin(int pin){
        penpin = pin;  
        servo_n->attach(penpin);
        penUP();
      }

      void DESP_Robot::penUP(){
        servo_n->angle(160);
        delay(250);
      }

      void DESP_Robot::penDown(){
        servo_n->angle(90);
        delay(250);
      }

      //===============================

      void DESP_Robot::initLCD(int type){
        switch(type) {
          case 0: lcd = new LCD_I2C(0x27, 16, 2);
          case 1: lcd = new LCD_I2C(0x27, 20, 4);
        }
        
        lcd->begin(); 
        lcd->backlight();
        lcd->print("LCD ok!");
        delay(3000);
        lcd->clear();
      }

      void DESP_Robot::writeLCD(char* msg){
        lcd->print(msg);
      }

      void DESP_Robot::writeLCD(int no){
        lcd->print(no);
      }

      void DESP_Robot::setCursorLCD(int lx,int ly){
        lcd->setCursor(lx,ly);
      }

      void DESP_Robot::clearLCD(){
        lcd->clear();
      }

      void DESP_Robot::backlightOnLCD(){
        lcd->backlight();
      }

      void DESP_Robot::backlightOffLCD(){
        lcd->noBacklight();
      }
  
      void DESP_Robot::scrollLeftLCD(){
        lcd->scrollDisplayLeft();
      }

      void DESP_Robot::scrollRightLCD(){
        lcd->scrollDisplayRight();
      }
  