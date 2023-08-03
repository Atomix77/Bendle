easyGuess = parseInt(localStorage.getItem("bendleEasy_guessCount"));
normalGuess = parseInt(localStorage.getItem("bendleNormal_guessCount"));
hardGuess = parseInt(localStorage.getItem("bendleHard_guessCount"));
impossibleGuess = parseInt(localStorage.getItem("bendleImpossible_guessCount"));

function timeChecker() {
  let now = new Date().toUTCString();
  let nextMidnight = new Date(new Date().setUTCHours(24,0,0,0)).toUTCString();
  if (now == nextMidnight) {
    setGameInfo()
  }
}

function setGameInfo() {

  setEasyCharacter();
  localStorage.setItem("bendleEasy_guessCount",0);
  localStorage.setItem("bendleEasy_correct",0);
  localStorage.setItem("bendleEasy_guess1","");
  localStorage.setItem("bendleEasy_guess2","");
  localStorage.setItem("bendleEasy_guess3","");
  localStorage.setItem("bendleEasy_guess4","");
  localStorage.setItem("bendleEasy_guess5","");
  localStorage.setItem("bendleEasy_guess6","");
  localStorage.setItem("bendleEasy_guess7","");
  localStorage.setItem("bendleEasy_guess8","");

  setNormalCharacter();
  localStorage.setItem("bendleNormal_guessCount",0);
  localStorage.setItem("bendleNormal_correct",0);
  localStorage.setItem("bendleNormal_guess1","");
  localStorage.setItem("bendleNormal_guess2","");
  localStorage.setItem("bendleNormal_guess3","");
  localStorage.setItem("bendleNormal_guess4","");
  localStorage.setItem("bendleNormal_guess5","");
  localStorage.setItem("bendleNormal_guess6","");
  localStorage.setItem("bendleNormal_guess7","");
  localStorage.setItem("bendleNormal_guess8","");

  setHardCharacter();
  localStorage.setItem("bendleHard_guessCount",0);
  localStorage.setItem("bendleHard_correct",0);
  localStorage.setItem("bendleHard_guess1","");
  localStorage.setItem("bendleHard_guess2","");
  localStorage.setItem("bendleHard_guess3","");
  localStorage.setItem("bendleHard_guess4","");
  localStorage.setItem("bendleHard_guess5","");
  localStorage.setItem("bendleHard_guess6","");
  localStorage.setItem("bendleHard_guess7","");
  localStorage.setItem("bendleHard_guess8","");

  setImpossibleCharacter();
  localStorage.setItem("bendleImpossible_guessCount",0);
  localStorage.setItem("bendleImpossible_correct",0);
  localStorage.setItem("bendleImpossible_guess1","");
  localStorage.setItem("bendleImpossible_guess2","");
  localStorage.setItem("bendleImpossible_guess3","");
  localStorage.setItem("bendleImpossible_guess4","");
  localStorage.setItem("bendleImpossible_guess5","");
  localStorage.setItem("bendleImpossible_guess6","");
  localStorage.setItem("bendleImpossible_guess7","");
  localStorage.setItem("bendleImpossible_guess8","");
}

