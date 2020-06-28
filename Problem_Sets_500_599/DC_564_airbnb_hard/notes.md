=====================================================================

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

=====================================================================

### My thought process:

[ a ] will always return a
[ a, b ] will always return max( a,b )
[ a, b, c ] will return max( a, b, c, a+c)
    [ a ] and [ c ] if c is non-negative or just [ a ] if c is negative
    [ b ] only
    [ c ] and [ a ] if a is non-negative or just [ c ] if a is negative
[ a, b, c, d] will return max( **a**, **b**, **c**, **d**, **a + max( c,d )**, **b + d**, **c + a**, **d + max( a, b )**)
    [ a ] and highest of [ c, d ]
    [ b ] and [ d ] if d is non-negative or just [ b ] if d is negative
    [ c ] and [ a ] if a is non-negative or just [ c ] if a is negative
    [ d ] and highest of [ a, b ]

Negative numbers automatically skipped, they are "free buffer"

Start to see a pattern emerging.  start with each number, then sum up with the results from their non-adjacent lists recursively
Also, maybe keep track of lists already seen before and its result
Recursive dynamic programming

Example:

**[2, 4, 7, 8, 5, 3, -5, 4, 2, 6, -3, 7]**

first break down into non-neg lists
[ 2, 4, 7, 8, 5, 3 ]
[ 4, 2, 6 ]
[ 7 ]

loop thru every single element of every list

result from [2, 4, 7, 8, 5, 3] + result from [4, 2, 6] + result from [7]
15 + 10 + 7 = 32

```
#####[2, 4, 7, 8, 5, 3]
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
#####[4, 2, 6]
[4] + result from [6]
[4] + [6] ===> 10

[2] ===> 2

result from [4] + [6]
[4] + [6] ===> 10

**result = 10**
```

```
#####[7]
[7] ===> 7

**result = 7**
```



1. 

2. 

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
    
    ```