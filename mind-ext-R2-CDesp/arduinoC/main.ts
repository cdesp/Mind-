enum LCD_TYPES {
    //% block="16x2 (0x27)"
    0,
    //% block="20x4 (0x27)"
    1
}

enum LCD_LIGHT {
    //% block="Φωτεινή"
    0,
    //% block="Σκοτεινή"
    1
}

enum LCD_DIR {
    //% block="Αριστερά"
    0,
    //% block="Δεξιά"
    1
}


enum DIGITAL_PORTS {
    //% block="D8"
    8,
    //% block="D9"
    9, 
    //% block="D11"
    11,
    //% block="D12"
    12
}

enum PENPOS {
    //% block="Πάνω"
    0,
    //% block="Κάτω"
    1
}

enum CARDIR {
    //% block="Μπροστά"
    0,
    //% block="Πίσω"
    1
}

//% color="#0CA63A" iconWidth=50 iconHeight=40
namespace cdesplib {


    //% block="απόσταση από εμπόδιο" blockType="reporter"
    export function getDistance(parameter: any, block: any) {
       if(Generator.board === 'arduino'){ 
        Generator.addInclude("SR01", "#include <SR01.h>");
        Generator.addSetup(`SRSetup_1`, `pinMode(A0, OUTPUT);`);
        Generator.addSetup(`SRSetup_2`, `pinMode(2, INPUT);`);
        Generator.addCode(`(getDistance(A0,2))`);
       }
    }

