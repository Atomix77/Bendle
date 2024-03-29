const initialSelection = SelectaCharacter.textContent;
const initialID = SelectaCharacter;

var currentID = initialID;
var currentSelection = currentID.textContent;
document.getElementById("dropDownMain").innerHTML = currentSelection;
guessCount = localStorage.getItem("bendleEasy_guessCount");
characterSelect = localStorage.getItem("bendleEasy_Character");


const characterDictionary = {
  "Aang": [{characterName: "Aang",
  ethnicityTitle:"Air Nomad",
  nationalityTitle: "Southern Air Temple",
  fightingTitle: "Airbending",
  genderTitle:"Man",
  speciesTitle:"Human",
  bornTitle: "12 BG",
  diedTitle: "153 AG",
  infoTitle: "Air Acolytes, Air Nomads, Team Avatar",
  addInfoTitle: "Co-founder of the United Republic of Nations, Fully Realised Avatar",
  pictureTitle: "<img src='characterPictures/AangPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Aang' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Appa": [{characterName: "Appa",
  ethnicityTitle: "Air Nomad",
  nationalityTitle: "Eastern Air Temple",
  fightingTitle: "Airbending",
  genderTitle:"Male",
  speciesTitle:"Flying Bison",
  bornTitle: "Unknown",
  diedTitle: "Unknown",
  infoTitle: "Air Nomads, Team Avatar",
  addInfoTitle: "Aang's sky bison",
  pictureTitle: "<img src='characterPictures/AppaPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Appa' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Asami Sato": [{characterName: "Asami Sato",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Republic City, United Republic",
  fightingTitle: "Hand-to-hand combat",
  genderTitle:"Woman",
  speciesTitle:"Human",
  bornTitle: "152 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Future Industries, Sato Family, Team Avatar",
  addInfoTitle: "CEO of Future Industries, Private in the Earth Empire military",
  pictureTitle: "<img src='characterPictures/AsamiSatoPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Asami_Sato' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Azula": [{characterName: "Azula",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation Capital, Fire Nation",
  fightingTitle: "Firebending",
  genderTitle: "Woman",
  speciesTitle: "Human",
  bornTitle: "85 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Azula's Team, Dai Li, Fire Nation Royal Family",
  addInfoTitle: "Crown Princess of the Fire Nation, Head of the Dai Li",
  pictureTitle: "<img src='characterPictures/AzulaPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Azula' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Bolin": [{characterName: "Bolin",
  ethnicityTitle: "Earth Kingdom, Fire Nation",
  nationalityTitle: "Republic City, United Republic",
  fightingTitle: "Earthbending",
  genderTitle:"Man",
  speciesTitle:"Human",
  bornTitle: "154 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Triple Threat Triad, Fire Ferrets, Team Avatar",
  addInfoTitle: "Pro-bender, Actor, Coporal in the Earth Empire",
  pictureTitle: "<img src='characterPictures/BolinPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Bolin' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Bumi (King of Omashu)": [{characterName: "Bumi (King of Omashu)",
  ethnicityTitle: "Earth Kingdom",
  nationalityTitle: "Omashu, Earth Kingdom",
  fightingTitle: "Earthbending",
  genderTitle:"Man",
  speciesTitle:"Human",
  bornTitle: "12 BG",
  diedTitle: "Between 102 and 124 AG",
  infoTitle: "King of Omashu, Order of the White Lotus",
  addInfoTitle: "High-ranking member of the Order of the White Lotus",
  pictureTitle: "<img src='characterPictures/KingBumiPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Bumi_(King_of_Omashu)' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Cabbage Merchant": [{characterName: "Cabbage Merchant",
  ethnicityTitle: "Earth Kingdom",
  nationalityTitle: "Earth Kingdom",
  fightingTitle: "Unknown",
  genderTitle:"Man",
  speciesTitle:"Human",
  bornTitle: "Unknown",
  diedTitle: "Unknown/Alive",
  infoTitle: "Merchant of cabbage, Cabbage Corp",
  addInfoTitle: "Founder of Cabbage Corp",
  pictureTitle: "<img src='characterPictures/CabbageMerchantPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Cabbage_merchant' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Iroh": [{characterName: "Iroh",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation Capital, Fire Nation",
  fightingTitle: "Firebending",
  genderTitle:"Man",
  speciesTitle:"Human",
  bornTitle: "Unknown",
  diedTitle: "Unknown",
  infoTitle: "Fire Nation Royal Family, Jasmine Dragon, Order of the White Lotus",
  addInfoTitle: "Finest Tea Brewer in Ba Sing-Se, Grand Lotus of the Order of the White Lotus, Jasmine Dragon teashop founder and owner",
  pictureTitle: "<img src='characterPictures/IrohPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Iroh' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Katara": [{characterName: "Katara",
  ethnicityTitle: "Water Tribe",
  nationalityTitle: "Wolf Cove, Southern Water Tribe",
  fightingTitle: "Waterbending",
  genderTitle: "Woman",
  speciesTitle:"Human",
  bornTitle: "85 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Team Avatar, Water Tribe",
  addInfoTitle: "Daughter of the Southern Water Tribe Head Chieftain, Member of the Southern Council of Elders",
  pictureTitle: "<img src='characterPictures/KataraPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Katara' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Korra": [{characterName: "Korra",
  ethnicityTitle: "Water Tribe",
  nationalityTitle: "Wolf Cove, Southern Water Tribe",
  fightingTitle: "Waterbending",
  genderTitle: "Woman",
  speciesTitle: "Human",
  bornTitle: "153 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Southern Water Tribe, Fire Ferrets, Team Avatar",
  addInfoTitle: "Daughter of the Southern Water Tribe chief, Fire Ferrets' waterbender, Fully realized Avatar",
  pictureTitle: "<img src='characterPictures/KorraPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Korra' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Mai": [{characterName: "Mai",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation",
  fightingTitle: "Shuriken-jutsu",
  genderTitle: "Woman",
  speciesTitle: "Human",
  bornTitle: "85 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Azula's team, Fire Nation, Royal Fire Academy for Girls",
  addInfoTitle: "Girlfriend to the Fire Lord, High class Fire Nation citizen, Imprisoned Fire Nation traitor ",
  pictureTitle: "<img src='characterPictures/MaiPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Mai' class='ATLALink' target='_blank'> Avatar Wiki</a>"}],
  "Mako": [{characterName: "Mako",
  ethnicityTitle: "Fire Nation, Earth Kingdom",
  nationalityTitle: "Republic City, United Republic",
  fightingTitle: "Firebending",
  genderTitle: "Man",
  speciesTitle: "Human",
  bornTitle: "152 AG",
  diedTitle: "unknown/Alive",
  infoTitle: "Fire Ferrets, Republic City Police, Team Avatar",
  addInfoTitle: "Police officer, Pro-bender, Wu's bodyguard",
  pictureTitle: "<img src='characterPictures/MakoPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Mako' class='ATLALink'> Avatar Wiki</a>"}],
  "Momo": [{characterName: "Momo",
  ethnicityTitle: "Air Nomad",
  nationalityTitle: "Southern Air Temple",
  fightingTitle: "Unknown",
  genderTitle: "Male",
  speciesTitle: "Winged Lemur",
  bornTitle: "Unknown",
  diedTitle: "Unknown/Alive",
  infoTitle: "Air Nomads, Team Avatar",
  addInfoTitle: "Aang's pet lemur",
  pictureTitle: "<img src='characterPictures/MomoPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Momo' class='ATLALink'> Avatar Wiki</a>"}],
  "Ozai": [{characterName: "Ozai",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation Capital, Fire Nation",
  fightingTitle: "Firebending",
  genderTitle: "Man",
  speciesTitle: "Human",
  bornTitle: "55 AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Fire Nation, Fire Nation Royal Family",
  addInfoTitle: "Fire Lord, Phoenix King",
  pictureTitle: "<img src='characterPictures/OzaiPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Ozai' class='ATLALink'> Avatar Wiki</a>"}],
  "Roku": [{characterName: "Roku",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation Capital, Fire Nation",
  fightingTitle: "Firebending",
  genderTitle: "Man",
  speciesTitle: "Human",
  bornTitle: "82 BG",
  diedTitle: "12 BG",
  infoTitle: "Fully realized Avatar",
  addInfoTitle: "Upper-class Fire Nation citizen",
  pictureTitle: "<img src='characterPictures/RokuPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Roku' class='ATLALink'> Avatar Wiki</a>"}],
  "Sokka": [{characterName: "Sokka",
  ethnicityTitle: "Water Tribe",
  nationalityTitle: "Wolf Cove, Southern Water Tribe",
  fightingTitle: "Water Tribe Warrior style",
  genderTitle: "Man",
  speciesTitle: "Human",
  bornTitle: "84 AG",
  diedTitle: "Between 158 and 170 AG",
  infoTitle: "Southern Water Tribe, Team Avatar, United Republic Council",
  addInfoTitle: "Chieftain in the Southern Water Tribe, Southern Water Tribe representative and Chairman of the United Republic Council",
  pictureTitle: "<img src='characterPictures/SokkaPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Sokka' class='ATLALink'> Avatar Wiki</a>"}],
  "Suki": [{characterName: "Suki",
  ethnicityTitle: "Earth Kingdom",
  nationalityTitle: "Kyoshi Island",
  fightingTitle: "Tessenjutsu",
  genderTitle: "Woman",
  speciesTitle: "Human",
  bornTitle: "Unknown",
  diedTitle: "Unknown/Alive",
  infoTitle: "Earth Kingdom, Kyoshi Warriors, Team Avatar",
  addInfoTitle: "Kyoshi Warriors' leader, Member of Team Avatar",
  pictureTitle: "<img src='characterPictures/SukiPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Suki' class='ATLALink'> Avatar Wiki</a>"}],
  "Tenzin": [{characterName: "Tenzin",
  ethnicityTitle: "Air Nomad, Water Tribe",
  nationalityTitle: "Republic City, United Republic",
  fightingTitle: "Airbending",
  genderTitle: "Man",
  speciesTitle: "Human",
  bornTitle: "119AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Air Acolytes, Air Nation, Air Temple Island, United Republic Council",
  addInfoTitle: "Air Nation representative on the United Republic Council, Leader of the Air Nation",
  pictureTitle: "<img src='characterPictures/TenzinPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Tenzin' class='ATLALink'> Avatar Wiki</a>"}],
  "Toph Beifong": [{characterName: "Toph Beifong",
  ethnicityTitle: "Earth Kingdom",
  nationalityTitle: "Gaoling, Earth Kingdom",
  fightingTitle: "Earthbending",
  genderTitle: "Woman",
  speciesTitle: "Human",
  bornTitle: "88AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Beifong Family, Earth Kingdom, Team Avatar",
  addInfoTitle: "Chief of Police in Republic City, Inventor of metalbending",
  pictureTitle: "<img src='characterPictures/TophBeifongPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Toph_Beifong' class='ATLALink'> Avatar Wiki</a>"}],
  "TyLee": [{characterName: "TyLee",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation",
  fightingTitle: "Chi-blocking",
  genderTitle: "Woman",
  speciesTitle: "Human",
  bornTitle: "Unknown",
  diedTitle: "unknown/Alive",
  infoTitle: "Azula's team, Fire Nation, Kyoshi Warriors",
  addInfoTitle: "Chi-blocking master, High class Fire Nation citizen",
  pictureTitle: "<img src='characterPictures/TyLeePicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Ty_Lee' class='ATLALink'> Avatar Wiki</a>"}],
  "Zuko": [{characterName: "Zuko",
  ethnicityTitle: "Fire Nation",
  nationalityTitle: "Fire Nation Capital, Fire Nation",
  fightingTitle: "Firebending",
  genderTitle: "Man",
  speciesTitle: "Human",
  bornTitle: "83AG",
  diedTitle: "Unknown/Alive",
  infoTitle: "Fire Nation, Fire Nation Royal Family, Team Avatar",
  addInfoTitle: "Co-founder of the United Republic of Nations, Crown Prince of the Fire Nation",
  pictureTitle: "<img src='characterPictures/ZukoPicture.webp'> </img>",
  wikiLink: "<a href='https://avatar.fandom.com/wiki/Zuko' class='ATLALink'> Avatar Wiki</a>"}],
}

// 

function levelSelect() {
  levelMenu =  document.getElementById("levelMenu"); 
  if (levelMenu.className == "levelSelect") {
    document.getElementById("levelMenu").className = "nothing";
    document.getElementById("menuIcon").className = "fa-solid fa-bars";
  }else {
    document.getElementById("levelMenu").className = "levelSelect";
    document.getElementById("menuIcon").className = "fa-solid fa-xmark fa-lg";
  }
}

function howToPlay() {
  playMenu = document.getElementById("playMenu");
  if (playMenu.className == "playMenu") {
    document.getElementById("playMenu").className = "nothing";
    document.getElementById("main").className = "main";
  }else {
    document.getElementById("playMenu").className = "playMenu";
    document.getElementById("homeScreen").className = "nothing";
    document.getElementById("levelMenu").className = "nothing"
    document.getElementById("main").className = "nothing";
    document.getElementById("menuIcon").className = "fa-solid fa-bars";
  }
}

function homeScreen() {
  loadGameEasy()
  home = document.getElementById("homeScreen");
  if (home.className == "homeScreen") {
    document.getElementById("homeScreen").className = "nothing";
    document.getElementById("main").className = "main";
  }else {
    document.getElementById("homeScreen").className = "homeScreen";
    document.getElementById("levelMenu").className = "nothing";
    document.getElementById("playMenu").className = "nothing";
    document.getElementById("main").className = "nothing";
    document.getElementById("menuIcon").className = "fa-solid fa-bars";
  }
}

function dropDown() {
  var dropDown = document.getElementById("dropDownMenu");
  var button = document.getElementById("submitButton");
  var dropDownMain = document.getElementById("dropDownMain");
  var searchBar = document.getElementById("characterSelect");
  if (event.target.id == "dropDownMain") {
    if (dropDown.style.display == "none") {
      dropDown.style.display = "block";
      searchBar.focus();
      button.style.display = "none";
      dropDownMain.style.borderBottom = "none";
    } else {
      dropDown.style.display = "none";
      button.style.display = "block";
      dropDownMain.style.borderBottom = "2px solid #a0b1c7";
    }
  }else if (event.target.id != "dropDownMain" && event.target.id != "characterSelect") {
    if (dropDown.style.display == "block") {
      dropDown.style.display = "none";
      button.style.display = "block"; 
    }
  }
}

function filterItems() {
  var input, filter, x;
  input = document.getElementById("characterSelect");
  filter = input.value.toLowerCase();
  div = document.getElementById("dropDownItems");
  option = div.getElementsByTagName("option");
  for (i = 0; i < option.length; i++) {
    txtValue = option[i].textContent || option[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      option[i].style.display = "";
    } else {
      option[i].style.display = "none";
    }
  }
}

function characterSelected() {
  currentID.style.color = "black";
  item = document.getElementById(event.target.id)
  item.style.color = "#d7dce4";
  currentID = item;
  currentSelection =  (currentID.textContent);
  document.getElementById("dropDownMain").innerHTML = currentSelection;
}

function getCharacterInfo() {
  document.getElementById("dropDownMenu").style.display = "none";
  currentCharacter = characterSelect;
  for (x in characterDictionary) {
    if (x == currentCharacter) {
      document.getElementById("ethnicityInfo").innerHTML = characterDictionary[x][0]["ethnicityTitle"];
      document.getElementById("nationInfo").innerHTML = characterDictionary[x][0]["nationalityTitle"];
      document.getElementById("benderInfo").innerHTML = characterDictionary[x][0]["fightingTitle"];
      document.getElementById("genderInfo").innerHTML = characterDictionary[x][0]["genderTitle"];
      document.getElementById("speciesInfo").innerHTML = characterDictionary[x][0]["speciesTitle"];
      document.getElementById("bornInfo").innerHTML = characterDictionary[x][0]["bornTitle"];
      document.getElementById("diedInfo").innerHTML = characterDictionary[x][0]["diedTitle"];
      document.getElementById("infoInfo").innerHTML = characterDictionary[x][0]["infoTitle"];
      document.getElementById("addInfoInfo").innerHTML = characterDictionary[x][0]["addInfoTitle"];
      document.getElementById("pictureInfo").innerHTML = characterDictionary[x][0]["pictureTitle"];
      document.getElementById("characterInfo").innerHTML = characterDictionary[x][0]["characterName"];
      document.getElementById("wikiInfo").innerHTML = characterDictionary[x][0]["wikiLink"];
    }
  }
}

function submitGuess() {
  currentCharacter = characterSelect;
  count = parseInt(guessCount);
  if (localStorage.getItem("bendleEasy_correct") != 1) {
    switch (count) {
      case 0:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess1").className = "guess";
          guess = document.getElementById("guess1")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess1", guess.textContent);
          document.getElementById("nationalityTitle").className = "descriptions";
          document.getElementById("nationInfo").className = "information";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 1:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess2").className = "guess";
          guess = document.getElementById("guess2")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess2",guess.textContent);
          document.getElementById("fightingTitle").className = "descriptions";
          document.getElementById("benderInfo").className = "information";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 2:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess3").className = "guess";
          guess = document.getElementById("guess3")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess3",guess.textContent);
          document.getElementById("diedTitle").className = "descriptions";
          document.getElementById("diedInfo").className = "information";
          document.getElementById("bornTitle").className = "descriptions";
          document.getElementById("bornInfo").className = "information";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 3:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess4").className = "guess";
          guess = document.getElementById("guess4")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess4",guess.textContent);
          document.getElementById("speciesTitle").className = "descriptions";
          document.getElementById("speciesInfo").className = "information";
          document.getElementById("genderTitle").className = "descriptions";
          document.getElementById("genderInfo").className = "information";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 4:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess5").className = "guess";
          guess = document.getElementById("guess5")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess5",guess.textContent);
          document.getElementById("infoTitle").className = "descriptions";
          document.getElementById("infoInfo").className = "information";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 5:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess6").className = "guess";
          guess = document.getElementById("guess6")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess6",guess.textContent);
          document.getElementById("addInfoTitle").className = "descriptions";
          document.getElementById("addInfoInfo").className = "information";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 6:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess7").className = "guess";
          guess = document.getElementById("guess7")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess7",guess.textContent);
          document.getElementById("pictureTitle").className = "descriptions";
          document.getElementById("pictureInfo").className = "picture";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
      case 7:
        if (currentID.text != currentCharacter) {
          document.getElementById("guess8").className = "guess";
          guess = document.getElementById("guess8")
          if (currentID != initialID) {
            guess.textContent = currentID.textContent;
          }else {
            guess.textContent = "No Guess";
          }
          localStorage.setItem("bendleEasy_guess8",guess.textContent);
          document.getElementById("characterTitle").className = "descriptions";
          document.getElementById("characterInfo").className = "information";
          document.getElementById("wikiLink").className = "descriptions";
          document.getElementById("wikiInfo").className = "ATLALink";
          count += 1;
          guessCount = count;
          localStorage.setItem("bendleEasy_guessCount", guessCount);
        }else {
          correctGuess();
        }
        break;
    }
  }
}

function correctGuess() {
  count +=1;
  document.getElementById("guess" + (count)).className = "guess";
  guess = document.getElementById("guess" + (count));
  guess.textContent = currentID.textContent;
  guess.style.color = "green";
  guessCount = count;
  easyGuess = guessCount;
  localStorage.setItem("bendleEasy_guess" + (count), guess.textContent);
  localStorage.setItem("bendleEasy_guessCount", guessCount);
  localStorage.setItem("bendleEasy_correct",1);
  document.getElementById("resultsEasy").textContent = (localStorage.getItem("bendleEasy_Character") + " (" + easyGuess + ")");
  document.getElementById("nationalityTitle").className = "descriptions";
  document.getElementById("nationInfo").className = "information";
  document.getElementById("fightingTitle").className = "descriptions";
  document.getElementById("benderInfo").className = "information";
  document.getElementById("speciesTitle").className = "descriptions";
  document.getElementById("speciesInfo").className = "information";
  document.getElementById("genderTitle").className = "descriptions";
  document.getElementById("genderInfo").className = "information";
  document.getElementById("diedTitle").className = "descriptions";
  document.getElementById("diedInfo").className = "information";
  document.getElementById("bornTitle").className = "descriptions";
  document.getElementById("bornInfo").className = "information";
  document.getElementById("infoTitle").className = "descriptions";
  document.getElementById("infoInfo").className = "information";
  document.getElementById("addInfoTitle").className = "descriptions";
  document.getElementById("addInfoInfo").className = "information";
  document.getElementById("pictureTitle").className = "descriptions";
  document.getElementById("pictureInfo").className = "picture";
  document.getElementById("characterTitle").className = "descriptions";
  document.getElementById("characterInfo").className = "information";
  document.getElementById("wikiLink").className = "descriptions";
  document.getElementById("wikiInfo").className = "ATLALink";
}
