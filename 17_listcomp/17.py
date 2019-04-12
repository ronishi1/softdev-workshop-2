#1
#a
a1 = ['00']
for i in range(4):
   a1.append(str(int(a1[-1])+22))

print(a1)
    
#b

b1 = ["00" if i==0 else str(i*22) for i in range (0,5) ]
print (b1)

a2 = [7]
for i in range(4):
    a2.append( a2[-1] + 10 )
print(a2)

b2 = [7+10*i for i in range(0,5)]
print(b2)

a3 = [0,0,0]
for i in range(1,3):
    a3.append(0)
    a3.append(i)
    a3.append(i*2)

print(a3)

b3 = [ (i % 3) * (i//3) for i in range (9)]
print(b3)

a4 = []
