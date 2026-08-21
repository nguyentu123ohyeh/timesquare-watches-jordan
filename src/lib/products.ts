import ga2100_1a1 from "@/assets/p-ga2100-1a1.jpg";
import ga2100_1a from "@/assets/p-ga2100-1a.jpg";
import ecb2200 from "@/assets/p-ecb2200.jpg";
import efrs108d from "@/assets/p-efrs108d.jpg";
import efr526l from "@/assets/p-efr526l.jpg";
import efv550p from "@/assets/p-efv550p.jpg";
import mtp1384l from "@/assets/p-mtp1384l.jpg";

import efv550pNew from "@/assets/EFV-550P-1AVUDF.png";
import efv640dNew from "@/assets/EFV-640D-2AVUDF.png";
import efv640lNew from "@/assets/EFV-640L-2AVUDF.png";
import mtp1384New from "@/assets/MTP-1384L-1AVDF.png";
import raSeries from "@/assets/RA-Series.png";
import reSeries from "@/assets/RE-Series.png";
import saSeries from "@/assets/SA-Series.png";
import carbonSport from "@/assets/Carbon-Sport-Watch.png";
import businessClassic from "@/assets/Business-Classic-Watch.png";
import minimalLeather from "@/assets/Minimal-Leather-Watch.png";
import premiumGift from "@/assets/Premium-Gift-Watch.png";
import classicWomen from "@/assets/Classic-Women-Watch.png";
import modernWomen from "@/assets/Modern-Women-Watch.png";
import internationalGift from "@/assets/International-Gift-Watch.png";
import sportChronograph from "@/assets/Sport-Chronograph.png";
import luxurySteel from "@/assets/Luxury-Steel-Watch.png";
import dailyQuartz from "@/assets/Daily-Quartz-Watch.png";
import classicRound from "@/assets/Classic-Round-Watch.png";
import modernDigital from "@/assets/Modern-Digital-Watch.png";
import importCollection from "@/assets/Import-Collection-Watch.png";


export type Product = {

  id: string;

  name: string;

  model: string;

  category: string;

  description: string;

  price: number;

  image: string;

  origin: string;

  specifications: string[];

  featured?: boolean;

};


export const CATEGORIES = [

  "Luxury Watches",

  "Casual Watches",

  "Gift Watches",

  "Men's Watches",

  "Women's Watches",

] as const;



const imgs: string[] = [

  // OLD 7 PRODUCTS
  ga2100_1a1,
  ga2100_1a,
  ecb2200,
  efrs108d,
  efr526l,
  efv550p,
  mtp1384l,


  // NEW PRODUCTS
  efv550pNew,
  efv640dNew,
  efv640lNew,
  mtp1384New,
  raSeries,
  reSeries,
  saSeries,
  carbonSport,
  businessClassic,
  minimalLeather,
  premiumGift,
  classicWomen,
  modernWomen,
  internationalGift,
  sportChronograph,
  luxurySteel,
  dailyQuartz,
  classicRound,
  modernDigital,
  importCollection,

];



const raw: [string, string, string, string][] = [

  ["GA-2100-1A1DR", "G-Shock Carbon Core Guard", "Casual Watches", "Thailand"],

  ["GA-2100-1ADR", "G-Shock Octagon Sport", "Men's Watches", "Thailand"],

  ["ECB-2200HTR-1ADR", "Edifice Chronograph", "Luxury Watches", "China"],

  ["ECB-950MP-1ADR", "Edifice Premium Chronograph", "Luxury Watches", "China"],

  ["EFR-S108D-7AVUDF", "Edifice Steel Classic", "Men's Watches", "China"],

  ["EFR-526L-1AVUDF", "Leather Chronograph", "Gift Watches", "China"],

  ["EFR-526L-7AVUDF", "Silver Dial Watch", "Men's Watches", "China"],

  ["EFV-550P-1AVUDF", "Edifice Sport", "Men's Watches", "China"],

  ["EFV-640D-2AVUDF", "Stainless Watch", "Men's Watches", "China"],

  ["EFV-640L-2AVUDF", "Leather Series", "Gift Watches", "China"],

  ["MTP-1384L-1AVDF", "Classic Leather Dress Watch", "Luxury Watches", "China"],

  ["RA Series", "Classic Gift Watch", "Gift Watches", "Japan"],

  ["RE Series", "Elegant Gift Watch", "Gift Watches", "Japan"],

  ["SA Series", "Daily Casual Watch", "Casual Watches", "Japan"],

  ["Carbon Sport Watch", "Premium Casual Collection", "Casual Watches", "Thailand"],

  ["Business Classic Watch", "Office Collection", "Men's Watches", "China"],

  ["Minimal Leather Watch", "Leather Collection", "Gift Watches", "China"],

  ["Premium Gift Watch", "Corporate Gift Watch", "Gift Watches", "Japan"],

  ["Classic Women Watch", "Ladies Collection", "Women's Watches", "Japan"],

  ["Modern Women Watch", "Elegant Ladies Style", "Women's Watches", "China"],

  ["International Gift Watch", "Global Gift Collection", "Gift Watches", "China"],

  ["Sport Chronograph", "Active Lifestyle Watch", "Men's Watches", "China"],

  ["Luxury Steel Watch", "Premium Steel Collection", "Luxury Watches", "Japan"],

  ["Daily Quartz Watch", "Everyday Collection", "Casual Watches", "China"],

  ["Classic Round Watch", "Heritage Collection", "Luxury Watches", "Japan"],

  ["Modern Digital Watch", "Digital Collection", "Casual Watches", "Thailand"],

  ["Import Collection Watch", "International Trading Collection", "Gift Watches", "Jordan"],

];



export const PRODUCTS: Product[] = raw.map((x, i) => ({

  id: x[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-"),

  name: x[1],

  model: x[0],

  category: x[2],

  origin: x[3],


  description:

    "Premium personal gift watch from TIMES SQUARE Import & Export collection.",


  price: 99 + (i % 9) * 20,


  image: imgs[i],


  specifications: [

    "Quartz Movement",

    "Premium Design",

    "International Trading Product",

  ],

}));



export const formatPrice = (v: number) =>

  new Intl.NumberFormat("en-US", {

    style: "currency",

    currency: "USD",

    minimumFractionDigits: 0,

  }).format(v);