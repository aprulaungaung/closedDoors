let numberOfButton = document.querySelectorAll(".door").length;

//loop through all buttons in for loop to add Event listener to all buttons

for(i=0; i< numberOfButton; i++){

  document.querySelectorAll(".door")[i].addEventListener("click", function(e){

    let innerText = this.innerText;
  //use switch statement to make different functionality depending on the innerText.
    switch (innerText) {


      case "a":

      document.querySelector(".a").style.visibility = "hidden";

      document.querySelector(".lookAtMe").style.visibility = "visible";

      document.querySelector(".lookAtMe").style.zIndex = "1";

      let videoA = document.querySelector(".lookAtMe");

      videoA.play();

      setTimeout(function(){

        document.querySelector(".a").style.visibility = "visible";

        document.querySelector(".lookAtMe").style.visibility = "hidden";

      },32000)

      break;

      case "b":

      document.querySelector(".b").style.visibility = "hidden";

      document.querySelector(".necromancy").style.visibility = "visible";

      document.querySelector(".necromancy").style.zIndex = "1";

      let videoB = document.querySelector(".necromancy");

      videoB.play();

      setTimeout(function(){

        document.querySelector(".b").style.visibility = "visible";

        document.querySelector(".necromancy").style.visibility = "hidden";

      },32500)

      break;

      case "c":

      document.querySelector(".c").style.visibility = "hidden";

      document.querySelector(".motherF").style.visibility = "visible";

      document.querySelector(".motherF").style.zIndex = "1";

      let videoC = document.querySelector(".motherF");

      videoC.play();

      setTimeout(function(){

        document.querySelector(".c").style.visibility = "visible";

        document.querySelector(".motherF").style.visibility = "hidden";

      },17000)

      break;

      case "d":

      document.querySelector(".d").style.visibility = "hidden";

      document.querySelector(".girlCry").style.visibility = "visible";

      document.querySelector(".girlCry").style.zIndex = "1";

      let videoD = document.querySelector(".girlCry");

      videoD.play();

      setTimeout(function(){

        document.querySelector(".d").style.visibility = "visible";

        document.querySelector(".girlCry").style.visibility = "hidden";

      },20300)

      break;

      case "e":

      let music = new Audio("audio/screamingNoti.m4r");

      music.play();

      let laughter = new Audio("audio/devilLaugh.m4r");

      laughter.play();

      setTimeout(function(){

        document.querySelector(".ghostF").style.display = "block";

        document.querySelector(".ghostF").style.zIndex = "2";

        document.querySelector(".ghostF").style.animation = "ghostFace 4s";

      },300);

      setTimeout(function(){

        document.querySelector(".ghostF").style.display = "none";

      },4000)

      break;

      case "f":

      document.querySelector(".f").style.visibility = "hidden";

      document.querySelector(".birthday").style.visibility = "visible";

      document.querySelector(".birthday").style.zIndex = "1";

      let videoF= document.querySelector(".birthday");

      videoF.play();

      e.preventDefault();

      setTimeout(function(){

          say("who are you?");

      },39000)

      setTimeout(function(){

        say("why are you watching me!");

      },41000)
      setTimeout(function(){

     say("Get out of here!");

      },41500)

      setTimeout(function(){

     say("I don't care who you are!");

      },42000)

      setTimeout(function(){

     say("Are you Mr Aung's friend?");

      },42500)

      setTimeout(function(){

      say("if you are Mr Aung's friend");

      },43000)

      setTimeout(function(){

      say("Tell him I will definitely kill him!");

      },43500)

      setTimeout(function(){

      say("Get out!");

    },43800)

    setTimeout(function(){

      document.querySelector(".f").style.visibility = "visible";

      document.querySelector(".birthday").style.visibility = "hidden";

      document.querySelector(".birthday").style.zIndex = "-1";

    },54678);

      break;

      case "g":

      document.querySelector(".g").style.visibility = "hidden";

      document.querySelector(".driveAway").style.visibility = "visible";

      let videoH = document.querySelector(".driveAway");

      videoH.play();

      setTimeout(function(){

        document.querySelector(".g").style.visibility = "visible";

        document.querySelector(".driveAway").style.visibility = "hidden";

      },22500)

      break;

      case "h":

      changeBackground();

      let flyingBallom = document.querySelector(".ballom");

      flyingBallom.style.visibility = "visible";

      flyingBallom.style.animation = "flyBallom 7s infinite";

      break;

      case "i":

      document.querySelector(".i").style.visibility = "hidden";

      document.querySelector(".fbi").style.visibility = "visible";

      let videoI = document.querySelector(".fbi");

      videoI.play();

      setTimeout(function(){

        document.querySelector(".i").style.visibility = "visible";

        document.querySelector(".fbi").style.visibility = "hidden";

      },7000)

      break;

    }
  });
}

function changeBackground(){

document.querySelector(".h").style.visibility = "hidden";

document.querySelector(".h").style.zIndex = "1";

let postMan = new Audio("audio/postman.mp3");

postMan.play();

//when click button "h", background image of button will be changed.

    for(i=0; i< numberOfButton; i++){

      document.querySelectorAll(".door")[i].style.backgroundImage = "url('images/openDoor.PNG')";

}
//to return initial state when all work are done!

setTimeout(function(){

  for(i=0; i< numberOfButton; i++){

    document.querySelectorAll(".door")[i].style.backgroundImage = "url('images/door.PNG')";

  }

document.querySelector(".h").style.visibility = "visible";

let flyingBallom = document.querySelector(".ballom");

flyingBallom.style.visibility = "hidden";

flyingBallom.style.animation = "";

let gunfire = new Audio("audio/gunfire.m4r")

gunfire.play();

postMan.pause();

removePictures();


},145000)
}
// to show human imges in the opened doors

function showPictures(){

  let numberOfButton = document.querySelectorAll(".door").length;

  for(i=0; i< numberOfButton; i++){

    document.querySelectorAll(".cartoon")[i].style.zIndex = "1";

    document.querySelectorAll(".cartoon")[i].style.visibility = "visible";
  }

}
// to remove all human images when return to initial state

function removePictures(){

  let numberOfButton = document.querySelectorAll(".door").length;

  for(i=0; i<numberOfButton; i++){

    document.querySelectorAll(".cartoon")[i].style.zIndex = "-1";

    document.querySelectorAll(".cartoon")[i].style.visibility = "hidden";
  }
}

function say(m) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.8;
  msg.text = m;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
