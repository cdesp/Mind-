#include "DSP_Crane.h"


      DESP_Crane::DESP_Crane(){        
        
        servo_8 = new Servo();   //front back
        servo_9 = new Servo();   //Claw
        servo_A0 = new Servo();  //Up Down
        servo_A1 = new Servo();  //Left Right
        usnc =  new DFRobot_URM10();
        
        pos_8 = 100;
        pos_9 = 100;
        pos_A0 = 50;
        pos_A1 = 90;
        mvspd = 3;
        echo = 7;
        trig = 6; 
      }

      void DESP_Crane::init(){
        servo_8->attach(8);        
        servo_9->attach(9);        
        servo_A0->attach(A0);
        servo_A1->attach(A1);        
        delay(50);
        setFB(pos_8);
        setUD(pos_A0);
        setLR(pos_A1);
        setClaw(pos_9);
      }

      void DESP_Crane::setSpeed(int spd){
        mvspd=spd; 
      }      

      void DESP_Crane::setServoPosition(Servo *servo,int opos,int npos){

        for (int i=opos;i!=npos;){
          if (opos>npos) i--; else i++;
          servo->angle(abs(i));   
          delay(mvspd*5);
        }

      }

      void DESP_Crane::setFB(int deg){               
        
        if (deg<P8_MIN) deg=P8_MIN;    
        if (deg>P8_MAX) deg=P8_MAX;    

        setServoPosition(servo_8,pos_8,deg);
        pos_8=deg;
        servo_8->angle(abs(pos_8));
      }      

      void DESP_Crane::moveFront(int deg){           
        setFB(pos_8-deg);
      }

      void DESP_Crane::moveBack(int deg){
        setFB(pos_8+deg);
      }

      void DESP_Crane::setUD(int deg){
        
        if (deg<PA0_MIN) deg=PA0_MIN;    
        if (deg>PA0_MAX) deg=PA0_MAX; 

        setServoPosition(servo_A0,pos_A0,deg);   
        pos_A0=deg;
        servo_A0->angle(abs(pos_A0));
      }

      void DESP_Crane::moveUp(int deg){
        setUD(pos_A0-deg);
      }

      void DESP_Crane::moveDown(int deg){
        setUD(pos_A0+deg);
      }      

      void DESP_Crane::setLR(int deg){
        
        if (deg<PA1_MIN) deg=PA1_MIN;    
        if (deg>PA1_MAX) deg=PA1_MAX;   

        setServoPosition(servo_A1,pos_A1,deg);
        pos_A1=deg;
        servo_A1->angle(abs(pos_A1));
      }

      void DESP_Crane::moveLeft(int deg){
        setLR(pos_A1+deg);
      }

      void DESP_Crane::moveRight(int deg){
        setLR(pos_A1-deg);
      }

      void DESP_Crane::setClaw(int deg){
        
        if (deg<P9_MIN) deg=P9_MIN;    
        if (deg>P9_MAX) deg=P9_MAX;    

        setServoPosition(servo_9,pos_9,deg);
        pos_9=deg;
        servo_9->angle(abs(pos_9));
      }

      void DESP_Crane::openClaw(int deg){
        setClaw(pos_9+deg);
      }

      void DESP_Crane::closeClaw(int deg){
        setClaw(pos_9-deg);
      }      

      void DESP_Crane::setUsonic(int e,int t){
        echo = e;
        trig = t;
      }


      float DESP_Crane::readUsonic(){
        return usnc->getDistanceCM(trig, echo);
      }
  