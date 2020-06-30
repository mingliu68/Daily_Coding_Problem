=====================================================================

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

=====================================================================

### My thought process:

* [ a ] will always return a
* [ a, b ] will always return max( a,b )
* [ a, b, c ] will return max( a, b, c, a+c)
    * [ a ] and [ c ] if c is non-negative or just [ a ] if c is negative
    * [ b ] only
    * [ c ] and [ a ] if a is non-negative or just [ c ] if a is negative
* [ a, b, c, d] will return max( **a**, **b**, **c**, **d**, **a + max( c,d )**, **b + d**, **c + a**, **d + max( a, b )**)
    * [ a ] and highest of [ c, d ]
    * [ b ] and [ d ] if d is non-negative or just [ b ] if d is negative
    * [ c ] and [ a ] if a is non-negative or just [ c ] if a is negative
    * [ d ] and highest of [ a, b ]

Negative numbers and zeros are automatically skipped, they are "free buffer"


### Brute Force

Start to see a pattern emerging.  start with each number, then sum up with the results from their non-adjacent lists recursively

Example:

**[2, 4, 7, 8, 5, 3, -5, 4, 2, 6, -3, 7]**

first break down into non-neg lists
* [ 2, 4, 7, 8, 5, 3 ]
* [ 4, 2, 6 ]
* [ 7 ]

loop thru every single element of every list

result from [2, 4, 7, 8, 5, 3] + result from [4, 2, 6] + result from [7]
```
15 + 10 + 7 = 32
```

```
##### [2, 4, 7, 8, 5, 3]
[2] + result from [7, 8, 5, 3] 
[2] + [8] + result from [3] 
[2] + [8] + [3] ===> 13

[4] + result from [8, 5, 3]
[4] + [8] + result from [3]
[4] + [8] + [3] ===> 15

result from [2] + [7] + result from [5,3]
[2] + [7] + [5] ===> 14

result from [2, 4] + [8] + result from [3]
[4] + [8] + [3] ===> 15

result from [2, 4, 7] + [5] 
[7] + result from [2] + [5]
[7] + [2] + [5] ===> 14

result from [2, 4, 7, 8] + [3]
[8] + result from [2, 4] + [3]
[8] + [4] + [3] ===> 15

**result = 15**
```

```
##### [4, 2, 6]
[4] + result from [6]
[4] + [6] ===> 10

[2] ===> 2

result from [4] + [6]
[4] + [6] ===> 10

**result = 10**
```

```
##### [7]
[7] ===> 7

**result = 7**
```

keep track of the best result from each non-zero / non-negative list

# Can this be done in O(n)?  YES

Dynamic Programming - keeping cache of best results from all the sub arrays 

Example: 
Let's use the first array from above

**[ 2, 4, 7, 8, 5, 3 ]**

* From each element, we have the option to add it or skip it.  
* We will run the function recursively based on two choices (using the current element or NOT using the current element)
* Recursive function will then run on the sub arrays based on if the current element is been used.  
* If it is, then sub array will start with the element after the next element (if 2 is used, then sub array will be [7,8,5,3])
* if it's not, then the sub array will start with the next element (if 2 is NOT used, then the sub array will be [4,7,8,5,3]).  
* We arrange recursive functions in a way where the one with the longest sub array is placed on top, so we can store the most results in our cache.  


↓↓↓   psudo code for positive sub array  ↓↓↓
----------------------

``` |
func ([2,4,7,8,5,3], cache)
    key = JSON.stringify([2,4,7,8,5,3])
    if(!cache[key]) {
        cache[key] = max(0 + func([4,7,8,5,3], cache), 2 + func([7,8,5,3], cache))
    }
    return cache[key]
                            
                            ↓↓↓
            func([4,7,8,5,3], cache) 
                key = JSON.stringify([4,7,8,5,3])
                if(!cache[key])
                    cache[key] = max(0 + func([7,8,5,3]), cache), 4 + func([8,5,3]), cache)
                return cache[key]

                                      ↓↓↓
                        function([7,8,5,3], cache)
                            key = JSON.stringify([7,8,5,3])
                            if(!cache[key])
                                cache[key] = max(0 + func([8,5,3]), cache), 7 + func([5,3]), cache)
                            return cache[key]

                            * [8,5,3] and [5,3] are base cases, so return 11 (8 and 3) and 5 (5)respectively
                            * [7,8,5,3] will then return the maximum value between (0 + 11) and (7 + 5), which is 12
                
                * We can now retrieve values from our cache / memoization table to solve for [4,7,8,5,3]
                * Values for both [7,8,5,3] and [8,5,3] are 12 and 11 respectively
                * [4,7,8,5,3] will then return the maximum value between (0 + 12) and (4 + 11), which is 15

    * Continue to retrieve values from our cache / memoization table to solve for [2,4,7,8,5,3]
    * Values for both [4,7,8,5,3] and [7,8,5,3] sub arrays are 15 and 12 respectively
    * [2,4,7,8,5,3] will then return the maximum value between (0 + 15) and (2 + 12), which is 15
```
cache / memoization table
Key | Value
--- | -----
[5,3] | 5
[8,5,3] | 11
[7,8,5,3] | 12
[4,7,8,5,3] | 15
[2,4,7,8,5,3] | 15


#### Time Complexity
* O(n) : single pass thru the original array to split it into multiple arrays with only positive elements
* O(1) x n => O(n) : single pass thru sub array to find the maximum sum for that sub array x n sub arrays (each operation will have 2 operations but only one require true operation while the other one is a simple lookup in the cache)

O(n) + O(n) => the time complexity is O(n) 