enum LCD_TYPES {
    //% block="16x2 (0x27)"
    0,
    //% block="20x4 (0x27)"
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
    //% SPD.shadow="number" SPD.defl="120"
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
    //% LSPD.shadow="number" LSPD.defl="1"
    //% RSPD.shadow="number" RSPD.defl="1"
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


    //% block="Κινήσου προς τα μπροστά"
    export function goForward(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.forward();`);
        }
    }

    //% block="Κινήσου προς τα πίσω"
    export function goBackward(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.backward();`);
        }
    }    

    //% block="Κινήσου προς τα μπροστά για [SEC] δευτερόλεπτα"
    //% SEC.shadow="number" SEC.defl="1"
    export function goForwardSec(parameter: any, block: any) {
        let secs = parameter.SEC.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.forwardSec(${secs});`);
        }
    }

    //% block="Κινήσου προς τα πίσω για [SEC] δευτερόλεπτα"
    //% SEC.shadow="number" SEC.defl="1"
    export function goBackwardSec(parameter: any, block: any) {
        let secs = parameter.SEC.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.backwardSec(${secs});`);
        }
    }    


    //% block="Στρίψε δεξιά [DEG] μοίρες"
    //% DEG.shadow="number" DEG.defl="30"
    export function turnRight(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);
            Generator.addCode(`robo_car.turnRight(${deg});`);
        }
    }

    //% block="Στρίψε αριστερά [DEG] μοίρες"
    //% DEG.shadow="number" DEG.defl="30"
    export function turnLeft(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);            
            Generator.addSetup(`DSRC_1`, `robo_car.init();`);            
            Generator.addCode(`robo_car.turnLeft(${deg});`);
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
           Generator.addSetup(`DSRC_3`, `robo_car.setPenPin(${pin},${adn},${aup});`);
        }
    }    

    //% block="Στυλό Πάνω"
    export function penUp(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
           Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
           Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
           Generator.addSetup(`DSRC_1`, `robo_car.init();`);           
           Generator.addCode(`robo_car.penUP();`);
        }
    }    

    //% block="Στυλό Κάτω"
    export function penDown(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
           Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
           Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);           
           Generator.addSetup(`DSRC_1`, `robo_car.init();`);
           Generator.addCode(`robo_car.penDown();`);
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

    //% block="Φωτεινή LCD"
    export function backlightLCDon(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.backlightOnLCD();`);      
        }
    }

    //% block="Σκοτεινή LCD"
    export function backlightLCDoff(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.backlightOffLCD();`);      
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
    //% X.shadow="number" X.defl="0" X.params.max="40"
    //% Y.shadow="number" Y.defl="0" Y.params.max="4" 
    export function setCursorLCD(parameter: any, block: any) {
        let x = parameter.X.code;
        let y = parameter.Y.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.setCursorLCD(${x},${y});`);      
        }
    }

    //% block="Ολίσθηση LCD αριστερά"
    export function scrollLeftLCD(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.scrollLeftLCD();`);      
        }
    }    

    //% block="Ολίσθηση LCD δεξιά"
    export function scrollRightLCD(parameter: any, block: any) {
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSRC", "#include <DSP_RoboCar.h>");
            Generator.addObject(`DSRC`, `DESP_Robot`, `robo_car`);     
            Generator.addCode(`robo_car.scrollRightLCD();`);      
        }
    }    


}
