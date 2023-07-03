const assistantsDefault = {
  Monday: [
    d.AnastasiyaSkorobagata,
    d.TatyanaCherevatenko,
    d.ElenaMurashova,
    d.MaksimDatsenko,
    d.EvgeniyBayruk,
  ],
  Tuesday: [
    d.VanamaliGovinda,
    d.Gandhari,
    d.TatyanaCherevatenko,
    d.YuliyaBerezkina,
    d.IgorMorozov,
    d.MaksimDatsenko,
  ],
  Wednesday: [
    d.TatyanaCherevatenko,
    d.NataliyaGavelovskaya,
    d.NataliyaVyunkovskaya,
    d.LiliyaMishonova,
    d.MihailDerkach,
    d.MaksimDatsenko,
  ],
  Thursday: [
    d.EkeshvariRadha,
    d.Gandhari,
    d.AnangaKishori,
    d.ZaboraBogdan,
    d.OlegKalinovskiy,
  ],
  Friday: [
    d.TatyanaCherevatenko,
    d.Gandhari,
    d.MaksimSteshenko,
    d.MaksimDatsenko,
    d.TatyanaCherevatenko,
    d.NitayGaurachandra,
  ],
  Saturday: [
    d.AntonKrivokorytov,
    d.Lochana,
    d.MarinaKoltsova,
    d.KseniyaPerezdrienko,
  ],
  Sunday: [
    d.EkeshvariRadha,
    d.Ragini,
    d.IveshvaraGopal,
    d.MaksimDatsenko,
  ]
};
const spVyasasanaDefault = {
  Monday:     [ d.AnastasiyaSkorobagata, d.TatyanaCherevatenko ],
  Tuesday:    [ d.Gandhari, d.EkeshvariRadha ],
  Wednesday:  [ d.NataliyaGavelovskaya ],
  Thursday:   [ d.TatyanaCherevatenko ],
  Friday:     [ d.NataliyaVyunkovskaya ],
  Saturday:   [ d.TatyanaCherevatenko ],
  Sunday:     [ d.Ragini, d.AnastasiyaPerezdriyenko],
};
const spChangeClothesDefault = {
  Monday:     [ d.VrajaBhakti ],
  Tuesday:    [ d.VitaliyBabenko ],
  Wednesday:  [ d.Mahadyuti ],
  Thursday:   [ d.YuriyVarava ],
  Friday:     [ d.AleksandrFedorina ],
  Saturday:   [ d.IgorPerezdrienko ],
  Sunday:     [ d.KirillStepanyuk ],
};
const paraphernaliaCleaningDefault = {
  Monday:     [  ],
  Tuesday:    [ d.AnatoliyMotsygailo, d.IlyaVasilchenko ],
  Wednesday:  [  ],
  Thursday:   [  ],
  Friday:     [  ],
  Saturday:   [  ],
  Sunday:     [  ],
};
const garlandsDefault = {
  Monday: {
    BGN: [ d.Sundari, d.Rasalika ],
    JBS: [ d.YuvatiRasarani ],
    MGN: [ d.IrenGuzan ],
    SGN: [ d.VisakhaSundari ],
    SSP: [ d.Ragini ],
    BSP: [  ],
  },
  Tuesday: {
    BGN: [ d.IndulekhaGopi ],
    JBS: [ d.YaninaMelnik ],
    MGN: [ d.ElenaTryndyk ],
    SGN: [ d.Sundari ],
    SSP: [ d.MadhuriNayika ],
    BSP: [  ],
  },
  Wednesday: {
    BGN: [ d.LilaManjari ],
    JBS: [ d.GaurangiLila ],
    MGN: [ d.YuliaLomaka ],
    SGN: [ d.YuliaStepanyuk ],
    SSP: [ d.AcyutaSakhi ],
    BSP: [  ],
  },
  Thursday: {
    BGN: [ d.LiliyaHohryakova ],
    JBS: [ d.ViktoriyaSkakun ],
    MGN: [ d.Tatyana ],
    SGN: [ d.YuliyaBerezkina ],
    SSP: [ d.YuliyaBerezkina ],
    BSP: [  ],
  },
  Friday: {
    BGN: [ d.SvetlanaLetova ],
    JBS: [ d.YuliyaMolotkova ],
    MGN: [ d.Tatyana ],
    SGN: [ d.ElenaTryndyk ],
    SSP: [ d.ElenaTryndyk ],
    BSP: [  ],
  },
  Saturday: {
    BGN: [ d.AnastasiyaSkorobagata ],
    JBS: [ d.NikundzhaGopika ],
    MGN: [ d.MariyaSazonova ],
    SGN: [ d.AnastasiyaSkorobagata ],
    SSP: [ d.MariyaSazonova ],
    BSP: [  ],
  },
  Sunday: {
    BGN: [ d.TariniKishori ],
    JBS: [ d.IrinaZhukovich ],
    MGN: [ d.Tatyana ],
    SGN: [ d.Vadzhayantimala ],
    SSP: [ d.ViktoriyaGida ],
    BSP: [  ],
  },

};
const kitchenDefault = {
  Monday: {
    breakfast:  [ d.LileshvariGaurangi, d.EkeshvariRadha ],
    dinner:     [ d.Harinamanrita, d.Sarvadevata ],
    other:      [  ],
  },
  
  Tuesday: {
    breakfast:  [ d.RamaRupa ],
    dinner:     [ d.SanjivaniRasa ],
    other:      [  ],
  },
  
  Wednesday: {
    breakfast:  [ d.YashodaGopi ],
    dinner:     [ d.ArchaVigraha ],
    other:      [  ],
  },
  
  Thursday: {
    breakfast:  [ d.YashodaGopi ],
    dinner:     [ d.TulasiValabha, d.SitaSundarangi ],
    other:      [  ],
  },
  
  Friday: {
    breakfast:  [ d.SudhaKantha ],
    dinner:     [ d.VrajaLila ],
    other:      [  ],
  },
  
  Saturday: {
    breakfast:  [ d.TushtaKrishna ],
    dinner:     [ d.JayaSri ],
    other:      [  ],
  },
  
  Sunday: {
    breakfast:  [ d.EkeshvariRadha ],
    dinner:     [ d.PremaLata ],
    other:      [  ],
  },
};
const pujaDefault = {
  Monday: {
    morning: {
      JBS:  [ d.YashodaKumar ],
      GN:   [ d.RamVijay ],
    },
    
    noon: {
      JBS:  [ d.Sarvadevata ],
      GN:   [ d.EkeshvariRadha ],
    },

    evening: {
      JBS:  [ d.Rasalika ],
      GN:   [ d.SitaSundarangi ],
    }
  },

  Tuesday: {
    morning: {
      JBS:  [ d.Yogeshvara ],
      GN:   [ d.AnupamGovinda ],
    },
  
    noon: {
      JBS:  [ d.RamaRupa ],
      GN:   [ d.RasikaKumari ],
    },

    evening: {
      JBS:  [ d.YashodaGopi ],
      GN:   [ d.SanketKunja ],
    }
  },

  Wednesday: {
    morning: {
      JBS:  [ d.Vrindaranya ],
      GN:   [ d.Gandhari, d.Ragini ],

    },

    noon: {
      JBS:  [ d.YashodaGopi ],
      GN:   [ d.VrajaLila ],
    },
  
    evening: {
      JBS:  [ d.YashodaGopi ],
      GN:   [ d.RasikaKumari ],
    }
  },

  Thursday: {
    morning: {
      JBS:  [ d.Kinkari ],
      GN:   [ d.NavinaRadha ],
    },
  
    noon: {
      JBS:  [ d.NaradiGopi ],
      GN:   [ d.Taravali ],
    },

    evening: {
      JBS:  [ d.VrajaGopi ],
      GN:   [ d.ShyamaKumari ],
    }
  },

  Friday: {
    morning: {
      JBS:  [ d.VrajaBhakti ],
      GN:   [ d.DhruvaMaharaj, d.SadhuSeva ],
    },
  
    noon: {
      JBS:  [ d.Rasalika ],
      GN:   [ d.IshvariLila ],
    },

    evening: {
      JBS:  [ d.AnantaVasudev ],
      GN:   [ d.IshvaraChaytanya ],
    }
  },

  Saturday: {
    morning: {
      JBS:  [ d.Madhukari ],
      GN:   [ d.RasikaKumar ],
    },

    noon: {
      JBS:  [ d.MahaLila ],
      GN:   [ d.LilavatiMadhavi ],
    },
    
    evening: {
      JBS:  [ d.Chandravali ],
      GN:   [ d.JayaBhadra ],
    }
  },
  
  Sunday: {
    morning: {
      JBS:  [ d.Gandhari ],
      GN:   [ d.VenuRati ],
    },
    
    noon: {
      JBS:  [ d.GovindaDasi ],
      GN:   [ d.KalindiMayi ],
    },
    
    evening: {
      JBS:  [ d.RasaLila ],
      GN:   [ d.JayaGopaliSundari ],
    }
  }
};

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekday = weekdays[new Date().getDay()];

