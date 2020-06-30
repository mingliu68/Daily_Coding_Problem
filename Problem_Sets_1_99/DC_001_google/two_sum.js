// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function two_number_sum(array, k) {
    let cache = {}
    for (let num of array) {
        if (cache[ k - num ]) {
            console.log(`Matches found: ${num} and ${k-num}`)
            return true
        }
        else {
            if (cache [ num ]) {
                cache [ num ] = cache [ num ] + 1
                console.log(`${num} : ${cache[num]}`)
            } else {
                cache [ num ] = 1
                console.log(`${num} : ${cache[num]}`)
            }
        }
    }
    
    return false
}

console.log(two_number_sum([5, 1, 5, 2, 8], 10))