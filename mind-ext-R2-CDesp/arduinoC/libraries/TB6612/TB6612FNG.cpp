#include "TB6612FNG.h"
#include "Arduino.h"
 
TB6612FNG::TB6612FNG( int pwm1,int dir1,int pwm2,int dir2){
        _PWM1=pwm1;
        _DIR1=dir1;
        _PWM2=pwm2;
        _DIR2=dir2;
        pinMode(_DIR1, OUTPUT);   
        pinMode(_DIR2, OUTPUT);       
}

TB6612FNG::~TB6612FNG() {}
   
void    TB6612FNG::setSpeed(int Motor,int FR,int Speed){   
    if(Motor == M1&&FR == CW){
        digitalWrite(_DIR1,LOW);
        analogWrite(_PWM1, Speed);
    }else if(Motor == M1&&FR == CCW){
        digitalWrite(_DIR1,HIGH);
        analogWrite(_PWM1, Speed);
    }else if(Motor == M2&&FR == CW){
        digitalWrite(_DIR2,HIGH);
        analogWrite(_PWM2, Speed);
    }else if(Motor == M2&&FR == CCW){
        digitalWrite(_DIR2,LOW);
        analogWrite(_PWM2, Speed);
    }else if(Motor == M3&&FR == CW){
        digitalWrite(_DIR1,LOW);
        analogWrite(_PWM1, Speed);

        digitalWrite(_DIR2,HIGH);
        analogWrite(_PWM2, Speed);
    }else if(Motor == M3&&FR == CCW){
        digitalWrite(_DIR1,HIGH);
        analogWrite(_PWM1, Speed);

        digitalWrite(_DIR2,LOW);
        analogWrite(_PWM2, Speed);
    }    
}
    
void    TB6612FNG::stop(int Motor){  
    if(Motor == M1){      
        analogWrite(_PWM1,0); 
    }else if(Motor == M2){
        analogWrite(_PWM2,0);
    }else if(Motor == M3){
        analogWrite(_PWM1,0);
        analogWrite(_PWM2,0);
    }
}
