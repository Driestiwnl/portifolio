def busca_binaria(lista, item):
    inicio = 0
    fim = len(lista) - 1
    while inicio <= fim:
        meio = (inicio + fim) // 2
        if lista[meio] == item:
            return meio
        elif lista[meio] < item:
            inicio = meio + 1
        else:
            fim = meio - 1
    return -1

lista = [10, 20, 30, 40, 50, 60]
print(busca_binaria(lista, 40))  # 3
