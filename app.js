let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://e7.pngegg.com/pngimages/603/759/png-clipart-css3-cascading-style-sheets-logo-html-world-wide-web-blue-angle.png',
    },
    {
        'name': 'HTML',
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD7huTGBKTs5YPn5CeoZpklZbPOV7gG4_yA&s',
    },
    {
        'name': 'jQuery',
        'img': 'https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png',
    },
    {
        'name': 'JS',
        'img': 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    {
        'name': 'Node',
        'img': 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
    },
    {
        'name': 'Python',
        'img': 'https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1',
    }
];
const parentDiv=document.querySelector("#card-section");
const gamecard=cardsArray.concat(cardsArray);
console.log(gamecard);
let shufflechild=Array.from(gamecard).sort(()=>0.5-Math.random());
let clickcount=0;
let firstcard="";
let secondcard="";
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}
const resetgame=()=>{
    clickcount=0;
    firstcard="";
    secondcard="";
    let card_selected= document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected');
    })
}

parentDiv.addEventListener("click", (event)=>{
    let curcard=event.target;
    if(curcard.id==="card-section"){return false}
    clickcount++;
    if(clickcount<3){
        if(clickcount===1){
            firstcard=curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add("card_selected");
        }
        else{
            secondcard=curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add("card_selected");
        }
        if(firstcard!=="" && secondcard!==""){
            if(firstcard===secondcard){
                setTimeout(()=>{
                    card_matches();
                    resetgame();
                }, 1000)
                
            }
            else{
                setTimeout(()=>{
                    resetgame();
                },1000)
                
            }
        }
        

    }
   
    
})

   
for (let i=0;  i<shufflechild.length; i++){
    const childDiv= document.createElement("div");
    childDiv.classList.add("card");
    childDiv.dataset.name=shufflechild[i].name;
   // childDiv.style.backgroundImage = `url(${shufflechild[i].img})`;
    const front_div=document.createElement("div");
    front_div.classList.add("front-card");
    const back_div=document.createElement("div");
    back_div.classList.add("back-card");
    back_div.style.backgroundImage = `url(${shufflechild[i].img})`;
    parentDiv.appendChild(childDiv);
    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
}