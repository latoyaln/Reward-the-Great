/* eslint-disable radix */
/* eslint-disable no-lonely-if */
const sterren = parseInt(process.argv[2]);
const natuur = parseInt(process.argv[3]);
const kilometer = parseInt(process.argv[4]);

if (sterren >= 3) {
    if (natuur > 25) {
        console.log(`rating: ${sterren} sterren, natuurgebied: ${natuur}%, autowegdek: ${kilometer} km 
belastingkorting voor de inwoners`);
    } else {
        console.log(`rating: ${sterren} sterren, natuurgebied: ${natuur}%, autowegdek: ${kilometer} km 
subsidie voor aanleg van meer natuur`);
    }
} else if (kilometer > 200) {
    console.log(`rating: ${sterren} sterren, natuurgebied: ${natuur}%, autowegdek: ${kilometer} km 
subsidie voor ombouwen autoweg naar fietsstraat`);
} else {
    console.log(`rating: ${sterren} sterren, natuurgebied: ${natuur}%, autowegdek: ${kilometer} km 
subsidie voor afvalinzameling`);
}