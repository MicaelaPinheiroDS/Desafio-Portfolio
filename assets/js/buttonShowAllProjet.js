import {catchNumberProjet} from "./repos.js";

let showAllProjet = document.querySelector(".showAllProjet");
const searchClassShow = /visible/;

showAllProjet.addEventListener("click", () =>{
    if(searchClassShow.test(showAllProjet.classList)){
        for(let i = 2; catchNumberProjet.length > i; i++){
            catchNumberProjet[i].style.display = "none";
        }
        showAllProjet.textContent = "Veja todos"
        showAllProjet.classList.remove("visible");
    } else {
        for(let i = 2; catchNumberProjet.length > i; i++){
            catchNumberProjet[i].style.display = "block";
        }
        showAllProjet.textContent = "Ocultar";
        showAllProjet.classList.add("visible");
    }
                
});