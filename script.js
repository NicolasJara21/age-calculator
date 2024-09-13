const day = document.querySelector(".input-day");
const month = document.querySelector(".input-month");
const year = document.querySelector(".input-year");
const button = document.getElementById("button");

button.addEventListener("click", evento => {
    evento.preventDefault();
    calculator(parseInt(day.value), parseInt(month.value), parseInt(year.value));
});

function calculator(d, m, y) {
    const borderd = document.querySelector(".input-day");
    const textd = document.querySelector(".error-day");
    const borderm = document.querySelector(".input-month");
    const textm = document.querySelector(".error-month");
    const bordery = document.querySelector(".input-year");
    const texty = document.querySelector(".error-year");
    
    // query number
    const numberYear = document.querySelector(".resul-h2-year");
    const numberDay = document.querySelector(".resul-h2-day");
    const numberMonth = document.querySelector(".resul-h2-month");
    
    // Fecha actual
    const fecha = new Date();
    let fechadia = fecha.getDate();
    let fechaMes = fecha.getMonth() + 1; // +1 porque los meses en JS empiezan en 0
    let fechaaño = fecha.getFullYear();

    // Validar días
    if (d >= 32 || d <= 0) {
        borderd.style.border = "1px solid red";
        textd.textContent = "El número debe ser entre 1 y 31";
    } else {
        let resul = fechadia - d;
        if (resul < 0) {
            resul += 30; 
            fechaMes -= 1; // Restamos 1 mes si los días son negativos
        }
        numberDay.textContent = `${resul}`;
        borderd.style.border = "";
        textd.textContent = "";
    }

    // Validar meses
    if (m >= 13 || m <= 0) {
        borderm.style.border = "1px solid red";
        textm.textContent = "El número debe ser entre 1 y 12";
    } else {
        let resul = fechaMes - m;
        if (resul < 0) {
            resul += 12; // Ajustamos sumando 12 meses si es negativo
            fechaaño -= 1; // Restamos 1 año si los meses son negativos
        }
        numberMonth.textContent = `${resul}`;
        borderm.style.border = "";
        textm.textContent = "";
    }

    // Validar años
    if (y <= 0 || y > fechaaño) {
        bordery.style.border = "1px solid red";
        texty.textContent = "El año debe ser válido";
    } else {
        let resul = fechaaño - y;
        numberYear.textContent = `${resul}`;
        bordery.style.border = "";
        texty.textContent = "";
    }
}


