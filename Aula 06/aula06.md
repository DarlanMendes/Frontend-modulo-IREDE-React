


## Aula 06: Compartilhamento de Estado no Frontend

Na sexta aula do módulo de frontend, exploramos o conceito fundamental de **lifting** (elevação) de estado, detalhado nos links [Legacy React Docs](https://legacy.reactjs.org/docs/lifting-state-up.html) e [React Learn](https://react.dev/learn/sharing-state-between-components). Esse conceito permite a transferência de propriedades entre componentes que não mantêm uma relação direta de pai e filho.

Além disso, discutimos o fenômeno conhecido como **prop drilling** ([React Docs](https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props)), que ocorre quando uma propriedade é passada por vários componentes apenas para torná-la disponível em um componente filho ou em uma hierarquia inferior. Reconhecemos que, em determinadas situações, o prop drilling pode resultar em um código mais complexo, dificultando a sua manutenção e interpretação.

Introduzimos a **Context API** como uma solução potencial para os casos em que o prop drilling se torna excessivo, simplificando a gestão do estado global e reduzindo a complexidade do código gerado. Ao utilizar a Context API, podemos melhorar a manutenibilidade do código e facilitar a compreensão da relação entre os componentes.Vimos através de exercício prático, como criar o contexto e criar um provedor (provider) criação de um escopo que possibilita disponibilização do contexto juntamente com outros hooks como o useState.
