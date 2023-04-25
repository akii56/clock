sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));}

let write = (z,y,x) => {
    console.log(`#----------| ${x}:${y}:${z} |----------#`);
}

(async () => {
    let sekunda = 0;
    let minut = 0;
    let sat = 0;

    let x;
    let y;
    let z;

    while(true) {
        sekunda += 1;
        
        if(sekunda < 10){x = `0${sekunda}`;}else{x = sekunda;}
        if(minut < 10){y = `0${minut}`;}else{y = minut;}
        if(sat < 10){z = `0${sat}`;}else{z = sat;}

        if(sekunda / 60 == 1) {
            minut++;
            sekunda = 0;
        }
        
        if(minut / 60 == 1) {
            sat++;
            minut = 0;
        }

        if(sat == 24) {
            sekunda = 0;
            minut = 0;
            sat = 0;
        }

        write(x,y,z);

        await sleep(1000);
    }
})();