const getDefaultSchedule = (day) => ({
  pujaMorningJBS: [],
  pujaMorningGN: [],
  pujaNoonJBS: [],
  pujaNoonGN: [],
  pujaEveningJBS: [],
  pujaEveningGN: [],
  kitchenBreakfast: [],
  kitchenDinner: [],
  kitchenOther: [],
  garlandsBGN: garlandsDefault[day].BGN,
  garlandsJBS: garlandsDefault[day].JBS,
  garlandsMGN: garlandsDefault[day].MGN,
  garlandsSGN: garlandsDefault[day].SGN,
  garlandsSSP: garlandsDefault[day].SSP,
  garlandsBSP: garlandsDefault[day].BSP,
  clothes: spChangeClothesDefault[day],
  vyasasana: [],
  assistants: [],
  paraphernaliaCleaning: paraphernaliaCleaningDefault[day],
});

const defaultSchedule = {
  pujaMorningJBS: pujaDefault[weekday].morning.JBS,
  pujaMorningGN: pujaDefault[weekday].morning.GN,
  pujaNoonJBS: pujaDefault[weekday].noon.JBS,
  pujaNoonGN: pujaDefault[weekday].noon.GN,
  pujaEveningJBS: pujaDefault[weekday].evening.JBS,
  pujaEveningGN: pujaDefault[weekday].evening.GN,
  kitchenBreakfast: kitchenDefault[weekday].breakfast,
  kitchenDinner: kitchenDefault[weekday].dinner,
  garlandsBGN: garlandsDefault[weekday].BGN,
  garlandsJBS: garlandsDefault[weekday].JBS,
  garlandsMGN: garlandsDefault[weekday].MGN,
  garlandsSGN: garlandsDefault[weekday].SGN,
  garlandsSSP: garlandsDefault[weekday].SSP,
  garlandsBSP: garlandsDefault[weekday].BSP,
  clothes: spChangeClothesDefault[weekday],
  vyasasana: spVyasasanaDefault[weekday],
  assistants: assistantsDefault[weekday],
  paraphernaliaCleaning: paraphernaliaCleaningDefault[weekday],
};
