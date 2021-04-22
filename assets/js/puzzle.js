let tiles = [... document.querySelectorAll(".tile")];
let availableTiles = [... document.querySelectorAll(".available")];
let emptyTile = document.querySelector(".empty");

//her fortæller jeg hvilke pladser hvilke pladser "emptyTile" kan bytte plads med
let possibleSlide = {
    A: ["B", "D"],
    B: ["A", "C", "E"],
    C: ["B", "F"],
    D: ["A", "E", "G"], 
    E: ["B", "D", "F", "H"],
    F: ["C", "E", "I"],
    G: ["D", "H"],
    H: ["E", "G", "I"],
    I: ["F", "H"]
};

//her giver jeg hver tile det grid-area som data-area bestemmer
for (let tile of tiles) {
    let customArea = tile.getAttribute("data-area");
    tile.style.setProperty("grid-area", customArea);
};

//her gør jeg sådan man kan clicke på hvert availableTile
for (let tile of availableTiles) {
    tile.addEventListener("click", () => {
        //starter med gå ind og hente attributen "data-area" da det er den som bestemmer hvilken placering hvert tile har.
        //denne attribute er custom, hvilket betyder det er en som jeg selv har lavet, og selv kan bestemme.
        //dette skal gøres hver gang man clicker på en tile, da den ændre sig hver gang
        let currentArea = tile.getAttribute("data-area");
        let emptyArea = emptyTile.getAttribute("data-area");

        //her laver jeg en if statement, som siger at:
        //hvis man trykker på en tile med data-area = A, så går den ind i "possibleSlide" objektet, og finder A, 
        //og hvis attributen data-area på emptyTile er lig med en af de bogstaver som i A's array, så kan den køre videre
        if(possibleSlide[currentArea].includes(emptyArea)) {
            //her går jeg så bare ind og bytter attributen data-area for den tile jeg klikker på og emptyTile
            //samt jeg sætter css propertyen til den nye data-area værdi.
            emptyTile.setAttribute("data-area", currentArea);
            emptyTile.style.setProperty("grid-area", currentArea);
            tile.setAttribute("data-area", emptyArea);
            tile.style.setProperty("grid-area", emptyArea);
        };
    }); 
};