function setEasyCharacter() {
  number = Math.floor(Math.random()*21);
  switch (number) {
    case 0:
      localStorage.setItem("bendleEasy_Character","Aang");
      break;
    case 1:
      localStorage.setItem("bendleEasy_Character","Appa");
      break;
    case 2:
      localStorage.setItem("bendleEasy_Character","Asami Sato"); 
      break;
    case 3:
      localStorage.setItem("bendleEasy_Character","Azula");
      break;
    case 4:
      localStorage.setItem("bendleEasy_Character","Bolin");
      break;
    case 5:
      localStorage.setItem("bendleEasy_Character","Bumi (King of Omashu)");
      break;
    case 6:
      localStorage.setItem("bendleEasy_Character","Cabbage Merchant");
      break;
    case 7:
      localStorage.setItem("bendleEasy_Character","Iroh");
      break;
    case 8:
      localStorage.setItem("bendleEasy_Character","Katara");
      break;
    case 9:
      localStorage.setItem("bendleEasy_Character","Korra");
      break;
    case 10:
      localStorage.setItem("bendleEasy_Character","Mai");
      break;
    case 11:
      localStorage.setItem("bendleEasy_Character","Mako");
      break;
    case 12:
      localStorage.setItem("bendleEasy_Character","Momo");
      break;
    case 13:
      localStorage.setItem("bendleEasy_Character","Ozai");
      break;
    case 14:
      localStorage.setItem("bendleEasy_Character","Roku");
      break;
    case 15:
      localStorage.setItem("bendleEasy_Character","Sokka");
      break;
    case 16:
      localStorage.setItem("bendleEasy_Character","Suki");
      break;
    case 17:
      localStorage.setItem("bendleEasy_Character","Tenzin");
      break;
    case 18:
      localStorage.setItem("bendleEasy_Character","Toph Beifong");
      break;
    case 19:
      localStorage.setItem("bendleEasy_Character","TyLee");
      break;
    case 20:
      localStorage.setItem("bendleEasy_Character","Zuko");
      break;
  }
}

function setNormalCharacter() {
  number = Math.floor(Math.random()*35);
  switch (number) {
    case 0:
      localStorage.setItem("bendleNormal_Character","Aang");
      break;
    case 1:
      localStorage.setItem("bendleNormal_Character","Appa");
      break;
    case 2:
      localStorage.setItem("bendleNormal_Character","Asami Sato"); 
      break;
    case 3:
      localStorage.setItem("bendleNormal_Character","Azula");
      break;
    case 4:
      localStorage.setItem("bendleNormal_Character","Bolin");
      break;
    case 5:
      localStorage.setItem("bendleNormal_Character","Bumi (King of Omashu)");
      break;
    case 6:
      localStorage.setItem("bendleNormal_Character","Cabbage Merchant");
      break;
    case 7:
      localStorage.setItem("bendleNormal_Character","Iroh");
      break;
    case 8:
      localStorage.setItem("bendleNormal_Character","Katara");
      break;
    case 9:
      localStorage.setItem("bendleNormal_Character","Korra");
      break;
    case 10:
      localStorage.setItem("bendleNormal_Character","Mai");
      break;
    case 11:
      localStorage.setItem("bendleNormal_Character","Mako");
      break;
    case 12:
      localStorage.setItem("bendleNormal_Character","Momo");
      break;
    case 13:
      localStorage.setItem("bendleNormal_Character","Ozai");
      break;
    case 14:
      localStorage.setItem("bendleNormal_Character","Roku");
      break;
    case 15:
      localStorage.setItem("bendleNormal_Character","Sokka");
      break;
    case 16:
      localStorage.setItem("bendleNormal_Character","Suki");
      break;
    case 17:
      localStorage.setItem("bendleNormal_Character","Tenzin");
      break;
    case 18:
      localStorage.setItem("bendleNormal_Character","Toph Beifong");
      break;
    case 19:
      localStorage.setItem("bendleNormal_Character","TyLee");
      break;
    case 20:
      localStorage.setItem("bendleNormal_Character","Zuko");
      break;
    case 21:
      localStorage.setItem("bendleNormal_Character","Amon");
      break;
    case 22:
      localStorage.setItem("bendleNormal_Character","Azulon");
      break;
    case 23:
      localStorage.setItem("bendleNormal_Character","Bato");
      break;
    case 24:
      localStorage.setItem("bendleNormal_Character","Bumi");
      break;
    case 25:
      localStorage.setItem("bendleNormal_Character","The Duke");
      break;
    case 26:
      localStorage.setItem("bendleNormal_Character","Fang");
      break;
    case 27:
      localStorage.setItem("bendleNormal_Character","Gyatso");
      break;
    case 28:
      localStorage.setItem("bendleNormal_Character","Hakoda");
      break;
    case 29:
      localStorage.setItem("bendleNormal_Character","Hama");
      break;
    case 30:
      localStorage.setItem("bendleNormal_Character","Haru");
      break;
    case 31:
      localStorage.setItem("bendleNormal_Character","Ikki");
      break;
    case 32:
      localStorage.setItem("bendleNormal_Character","Jeong Jeong");
      break;
    case 33:
      localStorage.setItem("bendleNormal_Character","Jet");
      break;
    case 34:
      localStorage.setItem("bendleNormal_Character","Jinora");
      break;
    case 35:
      localStorage.setItem("bendleNormal_Character","Keui");
      break;
  }
} 

