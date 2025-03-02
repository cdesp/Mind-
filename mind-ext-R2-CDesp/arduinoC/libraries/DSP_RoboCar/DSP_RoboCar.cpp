#include "DSP_RoboCar.h"



      DESP_Robot::DESP_Robot(){        
        speed = 100;   
        spdobj = new TB6612FNG(5,4,6,7);
        dspGyro = new DESP_Gyro();     
      }

      void DESP_Robot::init(){
        dspGyro->init();
        Serial.begin(9600);
      }

      // void DESP_Robot::setSpeedObject(TB6612FNG *obj) {
      //  spdobj = obj;
      //  dspGyro->init();
      // }
      void DESP_Robot::setSpeed(int newspeed){        
        speed = newspeed;
        if (speed>255) speed = 255;
      }

      void DESP_Robot::forward(){
        spdobj->setSpeed(M1, CCW, speed);
        spdobj->setSpeed(M2, CW, speed);
      }

      void DESP_Robot::backward(){
        spdobj->setSpeed(M1, CW, speed);
        spdobj->setSpeed(M2, CCW, speed);
      }
       
      void DESP_Robot::stop(){
        spdobj->setSpeed(M1, CW, 0);
        spdobj->setSpeed(M2, CCW, 0);        
      }
       
      void DESP_Robot::left(){
        spdobj->setSpeed(M1, CCW, speed);
        spdobj->setSpeed(M2, CCW, speed);
      }
       
      void DESP_Robot::right(){
        spdobj->setSpeed(M1, CW, speed);
        spdobj->setSpeed(M2, CW, speed);
      }
      
      void DESP_Robot::readGyro(){
         //dspGyro->checkGyro(false); 
         //dspGyro->setCurrentPosition();
          dspGyro->getGyroSettings(false);
      }

      void DESP_Robot::turn(){
        int oldspeed = speed;
        speed =50;
        Serial.print("from:");Serial.print(dspGyro->curbearing); Serial.print(" To:");Serial.println(dspGyro->targbearing);     
        do {
          readGyro();           
          int d= dspGyro->getDistance();
          Serial.print("pos:");Serial.print(dspGyro->curbearing);Serial.print(" To:");Serial.print(dspGyro->targbearing); Serial.print(" Dist:");Serial.println(d);
          
          
          if (d>0) { //go right
            right(); //start moving          
            //Serial.println("turn right");
          }
          else { //go left
            left(); //start moving        
            //Serial.println("turn left");  
          }
         //delay(1000);
        } while (!dspGyro->isTargetReached(4));
        stop(); //stop moving
        Serial.print("Target Reached from:");Serial.print(lastAngle); Serial.print(" Now:");Serial.println(dspGyro->curbearing);
        dspGyro->targetReached();        
        speed= oldspeed;
      }

      void DESP_Robot::turnLeft(int deg){                  
        readGyro();
        lastAngle=dspGyro->curbearing;
        dspGyro->goLeft(deg);   
        turn();
      }
       
      void DESP_Robot::turnRight(int deg){  
        readGyro();
        lastAngle=dspGyro->curbearing;
        dspGyro->goRight(deg);   
        turn();
      }      

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
  
      int DESP_Robot::getDegrees(){
        readGyro();         
        return dspGyro->curbearing;
      }