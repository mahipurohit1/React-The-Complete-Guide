var number: number;
number = 20;
// number = "number";
var firstName: string;
firstName = "alex";
// firstName = 5050;

var IsGood: boolean;
IsGood = true;

var arrayOfString: string[];
arrayOfString = ["mah", "good", "bad"];

var obj: {
  name: string;
  age: number;
};

obj = {
  name: "marry",
  age: 10,
};

var marks: string | number;
marks = "good";
marks = 50;

var fullName = "shane watson";
// fullName = 1122

type person = {
  name: string;
  age: number;
};

var people: person[];
var onePeople: person;

function printLog(value: any): void {
  console.log(value);
}

//generic

function insertAtBeginning<t>(array: t[], value: t) {
  return [value, ...array];
}
const updateArray = insertAtBeginning([12, 5, 13, 2, 45], 5);
