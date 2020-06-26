// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?


// two pass nested loop
function two_number_sum_nested (array, k){
    if (array.length < 2) {
        console.log("Array has less than 2 items")
        return false
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] == k) {
                console.log(`Matches found : ${array[i]} at index ${i} & ${array[j]} at index ${j}` )
                return true
            }
        }
    }
    console.log("No matches found")
    return false
}

// one pass with a hashtable
function two_number_sum(array, k) {
    if (array.length < 2) {
        console.log("Array has less than 2 items")
        return false
    }
    let hash = {}
    for (let i = 0; i < array.length; i++) {
        if (hash.hasOwnProperty([ k - array[i] ])) {
            console.log(`Matches found : ${array[i]} at index ${i} & ${k-array[i]} at index ${hash[k-array[i]][0]}`)
            console.log(hash)
            return true
        }
        else {
            if (hash.hasOwnProperty( array[i] )) {
                hash[ array[i] ].push(i)        
            } 
            else {
                hash[ array[i] ] = [i]
            }
        }
    }
    console.log(hash)
    return false
}


// ↓↓↓   basic test   ↓↓↓

let arr1 = [1,3,2,5,7,9,12]
let arr2 = []
let arr3 = [3]
let arr4 = [3,8]
let arr5 = [3,8,3,2,8,7,2,9,7,12]
let arr6 = [-2, 5, -8, 3,9,7,11,6,-2,-5]

console.log("↓↓↓ nested loop ↓↓↓ \n -------------------------")

console.log(two_number_sum_nested(arr1, 15))
console.log(two_number_sum_nested(arr2, 15))
console.log(two_number_sum_nested(arr3, 15))
console.log(two_number_sum_nested(arr4, 12))
console.log(two_number_sum_nested(arr5, 12))
console.log(two_number_sum_nested(arr6, 0))


console.log("↓↓↓ one pass with hash table ↓↓↓ \n -------------------------")

console.log(two_number_sum(arr1, 15))
console.log(two_number_sum(arr2, 15))
console.log(two_number_sum(arr3, 15))
console.log(two_number_sum(arr4, 12))
console.log(two_number_sum(arr5, 12))
console.log(two_number_sum(arr6, 0))
