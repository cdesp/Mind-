

//% color="#000099" iconWidth=50 iconHeight=40
namespace cdesplib2 {


    //% block="Θέσε Βραχίονα (Μπρος - Πίσω) στην θέση [DEG] "
    //% DEG.shadow="number" DEG.defl="100" DEG.min="50" DEG.max="150"
    export function setFB(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setFB(${deg});`);
        }
    }

    //% block="Βραχίονας μπροστά κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function moveFront(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.moveFront(${deg});`);
        }
    }

    //% block="Βραχίονας πίσω κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function moveBack(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.moveBack(${deg});`);
        }
    }


   //% block="Θέσε Βραχίονα (Πάνω - Κάτω) στην θέση [DEG] "
    //% DEG.shadow="number" DEG.defl="50" DEG.min="0" DEG.max="100"
    export function setUD(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setUD(${deg});`);
        }
    }

    //% block="Βραχίονας πάνω κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function moveUp(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.moveUp(${deg});`);
        }
    }

    //% block="Βραχίονας κάτω κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function moveDown(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.moveDown(${deg});`);
        }
    }

   //% block="Θέσε Βραχίονα (Δεξιά - Αριστερά) στην θέση [DEG] "
    //% DEG.shadow="number" DEG.defl="90" DEG.min="20" DEG.max="160"
    export function setLR(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setLR(${deg});`);
        }
    }

    //% block="Βραχίονας δεξιά κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function moveRight(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.moveRight(${deg});`);
        }
    }

    //% block="Βραχίονας αριστερά κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function moveLeft(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.moveLeft(${deg});`);
        }
    }

   //% block="Θέσε δαγκάνα στην θέση [DEG] "
    //% DEG.shadow="number" DEG.defl="100" DEG.min="50" DEG.max="150"
    export function setClaw(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.setClaw(${deg});`);
        }
    }

    //% block="Άνοιξε δαγκάνα κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function openClaw(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.openClaw(${deg});`);
        }
    }

    //% block="Κλείσε δαγκάνα κατά [DEG] "
    //% DEG.shadow="number" DEG.defl="5" DEG.min="1" DEG.max="40"
    export function closeClaw(parameter: any, block: any) {
        let deg = parameter.DEG.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("DSCR", "#include <DSP_Crane.h>");
            Generator.addObject(`DSCR`, `DESP_Crane`, `crane`);           
            Generator.addSetup(`DSCR_1`, `crane.init();`);
            Generator.addCode(`crane.closeClaw(${deg});`);
        }
    }
    
}
