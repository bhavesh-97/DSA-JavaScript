/* const IsPalidrame = (str) => {
    if (str.split("").reverse().join("") === str) { return true }
    else { return false }
};
console.log(IsPalidrame("ohho")); */
/* 
const ReverseInt = (int) => int.toString().split("").reverse().join("");

console.log(ReverseInt(1234)); */

const Capitalized = str => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(Capitalized("HEllo World"));
console.log(Capitalized("bhavesh vaghela"));