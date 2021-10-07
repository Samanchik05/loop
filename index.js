// let cars = ["malibu", "kia", "matiz", "audi"];

// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// // console.log(cars[4]);

// console.log("-------------------------1");

// for (let i = 0; i < 0; i++) {
//   //   console.log(i);
//   console.log(cars[i]);
// }

// console.log("-------------------------2");
// for (let car of cars) {
//   console.log(car);
// }

// console.log("-------------------------3");
// let j = 0;
// while (j < 0) {
//   consol;

//   e.log(cars[j]);
//   j++;
// }

// let a = 0;

// do {
//   console.log(a);
//   a++;
// } while (a < 2);

// console.log("-------------------------4");
// let fruits = ["banana", "cherry", "apricot", "apple"];

// fruits.forEach(loopArray);
// function loopArray(v, i, c) {
//   //   console.log(value, index);
//   console.log(v, i, c);
// }

// console.log("-------------------------5");
// fruits.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

// let numbers = [2, 5, 3, 1];
// console.log(numbers);

// let mappedArray = numbers.map(function (value, index) {
//   return value * 3;
// });

// console.log(mappedArray);

// let mappedFruits = fruits.map(function (value, index) {
//   return value + " is fruit";
// });

// console.log(mappedFruits);

// let filteredArray = numbers.filter(function (value, index) {
//   return value < 5;
// });
// console.log(filteredArray);

// let listData = "";
// fruits.forEach(function (value, index) {
//   listData += `<li>${value}</li>`;
// });

// document.getElementById("list").innerHTML + listData;



const jokes = [
    {
      category: "Programming",
      type: "twopart",
      setup: "Programming is like sex.",
      delivery:
        "Make one mistake and you end up supporting it for the rest of your life.",
      flags: {
        nsfw: true,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: true,
      },
      id: 8,
      safe: false,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "Why are Assembly programmers always soaking wet?",
      delivery: "They work below C-level.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      safe: true,
      id: 264,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 123,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "Why did the database administrator leave his wife?",
      delivery: "She had one-to-many relationships.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      safe: true,
      id: 265,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: true,
      },
      id: 55,
      safe: false,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "What is the most used language in programming?",
      delivery: "Profanity.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 193,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "Why do programmers wear glasses?",
      delivery: "Because they need to C#",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 50,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "Why did the JavaScript heap close shop?",
      delivery: "It ran out of memory.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 31,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "single",
      joke: 'Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 221,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "What is a dying programmer's last program?",
      delivery: "Goodbye, world!",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 56,
      safe: true,
      lang: "en",
    },
  ];













let listjokes = "";
jokes.forEach(function (value, category) {
  listjokes += `<ul>${value.category}</ul>`;
});
document.getElementById("const").innerHTML = listjokes;


let list = "";
jokes.forEach(function (value, type) {
  list += `<ul>${value.type}</ul>`;
});
document.getElementById("id").innerHTML = list;



let listd = "";
jokes.forEach(function (value, setup) {
  listd += `<ul>${value.setup}</ul>`;
});
document.getElementById("it").innerHTML = listd;




let listdelivery = "";
jokes.forEach(function (value, delivery) {
  listdelivery += `<ul>${value.delivery}</ul>`;
});
document.getElementById("delivery").innerHTML = listdelivery;





let listflags = "";
jokes.forEach(function (value, flags, nsfw) {
  listflags += `<ul>${value.flags.nsfw}</ul>`;
});
document.getElementById("flags").innerHTML = listflags;




let listflagsreligious = "";
jokes.forEach(function (value, flags, nsfw, religious) {
  listflagsreligious += `<ul>${value.flags.nsfw.religious}</ul>`;
});
document.getElementById("flagsreligious").innerHTML = listflagsreligious;
