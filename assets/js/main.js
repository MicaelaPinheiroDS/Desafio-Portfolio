
const userInfoElement = document.querySelector(".userInfo"); 
export let nameUser = "MicaelaPinheiroDS";
export class CreateElement {
    #elementName;
    constructor(className, elementName){
        this.#elementName = document.createElement(elementName);
        this.#elementName.classList.add(className);
        return document.body.insertBefore(this.#elementName, null);
    }
}
function githubApiJson(){
    const url = `https://api.github.com/users/${nameUser}`;
    fetch(url).then(response => response.json()).then(data => {
        function createElementUserMainInfo(){
            userName.textContent = data.name;
            userAvatar.src = data.avatar_url;
            userBio.textContent = data.bio;
        }
        class SpecificLinkHandling{
            constructor(url, data, element, item, userIfon, img){
                this.userElementInfo =  element.appendChild(new CreateElement(`links`,'a'));
                this.userElementInfo.href = `${url}${data}`;    
                this.userElementInfo.setAttribute('target', '_blank');
                new CreateElementUserInfo(this.userElementInfo, item, userIfon, img);
            }
        }
        class CreateElementUserInfo{
            constructor(element, item, userIfon, img){
                element.classList.add("userInfoItems");
                element.textContent = item;
                element = element.appendChild(new CreateElement(`${userIfon}Img`,"img"));
                element.src = `./assets/img/icons-user-info/${img}`;
            }
        }
        class CreateElementUser{
            userElementInfo;
            url;
            constructor(item, userIfon, img){
                // checking if item has a valid value
                if(item === null || item === false || item === undefined || item === ''){
                    return
                }
                this.userElementInfo = userInfoElement.appendChild(new CreateElement(`${userIfon}`,"div"));
                   //specific link handling
                   if(item == data.login){
                    new SpecificLinkHandling('https://github.com/', data.login, this.userElementInfo, item, userIfon, img);
                   
                } else if(item === data.twitter_username){
                    new SpecificLinkHandling('https://twitter.com/', data.twitter_username, this.userElementInfo, item, userIfon, img);

                } else {
                    new CreateElementUserInfo(this.userElementInfo, item, userIfon, img);

                }

            }
        } 
        createElementUserMainInfo();
        new CreateElementUser(data.location, 'userLocation','map-pin.svg');
        new CreateElementUser(data.company, 'userCompany','briefcase.svg');
        new CreateElementUser(data.login, 'userGitHub', 'github.svg');
        new CreateElementUser(data.twitter_username, 'twitterUsername', 'twitter.svg');
        new CreateElementUser(data.blog, 'siteUser','globe.svg')
        new CreateElementUser(data.email,'emailUser','mail.svg')


    });

}
githubApiJson();
