






function crearDivs() {
    let gridContainer = document.getElementById("grid-container");
    let numberInput = document.getElementById("number-input").value;
    
    if (numberInput > 100) {
        numberInput = 100;
    }

    gridContainer.innerHTML = ``;

    gridContainer.style.gridTemplateColumns = `repeat(${numberInput}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numberInput}, 1fr)`;

    let totalDivs = numberInput * numberInput;
    
    

    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement("div");

        div.classList.add(`cuadrado`);
        gridContainer.appendChild(div);
        

        div.addEventListener("mouseover", () => {
            let colorBox = document.getElementById("color-box").value;
            div.classList.toggle(`presionado`);
            div.style.backgroundColor = colorBox;
        })
    }
}



let buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", crearDivs);

let buttonReset = document.getElementById("reset").addEventListener("click", () => {
    let gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = ``;
})