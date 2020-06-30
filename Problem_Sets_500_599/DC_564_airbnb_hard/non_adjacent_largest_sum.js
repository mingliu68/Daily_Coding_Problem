// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

function get_largest_sum(orig_array) {
    let [index, arrays, max, cache] = [0, [], 0, {}]

    while (orig_array.length > 0 && index < orig_array.length) {
        if (orig_array[index] < 1) {
            if (index == 0) orig_array.shift()
            else {
                arrays.push(orig_array.splice(0, index))
                orig_array.shift()
                index = 0
            }
        }
        else index += 1
    }

    if (orig_array.length > 0) arrays.push(orig_array)

    for (let array of arrays) {
        let key = JSON.stringify(array)
        max += cache[key] ? cache[key] : non_adjacent_largest_sum(array, cache)
    }

    return max
}

function non_adjacent_largest_sum(array, cache = {}) {
    if(array.length == 0) return 0

    let key = JSON.stringify(array)

    if (cache[key]) return cache[key]

    else {
        if (array.length == 3) {
            cache[key] = Math.max(array[0] + array[2], array[1])
        }
        else if (array.length < 3) {
            cache[key] = Math.max(...array)
        }
        else {
            cache[key] = Math.max(non_adjacent_largest_sum(array.slice(1), cache), array[0] + non_adjacent_largest_sum(array.slice(2), cache))
        }    
    }

    return cache[key]
}





//↓↓↓   basic test   ↓↓↓

let arr = [0, 1, 0, 1, 3, 2, 0, 2, 8, 8, 7, -7, 3, 2, 5, 7, 8, 9, -3, 2, 5, 3, -2, 5, -3, 0, 8, 5, 2, 3, 5, 7, 16, 12, 8, -3, 9, 28, 5, 7];
let arr1 = JSON.parse(JSON.stringify(arr))
console.log(get_largest_sum(arr));
//console.log(get_largest_sum([-3, -2, 0, 0, -5]));

console.log(get_largest_sum(arr1))
console.log(get_largest_sum([5,1,1,5]))