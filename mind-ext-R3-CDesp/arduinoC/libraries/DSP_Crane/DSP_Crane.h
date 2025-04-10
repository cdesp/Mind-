#ifndef DSP_Crane_H
  #define DSP_Crane_H

  #include <DFRobot_Servo.h> 
  #include <DFRobot_URM10.h>

  #define UDRANGE 100  //80//A0
  #define LRRANGE 120 //140//A1
  #define FBRANGE 120 //120//8
  #define CLRANGE 100 //9

  /*#define P8_MAX 150
  #define P8_MIN 50
  #define P9_MAX 150
  #define P9_MIN 50
  #define PA0_MAX 100
  #define PA0_MIN 0
  #define PA1_MAX 160
  #define PA1_MIN 20 */

  const uint8_t delays[] = {0,20,40,60,80,100};
  const int MVDEL=500;
 
  class DESP_Crane
  {
   public:
    DESP_Crane();
    void init();
    int getValueInRange(int v, int smin, int range);
    int getRevValueInRange(int v, int smin, int smax);
    int getFBPos();
    int getUDPos();
    int getLRPos();
    int getCLPos();
    void setServoPosition(Servo * servo, int opos, int npos);
    void setUDminmax(int nm, int nmx);
    void setLRminmax(int nm, int nmx);
    void setFBminmax(int nm, int nmx);
    void setCLminmax(int nm, int nmx);
    void setSpeed(int spd);
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
    void setUsonic(int e, int t);
    float readUsonic();

    private:
      Servo *servo_8;
      Servo *servo_9;
      Servo *servo_A0;
      Servo *servo_A1;
      DFRobot_URM10 *usnc;
      int UDMIN;
      int LRMIN;
      int FBMIN;
      int CLMIN;
      int UDMAX;
      int LRMAX;
      int FBMAX;
      int CLMAX;
      int pos_8;
      int pos_9;
      int pos_A0;
      int pos_A1;
      int mvspd;
      int echo;
      int trig;
    };

#endif  



