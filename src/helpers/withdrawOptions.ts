import { mdiFood, mdiHome, mdiHanger, mdiFlower, mdiControllerClassic, mdiPartyPopper, mdiTrafficLight, mdiHammerWrench, mdiSeat, mdiGift, mdiCar, mdiCash, mdiAccountTie, mdiBottleTonicPlus } from '@mdi/js';
type withdrawOptions = {[key: string]: any}
const withdrawOptions:withdrawOptions = {
    housing:{
        "name": "مسکن",
        "description": "اجاره، شارژ",
        "icon": mdiHome,
        "tag": "housing"
    },
    food:{
        "name": "خوراک",
        "description": "گوشت،نان،مرغ،برنج،لبنیات ،میوه",
        "icon": mdiFood,
        "tag": "food"
    },
   clothing: {
        "name": "پوشاک",
        "description": "شلوار، جوراب،کیف، کفش",
        "icon": mdiHanger,
        "tag": "clothing"
    },
   cosmetic: {
        "name": "آرایشی بهداشتی",
        "description": "عطر، دستمال،مایع ظرفشویی",
        "icon": mdiFlower,
        "tag": "cosmetic"
    },
    recreation :{
        "name": "تفریح",
        "description": "سینما،پارک،کافه،رستوران یا مسافرت",
        "icon": mdiControllerClassic,
        "tag": "recreation"
    },
    party:{
        "name": "مهمانی",
        "description": "تولد فرزند،دورهمی،پاگشایی،افطاری",
        "icon": mdiPartyPopper,
        "tag": "party"
    },
    commuting:{
        "name": "رفت و آمد",
        "description": "کرایه،تاکسی اینترنتی،اتوبوس،مترو",
        "icon": mdiTrafficLight,
        "tag": "commuting"
    },
    services: {
        "name": "خدمات",
        "description": "آب،برق، گاز،تلفن، تلفن همراه،اینترنت",
        "icon": mdiHammerWrench,
        "tag": "services"
    },
    treatment: {
        "name": "درمان",
        "description": "ویزیت،دارو، آزمایش",
        "icon": mdiBottleTonicPlus,
        "tag": "treatment"
    },
    home_appliances: {
        "name": "لوازم خانه",
        "description": "تعمیر لباسشویی،میز،لامپ،قابلمه،اسباب بازی",
        "icon": mdiSeat,
        "tag": "home_appliances"
    },
    gift: {
        "name": "هدیه",
        "description": "چشم روشنی،ازدواج، تولدها،روز مادر یا پدر",
        "icon": mdiGift,
        "tag": "gift"
    },
    car:{
        "name": "خودرو",
        "description": "بنزین، تعمیر و تعویض روغن،جریمه،بیمه",
        "icon": mdiCar,
        "tag": "car"
    },
    debt:{
        "name": "بدهی",
        "description": "اقساط وام، بدهی های شخصی",
        "icon": mdiCash,
        "tag": "debt"
    },
    personal_growth:{
        "name": "رشد فردی",
        "description": "کتاب، کلاسی های ورزشی یا آموزشی، شهریه مدرسه",
        "icon": mdiAccountTie,
        "tag": "personal_growth"
    }
};

export default withdrawOptions;