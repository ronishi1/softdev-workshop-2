# I'm Driving -- Ray Onishi & Tina Wong
# SoftDev2 pd7
# K18 -- Getting Clever with List Comprehensions
# 2019-04-16

list1 = [1,2,3]
list2 = [2,3,4]
list3 = [7, 9, 2, 0, 5]
list4 = [7.0, 3.5, 4]

# union of sets A and B
def union(l1,l2):
    return [x for x in l1 if x not in l2] + l2

print("-----------------------")
print("UNION")
print(union(list1,list2))
print(union(list2, list3))
print(union(list3, list2))
print(union(list3, list4))

# intersection of sets A and B
def intersection(l1, l2):
    return [x for x in l1 if x in l2]

print("-----------------------")
print("INTERSECTION")
print(intersection(list1,list2))
print(intersection(list2, list3))
print(intersection(list3, list4))

# set difference: all members of U that are not members of A (U / A)
def set_difference(l1, l2):
    return [x for x in l1 if x not in l2]

print("-----------------------")
print("SET DIFFERENCE")
print(set_difference(list1,list2))
print(set_difference(list2, list3))
print(set_difference(list3, list2))

# symmetric difference: set of all objects that are a member of exactly one of A and B
# set ifference of the union and intersection
def symmetric_difference(l1,l2):
    return set_difference(union(l1,l2), intersection(l1,l2))

print("-----------------------")
print("SYMMETRIC DIFFERENCE")
print(symmetric_difference(list1,list2))
print(symmetric_difference(list2, list3))
print(symmetric_difference(list3, list2))

# cartesian product: set whose members are all possible ordered pairs
def cartesian_product(l1,l2):
    return [(x,y) for x in l1 for y in l2]

print("-----------------------")
print("CARTESIAN PRODUCT")
print(cartesian_product(list1,list2))
print(cartesian_product(list2, list3))
print(cartesian_product(list3, list2))
print("-----------------------")

def pyth_triples(n):
    return [(x,y,z) for x in range(1,n) for y in range(x,n) for z in range(y,n) if z*z == x*x + y*y]

print(pyth_triples(100))

list_to_sort  = [8, 6, 10, 5, 1, 9, 7, 3, 2, 4]
# should be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
list_to_sort_2  = [64,654687,13651,32132,4,1365,1221,54,31,58]
list_to_sort_3  = [64,654687,13651,32132,4,1365,1221,54,31,31]

def quicksort(l):
    #base case
    if len(l) <= 1: return l

    pivot = l[ len(l) // 2 ]
    less = quicksort( [i for i in l if i < pivot] )
    more = quicksort( [i for i in l[0:len(l)//2] + l[len(l)//2+1:] if i >= pivot] )
    # skip index of pivot but include those that have same value as pivot
    # good for lists w/ duplicate values

    return less + [pivot] + more

print( quicksort(list_to_sort) )
print( quicksort(list_to_sort_2) )
print( quicksort(list_to_sort_3) )
