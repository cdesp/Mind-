#ifndef DspGyro_H
 #define DspGyro_H

//My Wrapper for GY-273 HMC5883L with QMC chip

#include "Arduino.h"
#include <Wire.h>
#include <QMC5883LCompass.h>


class DESP_Gyro
{
  private:
    QMC5883LCompass *qmc;
      
    int azimuth;    
    int redogyro;  
    
    
  public:
    float curbearing;
    float targbearing;
    boolean turning;

    DESP_Gyro();
    void checkGyro(boolean debug);
    void calibrateGyro(boolean debug);
    void init();
    void goLeft(int deg);
    void goRight(int deg);
    int getBearingDistance(float b1,float b2);
    int getDistance();
    boolean isTargetReached(int test);
    void targetReached();
    void setCurrentPosition();
    void getGyroSettings(boolean debug);
    float getSafeGyroPos();
    void gotoBearing(float b);
};




#endif
