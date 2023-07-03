const months = [
  'січня',
  'лютого',
  'березня',
  'квітня',
  'травня',
  'червня',
  'липня',
  'серпня',
  'вересня',
  'жовтня',
  'листопада',
  'грудня',
];

const clearEmpyStrings = (str) => str !== '';

const getNames = (devotees, case_ = 'nominative') => {
  if (devotees.length === 0) {
    return '';
  }

  const name = case_ === 'nominative' ? 'name' : 'genitive';
  const names = devotees.map((devotee) => {
    const mapped = devotee.gender === 'прабгу'
      ? `**${devotee[name]}** ${devotee.gender}`
      : `${devotee.gender} **${devotee[name]}**`;
    return mapped;
  });
  return names.join(',\n');
};
const getDateMsg = (dateObj = new Date()) => {
  const date = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth();
  const year = dateObj.getFullYear();
  const msg = `📅 Даршан ${date} ${months[month]} ${year}`;
  return msg;
};
const getEndingOfTheWord = (names, time = 'past') => {
  if (names.length === 0) {
    return '';
  }
  const endings = {
    past: {
      they: 'ли',
      he: 'в',
      she: 'ла',
    },
    future: {
      they: 'ють',
      he: 'є',
      she: 'є',
    },
  };
  if (names.length > 1) {
    return endings[time].they;
  } else if (names[0].gender === 'прабгу') {
    return endings[time].he;
  } else {
    return endings[time].she;
  }
};

const getKitchenPartMsg = (kitchen, header) => {
  const namesPart = getNames(kitchen);
  const formattedHeader = `__— ${header} —__`;
  const msg = `${formattedHeader}\n${namesPart}`;
  return kitchen.length === 0 ? '' : msg;
};
const getKitchenMsg = (kitchenBreakfast, kitchenDinner, kitchenOther = '') => {
  const parts = [
    getKitchenPartMsg(kitchenBreakfast, 'Сніданок'),
    getKitchenPartMsg(kitchenDinner, 'Обід'),
    getKitchenPartMsg(kitchenOther, 'Також на кухні готували'),
  ].filter(clearEmpyStrings).join('\n\n');
  const header = '🔸Божествам готують:'
  return parts.length === 0 ? '' : [header, parts].join('\n');
};

const getPujaPartMsg = (pujaJBS, pujaGN, header) => {
  const parts = [
    pujaJBS.length === 0 ? '' : `ДБС: ${getNames(pujaJBS)}`,
    pujaGN.length === 0 ? '' : `ГН: ${getNames(pujaGN)}`,
  ].filter(clearEmpyStrings);
  const formattedHeader = `__— ${header} —__`;
  const msg = [formattedHeader, ...parts].join('\n');
  return parts.length === 0 ? '' : msg;
};

const getPujaMsg = (pujaMorningJBS, pujaMorningGN, pujaNoonJBS, pujaNoonGN, pujaEveningJBS, pujaEveningGN) => {
  const parts = [
    getPujaPartMsg(pujaMorningJBS, pujaMorningGN, 'Ранок'),
    getPujaPartMsg(pujaNoonJBS, pujaNoonGN, 'Обід'),
    getPujaPartMsg(pujaEveningJBS, pujaEveningGN, 'Вечір'),
  ].filter(clearEmpyStrings).join('\n\n');
  const header = '🔸Пуджу Божествам проводять:'
  return parts.length === 0 ? '' : [header, parts].join('\n');
}

const getSpChangeClothesMsg = (clothes) => {
  const namesPart = getNames(clothes);
  const ending = getEndingOfTheWord(clothes);
  const msg = `🔸Шрілу Прабгупаду переодягну${ending}\n${namesPart}`;
  return clothes.length === 0 ? '' : msg;
};
const getGarlandsMsg = (garlandsBGN, garlandsJBS, garlandsMGN, garlandsSGN, garlandsSSP) => {
  const parts = [
    garlandsBGN.length === 0 ? '' : `ВГН: ${getNames(garlandsBGN)}`,
    garlandsJBS.length === 0 ? '' : `ДБС: ${getNames(garlandsJBS)}`,
    garlandsMGN.length === 0 ? '' : `СГН: ${getNames(garlandsMGN)}`,
    garlandsSGN.length === 0 ? '' : `МГН: ${getNames(garlandsSGN)}`,
    garlandsSSP.length === 0 ? '' : `МШП: ${getNames(garlandsSSP)}`,
  ].filter(clearEmpyStrings);
  const header = `🔸Гірлянди для Божеств зплели`;
  const msg = [header, ...parts].join('\n');
  return parts.length === 0 ? '' : msg;
};
const getBSPGarlandsMsg = (garlandsBSP) => {
  const namesBSP = getNames(garlandsBSP);
  const ending = getEndingOfTheWord(garlandsBSP);
  const msg = `\n\n🔸Гірлянду великому Шрілі Прабгупаді зроби${ending}\n${namesBSP}`
  return garlandsBSP.length === 0 ? '' : msg;
};
const getSpVyasasanaMsg = (vyasasana) => {
  const namesPart = getNames(vyasasana);
  const ending = getEndingOfTheWord(vyasasana);
  const msg = `🔸Прикраси${ending} в'ясасану Шріли Прабгупади та підготува${ending} букети\n${namesPart}`;
  return vyasasana.length === 0 ? '' : msg;
};
const getAssistantsMsg = (assistants) => {
  const namesPart = getNames(assistants);
  const msg = `🔸Допомагає поклонятися Господу команда помічників до якої входять:\n${namesPart}`;
  return assistants.length === 0 ? '' : msg;
};
const getParaphernaliaCleaningMsg = (paraphernaliaCleaning) => {
  const namesPart = getNames(paraphernaliaCleaning);
  const ending = getEndingOfTheWord(paraphernaliaCleaning);
  const msg = `🔸Почисти${ending} параферналії Божеств\n${namesPart}`;
  return paraphernaliaCleaning.length === 0 ? '' : msg;
};
