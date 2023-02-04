var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var number;
number = 20;
// number = "number";
var firstName;
firstName = "alex";
// firstName = 5050;
var IsGood;
IsGood = true;
var arrayOfString;
arrayOfString = ["mah", "good", "bad"];
var obj;
obj = {
    name: "marry",
    age: 10
};
var marks;
marks = "good";
marks = 50;
var fullName = "shane watson";
var people;
var onePeople;
function add(a, b) {
    return a + b;
}
function printLog(value) {
    console.log(value);
}
//generic
function insertAtBeginning(array, value) {
    return __spreadArray([value], array, true);
}
var updateArray = insertAtBeginning([12, 5, 13, 2, 45], 5);
