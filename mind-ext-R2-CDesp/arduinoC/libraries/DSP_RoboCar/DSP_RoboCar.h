#ifndef DSP_RoboCar_H
  #define DSP_RoboCar_H

  #include <DspGyro4.h> 
  #include <TB6612FNG.h>
  #include <LCD_I2C.h>
  #include <DFRobot_Servo.h>
  
  class DESP_Robot
  {
   public:
    DESP_Robot();
    void init(); 
    void setSpeed(int newspeed);
    void setMotorRatio(float leftMot,float rightMot);
    void backward();
    void forward();
    void stop();
    void left();
    void right();
    void turn();
    void turnCompensate();
    void turnLeft(int deg);
    void turnRight(int deg);
    void readGyro();
    int getDegrees();
    void setPenPin(int pin);
    void penUP();
    void penDown();
    void initLCD(int type);
    void writeLCD(char* msg);
    void writeLCD(int no);
    void setCursorLCD(int lx,int ly);
    void clearLCD();
    void backlightOnLCD();
    void backlightOffLCD();
    void scrollLeftLCD();
    void scrollRightLCD();
  
   private:
     int lastAngle;
     int lastDeg;
     int speed;   
     int penpin; 
     float leftMotorRatio;
     float rightMotorRatio;
     int leftSpeed;
     int rightSpeed;
     DESP_Gyro *dspGyro;
     TB6612FNG *spdobj;
     LCD_I2C *lcd;
     Servo  *servo_n;
  };
  
      

#endif  



