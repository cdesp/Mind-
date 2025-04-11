#include "DSP_Crane.h"


      DESP_Crane::DESP_Crane(){        
        
        servo_8 = new Servo();   //front back
        servo_9 = new Servo();   //Claw
        servo_A0 = new Servo();  //Up Down
        servo_A1 = new Servo();  //Left Right
        usnc =  new DFRobot_URM10();
        
        UDMIN = 0;  //A0 //default values
        UDMAX = 120;
        LRMIN = 20; // A1
        LRMAX = 160;
        FBMIN = 50; // P8
        FBMAX = 150;
        CLMIN = 50; // 9
        CLMAX = 150;

        pos_A0 = getValueInRange(90,UDMIN,UDMAX); //middle
        pos_A1 = getValueInRange(90,LRMIN,LRMAX);
        pos_8 = getValueInRange(90,FBMIN,FBMAX);
        pos_9 = getValueInRange(90,CLMIN,CLMAX);
        mvspd = 3;
        echo = 7;
        trig = 6; 
      }

      //0 is the minimum value, 180is tha maximum
      //translates it to the actual values
      int DESP_Crane::getValueInRange(int v,int smin, int smax){
        return map(v, 0, 180, smin, smax);
      }

      int DESP_Crane::getRevValueInRange(int v,int smin, int smax){
        return map(v, smin, smax, 0, 180);
      }

      void DESP_Crane::init(){
        servo_8->attach(8);        
        servo_9->attach(9);        
        servo_A0->attach(A0);
        servo_A1->attach(A1);          
        delay(50);
        servo_A0->angle(abs(pos_A0));      
        servo_A1->angle(abs(pos_A1));      
        servo_8->angle(abs(pos_8));      
        servo_9->angle(abs(pos_9));      
      }

      int DESP_Crane::getFBPos(){
        return getRevValueInRange(pos_8, FBMIN, FBMAX); //get the value in 0-180 range 
      }

      int DESP_Crane::getUDPos(){
        return getRevValueInRange(pos_A0, UDMIN, UDMAX); //get the value in 0-180 range 
      }

      int DESP_Crane::getLRPos(){
        return getRevValueInRange(pos_A1, LRMIN, LRMAX); //get the value in 0-180 range 
      }

      int DESP_Crane::getCLPos(){
        return getRevValueInRange(pos_9, CLMIN, CLMAX); //get the value in 0-180 range 
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

      void DESP_Crane::setUDminmax(int nm, int nmx){
        UDMIN = nm;
        UDMAX = nmx;
        setUD(90);
      }

      void DESP_Crane::setLRminmax(int nm, int nmx){
        LRMIN = nm;
        LRMAX = nmx;
        setLR(90);
      }

      void DESP_Crane::setFBminmax(int nm, int nmx){
        FBMIN = nm;
        FBMAX = nmx;
        setFB(90);
        nm =  FBMIN+FBRANGE;
      }

      void DESP_Crane::setCLminmax(int nm, int nmx){
        CLMIN = nm;
        CLMAX = nmx;
        setClaw(90);
      }
  

      void DESP_Crane::setFB(int deg){               
        
        if (deg<0) deg=0;    
        if (deg>180) deg=180;    
        deg = getValueInRange(deg,FBMIN,FBMAX);
        setServoPosition(servo_8,pos_8,deg);
        pos_8=deg;
        servo_8->angle(abs(pos_8));
        delay(MVDEL);
      }      

      void DESP_Crane::moveFront(int deg){
        int p = getRevValueInRange(pos_8, FBMIN, FBMAX); //get the value in 0-180 range        
        setFB(p-deg);
      }

      void DESP_Crane::moveBack(int deg){
        int p = getRevValueInRange(pos_8, FBMIN, FBMAX); //get the value in 0-180 range        
        setFB(p+deg);
      }

      void DESP_Crane::setUD(int deg){
        
        if (deg<0) deg=0;    
        if (deg>180) deg=180; 

        deg = getValueInRange(deg,UDMIN,UDMAX);
        setServoPosition(servo_A0,pos_A0,deg);   
        pos_A0=deg;
        servo_A0->angle(abs(pos_A0));
        delay(MVDEL);
      }

      void DESP_Crane::moveUp(int deg){
        int p = getRevValueInRange(pos_A0, UDMIN, UDMAX); //get the value in 0-180 range 
        setUD(p-deg);
      }

      void DESP_Crane::moveDown(int deg){
        int p = getRevValueInRange(pos_A0, UDMIN, UDMAX); //get the value in 0-180 range 
        setUD(p+deg);
      }      

      void DESP_Crane::setLR(int deg){
        
        if (deg<0) deg=0;    
        if (deg>180) deg=180;   
        deg = getValueInRange(deg,LRMIN,LRMAX);
        setServoPosition(servo_A1,pos_A1,deg);
        pos_A1=deg;
        servo_A1->angle(abs(pos_A1));
        delay(MVDEL);
      }

      void DESP_Crane::moveLeft(int deg){
        int p = getRevValueInRange(pos_A1, LRMIN, LRMAX); //get the value in 0-180 range 
        setLR(p+deg);
      }

      void DESP_Crane::moveRight(int deg){
        int p = getRevValueInRange(pos_A1, LRMIN, LRMAX); //get the value in 0-180 range 
        setLR(p-deg);
      }

      void DESP_Crane::setClaw(int deg){
        
        if (deg<0) deg=0;    
        if (deg>180) deg=180;    
        deg = getValueInRange(deg,CLMIN,CLMAX);
        setServoPosition(servo_9,pos_9,deg);
        pos_9=deg;
        servo_9->angle(abs(pos_9));
        delay(MVDEL);
      }

      void DESP_Crane::openClaw(int deg){
        int p = getRevValueInRange(pos_9, CLMIN, CLMAX); //get the value in 0-180 range 
        setClaw(p+deg);
      }

      void DESP_Crane::closeClaw(int deg){
        int p = getRevValueInRange(pos_9, CLMIN, CLMAX); //get the value in 0-180 range 
        setClaw(p-deg);
      }      

      void DESP_Crane::setUsonic(int e,int t){
        echo = e;
        trig = t;
      }


      float DESP_Crane::readUsonic(){
        return usnc->getDistanceCM(trig, echo);
      }
  