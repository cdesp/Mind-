#ifndef DSP_Crane_H
  #define DSP_Crane_H

  #include <DFRobot_Servo.h> 

  #define P6_MAX 150
  #define P6_MIN 50
  #define P9_MAX 150
  #define P9_MIN 50
  #define PA0_MAX 100
  #define PA0_MIN 0
  #define PA1_MAX 160
  #define PA1_MIN 20
 
  class DESP_Crane
  {
   public:
    DESP_Crane();
    void init(); 
    void setFB(int deg);    
    void moveFront(int deg);
    void moveBack(int deg);
    void setUD(int deg);
    void moveUp(int deg);
    void moveDown(int deg);
    void setLR(int deg);
    void moveLeft(int deg);
    void moveRight(int deg);
    void setClaw(int deg);
    void openClaw(int deg);
    void closeClaw(int deg);

   private:
    Servo *servo_6;
    Servo *servo_9;
    Servo *servo_A0;
    Servo *servo_A1;
    int pos_6;
    int pos_9;
    int pos_A0;
    int pos_A1;
  };
  
      

#endif  



