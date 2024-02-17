'use strict'

const fname = 'lochin';

const str = new String(fname);

// console.log(fname);
// console.log(str);

// console.log(typeof fname); //return string
// console.log(typeof str); // return object

//  Har qanday js code tshkil qilinishida 1- ob'ekt hosil qilinadi.2- Ma'lumot turi yaratiladi .3- Va u foydalaniladi yoki chiqariladi

const car = {
    motor: "X",
    color:'red',
    isAirbag: true,
    isSpeed:function(){
        console.log(320);
    }
}

const gm = {
    isAirbag:false,
}

// Yangi obekt tayyorlash orqali 2 ta ob'ektni bir-biriga ulash
// Ulangandan so'ng gm ob'ekt bo'ladi va uning prototipi car bo'lib qoladi.

// gm.__proto__ = car;
// console.log(gm);
// console.log(gm.color);
// // console.log(gm.isSpeed()); //qaytaradi 320 va undefiend.Chunki console.log yozilyapti va funksiyada ham yozilyapti
// gm.isSpeed;

// Prorotiplash yangi metodi

// Object.setPrototypeOf(gm,car);
// console.log(gm);

const bmw = Object.create(car);
console.log(bmw);
