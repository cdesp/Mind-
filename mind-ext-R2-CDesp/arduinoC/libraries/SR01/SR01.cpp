/*
  SR01.cpp - Library for SR01 ultrasonic distance sensor.
  Created by Panos Verras, May 10, 2024.
  Released under MIT licence.
*/

#include "Arduino.h"
#include "SR01.h"


int getDistance(int trigPin, int echoPin) {
    float duration;
    float distance;

    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);

    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    duration = pulseIn(echoPin, HIGH);
    distance = (duration*.0343)/2;

    if (distance > 400)
    {
        distance = 400;
    }

    if (distance < 0)
    {
        distance = 0;
    }

    return (int)distance;
}
