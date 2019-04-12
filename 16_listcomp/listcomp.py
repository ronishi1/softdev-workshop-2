# Ray Onishi (w/ Raymond Wu)
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-11

UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOWERCASE = UPPERCASE.lower()
DIGITS = [str(i) for i in range(10)]
SPECIAL = ".?!&#,;:-_*"

def threshold_checker(password):

    upper = [char for char in password if char in UPPERCASE]
    lower = [char for char in password if char in LOWERCASE]
    numbers = [char for char in password if char in DIGITS]
    specials = [char for char in password if char in SPECIAL]

    return len(upper) > 1 and len(lower) > 1 and len(numbers) > 1

print( threshold_checker('SDLKAaasdal123213!!&:;;:,__-') ) #True
print( threshold_checker('SDLKAl123213!!&:;;:,__-') ) #False
print( threshold_checker('SDLKAaasdal!!&:;;:,__-') ) #False
print( threshold_checker('Ab1') ) #False
print( threshold_checker('AAbb11') ) #True

def strength_checker(password):
    strength = 0

    if threshold_checker(password):
        p_length = len(password)
        if p_length > 10:
            strength += 5
        else:
            strength += p_length - 5

        numbers = [char for char in password if char in DIGITS]
        upper = [char for char in password if char in UPPERCASE]
        lower = [char for char in password if char in LOWERCASE]
        specials = [char for char in password if char in SPECIAL]
        if len(specials) > 0:
            strength += 1
        if len(specials) > 2:
            strength += 1
        if len(numbers) > 2:
            strength += 1
        if len(upper) > 2:
            strength +=1
        if len(lower) > 2:
            strength +=1

    return strength

print(strength_checker("bad")) #0
print(strength_checker("AaBbCc111#;&")) #10
print(strength_checker("ABcdefg123")) #7
print(strength_checker("ABcd11")) #1
print(strength_checker("ABcd11#&&")) #6
