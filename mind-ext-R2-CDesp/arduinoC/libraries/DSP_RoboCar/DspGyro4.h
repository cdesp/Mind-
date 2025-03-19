#ifndef DspGyro_H
 #define DspGyro_H

#include <MPU6050_tockn.h>

class DESP_Gyro
{
  private: 
	  MPU6050 *mpu;           
    float gyroval;            

  public:
  	
    float curbearing;
    float targbearing;
    boolean turning;

    DESP_Gyro();
    void checkGyro();
    void init();
    void goLeft(int deg);
    void goRight(int deg);
    int getBearingDistance(float b1,float b2);
    int getDistance();
    boolean isTargetReached(int test);
    void targetReached();
    void setCurrentPosition();
    void gotoBearing(float b);
};




#endif
