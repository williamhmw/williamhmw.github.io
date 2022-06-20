---
slug: passo-a-passo-to-do
title: Passo a passo da aplicação To-Do
authors: william
tags: [mobile, react native, JSX, state, props, to-do, aplicação]
---

> Um guia com o passo a passo de uma aplicação To-Do em React Native, explicando a lógica das funções, arquivos e decisões.

> Esse guia é um resumo do que entendi e aprendi durante um curso para que eu possa aplicar os conceitos em outros projetos.

<!--truncate-->
### Alteração de nome no header  

De acordo com a quantidade de tarefas que forem adicionadas ao TO-DO será necessário alterar a palavra `tarefa` para  plural ou vice-versa.

```ts showLineNumbers title="/src/components/Header.tsx"
export function Header({ tasksCounter }: HeaderProps) {
  // highlight-next-line
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas'
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        { <Text style={styles.tasksCounterBold}>{tasksCounter} {tasksCounterText}</Text> }
      </View>
    </View>
  )
}
```
Deve ser criado a variável `taskCounterText` para passarmos o valor correto do texto que deve ser exibido, para declarar corretamente essa String, é feito um `if` diretamente na variável.

No exemplo é utilizado o operador condicional ternário, que simplifica o `if` da seguinte forma:

```js title="Operador condicional ternário"
condição ? expressão1 : expressão1
```
taskCounter é igual a 1?
Se sim `taskCounterText` receberá o valor `'tarefa'`, senão, receberá o valor `'tarefas'`.

Dessa fomra o resultado dessa verificação ja é armazenado diretamente na variável, e declarada no campo `<Text>`

### Exibição de alertas 

Ao tentar adicionar um To-do com o mesmo nome, aparecerá um alerta no device informando que ja esta cadastrado.

```ts showLineNumbers title="/src/pages/Home.tsx"
function handleAddTask(newTaskTitle: string) {
    // highlight-start
    const taskWithSameTitle = tasks.find(task => task.title === newTaskTitle)

    if(taskWithSameTitle){
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }
}
    // highlight-end
```

Na função `handleAddTask` criamos uma variável para verificar se a tarefa possui o mesmo título, `taskWithSameTitle`, a variavel faz uma busca através do método `find` do JS que funciona da seguinte maneira.

```js title="Método find"
array.find(function(currentValue, index, arr),thisValue)
```

Ficando assim:

```js showLineNumbers title="Método find tasks"
tasks.find(task => task.title === newTaskTitle)
```
Criamos uma função arrow function(sem necessidade de ter um argumento), fazendo uma busca dentro do array `tasks`.

Função `task`, `task.title` === `newtaskTitle`, aqui verificamos se o task.title, que estamos tentando adcionar, é igual a newTaskTitle.

Depois de cirar essa variavel a passar o método `find` verificamos através de um `if` a condição que queremos.

```js showLineNumbers title="Método find"
if(taskWithSameTitle){
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }
```

Se `taskWithSameTitle` atender a condição que passamos na variavel, então irá retornar um `Alert.alert`, o primeiro texto é o título do alerta (que é obrigatório), e o segundo a mensagem que será exibida.