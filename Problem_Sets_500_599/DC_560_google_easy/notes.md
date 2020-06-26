=====================================================================

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

=====================================================================

### My thought process:

1. Solving this problem via brute force would be using a nested for loop to find corresponding elements that add up to k. This will have a time complexity of O(n^2)

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
    function two_number_sum (array, k){
        if (array.length < 2) return false
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {
                if(i + j == k) return true
            }
        }
        return false
    }
    ```

2. Solving this in one pass would require a hashtable, or a collection of key value paris, to keep track of the number already seen.  key being the element/number that has already been seen and value being the index it occurs in (as an array).  Accessing any key value pair will have a time complexity of O(1).  This will only require one loop with the time complexity of O(n)

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
    function two_number_sum(array, k) {
        if (array.length < 2) return false
        let hash = {}
        for (let i = 0; i < array.length; i++) {
            if (hash.hasOwnProperty([ k - array[i] ])) return true
            else {
                if (hash.hasOwnProperty( array[i] )) {
                    hash[ array[i] ].push(i)        
                } 
                else {
                    hash[ array[i] ] = [i]
                }
            }
        }

        return false
    }
    ```

