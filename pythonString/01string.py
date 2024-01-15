print('daug \'teksto\' ir įvairių kabučių. Ir kitas tekstas')
kelias = 'C\\new\\tadas.txt'
print(kelias)
kitaskelias = r'C:/new/tada.txt'
print(kitaskelias)
# /n /t
print('labas \trytas')

t1 = 'Labas rytas'
print(t1)
print(t1[6])
print(t1[-1])
# t1[6] = 'R' # taip keisti negalime

print(t1[3:])
print(t1[3:8])
print(t1[::2])

t2 = 'Labai'
t3 = 'noriu'
t4 = 'namo'
t5 = t2 + t3 + t4
print(t5)
t6 = t2 + ' ' + t3 + ' ' + t4
print(t6)

# %s

print('%s %s %s' % (t3, t2, t4))
t7 = '%s %s %s' % (t3, t2, t4)
print(t7)

print('{} {} {}'.format(t4, t2, t3))
print(f'{t2} kitas tekstas {t3} kitas tekstas {t4}')

print(f'{(t2+" ")*3} {t3} {t4}')

# print(2 + '3') klaida

