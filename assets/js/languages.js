import { CreateElement } from "./main.js"
const url = "https://api.github.com/users/MicaelaPinheiroDS/repos";
const languages = new Array();
let techs;

function createElementTechs(){
    const cardsTechs = document.querySelector("#cardsTechs");
    techs = cardsTechs.appendChild(new CreateElement("techs","span"));
}

fetch(url).then(response => response.json()).then(data =>{
    for(let i in data){
        if(languages.indexOf(data[i].language) != -1){
            i++
        } else {
            function addContentToElement(){
                languages[i] = data[i].language;
                techs.textContent = languages[i];

                function addColorContentToElement(){
                    if(techs.textContent == "JavaScript"){
                        techs.classList.add("js");
                    } else if(techs.textContent == "CSS"){
                        techs.classList.add("css");
                    } else if(techs.textContent == "HTML"){
                        techs.classList.add("html");
                    }
                }
                addColorContentToElement();
            }
            createElementTechs();
            addContentToElement();
        }
    }
}
    

)

