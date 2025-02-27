/*
  SR01.cpp - Library for SR01 ultrasonic distance sensor.
  Created by Panos Verras, May 10, 2024.
  Released under MIT licence.
*/
#ifndef SR01_h
#define SR01_h

#include "Arduino.h"

int getDistance(int trigPin, int echoPin);

#endif