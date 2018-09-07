# JSX

Alteração do uso de class para className para indentificar classes para o CSS

O retorno de um render() dever se de somente um elemento com todo o conteudo do componente

Utilização de components deve ser feita com a primeira letra em maiuscula para diferenciar como um elemento customizado dentro do JSX e não um elemento do html

# Class component

Geralmente utilizado quando a nessecidade de utilizar um state que pode ser alterado em tempo de execução da aplicação react

# Functional component

Neste e geralmente utilizado quando não existe a necessidade de realizar manutenção do state quando a aplicação esta sendo executada. Convecionado como boa prática sua utilização. Componente de apresentação de conteudo ou stateless component

# Conteudo dinamico em component

Todo conteudo que necessita de utilizar JS para ser exebido dinamicamente deve ser incluido no JSX dento `{ javascript }`

# PROPS

PROPS são atributos declarados dentro das TAGS dos components que poden ser utilizado no seu interior fazendo uso do seu dinamismo e reutilidade. No functional component são pasados como parametros da function no class component são passados via constructor

```JSX
  <Person name="Leandro" age="32" />

  //Dentro do functional component
  (props) => {
    {props.name} {props.age}

  }

  //Dentro do class component
  constructor (props) {

  }

  render () {
    return (

      {this.props.name} {this.props.age}

    );
  }
```

# PROPS CHILDREN

`{porps.children}` server para acessar todo o conteudo interno de um component sendo utilizado `<Component> Este conteudo vai pode ser acessado no props.children </Component>`

# STATE

Utilizado para class component ser modificado dinamicamente

```JSX
  state = {
    contador: 1
  }

  //Para acessar o state
  render () {
    {this.state.contador}
  }
```

# STATE e PROPS

Atualmente são os unicos elementos que disparam eventos onde a UI será renderizada novamente. Seus valores podem ser atribuidos dinamicamente. Essa é sua principal diferença do `props` que não pode receber modificações externas

# Component container

Onde dever ser incluida logica e manipulação de state.
functional component devem apenas reagir as alterações de state.

# Metodos por PROPS

Metodos podem ser passados via atributos e serem utilizados dentro do component filho

#Paramentros para metodos

Existe duas maneiras de serem utilizados uma com a execução do metodo dentro do evento atreves de uma arrow function `onclick={() => this.nomeDoMetodo(paramentro)}` esta utilização e meno eficiente.

A outra forma é utilizado o `bind` dentro do evento para referenciar ao this do metodo
`onClick={this.nomeDoMetodo.bind(this, parametro)}`
