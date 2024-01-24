# txt = 'mano batai buvo Du, bet kazkas atsitiko - nerandu'
# print(len(txt))

# print(txt[len(txt)-1])
# raide_a = txt.count('a')
# print(raide_a)
# kiekZodziu = txt.count(' ') # zodziu suskaiciavimui tikrai netinka
# print(kiekZodziu)

# print(txt.capitalize())  # padaro didziaja tik pirma raide

# # ar zaisim dar (Taip \ Ne)
# # taip
# # TAIP
# # tAIp
# #         Taip
# print(txt.upper())
# print(txt.lower())
# mazasTxt = txt.lower()
# print(mazasTxt.islower())
# print(mazasTxt.isupper())

# print(txt.find('a'))
# print(txt[3:].find('a'))
# print(txt.find('a', 3))
# print(txt.find('a', 9, 30))
# print(txt.rfind('a'))

# atspausdinti visas a raides indeksus

# txt = 'mano batai buvo Du, bet kazkas atsitiko - nerandu'
# index = 0
# startPosition = 0
# while True:
#     index = txt.find('a', startPosition)
#     startPosition = index + 1
#     break
#     print(startPosition)
#     print('Index: ', index)

# print(txt)
# indeksai = []
# startPosition = 0
# aCount = txt.count('a')
# while len(indeksai) < aCount:
#     startPosition = txt.find('a', startPosition)
#     indeksai.append(startPosition)
#     startPosition += 1
# print(indeksai)

# t = '123abc456'
# print(t.isalnum())
# t1 = '123ab.c456'
# t2 = 'asdfg'
# print(t1.isalnum())
# print(t.isalpha())  # ar raides
# print(t2.isalpha())  # ar raides

# t3 = '      '
# t4 = ''
# t5 = '    t    '
# print(t3.isspace())
# print(t4.isspace())
# print(t4 == '')

# t6 = ' Ta das   '
# beTarpu = t6.strip()  # prieki ir gale pasalina tarpus
# print(beTarpu)

t1 = 'pirmas kartas, o gal ir ne'
print(t1.startswith('pi'))
print(t1.endswith('as'))

sp1 = t1.split(' ')
print(sp1)

sp2 = t1.split(' ', 2)
print(sp2)

sar = ['Jonas', '+', 'Ona', '=', 'KM']
txt = ' '.join(sar)
print(txt)

meile = 'Man labai patinka Coca Cola'
print(meile)
meile1 = meile.replace('Coca', 'Pepsi')
print(meile1)

pi = 3.141592

print(f'skaicius pi = {pi:1.4f}')
print(f'skaicius pi = {pi:10.4f}')

