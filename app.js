easyGuess = parseInt(localStorage.getItem("bendleEasy_guessCount"));
normalGuess = parseInt(localStorage.getItem("bendleNormal_guessCount"));
hardGuess = parseInt(localStorage.getItem("bendleHard_guessCount"));
impossibleGuess = parseInt(localStorage.getItem("bendleImpossible_guessCount"));
currentDate = localStorage.getItem("currentDate");

function timeChecker() {
  let now = new Date();
  day = now.getUTCDate();
  month = now.getUTCMonth() + 1;
  year = now.getUTCFullYear();
  nowDate = (day + "" + month + "" + year);
  if (currentDate != nowDate) {
    setGameInfo()
    localStorage.setItem("currentDate",nowDate);
  }
}

function setGameInfo() {
  localStorage.setItem("bendleSetUp", 1);

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
  number = Math.floor(Math.random()*63);
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
      localStorage.setItem("bendleNormal_Character","Kuei");
      break;
    case 36:
      localStorage.setItem("bendleNormal_Character","Hei Bai");
      break;
    case 37:
      localStorage.setItem("bendleNormal_Character","Huu");
      break;
    case 38:
      localStorage.setItem("bendleNormal_Character","Izumi");
      break;
    case 39:
      localStorage.setItem("bendleNormal_Character","Jin");
      break;
    case 40:
      localStorage.setItem("bendleNormal_Character","Joo Dee");
      break;
    case 41:
      localStorage.setItem("bendleNormal_Character","June");
      break;
    case 42:
      localStorage.setItem("bendleNormal_Character","Kai");
      break;
    case 43:
      localStorage.setItem("bendleNormal_Character","Kanna");
      break;
    case 44:
      localStorage.setItem("bendleNormal_Character","Kuvira");
      break;
    case 45:
      localStorage.setItem("bendleNormal_Character","Kya");
      break;
    case 46:
      localStorage.setItem("bendleNormal_Character","Kyoshi");
      break;
    case 47:
      localStorage.setItem("bendleNormal_Character","Lin Beifong");
      break;
    case 48:
      localStorage.setItem("bendleNormal_Character","Long Feng");
      break;
    case 49:
      localStorage.setItem("bendleNormal_Character","Mechanist");
      break;
    case 50:
      localStorage.setItem("bendleNormal_Character","Meelo");
      break;
    case 51:
      localStorage.setItem("bendleNormal_Character","Naga");
      break;
    case 52:
      localStorage.setItem("bendleNormal_Character","Opal");
      break;
    case 53:
      localStorage.setItem("bendleNormal_Character","Pakku");
      break;
    case 54:
      localStorage.setItem("bendleNormal_Character","Piandao");
      break;
    case 55:
      localStorage.setItem("bendleNormal_Character","Pipsqueak");
      break;
    case 56:
      localStorage.setItem("bendleNormal_Character","Smellerbee");
      break;
    case 56:
      localStorage.setItem("bendleNormal_Character","Sozin");
      break;
    case 57:
      localStorage.setItem("bendleNormal_Character","Suyin Beifong");
      break;
    case 58:
      localStorage.setItem("bendleNormal_Character","Unalaq");
      break;
    case 59:
      localStorage.setItem("bendleNormal_Character","Ursa");
      break;
    case 60:
      localStorage.setItem("bendleNormal_Character","Wan Shi Tong");
      break;
    case 61:
      localStorage.setItem("bendleNormal_Character","Yue");
      break;
    case 62:
      localStorage.setItem("bendleNormal_Character","Zhao");
      break;
  }
} 

