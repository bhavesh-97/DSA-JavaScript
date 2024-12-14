// const TwosumArray = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// }

// console.log(TwosumArray([1,2,5,3,45,2,4,5,6,3,3],5))


const chuck = (arr, size) => {
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
        const chucks = arr.slice(index, index + size);
        //console.log(chucks);
        chunked.push(chucks);
        index += size;
    }
    return chunked
}

console.log(chuck([1,2,3,5,6,8,4,6,9,5,6,9,8],5))