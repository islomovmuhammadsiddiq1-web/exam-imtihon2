//==========================================================

// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ᔍ "<div></div><div></div>"
// Namuna("p*1") ᔍ "<p></p>"
// Namuna("li*3") ᔍ "<li></li><li></li><li></li>"

function tagGeneratsiyasi(str) {
  let [tag, count] = str.split("*");

  return `<${tag}></${tag}>`.repeat(Number(count));
}

console.log(tagGeneratsiyasi("div*2"));
console.log(tagGeneratsiyasi("p*1"));
console.log(tagGeneratsiyasi("li*3"));

//==========================================================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ᔍ 6
// // 1 + 2 + 3 = 6
// namuna(10) ᔍ 55
// 1 + 2 + 3 + ... + 10 = 55
// namuna(7) ᔍ 28
// 1 + 2 + 3 + ... + 7 = 28

function namuna(son) {
  return (son * (son + 1)) / 2;
}

console.log(namuna(3));
console.log(namuna(10));
console.log(namuna(7));

//==========================================================

// 102.Funksiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ᔍ true
// Namuna(4, { min: 4, max: 5 }) ᔍ true
// Namuna(4, { min: 6, max: 10 }) ᔍ false
// Namuna(5, { min: 5, max: 5 }) ᔍ true

function sonOraliqdami(son, { min, max }) {
  return son >= min && son <= max;
}

console.log(sonOraliqdami(4, { min: 0, max: 5 }));
console.log(sonOraliqdami(4, { min: 4, max: 5 }));
console.log(sonOraliqdami(4, { min: 6, max: 10 }));
console.log(sonOraliqdami(5, { min: 5, max: 5 }));

//==========================================================

// 103. Funksiya son qabul qiladi, agar ushbu sonni kvadratga ko'tarsak, ushbu natijaning oxirigi qiymati sonning o'ziga teng bo'lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) ᔍ true
// Namuna(3) ᔍ false
// // 3^2 = 9
// Namuna(6) ᔍ true
// // 6^2 = 36 (ends with 6)
// Namuna(95) ᔍ false
// // 95^2 = 9025 (does not end with 95)

function kvadratOxiriTengmi(son) {
  return String(son * son).endsWith(String(son));
}

console.log(kvadratOxiriTengmi(1));
console.log(kvadratOxiriTengmi(3));
console.log(kvadratOxiriTengmi(6));
console.log(kvadratOxiriTengmi(95));

//==========================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]
// Namuna([1, 2, 3, 4, 5]) ᔍ [1, 3, 5, 7, 9]
// Namuna([5, 4, 3, 2, 1]) ᔍ [5, 5, 5, 5, 5]

function indexQosh(arr) {
  return arr.map((element, index) => element + index);
}

console.log(indexQosh([0, 0, 0, 0, 0]));
console.log(indexQosh([1, 2, 3, 4, 5]));
console.log(indexQosh([5, 4, 3, 2, 1]));

//==========================================================

// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// colafanta
// Namuna:
// Namuna(["fanta", "cola", "water"]) ᔍ ["water"]
// Namuna(["fanta", "cola"]) ᔍ []
// Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
// "beer", "water"]

function shakarsizIchimliklar(ichimliklar) {
  return ichimliklar.filter(
    (ichimlik) => !["cola", "fanta"].includes(ichimlik.toLowerCase())
  );
}

console.log(shakarsizIchimliklar(["fanta", "cola", "water"]));
console.log(shakarsizIchimliklar(["fanta", "cola"]));
console.log(shakarsizIchimliklar(["lemonade", "beer", "water"]));

//==========================================================

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) ᔍ 3
// Namuna(56) ᔍ 2
// Namuna(7154) ᔍ 4
// Namuna(61217311514) ᔍ 11
// Namuna(0) ᔍ 1

function raqamlarSoni(son) {
  return Math.abs(Math.trunc(son)).toString().length;
}

console.log(raqamlarSoni(123));
console.log(raqamlarSoni(56));
console.log(raqamlarSoni(7154));
console.log(raqamlarSoni(61217311514));
console.log(raqamlarSoni(0));

//==========================================================

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// Namuna:
// Namuna(123) ᔍ 321
// Namuna("001") ᔍ 100
// Namuna(999) ᔍ 999
// Namuna(784) ᔍ 874

function engKattaSon(son) {
  return Number(String(son).split("").sort((a, b) => b - a).join(""));
}

console.log(engKattaSon(123));
console.log(engKattaSon("001"));
console.log(engKattaSon(999));
console.log(engKattaSon(784));

//==========================================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// Namuna:
// Namuna(5, 9) ᔍ 7
// Namuna(5, 9) ᔍ 9
// Namuna(5, 9) ᔍ 5

function randomOraliq(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomOraliq(5, 9));
console.log(randomOraliq(5, 9));
console.log(randomOraliq(5, 9));

//==========================================================

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) ᔍ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) ᔍ true
// Namuna(1652) ᔍ false

function narissistikmi(son) {
  const raqamlar = String(son).split("");
  const daraja = raqamlar.length;
  const yigindi = raqamlar.reduce(
    (sum, raqam) => sum + Number(raqam) ** daraja,
    0
  );

  return yigindi === son;
}

console.log(narissistikmi(153));
console.log(narissistikmi(370));
console.log(narissistikmi(1652));

//==========================================================

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 1451
// Namuna("mqeytbbjwqemcdrdsyvq") ᔍ 0

function kattaHarflarSoni(matn) {
  return (matn.match(/[A-Z]/g) || []).length;
}

console.log(kattaHarflarSoni("fvLzpxmgXSDrobbgMVrc"));
console.log(kattaHarflarSoni("JMZWCneOTFLWYwBWxyFw"));
console.log(kattaHarflarSoni("mqeytbbjwqemcdrdsyvq"));

//==========================================================
