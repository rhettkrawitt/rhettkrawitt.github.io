let OnlySkipBtn = document.querySelector(button.OnlySkipBtn);

OnlySkipBtn.addEventListener("click", () => {
    let crews = document.getElementsByClassName("crew");
    for (let i = 0; i < crews.length; i++){
        crews.style.color = "white"
    }
})

let OnlyCrewBtn = document.querySelector(button.OnlyCrewBtn);

OnlyCrewBtn.addEventListener("click", () => {
    let skippers = document.getElementsByClassName("crew");
    for (let i = 0; i < skippers.length; i++){
        skippers.style.color = "white"
    }
})

let ShowAllBtn = document.querySelector(button.ShowAll);

ShowAllBtn.addEventListener("click", () => {
    let all = document.getElementsByClassName("crew");
})
