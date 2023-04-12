const livros = [
    {
        "id": 1000,
        "title": "Cangaceiro JavaScript",
        "price": 90.90,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/OretornodocangaceiroJavaScript_ebook_large.jpg?v=1631654115",
        "description": "O paradigma funcional está cada vez mais presente em frameworks modernos. E com o JavaScript em constante evolução, os desenvolvedores cangaceiros estão sempre aprendendo novas formas de aprimorar a manutenção e legibilidade de seus códigos, armando-se de conceitos e técnicas para se aventurar em terras ainda mais avançadas e frameworks que possuem grande demanda no atual mercado de trabalho."
    },
    {
        "id": 1001,
        "title": "API REST",
        "price": 40.00,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_b015df35-d58e-499e-833b-fb87331bb05f_large.png?v=1625775240",
        "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
        "id": 1002,
        "title": "Tuning de SQL",
        "price": 40.00,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_2ce37502-af36-4aa1-90a4-2b7c5d45713c_large.jpg?v=1640806385",
        "description": "As instruções SQL são o principal ponto de análise quando falamos sobre performance de programas, pois a maneira como as informações são acessadas e processadas em um banco de dados pode ser a maior causa de demora na execução. Entender quando e como buscar por performance e, dessa maneira, atingir um desempenho adequado é o objetivo do Tuning de SQL.      "
    },
    {
        "id": 1003,
        "title": "Cangaceiro JavaScript",
        "price": 90.90,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/OretornodocangaceiroJavaScript_ebook_large.jpg?v=1631654115",
        "description": "O paradigma funcional está cada vez mais presente em frameworks modernos. E com o JavaScript em constante evolução, os desenvolvedores cangaceiros estão sempre aprendendo novas formas de aprimorar a manutenção e legibilidade de seus códigos, armando-se de conceitos e técnicas para se aventurar em terras ainda mais avançadas e frameworks que possuem grande demanda no atual mercado de trabalho."
    },
    {
        "id": 1004,
        "title": "API REST",
        "price": 40.00,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_b015df35-d58e-499e-833b-fb87331bb05f_large.png?v=1625775240",
        "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
        "id": 1005,
        "title": "Tuning de SQL",
        "price": 40.00,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_2ce37502-af36-4aa1-90a4-2b7c5d45713c_large.jpg?v=1640806385",
        "description": "As instruções SQL são o principal ponto de análise quando falamos sobre performance de programas, pois a maneira como as informações são acessadas e processadas em um banco de dados pode ser a maior causa de demora na execução. Entender quando e como buscar por performance e, dessa maneira, atingir um desempenho adequado é o objetivo do Tuning de SQL.      "
    },
    {
        "id": 1006,
        "title": "Cangaceiro JavaScript",
        "price": 90.90,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/OretornodocangaceiroJavaScript_ebook_large.jpg?v=1631654115",
        "description": "O paradigma funcional está cada vez mais presente em frameworks modernos. E com o JavaScript em constante evolução, os desenvolvedores cangaceiros estão sempre aprendendo novas formas de aprimorar a manutenção e legibilidade de seus códigos, armando-se de conceitos e técnicas para se aventurar em terras ainda mais avançadas e frameworks que possuem grande demanda no atual mercado de trabalho."
    },
    {
        "id": 1007,
        "title": "API REST",
        "price": 40.00,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_b015df35-d58e-499e-833b-fb87331bb05f_large.png?v=1625775240",
        "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
        "id": 1008,
        "title": "Tuning de SQL",
        "price": 40.00,
        "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_2ce37502-af36-4aa1-90a4-2b7c5d45713c_large.jpg?v=1640806385",
        "description": "As instruções SQL são o principal ponto de análise quando falamos sobre performance de programas, pois a maneira como as informações são acessadas e processadas em um banco de dados pode ser a maior causa de demora na execução. Entender quando e como buscar por performance e, dessa maneira, atingir um desempenho adequado é o objetivo do Tuning de SQL.      "
    }
]

// Novo Objeto
let newBook = {
    "id": 1009, 
    "title": "O universo da programação",
    "price": 66.99,
    "image": "https://books.google.co.uk/books/publisher/content?id=Z1J1DwAAQBAJ&hl=pt-BR&pg=PA1&img=1&zoom=3&sig=ACfU3U2Y6-H0tWUohF7AwUoTGtpEt6CNMg&w=1280",
    "description": "Desenvolvimento de software não é mais somente uma área de trabalho, mas um verdadeiro universo em constante expansão. São tantas opções de áreas de atuação, tantas tecnologias distintas e plataformas, que é possível se perder em meio a uma chuva de informação para quem quer ingressar em programação. Qual o perfil profissional? É preciso ter formação? Por onde começar? Neste livro, William Oliveira cria uma trilha de conhecimento encorajadora para apresentar o universo da programação. O autor apresenta o cenário atual e os conceitos básicos da área, a fim de desmistificar a figura do programador para tornar a profissão palpável para qualquer pessoa que realmente queira se inserir nela. Você será guiado por este caminho pelo qual conhecerá as possibilidades da área de desenvolvimento de software, sendo entregue com a inspiração e as melhores dicas para mergulhar neste universo."
}
livros.push(newBook);

export { livros };
