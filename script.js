const day = document.querySelector(".input-day");
const month = document.querySelector(".input-month");
const year = document.querySelector(".input-year");
const button = document.getElementById("button");

button.addEventListener("click", evento =>{
    evento.preventDefault();
    calculator(parseInt(day.value),parseInt(month.value),parseInt(year.value));
});

function calculator(d,m,y){
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
    
    // day
    if(d >= 32){
        borderd.style.border = "1px solid red";
        textd.textContent = "el numero debe ser menor a 32"
    }else{
        let resul = 32 - d;
        numberDay.textContent = `${resul}`;
        borderd.style.border = "";
        textd.textContent = ""
    }
    // month
    if(m >= 13){
        borderm.style.border = "1px solid red";
        textm.textContent = "el numero debe ser menor a 13"
    }
    else{
        let resul = 12 - m;
        numberMonth.textContent = `${resul}`;
        borderm.style.border = "";
        textm.textContent = ""
    }
    // year
    if(y <= 0){
        bordery.style.border = "1px solid red";
        texty.textContent = "el numero debe ser mayor a 0"
    }
    else{
        let resul = 2024 - y;
        numberYear.textContent = `${resul}`;
        bordery.style.border = "";
        texty.textContent = ""
    }
}








