const generateSchedule = ({
  pujaMorningJBS,
  pujaMorningGN,
  pujaNoonJBS,
  pujaNoonGN,
  pujaEveningJBS,
  pujaEveningGN,
  kitchenBreakfast,
  kitchenDinner,
  kitchenOther,
  garlandsBGN,
  garlandsJBS,
  garlandsMGN,
  garlandsSGN,
  garlandsSSP,
  garlandsBSP,
  clothes,
  vyasasana,
  assistants,
  paraphernaliaCleaning,
}, date) => {
  const schedule = [
    getDateMsg(date),
    getPujaMsg(pujaMorningJBS, pujaMorningGN, pujaNoonJBS, pujaNoonGN, pujaEveningJBS, pujaEveningGN),
    getKitchenMsg(kitchenBreakfast, kitchenDinner, kitchenOther),
    getParaphernaliaCleaningMsg(paraphernaliaCleaning),
    getSpChangeClothesMsg(clothes),
    getGarlandsMsg(garlandsBGN, garlandsJBS, garlandsMGN, garlandsSGN, garlandsSSP),
    getBSPGarlandsMsg(garlandsBSP),
    getSpVyasasanaMsg(vyasasana),
    getAssistantsMsg(assistants),
  ];

  return schedule.filter((msg) => msg !== '').join('\n\n');
};
