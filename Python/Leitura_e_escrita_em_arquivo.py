def escrever_arquivo(nome_arquivo, conteudo):
    with open(nome_arquivo, 'w') as arquivo:
        arquivo.write(conteudo)

def ler_arquivo(nome_arquivo):
    with open(nome_arquivo, 'r') as arquivo:
        return arquivo.read()

escrever_arquivo('exemplo.txt', 'Este é um exemplo de escrita.')
print(ler_arquivo('exemplo.txt'))
