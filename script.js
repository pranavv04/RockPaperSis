let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');

let userWin = 0;

let computerclicked =Math.floor(Math.random() * 10) + 1 ;

// console.log(computerclicked);

let body = document.querySelector('body');
function userClicked(){
  userWin = Math.floor(Math.random() * 3) + 1;
  determineWinner();
//   console.log(Math.floor(Math.random() * 3) + 1);
}
function userClickedd(){
    userWin = Math.floor(Math.random() * 3) + 4;
    determineWinner();
}
function userClickeddd(){
    userWin = Math.floor(Math.random() * 3) + 7;
    determineWinner();
}
 

let Modes = document.querySelector('.modes');
let darkModes = '<ion-icon name="moon-outline"></ion-icon>'

let userWinner= 0;
let computerWinner = 0;
let ties = 0;
let popup = document.querySelector('.popup')

function determineWinner(){
    if(userWin > computerclicked){
        console.log("User win");
       
        userWinner++;
        document.querySelector('.uwin').textContent= `You won : ${userWinner}`;
       
        popup.style.visibility = 'visible';
        

        document.querySelector('.nigs').textContent = "Congratulations You Won !!"
        if(userWin > 6 ){
            document.querySelector('.selection').textContent = `You Selected 👊 Computer selected ✌️`
        }
        else if(userWin>3 && userWin <7 ){
            document.querySelector('.selection').textContent = `You Selected 🖐️  Computer selected 👊`;
        }
      
        else{
            document.querySelector('.selection').textContent = `You Selected ✌️ Computer selected 🖐️`
        }
     }
    else if(computerclicked > userWin){

        console.log("computer nigga won");
        computerWinner++;
        document.querySelector('.compwin').textContent = `Computer won: ${computerWinner}`;
      
        popup.style.visibility = 'visible';
       

        document.querySelector('.nigs').textContent = ":/ Computer Won !!"
        if(userWin > 6 ){
            document.querySelector('.selection').textContent = `You Selected 👊 Computer selected 🖐️`
        }
        else if(userWin>3 && userWin <7 ){
            document.querySelector('.selection').textContent = `You Selected 🖐️  Computer selected ✌️`;
        }
      
        else{
            document.querySelector('.selection').textContent = `You Selected ✌️  Computer selected 👊`
        }
     }
    else{
        console.log("tie");
        ties++;
        document.querySelector('.nones').textContent = `Tie : ${ties}`
        popup.style.visibility = 'visible';
      

        document.querySelector('.nigs').textContent = "Lol Match Tie"
        if(userWin > 6 ){
            document.querySelector('.selection').textContent = `You Selected 👊 Computer selected 👊 `
        }
        else if(userWin>3 && userWin <7 ){
            document.querySelector('.selection').textContent = `You Selected 🖐️  Computer selected 🖐️`;
        }
      
        else{
            document.querySelector('.selection').textContent = `You Selected ✌️  Computer selected ✌️`
        }
     }
}
function closer(){
    popup.style.visibility = 'hidden';
}


//  //prevents refreshing
// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault();
//     event.returnValue = '';
//     console.log("Page reload prevented");
// });

Modes.addEventListener('click',function(){
    this.classList.toggle('moon-outline');
    if(this.classList.toggle(this.textContent == 'sunny-outline')){
                body.style.background = 'white';
                body.style.color = 'black';
                body.style.transition = '2s';
    }
    else{
        document.querySelector('.Heading').style.color='white';
        document.querySelector('.uwin').style.color='white'
        document.querySelector('.compwin').style.color='white'
        document.querySelector('.nones').style.color='white'
       
        document.querySelector('.nigs').style.color='white'
        body.style.background = 'black';
        document.querySelector('.modes').style.color = 'white';
        document.querySelector('.moding').textContent = 'moon-outline'
        body.style.transition = '2s'
        
    }
})
 