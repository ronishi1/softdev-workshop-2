# Ray Onishi
# SoftDev2 pd7
# K23 -- Memoize
# 2019-05-02
#*******************************************************************
# N: memoization: process of storing previously calculated results
# (i.e. writing 'memos') as to avoid re-calculation

#*******************************************************************
# write a closure to achieve memoization to do a fib(n) calculator
def memoize(f):
    memo = {}
    def helper(x):
        if x not in memo.keys():
            memo[x] = f(x)
        return memo[x]
    return helper

def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print(fib(40))
for x in range(8):
    print(fib(x))
