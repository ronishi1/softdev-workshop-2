# Ray Onishi
# SoftDev2 pd7
# K22 -- Closure
# 2019-04-30

#1
#write a closure w outer function named 'repeat' such that the function call shown below will yield the outputs below
# r1(2) => hellohello
# r1(2) -> goodbyegoodbye
# repeat('cool')(3) -> coolcoolcool

def repeat(word):
    def r(n):
        return word * n
    return r

r1 = repeat('hello')
print(r1(2))
r1 = repeat('goodbye')
print(r1(2))
print(repeat('cool')(3))

#2 #3

def make_counter():
    count = 0
    def counter(inc = True):
        nonlocal count
        if(inc == False):
            return count
        else:
            count += 1
            return count
    return counter

ctr1 = make_counter()
print(ctr1()) #1
print(ctr1()) #2
print(ctr1()) #3
print(ctr1()) #4
ctr2 = make_counter()
print(ctr2()) #1
print(ctr2()) #2
print(ctr2()) #3

print("Checking count of counter1")
print(ctr1(False)) #4

print("Checking count of counter2")
print(ctr2(False)) #3