function setHardCharacter() {
  number = Math.floor(Math.random()*35);
  switch (number) {
    case 0:
      localStorage.setItem("bendleHard_Character","Aang");
      break;
    case 1:
      localStorage.setItem("bendleHard_Character","Appa");
      break;
    case 2:
      localStorage.setItem("bendleHard_Character","Asami Sato"); 
      break;
    case 3:
      localStorage.setItem("bendleHard_Character","Azula");
      break;
    case 4:
      localStorage.setItem("bendleHard_Character","Bolin");
      break;
    case 5:
      localStorage.setItem("bendleHard_Character","Bumi (King of Omashu)");
      break;
    case 6:
      localStorage.setItem("bendleHard_Character","Cabbage Merchant");
      break;
    case 7:
      localStorage.setItem("bendleHard_Character","Iroh");
      break;
    case 8:
      localStorage.setItem("bendleHard_Character","Katara");
      break;
    case 9:
      localStorage.setItem("bendleHard_Character","Korra");
      break;
    case 10:
      localStorage.setItem("bendleHard_Character","Mai");
      break;
    case 11:
      localStorage.setItem("bendleHard_Character","Mako");
      break;
    case 12:
      localStorage.setItem("bendleHard_Character","Momo");
      break;
    case 13:
      localStorage.setItem("bendleHard_Character","Ozai");
      break;
    case 14:
      localStorage.setItem("bendleHard_Character","Roku");
      break;
    case 15:
      localStorage.setItem("bendleHard_Character","Sokka");
      break;
    case 16:
      localStorage.setItem("bendleHard_Character","Suki");
      break;
    case 17:
      localStorage.setItem("bendleHard_Character","Tenzin");
      break;
    case 18:
      localStorage.setItem("bendleHard_Character","Toph Beifong");
      break;
    case 19:
      localStorage.setItem("bendleHard_Character","TyLee");
      break;
    case 20:
      localStorage.setItem("bendleHard_Character","Zuko");
      break;
    case 21:
      localStorage.setItem("bendleHard_Character","Amon");
      break;
    case 22:
      localStorage.setItem("bendleHard_Character","Azulon");
      break;
    case 23:
      localStorage.setItem("bendleHard_Character","Bato");
      break;
    case 24:
      localStorage.setItem("bendleHard_Character","Bumi");
      break;
    case 25:
      localStorage.setItem("bendleHard_Character","The Duke");
      break;
    case 26:
      localStorage.setItem("bendleHard_Character","Fang");
      break;
    case 27:
      localStorage.setItem("bendleHard_Character","Gyatso");
      break;
    case 28:
      localStorage.setItem("bendleHard_Character","Hakoda");
      break;
    case 29:
      localStorage.setItem("bendleHard_Character","Hama");
      break;
    case 30:
      localStorage.setItem("bendleHard_Character","Haru");
      break;
    case 31:
      localStorage.setItem("bendleHard_Character","Ikki");
      break;
    case 32:
      localStorage.setItem("bendleHard_Character","Jeong Jeong");
      break;
    case 33:
      localStorage.setItem("bendleHard_Character","Jet");
      break;
    case 34:
      localStorage.setItem("bendleHard_Character","Jinora");
      break;
    case 35:
      localStorage.setItem("bendleHard_Character","Keui");
      break;
  }
} 

