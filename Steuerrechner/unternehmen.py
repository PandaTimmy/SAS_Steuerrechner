file = open("unternehmen.txt", mode="r", encoding='utf-8')
unternehmen = file.readlines()

for x in range(len(unternehmen)):
    if unternehmen[x][-1:] == "\n":
        unternehmen[x] = unternehmen[x][:-1]


print('\n\nvar unternehmenListe = [')
print("    {label: '- Unternehmen auswählen -', value: '-'},")


for x in range(len(unternehmen)):
    print("    {label: '" + unternehmen[x] + "', value: '" + unternehmen[x] + "'},")


print("]\n\n")