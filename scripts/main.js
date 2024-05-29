let sailors = document.getElementById("sailors").children;
let OnlySkipBtn = document.querySelector("button.SkipOnlyBtn");

OnlySkipBtn.addEventListener("click", () => {
    for (let i = 0; i < sailors.length; i++){
        if (sailors[i].classList.contains("skipper")){
            sailors[i].style.display = "list-item";
        } else {
            sailors[i].style.display = "none";
        }
    }
})

let OnlyCrewBtn = document.querySelector("button.CrewOnlyBtn");

OnlyCrewBtn.addEventListener("click", () => {
    for (let i = 0; i < sailors.length; i++){
        if (sailors[i].classList.contains("crew")){
            sailors[i].style.display = "list-item";
        } else {
            sailors[i].style.display = "none";
        }
    }
})

let ShowAllBtn = document.querySelector("button.ShowAllBtn");

ShowAllBtn.addEventListener("click", () => {
    for (let i = 0; i < sailors.length; i++){
        sailors[i].style.display = "list-item";
    }
})