function setHardCharacter() {
  number = Math.floor(Math.random()*182);
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
      localStorage.setItem("bendleHard_Character","Kuei");
      break;
    case 36:
      localStorage.setItem("bendleHard_Character","Hei Bai");
      break;
    case 37:
      localStorage.setItem("bendleHard_Character","Huu");
      break;
    case 38:
      localStorage.setItem("bendleHard_Character","Izumi");
      break;
    case 39:
      localStorage.setItem("bendleHard_Character","Jin");
      break;
    case 40:
      localStorage.setItem("bendleHard_Character","Joo Dee");
      break;
    case 41:
      localStorage.setItem("bendleHard_Character","June");
      break;
    case 42:
      localStorage.setItem("bendleHard_Character","Kai");
      break;
    case 43:
      localStorage.setItem("bendleHard_Character","Kanna");
      break;
    case 44:
      localStorage.setItem("bendleHard_Character","Kuvira");
      break;
    case 45:
      localStorage.setItem("bendleHard_Character","Kya");
      break;
    case 46:
      localStorage.setItem("bendleHard_Character","Kyoshi");
      break;
    case 47:
      localStorage.setItem("bendleHard_Character","Lin Beifong");
      break;
    case 48:
      localStorage.setItem("bendleHard_Character","Long Feng");
      break;
    case 49:
      localStorage.setItem("bendleHard_Character","Mechanist");
      break;
    case 50:
      localStorage.setItem("bendleHard_Character","Meelo");
      break;
    case 51:
      localStorage.setItem("bendleHard_Character","Naga");
      break;
    case 52:
      localStorage.setItem("bendleHard_Character","Opal");
      break;
    case 53:
      localStorage.setItem("bendleHard_Character","Pakku");
      break;
    case 54:
      localStorage.setItem("bendleHard_Character","Piandao");
      break;
    case 55:
      localStorage.setItem("bendleHard_Character","Pipsqueak");
      break;
    case 56:
      localStorage.setItem("bendleHard_Character","Smellerbee");
      break;
    case 56:
      localStorage.setItem("bendleHard_Character","Sozin");
      break;
    case 57:
      localStorage.setItem("bendleHard_Character","Suyin Beifong");
      break;
    case 58:
      localStorage.setItem("bendleHard_Character","Unalaq");
      break;
    case 59:
      localStorage.setItem("bendleHard_Character","Ursa");
      break;
    case 60:
      localStorage.setItem("bendleHard_Character","Wan Shi Tong");
      break;
    case 61:
      localStorage.setItem("bendleHard_Character","Yue");
      break;
    case 62:
      localStorage.setItem("bendleHard_Character","Zhao");
      break;
    case 63:
      localStorage.setItem("bendleHard_Character","Aiwei");
      break;
    case 64:
      localStorage.setItem("bendleHard_Character","Arnook");
      break;
    case 65:
      localStorage.setItem("bendleHard_Character","Baatar");
      break;
    case 66:
      localStorage.setItem("bendleHard_Character","Baatar Jr");
      break;
    case 67:
      localStorage.setItem("bendleHard_Character","The Big Bad Hippo");
      break;
    case 68:
      localStorage.setItem("bendleHard_Character","Bosco");
      break;
    case 69:
      localStorage.setItem("bendleHard_Character","The Boulder");
      break;
    case 70:
      localStorage.setItem("bendleHard_Character","Chit Sang");
      break;
    case 71:
      localStorage.setItem("bendleHard_Character","Chong");
      break;
    case 72:
      localStorage.setItem("bendleHard_Character","Combustion Man");
      break;
    case 73:
      localStorage.setItem("bendleHard_Character","Desna and Eska");
      break;
    case 74:
      localStorage.setItem("bendleHard_Character","Dock/Xu/Bushi");
      break;
    case 75:
      localStorage.setItem("bendleHard_Character","Fisherman");
      break;
    case 76:
      localStorage.setItem("bendleHard_Character","Fisherman's Wife");
      break;
    case 77:
      localStorage.setItem("bendleHard_Character","Flopsie");
      break;
    case 78:
      localStorage.setItem("bendleHard_Character","Foaming mouth guy");
      break;
    case 79:
      localStorage.setItem("bendleHard_Character","Ginger");
      break;
    case 80:
      localStorage.setItem("bendleHard_Character","Gun");
      break;
    case 81:
      localStorage.setItem("bendleHard_Character","Hahn");
      break;
    case 82:
      localStorage.setItem("bendleHard_Character","Haru's mother");
      break;
    case 83:
      localStorage.setItem("bendleHard_Character","Head of the Dai Li");
      break;
    case 84:
      localStorage.setItem("bendleHard_Character","Herbalist");
      break;
    case 85:
      localStorage.setItem("bendleHard_Character","Hide");
      break;
    case 86:
      localStorage.setItem("bendleHard_Character","Hiroshi Sato");
      break;
    case 87:
      localStorage.setItem("bendleHard_Character","Hope");
      break;
    case 88:
      localStorage.setItem("bendleHard_Character","How");
      break;
    case 89:
      localStorage.setItem("bendleHard_Character","Huan");
      break;
    case 90:
      localStorage.setItem("bendleHard_Character","Iknik Blackstone Varrick");
      break;
    case 91:
      localStorage.setItem("bendleHard_Character","Iroh (United Forces General)");
      break;
    case 92:
      localStorage.setItem("bendleHard_Character","Jee");
      break;
    case 93:
      localStorage.setItem("bendleHard_Character","Juicy");
      break;
    case 94:
      localStorage.setItem("bendleHard_Character","Kahchi");
      break;
    case 95:
      localStorage.setItem("bendleHard_Character","Karu");
      break;
    case 96:
      localStorage.setItem("bendleHard_Character","Kay-fon");
      break;
    case 97:
      localStorage.setItem("bendleHard_Character","Koh");
      break;
    case 98:
      localStorage.setItem("bendleHard_Character","Koko");
      break;
    case 99:
      localStorage.setItem("bendleHard_Character","Kuruk");
      break;
    case 100:
      localStorage.setItem("bendleHard_Character","Kya (nonbender)");
      break;
    case 101:
      localStorage.setItem("bendleHard_Character","La");
      break;
    case 102:
      localStorage.setItem("bendleHard_Character","Lao Beifong");
      break;
    case 103:
      localStorage.setItem("bendleHard_Character","Lee");
      break;
    case 104:
      localStorage.setItem("bendleHard_Character","Lefty");
      break;
    case 105:
      localStorage.setItem("bendleHard_Character","Lieutenant");
      break;
    case 106:
      localStorage.setItem("bendleHard_Character","Lightning Bolt Zolt");
      break;
    case 107:
      localStorage.setItem("bendleHard_Character","Lo and Li");
      break;
    case 108:
      localStorage.setItem("bendleHard_Character","Longshot");
      break;
    case 109:
      localStorage.setItem("bendleHard_Character","Lu Ten");
      break;
    case 110:
      localStorage.setItem("bendleHard_Character","Michi");
      break;
    case 111:
      localStorage.setItem("bendleHard_Character","Ming (pro-bender)");
      break;
    case 112:
      localStorage.setItem("bendleHard_Character","Ming-Hua");
      break;
    case 113:
      localStorage.setItem("bendleHard_Character","Miyuki");
      break;
    case 114:
      localStorage.setItem("bendleHard_Character","Mongke");
      break;
    case 115:
      localStorage.setItem("bendleHard_Character","Mula");
      break;
    case 116:
      localStorage.setItem("bendleHard_Character","Mushi");
      break;
    case 117:
      localStorage.setItem("bendleHard_Character","Nyla");
      break;
    case 118:
      localStorage.setItem("bendleHard_Character","Ogodei");
      break;
    case 119:
      localStorage.setItem("bendleHard_Character","Oh");
      break;
    case 120:
      localStorage.setItem("bendleHard_Character","On Ji");
      break;
    case 121:
      localStorage.setItem("bendleHard_Character","Oogi");
      break;
    case 122:
      localStorage.setItem("bendleHard_Character","Otaku");
      break;
    case 123:
      localStorage.setItem("bendleHard_Character","Oyaji");
      break;
    case 124:
      localStorage.setItem("bendleHard_Character","P'Li");
      break;
    case 125:
      localStorage.setItem("bendleHard_Character","Pabu");
      break;
    case 126:
      localStorage.setItem("bendleHard_Character","Pao");
      break;
    case 127:
      localStorage.setItem("bendleHard_Character","Pasang");
      break;
    case 128:
      localStorage.setItem("bendleHard_Character","Pathik");
      break;
    case 129:
      localStorage.setItem("bendleHard_Character","Pema");
      break;
    case 130:
      localStorage.setItem("bendleHard_Character","Pepper");
      break;
    case 131:
      localStorage.setItem("bendleHard_Character","Poki");
      break;
    case 132:
      localStorage.setItem("bendleHard_Character","Poon");
      break;
    case 133:
      localStorage.setItem("bendleHard_Character","Poppy Beifong");
      break;
    case 134:
      localStorage.setItem("bendleHard_Character","Qin");
      break;
    case 135:
      localStorage.setItem("bendleHard_Character","Raava");
      break;
    case 136:
      localStorage.setItem("bendleHard_Character","Raiko");
      break;
    case 137:
      localStorage.setItem("bendleHard_Character","Ran and Shaw");
      break;
    case 138:
      localStorage.setItem("bendleHard_Character","Rohan");
      break;
    case 139:
      localStorage.setItem("bendleHard_Character","Ryu");
      break;
    case 140:
      localStorage.setItem("bendleHard_Character","Saikhan");
      break;
    case 141:
      localStorage.setItem("bendleHard_Character","Senna");
      break;
    case 142:
      localStorage.setItem("bendleHard_Character","Shady Shin");
      break;
    case 143:
      localStorage.setItem("bendleHard_Character","Shaozu");
      break;
    case 144:
      localStorage.setItem("bendleHard_Character","Shinu");
      break;
    case 145:
      localStorage.setItem("bendleHard_Character","Sneers");
      break;
    case 146:
      localStorage.setItem("bendleHard_Character","Song");
      break;
    case 147:
      localStorage.setItem("bendleHard_Character","Sung");
      break;
    case 148:
      localStorage.setItem("bendleHard_Character","Szeto");
      break;
    case 149:
      localStorage.setItem("bendleHard_Character","Tahno");
      break;
    case 150:
      localStorage.setItem("bendleHard_Character","Tarrlok");
      break;
    case 151:
      localStorage.setItem("bendleHard_Character","Tashi");
      break;
    case 152:
      localStorage.setItem("bendleHard_Character","Teo");
      break;
    case 153:
      localStorage.setItem("bendleHard_Character","Than");
      break;
    case 154:
      localStorage.setItem("bendleHard_Character","Tho");
      break;
    case 155:
      localStorage.setItem("bendleHard_Character","Tonraq");
      break;
    case 156:
      localStorage.setItem("bendleHard_Character","Toza");
      break;
    case 157:
      localStorage.setItem("bendleHard_Character","Tu");
      break;
    case 158:
      localStorage.setItem("bendleHard_Character","Tui");
      break;
    case 159:
      localStorage.setItem("bendleHard_Character","Two Toed Ping");
      break;
    case 160:
      localStorage.setItem("bendleHard_Character","Tycho");
      break;
    case 161:
      localStorage.setItem("bendleHard_Character","Tyro");
      break;
    case 162:
      localStorage.setItem("bendleHard_Character","Ummi");
      break;
    case 163:
      localStorage.setItem("bendleHard_Character","Vaatu");
      break;
    case 164:
      localStorage.setItem("bendleHard_Character","Vachir");
      break;
    case 165:
      localStorage.setItem("bendleHard_Character","Viper");
      break;
    case 166:
      localStorage.setItem("bendleHard_Character","Wan");
      break;
    case 167:
      localStorage.setItem("bendleHard_Character","Wei and Wing");
      break;
    case 168:
      localStorage.setItem("bendleHard_Character","Wu");
      break;
    case 169:
      localStorage.setItem("bendleHard_Character","Xin Fu");
      break;
    case 170:
      localStorage.setItem("bendleHard_Character","Yagoda");
      break;
    case 171:
      localStorage.setItem("bendleHard_Character","Yakone");
      break;
    case 172:
      localStorage.setItem("bendleHard_Character","Yangchen");
      break;
    case 173:
      localStorage.setItem("bendleHard_Character","Yeh-Lu");
      break;
    case 174:
      localStorage.setItem("bendleHard_Character","Yin");
      break;
    case 175:
      localStorage.setItem("bendleHard_Character","Yon Rha");
      break;
    case 176:
      localStorage.setItem("bendleHard_Character","Yu");
      break;
    case 177:
      localStorage.setItem("bendleHard_Character","Yung");
      break;
    case 178:
      localStorage.setItem("bendleHard_Character","Yung (captain)");
      break;
    case 179:
      localStorage.setItem("bendleHard_Character","Zaheer");
      break;
    case 180:
      localStorage.setItem("bendleHard_Character","Zei");
      break;
    case 181:
      localStorage.setItem("bendleHard_Character","Zhu Li Moon");
      break;
  }
} 

