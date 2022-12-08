import { CreateElement } from "./main.js";
const main = document.querySelector("main");
let posts = undefined;
let containerPosts = main.appendChild(new CreateElement("containerPosts","div"));

function createHeaderPosts() {
    let headerPosts = containerPosts.appendChild(new CreateElement("headerPosts","div"));
    headerPosts.classList.add("cards");
    let tittlePosts = headerPosts.appendChild(new CreateElement("tittlePosts","h1"));
    tittlePosts.textContent = "Posts";
}


function createPosts() {

    if(posts === undefined){
        let noPostsContainer = containerPosts.appendChild(new CreateElement("noPostsContainer","div"));
        let imgNoPosts = noPostsContainer.appendChild(new CreateElement("imgNoPostsContainer","img"));
        imgNoPosts.src = "./assets/img/sleeping-logo.png";
        let textNoPosts = noPostsContainer.appendChild(new CreateElement("textNoPosts","p"));
        textNoPosts.textContent = "There's nothing here, yet";
    }
}
createHeaderPosts();
createPosts();
