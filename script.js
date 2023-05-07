let scoreBox = document.querySelector(".score-box");
let mainContent = document.querySelector(".main-content");
let phrase = document.querySelector(".phrase");
let percentage = document.querySelector(".percentage");
let numberRights = document.querySelector(".number-rights");

let questionOptions = document.querySelectorAll(".option input");
console.log(questionOptions);

document.querySelector(".btn-score button").addEventListener("click", () => {
    let score = 0
    for(let i=0;i < questionOptions.length;i++) {
        if(questionOptions[i].checked && questionOptions[i].value == "1") {
            score++;
        }
    }

    percentage.innerHTML = `Acertou ${score}0%`; 
    numberRights.innerHTML = `Você respondeu 10 questões e acertou ${score}.`

    if(score == 0){
        phrase.innerHTML = "Vish, situação ta tensa em";
        percentage.style.color = "#ff0000";
    } else if(score <= 3) {
        phrase.innerHTML = "Tá ruim em?!"
        percentage.style.color = "#ff6400"
    } else if(score <= 6) {
        phrase.innerHTML = "Precisa melhorar"
        percentage.style.color = "#ffff00"
    } else if(score <= 9) {
        phrase.innerHTML = "Muito Bom!!"
        percentage.style.color = "#198cff"
    } else {
        phrase.innerHTML = "Gênio! Já pode dar aulas!!"
        percentage.style.color = "#229a00"
    }

    mainContent.style.display = "none";
    scoreBox.style.display = "flex";
});

document.querySelector(".do-again").addEventListener("click", () => {
    for (var i = 0; i < questionOptions.length; i++) {
        questionOptions[i].checked = false;
    }

    mainContent.style.display = "flex";
    scoreBox.style.display = "none";
});