function setImpossibleCharacter() {
  number = Math.floor(Math.random()*182);
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
      localStorage.setItem("bendleImpossible_Character","Kuei");
      break;
    case 36:
      localStorage.setItem("bendleImpossible_Character","Hei Bai");
      break;
    case 37:
      localStorage.setItem("bendleImpossible_Character","Huu");
      break;
    case 38:
      localStorage.setItem("bendleImpossible_Character","Izumi");
      break;
    case 39:
      localStorage.setItem("bendleImpossible_Character","Jin");
      break;
    case 40:
      localStorage.setItem("bendleImpossible_Character","Joo Dee");
      break;
    case 41:
      localStorage.setItem("bendleImpossible_Character","June");
      break;
    case 42:
      localStorage.setItem("bendleImpossible_Character","Kai");
      break;
    case 43:
      localStorage.setItem("bendleImpossible_Character","Kanna");
      break;
    case 44:
      localStorage.setItem("bendleImpossible_Character","Kuvira");
      break;
    case 45:
      localStorage.setItem("bendleImpossible_Character","Kya");
      break;
    case 46:
      localStorage.setItem("bendleImpossible_Character","Kyoshi");
      break;
    case 47:
      localStorage.setItem("bendleImpossible_Character","Lin Beifong");
      break;
    case 48:
      localStorage.setItem("bendleImpossible_Character","Long Feng");
      break;
    case 49:
      localStorage.setItem("bendleImpossible_Character","Mechanist");
      break;
    case 50:
      localStorage.setItem("bendleImpossible_Character","Meelo");
      break;
    case 51:
      localStorage.setItem("bendleImpossible_Character","Naga");
      break;
    case 52:
      localStorage.setItem("bendleImpossible_Character","Opal");
      break;
    case 53:
      localStorage.setItem("bendleImpossible_Character","Pakku");
      break;
    case 54:
      localStorage.setItem("bendleImpossible_Character","Piandao");
      break;
    case 55:
      localStorage.setItem("bendleImpossible_Character","Pipsqueak");
      break;
    case 56:
      localStorage.setItem("bendleImpossible_Character","Smellerbee");
      break;
    case 56:
      localStorage.setItem("bendleImpossible_Character","Sozin");
      break;
    case 57:
      localStorage.setItem("bendleImpossible_Character","Suyin Beifong");
      break;
    case 58:
      localStorage.setItem("bendleImpossible_Character","Unalaq");
      break;
    case 59:
      localStorage.setItem("bendleImpossible_Character","Ursa");
      break;
    case 60:
      localStorage.setItem("bendleImpossible_Character","Wan Shi Tong");
      break;
    case 61:
      localStorage.setItem("bendleImpossible_Character","Yue");
      break;
    case 62:
      localStorage.setItem("bendleImpossible_Character","Zhao");
      break;
    case 63:
      localStorage.setItem("bendleImpossible_Character","Aiwei");
      break;
    case 64:
      localStorage.setItem("bendleImpossible_Character","Arnook");
      break;
    case 65:
      localStorage.setItem("bendleImpossible_Character","Baatar");
      break;
    case 66:
      localStorage.setItem("bendleImpossible_Character","Baatar Jr");
      break;
    case 67:
      localStorage.setItem("bendleImpossible_Character","The Big Bad Hippo");
      break;
    case 68:
      localStorage.setItem("bendleImpossible_Character","Bosco");
      break;
    case 69:
      localStorage.setItem("bendleImpossible_Character","The Boulder");
      break;
    case 70:
      localStorage.setItem("bendleImpossible_Character","Chit Sang");
      break;
    case 71:
      localStorage.setItem("bendleImpossible_Character","Chong");
      break;
    case 72:
      localStorage.setItem("bendleImpossible_Character","Combustion Man");
      break;
    case 73:
      localStorage.setItem("bendleImpossible_Character","Desna and Eska");
      break;
    case 74:
      localStorage.setItem("bendleImpossible_Character","Dock/Xu/Bushi");
      break;
    case 75:
      localStorage.setItem("bendleImpossible_Character","Fisherman");
      break;
    case 76:
      localStorage.setItem("bendleImpossible_Character","Fisherman's Wife");
      break;
    case 77:
      localStorage.setItem("bendleImpossible_Character","Flopsie");
      break;
    case 78:
      localStorage.setItem("bendleImpossible_Character","Foaming mouth guy");
      break;
    case 79:
      localStorage.setItem("bendleImpossible_Character","Ginger");
      break;
    case 80:
      localStorage.setItem("bendleImpossible_Character","Gun");
      break;
    case 81:
      localStorage.setItem("bendleImpossible_Character","Hahn");
      break;
    case 82:
      localStorage.setItem("bendleImpossible_Character","Haru's mother");
      break;
    case 83:
      localStorage.setItem("bendleImpossible_Character","Head of the Dai Li");
      break;
    case 84:
      localStorage.setItem("bendleImpossible_Character","Herbalist");
      break;
    case 85:
      localStorage.setItem("bendleImpossible_Character","Hide");
      break;
    case 86:
      localStorage.setItem("bendleImpossible_Character","Hiroshi Sato");
      break;
    case 87:
      localStorage.setItem("bendleImpossible_Character","Hope");
      break;
    case 88:
      localStorage.setItem("bendleImpossible_Character","How");
      break;
    case 89:
      localStorage.setItem("bendleImpossible_Character","Huan");
      break;
    case 90:
      localStorage.setItem("bendleImpossible_Character","Iknik Blackstone Varrick");
      break;
    case 91:
      localStorage.setItem("bendleImpossible_Character","Iroh (United Forces General)");
      break;
    case 92:
      localStorage.setItem("bendleImpossible_Character","Jee");
      break;
    case 93:
      localStorage.setItem("bendleImpossible_Character","Juicy");
      break;
    case 94:
      localStorage.setItem("bendleImpossible_Character","Kahchi");
      break;
    case 95:
      localStorage.setItem("bendleImpossible_Character","Karu");
      break;
    case 96:
      localStorage.setItem("bendleImpossible_Character","Kay-fon");
      break;
    case 97:
      localStorage.setItem("bendleImpossible_Character","Koh");
      break;
    case 98:
      localStorage.setItem("bendleImpossible_Character","Koko");
      break;
    case 99:
      localStorage.setItem("bendleImpossible_Character","Kuruk");
      break;
    case 100:
      localStorage.setItem("bendleImpossible_Character","Kya (nonbender)");
      break;
    case 101:
      localStorage.setItem("bendleImpossible_Character","La");
      break;
    case 102:
      localStorage.setItem("bendleImpossible_Character","Lao Beifong");
      break;
    case 103:
      localStorage.setItem("bendleImpossible_Character","Lee");
      break;
    case 104:
      localStorage.setItem("bendleImpossible_Character","Lefty");
      break;
    case 105:
      localStorage.setItem("bendleImpossible_Character","Lieutenant");
      break;
    case 106:
      localStorage.setItem("bendleImpossible_Character","Lightning Bolt Zolt");
      break;
    case 107:
      localStorage.setItem("bendleImpossible_Character","Lo and Li");
      break;
    case 108:
      localStorage.setItem("bendleImpossible_Character","Longshot");
      break;
    case 109:
      localStorage.setItem("bendleImpossible_Character","Lu Ten");
      break;
    case 110:
      localStorage.setItem("bendleImpossible_Character","Michi");
      break;
    case 111:
      localStorage.setItem("bendleImpossible_Character","Ming (pro-bender)");
      break;
    case 112:
      localStorage.setItem("bendleImpossible_Character","Ming-Hua");
      break;
    case 113:
      localStorage.setItem("bendleImpossible_Character","Miyuki");
      break;
    case 114:
      localStorage.setItem("bendleImpossible_Character","Mongke");
      break;
    case 115:
      localStorage.setItem("bendleImpossible_Character","Mula");
      break;
    case 116:
      localStorage.setItem("bendleImpossible_Character","Mushi");
      break;
    case 117:
      localStorage.setItem("bendleImpossible_Character","Nyla");
      break;
    case 118:
      localStorage.setItem("bendleImpossible_Character","Ogodei");
      break;
    case 119:
      localStorage.setItem("bendleImpossible_Character","Oh");
      break;
    case 120:
      localStorage.setItem("bendleImpossible_Character","On Ji");
      break;
    case 121:
      localStorage.setItem("bendleImpossible_Character","Oogi");
      break;
    case 122:
      localStorage.setItem("bendleImpossible_Character","Otaku");
      break;
    case 123:
      localStorage.setItem("bendleImpossible_Character","Oyaji");
      break;
    case 124:
      localStorage.setItem("bendleImpossible_Character","P'Li");
      break;
    case 125:
      localStorage.setItem("bendleImpossible_Character","Pabu");
      break;
    case 126:
      localStorage.setItem("bendleImpossible_Character","Pao");
      break;
    case 127:
      localStorage.setItem("bendleImpossible_Character","Pasang");
      break;
    case 128:
      localStorage.setItem("bendleImpossible_Character","Pathik");
      break;
    case 129:
      localStorage.setItem("bendleImpossible_Character","Pema");
      break;
    case 130:
      localStorage.setItem("bendleImpossible_Character","Pepper");
      break;
    case 131:
      localStorage.setItem("bendleImpossible_Character","Poki");
      break;
    case 132:
      localStorage.setItem("bendleImpossible_Character","Poon");
      break;
    case 133:
      localStorage.setItem("bendleImpossible_Character","Poppy Beifong");
      break;
    case 134:
      localStorage.setItem("bendleImpossible_Character","Qin");
      break;
    case 135:
      localStorage.setItem("bendleImpossible_Character","Raava");
      break;
    case 136:
      localStorage.setItem("bendleImpossible_Character","Raiko");
      break;
    case 137:
      localStorage.setItem("bendleImpossible_Character","Ran and Shaw");
      break;
    case 138:
      localStorage.setItem("bendleImpossible_Character","Rohan");
      break;
    case 139:
      localStorage.setItem("bendleImpossible_Character","Ryu");
      break;
    case 140:
      localStorage.setItem("bendleImpossible_Character","Saikhan");
      break;
    case 141:
      localStorage.setItem("bendleImpossible_Character","Senna");
      break;
    case 142:
      localStorage.setItem("bendleImpossible_Character","Shady Shin");
      break;
    case 143:
      localStorage.setItem("bendleImpossible_Character","Shaozu");
      break;
    case 144:
      localStorage.setItem("bendleImpossible_Character","Shinu");
      break;
    case 145:
      localStorage.setItem("bendleImpossible_Character","Sneers");
      break;
    case 146:
      localStorage.setItem("bendleImpossible_Character","Song");
      break;
    case 147:
      localStorage.setItem("bendleImpossible_Character","Sung");
      break;
    case 148:
      localStorage.setItem("bendleImpossble_Character","Szeto");
      break;
    case 149:
      localStorage.setItem("bendleImpossible_Character","Tahno");
      break;
    case 150:
      localStorage.setItem("bendleImpossible_Character","Tarrlok");
      break;
    case 151:
      localStorage.setItem("bendleImpossible_Character","Tashi");
      break;
    case 152:
      localStorage.setItem("bendleImpossible_Character","Teo");
      break;
    case 153:
      localStorage.setItem("bendleImpossible_Character","Than");
      break;
    case 154:
      localStorage.setItem("bendleImpossible_Character","Tho");
      break;
    case 155:
      localStorage.setItem("bendleImpossible_Character","Tonraq");
      break;
    case 156:
      localStorage.setItem("bendleImpossible_Character","Toza");
      break;
    case 157:
      localStorage.setItem("bendleImpossible_Character","Tu");
      break;
    case 158:
      localStorage.setItem("bendleImpossible_Character","Tui");
      break;
    case 159:
      localStorage.setItem("bendleImpossible_Character","Two Toed Ping");
      break;
    case 160:
      localStorage.setItem("bendleImpossible_Character","Tycho");
      break;
    case 161:
      localStorage.setItem("bendleImpossible_Character","Tyro");
      break;
    case 162:
      localStorage.setItem("bendleImpossible_Character","Ummi");
      break;
    case 163:
      localStorage.setItem("bendleImpossible_Character","Vaatu");
      break;
    case 164:
      localStorage.setItem("bendleImpossible_Character","Vachir");
      break;
    case 165:
      localStorage.setItem("bendleImpossible_Character","Viper");
      break;
    case 166:
      localStorage.setItem("bendleImpossible_Character","Wan");
      break;
    case 167:
      localStorage.setItem("bendleImpossible_Character","Wei and Wing");
      break;
    case 168:
      localStorage.setItem("bendleImpossible_Character","Wu");
      break;
    case 169:
      localStorage.setItem("bendleImpossible_Character","Xin Fu");
      break;
    case 170:
      localStorage.setItem("bendleImpossible_Character","Yagoda");
      break;
    case 171:
      localStorage.setItem("bendleImpossible_Character","Yakone");
      break;
    case 172:
      localStorage.setItem("bendleImpossible_Character","Yangchen");
      break;
    case 173:
      localStorage.setItem("bendleImpossible_Character","Yeh-Lu");
      break;
    case 174:
      localStorage.setItem("bendleImpossible_Character","Yin");
      break;
    case 175:
      localStorage.setItem("bendleImpossible_Character","Yon Rha");
      break;
    case 176:
      localStorage.setItem("bendleImpossible_Character","Yu");
      break;
    case 177:
      localStorage.setItem("bendleImpossible_Character","Yung");
      break;
    case 178:
      localStorage.setItem("bendleImpossible_Character","Yung (captain)");
      break;
    case 179:
      localStorage.setItem("bendleImpossible_Character","Zaheer");
      break;
    case 180:
      localStorage.setItem("bendleImpossible_Character","Zei");
      break;
    case 181:
      localStorage.setItem("bendleImpossible_Character","Zhu Li Moon");
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
