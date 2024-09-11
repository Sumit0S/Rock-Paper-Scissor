let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComchoice=()=>
    {
       const option=["rock","paper","scissors"];
       const ind = Math.floor(Math.random()*3);
       return option[ind];
}

const drawgame=()=>{
    msg.innerText="Game was Draw"
    console.log("Game was Draw");
}

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
    //   console.log("You win");
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
      msg.style.backgroundColor = "green";
    } else {
    //  console.log("com win")
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
      msg.style.backgroundColor = "red";
    }
};

const playgame=(userchoice) =>{
    console.log("user choice = ",userchoice);
    
    const compchoice=genComchoice();
    console.log("comp choice = ",compchoice);
    if(userchoice==compchoice){
        // Draw
        drawgame();
    }
    else{
        let userWin = true;
        if (userchoice === "rock") {
          //scissors, paper
          userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissors
          userWin = compchoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       
        playgame(userchoice);
    })
})
