// if-else

let age = 7;

if (age >= 18) console.log("Eligible for vote");
else console.log("Not eligible for vote");

// if-else-if
let ageOf = 19;

if (ageOf < 18) console.log("KID");
else if (ageOf > 45) console.log("OLD");
else console.log("YOUNG");

// switch
let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Not a valid day");
}
