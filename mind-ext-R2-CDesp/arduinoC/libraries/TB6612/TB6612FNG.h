#ifndef _TB6612FNG_H
#define _TB6612FNG_H
#include <Arduino.h>

enum Motor{
  M1=1,
  M2=2,
  M3=3
};  
enum FR{
  CW,
  CCW
};  


class TB6612FNG
{
  public:

   
  TB6612FNG(int pwm1,int dir1,int pwm2,int dir2 );
  ~TB6612FNG( );
    
    void    setSpeed(int Motor,int FR,int Speed);

    void    DIRC(int dir,int direction);

    void    stop(int Motor);
 
    
 private:
     int _PWM1;
     int _DIR1;
     int _PWM2;
     int _DIR2;
 
};

#endif