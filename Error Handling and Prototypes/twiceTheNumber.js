function doubleArray(array, callback) {
    const newArray = [];
    for (const element of array) {
      newArray.push(callback(element));
    }
    return newArray;
  }


const array = [1, 2, 3, 4, 5];

const doubleElement = element => element * 2;

const newArray = doubleArray(array, doubleElement);

console.log(newArray);