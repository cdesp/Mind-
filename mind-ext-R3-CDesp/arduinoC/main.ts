enum SPD_TYPES {
    //% block="Μέγιστη"
    0,
    //% block="Πολύ Μεγάλη"
    1,
    //% block="Μεγάλη"
    2,
    //% block="Μέτρια"
    3,
    //% block="Μικρή"
    4,
    //% block="Πολύ μικρή"
    5,
    //% block="Ελάχιστη"
    6

}

enum ECH_TYPES {
    //% block="D6"
    6,
    //% block="D7"
    7, 
    //% block="D8"
    8,
    //% block="D9"
    9, 
    //% block="A0"
    A0,
    //% block="A1"
    A1, 
    //% block="A2"
    A2,
    //% block="A3"
    A3, 
    //% block="A4"
    A4,
    //% block="A5"
    A5
}

enum TRG_TYPES {
    //% block="D6"
    6,
    //% block="D9"
    9
}

enum CRPOS_TYPES {
    //% block="μπροστά"
    0,
    //% block="πίσω"
    1, 
    //% block="δεξιά"
    2,
    //% block="αριστερά"
    3, 
    //% block="πάνω"
    4,
    //% block="κάτω"
    5 
}

enum POSDA_TYPES {
    //% block="Άνοιξε"
    0,
    //% block="Κλείσε"
    1
}

enum CRPOS0_TYPES {
    //% block="Μπρος - Πίσω"
    0,
    //% block="Δεξιά - Αριστερά"
    1,
    //% block="Πάνω - Κάτω"    
    2

}

enum CRPOS1_TYPES {
    //% block="Βραχίονα Μπρος - Πίσω"
    0,
    //% block="Βραχίονα Δεξιά - Αριστερά"
    1,
    //% block="Βραχίονα Πάνω - Κάτω"    
    2,
    //% block="Δαγκάνα"    
    3    
}


//% color="#000099" iconWidth=50 iconHeight=40
namespace cdesplib2 {


    //% block="θέση [CRPOS1] " blockType="reporter"
    //% CRPOS1.shadow="dropdown" CRPOS1.options="CRPOS1_TYPES"
    export function getCranePos(parameter: any, block: any) {
        let pcr = Number(parameter.CRPOS1.code);
        if(Generator.board === 'arduino'){ 
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            switch (pcr){
                case 0: Generator.addCode(`crane.getFBPos();`);break;
                case 1: Generator.addCode(`crane.getLRPos();`);break;
                case 2: Generator.addCode(`crane.getUDPos();`);break;   
                case 3: Generator.addCode(`crane.getCLPos();`);break;   
            }                        
        }
    }    

    //% block="Θέσε Ταχύτητα [SPD] "
    //% SPD.shadow="dropdown" SPD.options="SPD_TYPES" SPD.defl="SPD_TYPES.3"
    export function setSpeed(parameter: any, block: any) {
        let spd = parameter.SPD.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setSpeed(${spd});`);
        }
    }

    //% block="Για [CRPOS1] Θέσε ελάχιστο [DEG] και μέγιστο [DEGMAX] "
    //% CRPOS1.shadow="dropdown" CRPOS1.options="CRPOS1_TYPES"
    //% DEG.shadow="range" DEG.defl=50 DEG.params.min=0 DEG.params.max=180
    //% DEGMAX.shadow="range" DEGMAX.defl=50 DEGMAX.params.min=0 DEGMAX.params.max=180
    export function setminbr(parameter: any, block: any) {
        let pcr = Number(parameter.CRPOS1.code);
        let deg = parameter.DEG.code;
        let degmax = parameter.DEGMAX.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            switch (pcr){
                case 0: Generator.addCode(`crane.setFBminmax(${deg},${degmax});`);break;
                case 1: Generator.addCode(`crane.setLRminmax(${deg},${degmax});`);break;
                case 2: Generator.addCode(`crane.setUDminmax(${deg},${degmax});`);break;   
                case 3: Generator.addCode(`crane.setCLminmax(${deg},${degmax});`);break;   
            }            
        }
    }


    //% block="Θέσε Βραχίονα [CRPOS0] στην θέση [DEG] "
    //% CRPOS0.shadow="dropdown" CRPOS0.options="CRPOS0_TYPES" 
    //% DEG.shadow="range" DEG.defl=100 DEG.params.min=0 DEG.params.max=180
    export function setFB(parameter: any, block: any) {
        let pcr = Number(parameter.CRPOS0.code);
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            switch (pcr){
                case 0: Generator.addCode(`crane.setFB(${deg});`);break;
                case 1: Generator.addCode(`crane.setLR(${deg});`);break;
                case 2: Generator.addCode(`crane.setUD(${deg});`);break;   
            }            
        }
    }

    //% block="Βραχίονας [CRPOS] κατά [DEG] "
    //% CRPOS.shadow="dropdown" CRPOS.options="CRPOS_TYPES" 
    //% DEG.shadow="range" DEG.defl=5 DEG.params.min=1 DEG.params.max=60
    export function moveFront(parameter: any, block: any) {
        let pcr = Number(parameter.CRPOS.code);        
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);            
            switch (pcr) {
               case 0: Generator.addCode(`crane.moveFront(${deg});`);break;
               case 1: Generator.addCode(`crane.moveBack(${deg});`);break;
               case 2: Generator.addCode(`crane.moveRight(${deg});`);break;
               case 3: Generator.addCode(`crane.moveLeft(${deg});`);break;
               case 4: Generator.addCode(`crane.moveUp(${deg});`);break;
               case 5: Generator.addCode(`crane.moveDown(${deg});`);break;
            }
        }
    }

    //% block="Θέσε δαγκάνα στην θέση [DEG] "
    //% DEG.shadow="range" DEG.defl=100 DEG.params.min=0 DEG.params.max=180
    export function setClaw(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setClaw(${deg});`);
        }
    }

    //% block="[POSDA] δαγκάνα κατά [DEG] "
    //% POSDA.shadow="dropdown" POSDA.options="POSDA_TYPES" 
    //% DEG.shadow="range" DEG.defl=5 DEG.params.min=1 DEG.params.max=60
    export function openClaw(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        let pd = parameter.POSDA.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            if (pd == 0) {
              Generator.addCode(`crane.openClaw(${deg});`);
            } else {
                Generator.addCode(`crane.closeClaw(${deg});`);    
            }
        }
    }

    //% block="Σύνδεση αισθητήρα απόστασης σε echo [ECH] και trigger [TRG] "
    //% ECH.shadow="dropdown" ECH.options="ECH_TYPES" ECH.defl="ECH_TYPES.7"
    //% TRG.shadow="dropdown" TRG.options="TRG_TYPES" TRG.defl="ECH_TYPES.6"
    export function setUsonic(parameter: any, block: any) {
        let ech = parameter.ECH.code;
        let trg = parameter.TRG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setUsonic(${ech},${trg});`);
        }
    }
    
  //% block="απόσταση από εμπόδιο" blockType="reporter"
  export function getDistance(parameter: any, block: any) {
    if(Generator.board === 'arduino'){ 
        Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
        Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
        Generator.addSetup(`DSCR_1`, `crane.init();`);
        Generator.addCode(`crane.readUsonic()`);
    }
   }    

}
