const rulesBtn = document.querySelector(".rules-btn");
const gameRulesBox = document.querySelector(".game-rules-box");
const closeBtn = document.querySelector(".close-btn");

const rockbox = document.querySelector("#rockbox")
const paperbox = document.querySelector("#paperbox")
const scissorbox = document.querySelector("#scissorbox")

const FinalOut = document.querySelector("#final-result")
const pcFinal = document.querySelector("#pc-result")

const playboardBox = document.querySelector("#playboardBox");
const finalResultBox = document.querySelector("#finalResultBox");

const userIcon = document.querySelector("#-userIcon");
const pcIcon = document.querySelector("#-pcIcon")

const imgIcon = document.querySelector("#imgIcon");
const pcImgIcon = document.querySelector("#pcImgIcon");

const winnerTitle = document.getElementById("-winnerTitle");
const againstPC = document.getElementById("-againstPC");

const urScore = document.getElementById("-urScore");
const pcScore = document.getElementById("-pcScore");

const Blue = "#0074B6";
const Yellow = "#FFA943";
const Purple  = "#BD00FF"

let pcs = 1;
let urs = 1;    




function rulestab(){
    gameRulesBox.classList.add("block")
    if(gameRulesBox.classList = "block"){
        gameRulesBox.classList.add("game-rules-box")
    }
}

closeBtn.addEventListener("click",function(){
    gameRulesBox.classList.add("hide")
})

function playAgain(){
    playboardBox.classList.remove("hide");
    finalResultBox.classList.add("hide");
}


rockbox.addEventListener("click", function(){
    playboardBox.classList.add("hide");
    finalResultBox.classList.remove("hide");
    imgIcon.src = "./assets/ic-rock.png";
    

    let r = 1
    let random = Math.floor(Math.random() * 3) + r;
        switch (random) {
            case  1:
                // Draw
                pcImgIcon.src = "./assets/ic-rock.png";

                userIcon.style.setProperty("--displayUser", "none");
                userIcon.style.borderColor = Blue;

                pcIcon.style.borderColor = Blue;
                pcIcon.style.setProperty("--displayPc", "none");
               
                winnerTitle.innerHTML = "TIE UP"
                againstPC.classList.add("hide");
              break;

            case 2:
                // PC-WIN
                pcImgIcon.src = "./assets/ic-paper.png";

                userIcon.style.setProperty("--displayUser", "none");
                userIcon.style.borderColor = Blue;
                
                pcIcon.style.setProperty("--displayPc", "block")
                pcIcon.style.borderColor = Yellow;

                winnerTitle.innerHTML = "YOU LOST"
                againstPC.classList.remove("hide");
                // pcScore.innerHTML = pcs;
                saveDataPc()
                pcs++;

              break;
            case 3:
                // User-Win
                pcImgIcon.src = "./assets/ic-scissor.png";

                userIcon.style.setProperty("--displayUser", "block");
                userIcon.style.borderColor = Blue;
                
                pcIcon.style.setProperty("--displayPc", "none");
                pcIcon.style.borderColor = Purple;

                winnerTitle.innerHTML = "YOU WIN";
                againstPC.classList.remove("hide");
                // urScore.innerHTML = urs;
                saveDataUser()
                urs++;
          }
})


paperbox.addEventListener("click", function(){
    playboardBox.classList.add("hide");
    finalResultBox.classList.remove("hide");
    imgIcon.src = "./assets/ic-paper.png";

    let p = 1
    let random = Math.floor(Math.random() * 3) + p;
        switch (random) {
            case  1:
                // Draw
                pcImgIcon.src = "./assets/ic-paper.png";

                userIcon.style.setProperty("--displayUser", "none")
                userIcon.style.borderColor = Yellow;

                pcIcon.style.setProperty("--displayPc", "none");
                pcIcon.style.borderColor = Yellow;

                winnerTitle.innerHTML = "TIE UP"
                againstPC.classList.add("hide");

              break;

            case 2:
                // User-win
                pcImgIcon.src = "./assets/ic-rock.png";

                userIcon.style.borderColor = Yellow;
                userIcon.style.setProperty("--displayUser", "block");

                pcIcon.style.setProperty("--displayPc", "none");
                pcIcon.style.borderColor = Blue;

                winnerTitle.innerHTML = "YOU WIN";
                againstPC.classList.remove("hide");
                // urScore.innerHTML = urs;
                saveDataUser()
                urs++;

              break;
            case 3:
                // Pc-Win
                pcImgIcon.src = "./assets/ic-scissor.png";
                userIcon.style.borderColor = Yellow;
                userIcon.style.setProperty("--displayUser", "none");

                pcIcon.style.setProperty("--displayPc", "block")
                pcIcon.style.borderColor = Purple;

                winnerTitle.innerHTML = "YOU LOST"
                againstPC.classList.remove("hide");
                // pcScore.innerHTML = pcs;
                saveDataPc()
                pcs++;

          }
})
scissorbox.addEventListener("click", function(){
    playboardBox.classList.add("hide");
    finalResultBox.classList.remove("hide");
    imgIcon.src = "./assets/ic-scissor.png";

    let s = 1
    let random = Math.floor(Math.random() * 3) + s;

    switch (random) {
        case  1:
            // PC-Win
            pcImgIcon.src = "./assets/ic-rock.png";

            userIcon.style.setProperty("--displayUser", "none");
            userIcon.style.borderColor = Purple;

            pcIcon.style.setProperty("--displayPc", "block");
            pcIcon.style.borderColor = Blue;

            winnerTitle.innerHTML = "YOU LOST"
            againstPC.classList.remove("hide");
            // pcScore.innerHTML = pcs;
            saveDataPc()
            pcs++;

          break;

        case 2:
            // User-WIN
            pcImgIcon.src = "./assets/ic-paper.png";

            userIcon.style.setProperty("--displayUser", "block");
            userIcon.style.borderColor = Purple;
            
            pcIcon.style.setProperty("--displayPc", "none")
            pcIcon.style.borderColor = Yellow;

            winnerTitle.innerHTML = "YOU WIN";
            againstPC.classList.remove("hide");
            saveDataUser()
            urs++;
          break;
        case 3:
            // Draw
            pcImgIcon.src = "./assets/ic-scissor.png";

            userIcon.style.setProperty("--displayUser", "none");
            userIcon.style.borderColor = Purple;
            
            pcIcon.style.setProperty("--displayPc", "none");
            pcIcon.style.borderColor = Purple;

            winnerTitle.innerHTML = "TIE UP"
            againstPC.classList.add("hide");
            
      }
})


// userScroSave
function saveDataUser(){
    localStorage.setItem("data", urScore.innerHTML = urs);
}

function showTaskUser(){
    urScore.innerHTML = localStorage.getItem("data");
}
showTaskUser();

// pcScroSave
function saveDataPc(){
    localStorage.setItem("dataPc", pcScore.innerHTML = pcs);
}

function showTaskPc(){
    pcScore.innerHTML = localStorage.getItem("dataPc") ;
}
showTaskPc();