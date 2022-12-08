import { CreateElement, nameUser} from "./main.js"

const urlRepos = `https://api.github.com/users/${nameUser}/repos`;
const repos = new Array;
export let catchNumberProjet = new Array;
let projets = document.querySelector("#projets");

fetch(urlRepos).then(response => response.json().then(data =>{
        for(let i in data){
            repos[i] = data[i];
            function createElementsProjets(){
                let projet = projets.appendChild(new CreateElement("projet", "div"));
                projet.classList.add("cards");

                let tittleProjet = projet.appendChild(new CreateElement("tittleProjet", "h2"));
                tittleProjet.textContent = repos[i].name;

                let descriptionProjet = projet.appendChild(new CreateElement("descriptionProjet","p"));
                descriptionProjet.textContent = repos[i].description;
                
                function infoProjetsCards(){

                    let infoProjet = projet.appendChild(new CreateElement("infoPorjet", "div"));
                    let statusProjet = infoProjet.appendChild(new CreateElement("statusProjet","div"));
    
                    let stargazersCountProjet = statusProjet.appendChild(new CreateElement("stargazersCountProjet","span"));
                    stargazersCountProjet.textContent = data[i].stargazers_count;    
                    
                    let iconStargazersCountProjet = stargazersCountProjet.appendChild(new CreateElement("iconsInfoProjet", "img"));
                    iconStargazersCountProjet.src = "./assets/img/star.svg";   

                    let forksProjet = statusProjet.appendChild(new CreateElement("forksProjet", "span"));
                    forksProjet.textContent = data[i].forks_count;
    
                    let iconForksProjet = forksProjet.appendChild(new CreateElement("iconsInfoProjet","img"));
                    iconForksProjet.src = "./assets/img/git-branch.svg";
                    
                    return infoProjet;

                }


                function infoProjetsCardsLanguege(){

                    // return and catch element infoProjet and call infoProjetsCards function
                    
                    let infoProjet = infoProjetsCards();
                    let languageProjet = infoProjet.appendChild(new CreateElement("languaProjet", "span"));
                    languageProjet.textContent = data[i].language;
                    
                    let circleTechs = languageProjet.appendChild(new CreateElement("circle-techs","span"));
                    let borderCircleTechs = circleTechs.appendChild(new CreateElement("border-circle-techs","div"));
                    let circleTechsColor = borderCircleTechs.appendChild(new CreateElement("circleTechsColor","div"));

                    function infoProjetsCardsLanguegeColor (){
                        
                        if(data[i].language == "JavaScript"){
                            circleTechsColor.classList.add("js");
                        } else if(data[i].language == "CSS"){
                            circleTechsColor.classList.add("css");
                        } else if(data[i].language == "HTML"){
                            circleTechsColor.classList.add("html");
                        }   
                    }
                    infoProjetsCardsLanguegeColor();

                }
                infoProjetsCardsLanguege();
               

            }
            createElementsProjets();
        }
        
        let catchProjet = document.querySelectorAll(".projet");

        for(let i in catchProjet){
            catchNumberProjet[i] = catchProjet[i];
        }
        for(let i = 2; catchNumberProjet.length > i; i++){
            catchNumberProjet[i].style.display = "none";
        }
    }
    
))
 