    //% block="μοίρες" blockType="reporter"
    export function getDegrees(parameter: any, block: any) {
        if(Generator.board === 'arduino'){ 
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.getDegrees()`);
        }
     }
 

    //% block="Θέσε ταχύτητα [SPD] "
    //% SPD.shadow="range" SPD.defl=120 SPD.params.min=60 SPD.params.max=255
    export function setSpeed(parameter: any, block: any) {
        let spd = parameter.SPD.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.setSpeed(${spd});`);
        }
    }

    //% block="Θέσε ισχύ κινητήρων: Αριστερός [LSPD], Δεξιός [RSPD] "
    //% LSPD.shadow="number" LSPD.defl=1
    //% RSPD.shadow="number" RSPD.defl=1
    export function setMotorRatio(parameter: any, block: any) {
        let lspd = parameter.LSPD.code;
        let rspd = parameter.RSPD.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.setMotorRatio(${lspd},${rspd});`);
        }
    }

    //% block="Κινήσου [DIR]"
    //% DIR.shadow="dropdown" DIR.options="CARDIR"    
    export function goForward(parameter: any, block: any) {
        let dir = parameter.DIR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            if (dir == 0) {
              Generator.addCode(`robo_car.forward();`);
            } else {
                Generator.addCode(`robo_car.backward();`);    
            }
        }
    }

    //% block="Κινήσου [DIR] για [SEC] δευτερόλεπτα"
    //% DIR.shadow="dropdown" DIR.options="CARDIR"    
    //% SEC.shadow="number" SEC.defl=1 SEC.params.min=0 SEC.params.max=15
    export function goForwardSec(parameter: any, block: any) {
        let secs = parameter.SEC.code;
        let dir = parameter.DIR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            if (dir == 0) {
               Generator.addCode(`robo_car.forwardSec(${secs});`);
            } else {
                Generator.addCode(`robo_car.backwardSec(${secs});`);
            }
        }
    }

    //% block="Στρίψε [LR] "
    //% LR.shadow="dropdown" LR.options="LCD_DIR" 
    export function turnLR(parameter: any, block: any) {
        let lr = parameter.LR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            if (lr == 0) {
              Generator.addCode(`robo_car.left();`); 
            } else {                   
                Generator.addCode(`robo_car.right();`);
            }
        }
    }

    //% block="Στρίψε [LR] για [SEC] δευτερόλεπτα"
    //% LR.shadow="dropdown" LR.options="LCD_DIR" 
    //% SEC.shadow="number" SEC.defl=3 SEC.params.min=0 SEC.params.max=20
    export function turnLRsecs(parameter: any, block: any) {
        let secs = parameter.SEC.code;
        let lr = parameter.LR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            if (lr == 0) {
              Generator.addCode(`robo_car.leftSec(${secs});`); 
            } else {                   
                Generator.addCode(`robo_car.rightSec(${secs});`);
            }
        }
    }

    //% block="Στρίψε [LR] [DEG] μοίρες"
    //% LR.shadow="dropdown" LR.options="LCD_DIR" 
    //% DEG.shadow="range" DEG.defl=30 DEG.params.min=1 DEG.params.max=180
    export function turnLRdeg(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        let lr = parameter.LR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addSetup(`DSRC_3`, `robo_car.initGyro();`);
            if (lr == 0) {
              Generator.addCode(`robo_car.turnLeft(${deg});`); 
            } else {                   
                Generator.addCode(`robo_car.turnRight(${deg});`);
            }
        }
    }

    //% block="Στρίψε [LR] [DEG] μοίρες για ζωγραφική"
    //% LR.shadow="dropdown" LR.options="LCD_DIR" 
    //% DEG.shadow="range" DEG.defl=30 DEG.params.min=1 DEG.params.max=180
    export function turnLRforpaint(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        let lr = parameter.LR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addSetup(`DSRC_3`, `robo_car.initGyro();`);
            if (lr == 0) {
              Generator.addCode(`robo_car.turnLeftForPaint(${deg});`); 
            } else {                   
                Generator.addCode(`robo_car.turnRightForPaint(${deg});`);
            }
        }
    }

    //% block="Σταμάτησε το όχημα"
    export function stop(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
           Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
           Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
           Generator.addSetup(`DSRC_1`, `robo_car.init();`);
           Generator.addCode(`robo_car.stop();`);
        }
    }    

    //% block="Στυλό στην θέση [PIN] με Πάνω όριο [AUP] και Κάτω όριο [ADN] "
    //% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.12"    
    //% AUP.shadow="number" AUP.defl="160"
    //% ADN.shadow="number" ADN.defl="90"
    export function setPenPin(parameter: any, block: any) {
        let pin = parameter.PIN.code;
        let aup = parameter.AUP.code;
        let adn = parameter.ADN.code;
        if(Generator.board === 'arduino'){
           Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
           Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
           Generator.addSetup(`DSRC_1`, `robo_car.init();`);
           Generator.addSetup(`DSRC_4`, `robo_car.setPenPin(${pin},${adn},${aup});`);
        }
    }    

    //% block="Στυλό [PPOS]"
    //% PPOS.shadow="dropdown" PPOS.options="PENPOS"
    export function setPenPos(parameter: any, block: any) {
        let p = parameter.PPOS.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);           
            if (p == 0) {
              Generator.addCode(`robo_car.penUP();`);
            } else {
                Generator.addCode(`robo_car.penDown();`);
            }
         }
     }    
     
    //% block="Ενεργοποίησε LCD [TYP]"
    //% TYP.shadow="dropdown" TYP.options="LCD_TYPES" TYP.defl="0"
    export function initLCD(parameter: any, block: any) {
        let typ = parameter.TYP.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);    
            Generator.addSetup(`DSRC_2`, `robo_car.initLCD(${typ});`);           
        }
    }

     //% block="Καθάρισε την οθόνη LCD"
     export function clearLCD(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.clearLCD();`);      
        }
    }


    //% block="Κάνε [LIT] την LCD"
    //% LIT.shadow="dropdown" LIT.options="LCD_LIGHT"    
    export function blightLCDset(parameter: any, block: any) {
        let ligt_typ = parameter.LIT.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);  
            if (ligt_typ == 0) {  
              Generator.addCode(`robo_car.backlightOnLCD();`);      
            } else {
                Generator.addCode(`robo_car.backlightOffLCD();`);         
            }
        }
    }

    //% block="Εμφάνισε στην οθόνη LCD: [MSG]" blockType="command"
    //% MSG.shadow="string"
    export function writeToLCD(parameter: any, block: any) {
        let mes = parameter.MSG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);    
            Generator.addCode(`robo_car.writeLCD(${mes});`);      
        }
    }    
    
    //% block="Θέσε τον δείκτη κειμένου της οθόνης LCD στην θέση [X],[Y]"
    //% X.shadow="range" X.defl="0" X.params.max="40"
    //% Y.shadow="range" Y.defl="0" Y.params.max="4" 
    export function setCursorLCD(parameter: any, block: any) {
        let x = parameter.X.code;
        let y = parameter.Y.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.setCursorLCD(${x},${y});`);      
        }
    }

    //% block="Ολίσθηση LCD [LCDDIR]"
    //% LCDDIR.shadow="dropdown" LCDDIR.options="LCD_DIR" LCDDIR.defl="0"    
    export function scrollLeftLCD(parameter: any, block: any) {
        let lcddir = parameter.LCDDIR.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`); 
            if (lcddir == 0) {
               Generator.addCode(`robo_car.scrollLeftLCD();`);      
            } else {
                Generator.addCode(`robo_car.scrollRightLCD();`);
            }
        }
    }    


}
