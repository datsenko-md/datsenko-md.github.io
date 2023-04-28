const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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
const d = {
  Sundari:                  { gender: 'матаджі', id: 'Sundari', name: 'Сундарі' },
  Rasalika:                 { gender: 'матаджі', id: 'Rasalika', name: 'Расаліка' },
  Kinkari:                  { gender: 'матаджі', id: 'Kinkari', name: 'Кінкарі' },
  Gandhari:                 { gender: 'матаджі', id: 'Gandhari', name: 'Гандхарі' },
  YuvatiRasarani:           { gender: 'матаджі', id: 'YuvatiRasarani', name: 'Юваті Расарані' },
  IrenGuzan:                { gender: 'матаджі', id: 'IrenGuzan', name: 'Ірен Гузан' },
  Tulasi:                   { gender: 'матаджі', id: 'Tulasi', name: 'Туласі' },
  Ragini:                   { gender: 'матаджі', id: 'Ragini', name: 'Рагіні' },
  IndulekhaGopi:            { gender: 'матаджі', id: 'IndulekhaGopi', name: 'Індулекха Гопі' },
  YaninaMelnik:             { gender: 'матаджі', id: 'YaninaMelnik', name: 'Яніна Мельник' },
  ElenaTryndyk:             { gender: 'матаджі', id: 'ElenaTryndyk', name: 'Олена Триндик' },
  MadhuriNayika:            { gender: 'матаджі', id: 'MadhuriNayika', name: 'Мадхурі Наіка' },
  LilaManjari:              { gender: 'матаджі', id: 'LilaManjari', name: 'Ліла Манджарі' },
  GaurangiLila:             { gender: 'матаджі', id: 'GaurangiLila', name: 'Гаурангі Ліла' },
  YuliaLomaka:              { gender: 'матаджі', id: 'YuliaLomaka', name: 'Юлія Ломака' },
  YuliaStepanyuk:           { gender: 'матаджі', id: 'YuliaStepanyuk', name: 'Юлія Степанюк' },
  AcyutaSakhi:              { gender: 'матаджі', id: 'AcyutaSakhi', name: 'Ачьюта Сакхі' },
  LiliyaHohryakova:         { gender: 'матаджі', id: 'LiliyaHohryakova', name: 'Лілія Хохрякова' },
  ViktoriyaSkakun:          { gender: 'матаджі', id: 'ViktoriyaSkakun', name: 'Вікторія Скакун' },
  Tatyana:                  { gender: 'матаджі', id: 'Tatyana', name: 'Тетяна' }, // Узнать у м. Ювати Расарани
  YuliyaBerezkina:          { gender: 'матаджі', id: 'YuliyaBerezkina', name: 'Юлія Березкіна' },
  SvetlanaLetova:           { gender: 'матаджі', id: 'SvetlanaLetova', name: 'Світлана Летова' },
  YuliyaMolotkova:          { gender: 'матаджі', id: 'YuliyaMolotkova', name: 'Юлія Молоткова' },
  AnastasiyaSkorobagata:    { gender: 'матаджі', id: 'AnastasiyaSkorobagata', name: 'Анастасія Скоробагата' },
  NikundzhaGopika:          { gender: 'матаджі', id: 'NikundzhaGopika', name: 'Нікунджа Гопіка' },
  MariyaSazonova:           { gender: 'матаджі', id: 'MariyaSazonova', name: 'Марія Сазонова' },
  TariniKishori:            { gender: 'матаджі', id: 'TariniKishori', name: 'Таріні Кішорі' },
  IrinaZhukovich:           { gender: 'матаджі', id: 'IrinaZhukovich', name: 'Ірина Жукович' },
  Vadzhayantimala:          { gender: 'матаджі', id: 'Vadzhayantimala', name: 'Ваджаянтімала' },
  ViktoriyaGida:            { gender: 'матаджі', id: 'ViktoriyaGida', name: 'Вікторія Гида' },
  TatyanaCherevatenko:      { gender: 'матаджі', id: 'TatyanaCherevatenko', name: 'Тетяна Череватенко' },
  EkeshvariRadha:           { gender: 'матаджі', id: 'EkeshvariRadha', name: 'Екешварі Радга' },
  NataliyaGavelovskaya:     { gender: 'матаджі', id: 'NataliyaGavelovskaya', name: 'Наталля Гавеловська' },
  NataliyaVyunkovskaya:     { gender: 'матаджі', id: 'NataliyaVyunkovskaya', name: "Наталля В'юнковська" },
  AnastasiyaPerezdriyenko:  { gender: 'матаджі', id: 'AnastasiyaPerezdriyenko', name: 'Анастасія Перездрієнко' },
  Sarvadevata:              { gender: 'матаджі', id: 'Sarvadevata', name: 'Сарвадевата' },
  VrajaLila:                { gender: 'матаджі', id: 'VrajaLila', name: 'Враджа Ліла' },
  YashodaGopi:              { gender: 'матаджі', id: 'YashodaGopi', name: 'Яшода Гопі' },
  SitaSundarangi:           { gender: 'матаджі', id: 'SitaSundarangi', name: 'Сіта Сундарангі' },
  SanjivaniRasa:            { gender: 'матаджі', id: 'SanjivaniRasa', name: 'Сандживані Раса' },
  JayaSri:                  { gender: 'матаджі', id: 'JayaSri', name: 'Джая Шрі' },
  PremaLata:                { gender: 'матаджі', id: 'PremaLata', name: 'Према Лата' },
  RasikaKumari:             { gender: 'матаджі', id: 'RasikaKumari', name: 'Расіка Кумарі' },
  SanketKunja:              { gender: 'матаджі', id: 'SanketKunja', name: 'Санкет Кунджа' },
  NavinaRadha:              { gender: 'матаджі', id: 'NavinaRadha', name: 'Навіна Радга' },
  NaradiGopi:               { gender: 'матаджі', id: 'NaradiGopi', name: 'Нараді Гопі' },
  Taravali:                 { gender: 'матаджі', id: 'Taravali', name: 'Таравалі' },
  VrajaGopi:                { gender: 'матаджі', id: 'VrajaGopi', name: 'Враджа Гопі' },
  AnangaKishori:            { gender: 'матаджі', id: 'AnangaKishori', name: 'Ананга Кішорі' },
  IshvariLila:              { gender: 'матаджі', id: 'IshvariLila', name: 'Ішварі Ліла' },
  MahaLila:                 { gender: 'матаджі', id: 'MahaLila', name: 'Маха Ліла' },
  LilavatiMadhavi:          { gender: 'матаджі', id: 'LilavatiMadhavi', name: 'Лілаваті Мадхаві' },
  Chandravali:              { gender: 'матаджі', id: 'Chandravali', name: 'Чандравалі' },
  JayaBhadra:               { gender: 'матаджі', id: 'JayaBhadra', name: 'Джая Бгадра' },
  VenuRati:                 { gender: 'матаджі', id: 'VenuRati', name: 'Вену Раті' },
  KalindiMayi:              { gender: 'матаджі', id: 'KalindiMayi', name: 'Калінді Майї' },
  NityanandiniRadha:        { gender: 'матаджі', id: 'NityanandiniRadha', name: "Ніт'янандіні Радга" },
  RasaLila:                 { gender: 'матаджі', id: 'RasaLila', name: 'Раса Ліла' },
  JayaGopaliSundari:        { gender: 'матаджі', id: 'JayaGopaliSundari', name: 'Джая Гопалі Сундарі' },
  GovindaDasi:              { gender: 'матаджі', id: 'GovindaDasi', name: 'Говінда Дасі' },
  ShyamaKumari:             { gender: 'матаджі', id: 'ShyamaKumari', name: "Ш'яма Кумарі" },
  LileshvariGaurangi:       { gender: 'матаджі', id: 'LileshvariGaurangi', name: 'Лілешварі Гаурангі' },
  OlgaStremidlovska:        { gender: 'матаджі', id: 'OlgaStremidlovska', name: 'Ольга Стремідловська' },
  ElenaMurashova:           { gender: 'матаджі', id: 'ElenaMurashova', name: 'Олена Мурашова' },
  MarinaKoltsova:           { gender: 'матаджі', id: 'MarinaKoltsova', name: 'Марина Кольцова' },
  KseniyaPerezdrienko:      { gender: 'матаджі', id: 'KseniyaPerezdrienko', name: 'Ксенія Перездрієнко' },
  
  IvanChamkin:              { gender: 'прабгу', id: 'IvanChamkin', name: 'Іван Чамкін' },
  VitaliyBabenko:           { gender: 'прабгу', id: 'VitaliyBabenko', name: 'Віталій Бабенко' },
  Mahadyuti:                { gender: 'прабгу', id: 'Mahadyuti', name: "Махад'юті" },
  AleksandrFedorina:        { gender: 'прабгу', id: 'AleksandrFedorina', name: 'Олександр Федорина' },
  IgorPerezdrienko:         { gender: 'прабгу', id: 'IgorPerezdrienko', name: 'Ігор Перездрієнко' },
  KirillStepanyuk:          { gender: 'прабгу', id: 'KirillStepanyuk', name: 'Кирило Степанюк' },
  Harinamanrita:            { gender: 'прабгу', id: 'Harinamanrita', name: 'Харінамамріта' },
  RamaRupa:                 { gender: 'прабгу', id: 'RamaRupa', name: 'Рама Рупа' },
  ArchaVigraha:             { gender: 'прабгу', id: 'ArchaVigraha', name: 'Арча Віграха' },
  TulasiValabha:            { gender: 'прабгу', id: 'TulasiValabha', name: 'Туласі Валабха' },
  RasaSagara:               { gender: 'прабгу', id: 'RasaSagara', name: 'Раса Сагара' },
  TushtaKrishna:            { gender: 'прабгу', id: 'TushtaKrishna', name: 'Тушта Крішна' },
  SudhaKantha:              { gender: 'прабгу', id: 'SudhaKantha', name: 'Судха Кантха' },
  YashodaKumar:             { gender: 'прабгу', id: 'YashodaKumar', name: 'Яшода Кумар' },
  RamVijay:                 { gender: 'прабгу', id: 'RamVijay', name: 'Рам-Віджай' },
  Yogeshvara:               { gender: 'прабгу', id: 'Yogeshvara', name: 'Йогешвара' },
  AnupamGovinda:            { gender: 'прабгу', id: 'AnupamGovinda', name: 'Анупам Говінда' },
  Vrindaranya:              { gender: 'прабгу', id: 'Vrindaranya', name: "Вріндаран'я" },
  VrajaBhakti:              { gender: 'прабгу', id: 'VrajaBhakti', name: 'Враджа Бгакті' },
  DhruvaMaharaj:            { gender: 'прабгу', id: 'DhruvaMaharaj', name: 'Дхрува Махарадж' },
  AnantaVasudev:            { gender: 'прабгу', id: 'AnantaVasudev', name: 'Ананта Васудев' },
  IshvaraChaytanya:         { gender: 'прабгу', id: 'IshvaraChaytanya', name: "Ішвара Чайтан'я" },
  Madhukari:                { gender: 'прабгу', id: 'Madhukari', name: 'Мадхукарі' },
  RasikaKumar:              { gender: 'прабгу', id: 'RasikaKumar', name: 'Расіка Кумар' },
  MaksimDatsenko:           { gender: 'прабгу', id: 'MaksimDatsenko', name: 'Максим Даценко' },
  VanamaliGovinda:          { gender: 'прабгу', id: 'VanamaliGovinda', name: 'Ванамалі Говінда' },
  IgorMorozov:              { gender: 'прабгу', id: 'IgorMorozov', name: 'Ігор Морозов' },
  MihailDerkach:            { gender: 'прабгу', id: 'MihailDerkach', name: 'Михайло Деркач' },
  OlegKalinovskiy:          { gender: 'прабгу', id: 'OlegKalinovskiy', name: 'Олег Калиновський' },
  Maksim:                   { gender: 'прабгу', id: 'Maksim', name: 'Максим' }, // Максим, который строитель
  AntonKrivokorytov:        { gender: 'прабгу', id: 'AntonKrivokorytov', name: 'Антон Кривокоритов' },
  Lochana:                  { gender: 'прабгу', id: 'Lochana', name: 'Лочана' },
  NitayGaurachandra:        { gender: 'прабгу', id: 'NitayGaurachandra', name: 'Нітай Гаурачандра' },
  VedantaChaitanya:         { gender: 'прабгу', id: 'VedantaChaitanya', name: "Веданта Чайтан'я" },
  YuriyVarava:              { gender: 'прабгу', id: 'YuriyVarava', name: 'Юрій Варава' },
  IlyaVasilchenko:          { gender: 'прабгу', id: 'IlyaVasilchenko', name: 'Ілля Васильченко' },
  SadhuSeva:                { gender: 'прабгу', id: 'SadhuSeva', name: 'Садху Сева' },
  AnatoliyMotsygailo:       { gender: 'прабгу', id: 'AnatoliyMotsygailo', name: 'Анатолій Моцигайло' },
};
const assistantsDefault = {
  Monday: [
    d.AnastasiyaSkorobagata,
    d.TatyanaCherevatenko,
    d.OlgaStremidlovska,
    d.ElenaMurashova,
    d.MaksimDatsenko,
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
    d.OlgaStremidlovska,
    d.LiliyaHohryakova,
    d.MihailDerkach,
    d.MaksimDatsenko,
  ],
  Thursday: [
    d.OlgaStremidlovska,
    d.EkeshvariRadha,
    d.Gandhari,
    d.AnangaKishori,
    d.OlegKalinovskiy,
  ],
  Friday: [
    d.TatyanaCherevatenko,
    d.OlgaStremidlovska,
    d.Gandhari,
    d.Maksim,
    d.TatyanaCherevatenko,
  ],
  Saturday: [
    d.OlgaStremidlovska,
    d.AntonKrivokorytov,
    d.Lochana,
    d.MarinaKoltsova,
    d.KseniyaPerezdrienko,
  ],
  Sunday: [
    d.EkeshvariRadha,
    d.Ragini,
    d.OlgaStremidlovska,
    d.NitayGaurachandra,
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
  Monday:     [ d.IvanChamkin ],
  Tuesday:    [ d.VitaliyBabenko ],
  Wednesday:  [ d.Mahadyuti ],
  Thursday:   [ d.AleksandrFedorina ],
  Friday:     [ d.IvanChamkin ],
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
    SGN: [ d.Tulasi ],
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
  },

  Tuesday: {
    breakfast:  [ d.RamaRupa ],
    dinner:     [ d.SanjivaniRasa ],
  },

  Wednesday: {
    breakfast:  [ d.YashodaGopi ],
    dinner:     [ d.ArchaVigraha ],
  },

  Thursday: {
    breakfast:  [ d.YashodaGopi ],
    dinner:     [ d.TulasiValabha, d.SitaSundarangi ],
  },

  Friday: {
    breakfast:  [ d.SudhaKantha ],
    dinner:     [ d.VrajaLila ],
  },

  Saturday: {
    breakfast:  [ d.TushtaKrishna ],
    dinner:     [ d.JayaSri ],
  },

  Sunday: {
    breakfast:  [ d.EkeshvariRadha ],
    dinner:     [ d.PremaLata ],
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

const weekday = weekdays[new Date().getDay()];

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
const getDateMsg = () => {
  const now = new Date();
  const date = now.getUTCDate();
  const day = now.getDay();
  const weekday = weekdays[day];
  const month = now.getUTCMonth();
  const year = now.getFullYear();
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
const getPujaMorningMsg = ({ pujaMorningJBS, pujaMorningGN }) => {
  const namesPartJBS = getNames(pujaMorningJBS);
  const namesPartGN = getNames(pujaMorningGN);
  const msg = `🔸Вранці Божествам служили:\n`
  + `ДБС: ${namesPartJBS} та\n`
  + `ГН: ${namesPartGN}`;
  return msg;
};
const getKitchenBreakfastMsg = (kitchenBreakfast) => {
  const namesPart = getNames(kitchenBreakfast);
  const ending = getEndingOfTheWord(kitchenBreakfast);
  const msg = `🔸Сніданок для Господа приготува${ending}\n${namesPart}`;
  return msg;
};
const getKitchenDinnerMsg = (kitchenDinner) => {
  const now = new Date();
  const dinnerTime = new Date();
  dinnerTime.setHours(12, 0, 0);
  const time = now > dinnerTime ? 'past' : 'future';
  const pastPart = time === 'past' ? 'ва' : '';
  const namesPart = getNames(kitchenDinner);
  const ending = getEndingOfTheWord(kitchenDinner, time);
  const msg = `🔸Обід Крішни приготу${pastPart}${ending}\n${namesPart}`;
  return msg;
};
const getPujaNoonMsg = ({ pujaNoonJBS, pujaNoonGN }) => {
  const now = new Date();
  const aratiTime = new Date();
  aratiTime.setHours(13, 15, 0);
  const pastPart = now > aratiTime ? 'провели' : 'проведуть';
  const namesPartJBS = getNames(pujaNoonJBS);
  const namesPartGN = getNames(pujaNoonGN);
  const msg = `🔸Обіднє араті ${pastPart}\n`
  + `ДБС: ${namesPartJBS} та\n`
  + `ГН: ${namesPartGN}`;
  return msg;
};
const getPujaEveningMsg = ({ pujaEveningJBS, pujaEveningGN }) => {
  const namesPartJBS = getNames(pujaEveningJBS);
  const namesPartGN = getNames(pujaEveningGN);
  const msg = `🔸Ввечері Божествам служитимуть\n`
  + `ДБС: ${namesPartJBS} та\n`
  + `ГН: ${namesPartGN}`;
  return msg;
};
const getSpChangeClothesMsg = (clothes) => {
  const namesPart = getNames(clothes);
  const ending = getEndingOfTheWord(clothes);
  const msg = `🔸Шрілу Прабгупаду переодягну${ending}\n${namesPart}`;
  return msg;
};
const getGarlandsMsg = ({ garlandsBGN, garlandsJBS, garlandsMGN, garlandsSGN, garlandsSSP, garlandsBSP }) => {
  const namesBGN = getNames(garlandsBGN);
  const namesJBS = getNames(garlandsJBS);
  const namesMGN = getNames(garlandsMGN);
  const namesSGN = getNames(garlandsSGN);
  const namesSSP = getNames(garlandsSSP);
  const namesBSP = getNames(garlandsBSP);
  const ending = getEndingOfTheWord(garlandsBSP);
  const BSPPart = namesBSP === '' ? '' : `\n\n🔸Гірлянду великому Шрілі Прабгупаді зроби${ending}\n${namesBSP}`
  const msg = `🔸Гірлянди для Божеств зплели\n`
  + `ВГН: ${namesBGN}\n`
  + `ДБС: ${namesJBS}\n`
  + `СГН: ${namesMGN}\n`
  + `МГН: ${namesSGN}\n`
  + `МШП: ${namesSSP}`
  + BSPPart;
  return msg;
};
const getSpVyasasanaMsg = (vyasasana) => {
  const namesPart = getNames(vyasasana);
  const ending = getEndingOfTheWord(vyasasana);
  const msg = `🔸Прикраси${ending} в'ясасану Шріли Прабгупади та підготува${ending} букети\n${namesPart}`;
  return msg;
};
const getAssistantsMsg = (assistants) => {
  const namesPart = getNames(assistants);
  const msg = `🔸Допомагає поклонятися Господу команда помічників до якої входять:\n${namesPart}`;
  return msg;
};
const getParaphernaliaCleaningMsg = (paraphernaliaCleaning) => {
  if (paraphernaliaCleaning.length === 0) {
    return '';
  }
  const namesPart = getNames(paraphernaliaCleaning);
  const ending = getEndingOfTheWord(vyasasana);
  const msg = `🔸Почисти${ending} параферналії Божеств\n${namesPart}`;
  return msg;
};
const generateSchedule = (devotees) => {
  const {
    pujaMorningJBS,
    pujaMorningGN,
    pujaNoonJBS,
    pujaNoonGN,
    pujaEveningJBS,
    pujaEveningGN,
    kitchenBreakfast,
    kitchenDinner,
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
  } = devotees;

  const schedule = [];

  const dateMsg = getDateMsg();
  schedule.push(dateMsg);

  const pujaMorningMsg = getPujaMorningMsg({ pujaMorningJBS, pujaMorningGN });
  schedule.push(pujaMorningMsg);

  const kitchenBreakfastMsg = getKitchenBreakfastMsg(kitchenBreakfast);
  schedule.push(kitchenBreakfastMsg);

  const kitchenDinnerMsg = getKitchenDinnerMsg(kitchenDinner);
  schedule.push(kitchenDinnerMsg);

  const paraphernaliaCleaningMsg = getParaphernaliaCleaningMsg(paraphernaliaCleaning);
  schedule.push(paraphernaliaCleaningMsg);

  const pujaNoonMsg = getPujaNoonMsg({ pujaNoonJBS, pujaNoonGN });
  schedule.push(pujaNoonMsg);

  const pujaEveningMsg = getPujaEveningMsg({ pujaEveningJBS, pujaEveningGN});
  schedule.push(pujaEveningMsg);

  const spChangeClothesMsg = getSpChangeClothesMsg(clothes);
  schedule.push(spChangeClothesMsg);

  const garlandsMsg = getGarlandsMsg({ garlandsBGN, garlandsJBS, garlandsMGN, garlandsSGN, garlandsSSP, garlandsBSP });
  schedule.push(garlandsMsg);

  const spVyasasanaMsg = getSpVyasasanaMsg(vyasasana);
  schedule.push(spVyasasanaMsg);

  const assistantsMsg = getAssistantsMsg(assistants);
  schedule.push(assistantsMsg);

  return schedule.filter((msg) => msg !== '').join("\n\n");
};

// export { generateSchedule, defaultSchedule };