function setImpossibleCharacter() {
  number = Math.floor(Math.random()*35);
  switch (number) {
    case 0:
      localStorage.setItem("bendleImpossible_Character","Aang");
      break;
    case 1:
      localStorage.setItem("bendleImpossible_Character","Appa");
      break;
    case 2:
      localStorage.setItem("bendleImpossible_Character","Asami Sato"); 
      break;
    case 3:
      localStorage.setItem("bendleImpossible_Character","Azula");
      break;
    case 4:
      localStorage.setItem("bendleImpossible_Character","Bolin");
      break;
    case 5:
      localStorage.setItem("bendleImpossible_Character","Bumi (King of Omashu)");
      break;
    case 6:
      localStorage.setItem("bendleImpossible_Character","Cabbage Merchant");
      break;
    case 7:
      localStorage.setItem("bendleImpossible_Character","Iroh");
      break;
    case 8:
      localStorage.setItem("bendleImpossible_Character","Katara");
      break;
    case 9:
      localStorage.setItem("bendleImpossible_Character","Korra");
      break;
    case 10:
      localStorage.setItem("bendleImpossible_Character","Mai");
      break;
    case 11:
      localStorage.setItem("bendleImpossible_Character","Mako");
      break;
    case 12:
      localStorage.setItem("bendleImpossible_Character","Momo");
      break;
    case 13:
      localStorage.setItem("bendleImpossible_Character","Ozai");
      break;
    case 14:
      localStorage.setItem("bendleImpossible_Character","Roku");
      break;
    case 15:
      localStorage.setItem("bendleImpossible_Character","Sokka");
      break;
    case 16:
      localStorage.setItem("bendleImpossible_Character","Suki");
      break;
    case 17:
      localStorage.setItem("bendleImpossible_Character","Tenzin");
      break;
    case 18:
      localStorage.setItem("bendleImpossible_Character","Toph Beifong");
      break;
    case 19:
      localStorage.setItem("bendleImpossible_Character","TyLee");
      break;
    case 20:
      localStorage.setItem("bendleImpossible_Character","Zuko");
      break;
    case 21:
        localStorage.setItem("bendleImpossible_Character","Amon");
        break;
    case 22:
      localStorage.setItem("bendleImpossible_Character","Azulon");
      break;
    case 23:
      localStorage.setItem("bendleImpossible_Character","Bato");
      break;
    case 24:
      localStorage.setItem("bendleImpossible_Character","Bumi");
      break;
    case 25:
      localStorage.setItem("bendleImpossible_Character","The Duke");
      break;
    case 26:
      localStorage.setItem("bendleImpossible_Character","Fang");
      break;
    case 27:
      localStorage.setItem("bendleImpossible_Character","Gyatso");
      break;
    case 28:
      localStorage.setItem("bendleImpossible_Character","Hakoda");
      break;
    case 29:
      localStorage.setItem("bendleImpossible_Character","Hama");
      break;
    case 30:
      localStorage.setItem("bendleImpossible_Character","Haru");
      break;
    case 31:
      localStorage.setItem("bendleImpossible_Character","Ikki");
      break;
    case 32:
      localStorage.setItem("bendleImpossible_Character","Jeong Jeong");
      break;
    case 33:
      localStorage.setItem("bendleImpossible_Character","Jet");
      break;
    case 34:
      localStorage.setItem("bendleImpossible_Character","Jinora");
      break;
    case 35:
      localStorage.setItem("bendleImpossible_Character","Keui");
      break;
  }
} 

