=====================================================================

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

** DUPLICATE   DC_560 **

=====================================================================

### My thought process:

1. Dynamic programming, keeping track of the numbers already seen in a cache / memoization (hash table)

2. loop thru the list, with each element we perform the following
    1. find the (k - element) in cache, if found, return true
    2. if (k - element) not in cache, add element into cache {"element" : 1}, key being the element itself, and value being the number of times it has appeared
    3. return false if loop thru the entire list and no matches found

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
    
    ```