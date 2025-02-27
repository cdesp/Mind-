#ifndef DSP_RoboCar_H
  #define DSP_RoboCar_H

  #include <DspGyro3.h> 
  #include <TB6612FNG.h>
  #include <LCD_I2C.h>

  

  class DESP_Robot
  {
   public:
    DESP_Robot();
    void init(); 
    void setSpeed(int newspeed);
    void backward();
    void forward();
    void stop();
    void left();
    void right();
    void turnLeft(int deg);
    void turnRight(int deg);
    void initLCD(int type);
    void writeLCD(char* msg);
    void setCursorLCD(int lx,int ly);
    void clearLCD();
    void backlightOnLCD();
    void backlightOffLCD();
    void scrollLeftLCD();
    void scrollRightLCD();
    //void setSpeedObject(TB6612FNG *obj); 
  
   private:
     int lastAngle;
     int speed;     
     DESP_Gyro *dspGyro;
     TB6612FNG *spdobj;
     LCD_I2C *lcd;
  };
  
      

#endif  



