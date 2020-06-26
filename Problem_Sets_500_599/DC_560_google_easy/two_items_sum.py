# This problem was recently asked by Google.

# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

# Bonus: Can you do this in one pass?


# two pass nested array

def two_number_sum_nested(array, k):
    if len(array) < 2 : 
        print("Array has less than 2 items")
        return False
    for i, num1 in enumerate(array):
        for j, num2 in enumerate(array[i+1:], i+1):
            if num1 + num2 == k : 
                print(f"Matches found: ", num1, " at index " , i, " & " , num2 , " at index ", j)
                return True
    print("No matches found")
    return False


# one pass with a hashtable
def two_number_sum(array, k):
    if len(array) < 2 : 
        print("Array has less than 2 items")
        return False
    dict = {}
    for i, num in enumerate(array):
        if str( k - num ) in dict: 
            print(f"Matches found: ", num, " at index " , i, " & " , (k - num) , " at index ", dict[str(k-num)][0])
            print(dict)
            return True
        else :
            if str( num ) in dict: 
                dict[str(num)].append(i)
            else :
                dict[str(num)] = [i]      
                  
    print("No matches found")
    print(dict)
    return False


# ↓↓↓   basic test   ↓↓↓

arr1 = [1,3,2,5,7,9,12]
arr2 = []
arr3 = [3]
arr4 = [3,8]
arr5 = [3,8,3,2,8,7,2,9,7,12]
arr6 = [-2, 5, -8, 3,9,7,11,6,-2,-5]

print("↓↓↓ nested loop ↓↓↓ \n -------------------------")

print(two_number_sum_nested(arr1, 15))
print(two_number_sum_nested(arr2, 15))
print(two_number_sum_nested(arr3, 15))
print(two_number_sum_nested(arr4, 12))
print(two_number_sum_nested(arr5, 12))
print(two_number_sum_nested(arr6, 0))

print("↓↓↓ one pass with hash table ↓↓↓ \n -------------------------")

print(two_number_sum(arr1, 15))
print(two_number_sum(arr2, 15))
print(two_number_sum(arr3, 15))
print(two_number_sum(arr4, 12))
print(two_number_sum(arr5, 12))
print(two_number_sum(arr6, 0))