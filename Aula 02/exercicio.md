# Exercício 
Utilizando o template da aula 01 faça:
<br/>
Crie um array que representa uma lista com pelo menos cinco posts do Facebook. Cada post deve conter as informações conforme a lista de objetos a seguir:
``` javascript
const posts = [
    {id:1, user:"Fulano de Tal", content:"Conteúdo do meu post", avatar:"path avatar",since:"12 h", likes:12, comments:[
        {id:1, content:"Que legal esse post"}
        {id:2, content:"Muito bom esse curso"}
        ],
        banner:"./path da imagem"
        }
    {id:2, user:"Sicrano", content:"Conteúdo do meu post", avatar:"path avatar",since:"1 h", likes:0, comments:[
        {id:1, content:"muito ruim esse post"}
        {id:2, content:"Muito bom esse curso"}
        ],
        banner:"./path da imagem"
        }
]
```

Você deve renderizar esses posts de modo que, se tiverem pelo menos um comentário, esse comentário deverá ser exibido. Se houver mais de um comentário, os comentários serão exibidos em forma de lista. Se houver um banner, ele deve ser exibido no card; caso contrário, somente o texto do card deverá ser exibido.