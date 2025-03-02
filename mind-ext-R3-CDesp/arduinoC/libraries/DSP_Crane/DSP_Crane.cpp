#include "DSP_Crane.h"


      DESP_Crane::DESP_Crane(){        
        
        servo_6 = new Servo();   //front back
        servo_9 = new Servo();   //Claw
        servo_A0 = new Servo();  //Up Down
        servo_A1 = new Servo();  //Left Right
        
        pos_6 = 100;
        pos_9 = 80;
        pos_A0 = 50;
        pos_A1 = 90;
      }

      void DESP_Crane::init(){
        servo_6->attach(6);
        servo_9->attach(9);
        servo_A0->attach(A0);
        servo_A1->attach(A1);
        delay(50);
        setFB(pos_6);
        setUD(pos_A0);
        setLR(pos_A1);
        setClaw(pos_9);
      }

      void DESP_Crane::setFB(int deg){        
        pos_6=deg;
        if (pos_6<P6_MIN) pos_6=P6_MIN;    
        if (pos_6>P6_MAX) pos_6=P6_MAX;    
        servo_6->angle(abs(pos_6));
      }      

      void DESP_Crane::moveFront(int deg){           
        setFB(pos_6-deg);
      }

      void DESP_Crane::moveBack(int deg){
        setFB(pos_6+deg);
      }

      void DESP_Crane::setUD(int deg){
        pos_A0=deg;
        if (pos_A0<PA0_MIN) pos_A0=PA0_MIN;    
        if (pos_A0>PA0_MAX) pos_A0=PA0_MAX;    
        servo_A0->angle(abs(pos_A0));
      }

      void DESP_Crane::moveUp(int deg){
        setUD(pos_A0-deg);
      }

      void DESP_Crane::moveDown(int deg){
        setUD(pos_A0+deg);
      }      

      void DESP_Crane::setLR(int deg){
        pos_A1=deg;
        if (pos_A1<PA1_MIN) pos_A1=PA1_MIN;    
        if (pos_A1>PA1_MAX) pos_A1=PA1_MAX;    
        servo_A1->angle(abs(pos_A1));
      }

      void DESP_Crane::moveLeft(int deg){
        setLR(pos_A1+deg);
      }

      void DESP_Crane::moveRight(int deg){
        setLR(pos_A1-deg);
      }

      void DESP_Crane::setClaw(int deg){
        pos_9=deg;
        if (pos_9<P9_MIN) pos_9=P9_MIN;    
        if (pos_9>P9_MAX) pos_9=P9_MAX;    
        servo_9->angle(abs(pos_9));
      }

      void DESP_Crane::openClaw(int deg){
        setClaw(pos_9+deg);
      }

      void DESP_Crane::closeClaw(int deg){
        setClaw(pos_9-deg);
      }      