function loadGameEasy() {
  if (localStorage.getItem("bendleEasy_correct") == 1) {
    for (let x = 0; x < easyGuess; x++) {
      document.getElementById("guess" + (x+1)).className = "guess";
      guess = document.getElementById("guess" + (x+1));
      guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
      if (x+1 == easyGuess) {
        guess.style.color = "green";
      }
    }
    document.getElementById("nationalityTitle").className = "descriptions";
    document.getElementById("nationInfo").className = "information";
    document.getElementById("fightingTitle").className = "descriptions";
    document.getElementById("benderInfo").className = "information";
    document.getElementById("diedTitle").className = "descriptions";
    document.getElementById("diedInfo").className = "information";
    document.getElementById("bornTitle").className = "descriptions";
    document.getElementById("bornInfo").className = "information";
    document.getElementById("speciesTitle").className = "descriptions";
    document.getElementById("speciesInfo").className = "information";
    document.getElementById("genderTitle").className = "descriptions";
    document.getElementById("genderInfo").className = "information";
    document.getElementById("infoTitle").className = "descriptions";
    document.getElementById("infoInfo").className = "information"
    document.getElementById("addInfoTitle").className = "descriptions";
    document.getElementById("addInfoInfo").className = "information";
    document.getElementById("pictureTitle").className = "descriptions";
    document.getElementById("pictureInfo").className = "picture";
    document.getElementById("characterTitle").className = "descriptions";
    document.getElementById("characterInfo").className = "information";
    document.getElementById("wikiLink").className = "descriptions";
    document.getElementById("wikiInfo").className = "ATLALink";
  }else {
    switch (easyGuess) {
      case 1:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        break;
      case 2:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        break;
      case 3:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        break;
      case 4:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        break;
      case 5:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        break;
      case 6:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        break;
      case 7:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        break;
      case 8:
        for (let x = 0; x < easyGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleEasy_guess" + (x+1));
          if (x+1 == easyGuess) {
            guess.style.color = "green";
          }
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        document.getElementById("characterTitle").className = "descriptions";
        document.getElementById("characterInfo").className = "information";
        document.getElementById("wikiLink").className = "descriptions";
        document.getElementById("wikiInfo").className = "ATLALink";
        break;
    }
  }

  if (localStorage.getItem("bendleEasy_correct") == 1) {
    document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character") + " (" + easyGuess + ")")
    document.getElementById("resultsEasy").style.color = "green";
  }else {
    if (localStorage.getItem("bendleEasy_guessCount") == 8) {
      document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character"))
      document.getElementById("resultsEasy").style.color = "red";
    }else {
      document.getElementById("resultsEasy").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleNormal_correct") == 1) {
    document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character") + " (" + normalGuess + ")")
    document.getElementById("resultsNormal").style.color = "green";
  }else {
    if (localStorage.getItem("bendleNormal_guessCount") == 8) {
      document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character"))
      document.getElementById("resultsNormal").style.color = "red";
    }else {
      document.getElementById("resultsNormal").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleHard_correct") == 1) {
    document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character") + " (" + hardGuess + ")")
    document.getElementById("resultsHard").style.color = "green";
  }else {
    if (localStorage.getItem("bendleHard_guessCount") == 8) {
      document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character"))
      document.getElementById("resultsHard").style.color = "red";
    }else {
      document.getElementById("resultsHard").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleImpossible_correct") == 1) {
    document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character") + " (" + impossibleGuess + ")")
    document.getElementById("resultsImpossible").style.color = "green";
  }else {
    if (localStorage.getItem("bendleImpossible_guessCount") == 8) {
      document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character"))
      document.getElementById("resultsImpossible").style.color = "red";
    }else {
      document.getElementById("resultsImpossible").textContent = ("Not Finished");
    }
  }
}

function loadGameNormal() {
  
  if (localStorage.getItem("bendleNormal_correct") == 1) {
    for (let x = 0; x < normalGuess; x++) {
      document.getElementById("guess" + (x+1)).className = "guess";
      guess = document.getElementById("guess" + (x+1));
      guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
      if (x+1 == normalGuess) {
        guess.style.color = "green";
      }
    }
    document.getElementById("nationalityTitle").className = "descriptions";
    document.getElementById("nationInfo").className = "information";
    document.getElementById("fightingTitle").className = "descriptions";
    document.getElementById("benderInfo").className = "information";
    document.getElementById("diedTitle").className = "descriptions";
    document.getElementById("diedInfo").className = "information";
    document.getElementById("bornTitle").className = "descriptions";
    document.getElementById("bornInfo").className = "information";
    document.getElementById("speciesTitle").className = "descriptions";
    document.getElementById("speciesInfo").className = "information";
    document.getElementById("genderTitle").className = "descriptions";
    document.getElementById("genderInfo").className = "information";
    document.getElementById("infoTitle").className = "descriptions";
    document.getElementById("infoInfo").className = "information"
    document.getElementById("addInfoTitle").className = "descriptions";
    document.getElementById("addInfoInfo").className = "information";
    document.getElementById("pictureTitle").className = "descriptions";
    document.getElementById("pictureInfo").className = "picture";
    document.getElementById("characterTitle").className = "descriptions";
    document.getElementById("characterInfo").className = "information";
    document.getElementById("wikiLink").className = "descriptions";
    document.getElementById("wikiInfo").className = "ATLALink";
  }else {
    switch (normalGuess) {
      case 1:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        break;
      case 2:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        break;
      case 3:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        break;
      case 4:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        break;
      case 5:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        break;
      case 6:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        break;
      case 7:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        break;
      case 8:
        for (let x = 0; x < normalGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleNormal_guess" + (x+1));
          if (x+1 == normalGuess) {
            guess.style.color = "green";
          }
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        document.getElementById("characterTitle").className = "descriptions";
        document.getElementById("characterInfo").className = "information";
        document.getElementById("wikiLink").className = "descriptions";
        document.getElementById("wikiInfo").className = "ATLALink";
        break;
    }
  }

  if (localStorage.getItem("bendleEasy_correct") == 1) {
    document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character") + " (" + easyGuess + ")")
    document.getElementById("resultsEasy").style.color = "green";
  }else {
    if (localStorage.getItem("bendleEasy_guessCount") == 8) {
      document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character"))
      document.getElementById("resultsEasy").style.color = "red";
    }else {
      document.getElementById("resultsEasy").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleNormal_correct") == 1) {
    document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character") + " (" + normalGuess + ")")
    document.getElementById("resultsNormal").style.color = "green";
  }else {
    if (localStorage.getItem("bendleNormal_guessCount") == 8) {
      document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character"))
      document.getElementById("resultsNormal").style.color = "red";
    }else {
      document.getElementById("resultsNormal").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleHard_correct") == 1) {
    document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character") + " (" + hardGuess + ")")
    document.getElementById("resultsHard").style.color = "green";
  }else {
    if (localStorage.getItem("bendleHard_guessCount") == 8) {
      document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character"))
      document.getElementById("resultsHard").style.color = "red";
    }else {
      document.getElementById("resultsHard").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleImpossible_correct") == 1) {
    document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character") + " (" + impossibleGuess + ")")
    document.getElementById("resultsImpossible").style.color = "green";
  }else {
    if (localStorage.getItem("bendleImpossible_guessCount") == 8) {
      document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character"))
      document.getElementById("resultsImpossible").style.color = "red";
    }else {
      document.getElementById("resultsImpossible").textContent = ("Not Finished");
    }
  }
}

function loadGameHard() {

  if (localStorage.getItem("bendleHard_correct") == 1) {
    for (let x = 0; x < hardGuess; x++) {
      document.getElementById("guess" + (x+1)).className = "guess";
      guess = document.getElementById("guess" + (x+1));
      guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
      if (x+1 == hardGuess) {
        guess.style.color = "green";
      }
    }
    document.getElementById("nationalityTitle").className = "descriptions";
    document.getElementById("nationInfo").className = "information";
    document.getElementById("fightingTitle").className = "descriptions";
    document.getElementById("benderInfo").className = "information";
    document.getElementById("diedTitle").className = "descriptions";
    document.getElementById("diedInfo").className = "information";
    document.getElementById("bornTitle").className = "descriptions";
    document.getElementById("bornInfo").className = "information";
    document.getElementById("speciesTitle").className = "descriptions";
    document.getElementById("speciesInfo").className = "information";
    document.getElementById("genderTitle").className = "descriptions";
    document.getElementById("genderInfo").className = "information";
    document.getElementById("infoTitle").className = "descriptions";
    document.getElementById("infoInfo").className = "information"
    document.getElementById("addInfoTitle").className = "descriptions";
    document.getElementById("addInfoInfo").className = "information";
    document.getElementById("pictureTitle").className = "descriptions";
    document.getElementById("pictureInfo").className = "picture";
    document.getElementById("characterTitle").className = "descriptions";
    document.getElementById("characterInfo").className = "information";
    document.getElementById("wikiLink").className = "descriptions";
    document.getElementById("wikiInfo").className = "ATLALink";
  }else {
    switch (hardGuess) {
      case 1:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        break;
      case 2:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        break;
      case 3:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        break;
      case 4:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        break;
      case 5:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        break;
      case 6:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        break;
      case 7:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        break;
      case 8:
        for (let x = 0; x < hardGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleHard_guess" + (x+1));
          if (x+1 == hardGuess) {
            guess.style.color = "green";
          }
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        document.getElementById("characterTitle").className = "descriptions";
        document.getElementById("characterInfo").className = "information";
        document.getElementById("wikiLink").className = "descriptions";
        document.getElementById("wikiInfo").className = "ATLALink";
        break;
    }
  }

  if (localStorage.getItem("bendleEasy_correct") == 1) {
    document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character") + " (" + easyGuess + ")")
    document.getElementById("resultsEasy").style.color = "green";
  }else {
    if (localStorage.getItem("bendleEasy_guessCount") == 8) {
      document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character"))
      document.getElementById("resultsEasy").style.color = "red";
    }else {
      document.getElementById("resultsEasy").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleNormal_correct") == 1) {
    document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character") + " (" + normalGuess + ")")
    document.getElementById("resultsNormal").style.color = "green";
  }else {
    if (localStorage.getItem("bendleNormal_guessCount") == 8) {
      document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character"))
      document.getElementById("resultsNormal").style.color = "red";
    }else {
      document.getElementById("resultsNormal").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleHard_correct") == 1) {
    document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character") + " (" + hardGuess + ")")
    document.getElementById("resultsHard").style.color = "green";
  }else {
    if (localStorage.getItem("bendleHard_guessCount") == 8) {
      document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character"))
      document.getElementById("resultsHard").style.color = "red";
    }else {
      document.getElementById("resultsHard").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleImpossible_correct") == 1) {
    document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character") + " (" + impossibleGuess + ")")
    document.getElementById("resultsImpossible").style.color = "green";
  }else {
    if (localStorage.getItem("bendleImpossible_guessCount") == 8) {
      document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character"))
      document.getElementById("resultsImpossible").style.color = "red";
    }else {
      document.getElementById("resultsImpossible").textContent = ("Not Finished");
    }
  }
}

function loadGameImpossible() {

  if (localStorage.getItem("bendleImpossible_correct") == 1) {
    for (let x = 0; x < impossibleGuess; x++) {
      document.getElementById("guess" + (x+1)).className = "guess";
      guess = document.getElementById("guess" + (x+1));
      guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
      if (x+1 == impossibleGuess) {
        guess.style.color = "green";
      }
    }
    document.getElementById("nationalityTitle").className = "descriptions";
    document.getElementById("nationInfo").className = "information";
    document.getElementById("fightingTitle").className = "descriptions";
    document.getElementById("benderInfo").className = "information";
    document.getElementById("diedTitle").className = "descriptions";
    document.getElementById("diedInfo").className = "information";
    document.getElementById("bornTitle").className = "descriptions";
    document.getElementById("bornInfo").className = "information";
    document.getElementById("speciesTitle").className = "descriptions";
    document.getElementById("speciesInfo").className = "information";
    document.getElementById("genderTitle").className = "descriptions";
    document.getElementById("genderInfo").className = "information";
    document.getElementById("infoTitle").className = "descriptions";
    document.getElementById("infoInfo").className = "information"
    document.getElementById("addInfoTitle").className = "descriptions";
    document.getElementById("addInfoInfo").className = "information";
    document.getElementById("pictureTitle").className = "descriptions";
    document.getElementById("pictureInfo").className = "picture";
    document.getElementById("characterTitle").className = "descriptions";
    document.getElementById("characterInfo").className = "information";
    document.getElementById("wikiLink").className = "descriptions";
    document.getElementById("wikiInfo").className = "ATLALink";
  }else {
    switch (impossibleGuess) {
      case 1:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        break;
      case 2:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        break;
      case 3:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        break;
      case 4:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        break;
      case 5:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        break;
      case 6:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        break;
      case 7:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        break;
      case 8:
        for (let x = 0; x < impossibleGuess; x++) {
          document.getElementById("guess" + (x+1)).className = "guess";
          guess = document.getElementById("guess" + (x+1));
          guess.textContent = localStorage.getItem("bendleImpossible_guess" + (x+1));
          if (x+1 == guessCountImpossible) {
            guess.style.color = "green";
          }
        }
        document.getElementById("nationalityTitle").className = "descriptions";
        document.getElementById("nationInfo").className = "information";
        document.getElementById("fightingTitle").className = "descriptions";
        document.getElementById("benderInfo").className = "information";
        document.getElementById("diedTitle").className = "descriptions";
        document.getElementById("diedInfo").className = "information";
        document.getElementById("bornTitle").className = "descriptions";
        document.getElementById("bornInfo").className = "information";
        document.getElementById("speciesTitle").className = "descriptions";
        document.getElementById("speciesInfo").className = "information";
        document.getElementById("genderTitle").className = "descriptions";
        document.getElementById("genderInfo").className = "information";
        document.getElementById("infoTitle").className = "descriptions";
        document.getElementById("infoInfo").className = "information"
        document.getElementById("addInfoTitle").className = "descriptions";
        document.getElementById("addInfoInfo").className = "information";
        document.getElementById("pictureTitle").className = "descriptions";
        document.getElementById("pictureInfo").className = "picture";
        document.getElementById("characterTitle").className = "descriptions";
        document.getElementById("characterInfo").className = "information";
        document.getElementById("wikiLink").className = "descriptions";
        document.getElementById("wikiInfo").className = "ATLALink";
        break;
    }
  }

  if (localStorage.getItem("bendleEasy_correct") == 1) {
    document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character") + " (" + easyGuess + ")")
    document.getElementById("resultsEasy").style.color = "green";
  }else {
    if (localStorage.getItem("bendleEasy_guessCount") == 8) {
      document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character"))
      document.getElementById("resultsEasy").style.color = "red";
    }else {
      document.getElementById("resultsEasy").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleNormal_correct") == 1) {
    document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character") + " (" + normalGuess + ")")
    document.getElementById("resultsNormal").style.color = "green";
  }else {
    if (localStorage.getItem("bendleNormal_guessCount") == 8) {
      document.getElementById("resultsNormal").textContent = (localStorage.getItem("bendleNormal_Character"))
      document.getElementById("resultsNormal").style.color = "red";
    }else {
      document.getElementById("resultsNormal").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleHard_correct") == 1) {
    document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character") + " (" + hardGuess + ")")
    document.getElementById("resultsHard").style.color = "green";
  }else {
    if (localStorage.getItem("bendleHard_guessCount") == 8) {
      document.getElementById("resultsHard").textContent = (localStorage.getItem("bendleHard_Character"))
      document.getElementById("resultsHard").style.color = "red";
    }else {
      document.getElementById("resultsHard").textContent = ("Not Finished");
    }
  }

  if (localStorage.getItem("bendleImpossible_correct") == 1) {
    document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character") + " (" + impossibleGuess + ")")
    document.getElementById("resultsImpossible").style.color = "green";
  }else {
    if (localStorage.getItem("bendleImpossible_guessCount") == 8) {
      document.getElementById("resultsImpossible").textContent = (localStorage.getItem("bendleImpossible_Character"))
      document.getElementById("resultsImpossible").style.color = "red";
    }else {
      document.getElementById("resultsImpossible").textContent = ("Not Finished");
    }
  }
}
