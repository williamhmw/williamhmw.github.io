---
slug: passo-a-passo-todo
title: Passo a passo da aplicação To-Do
authors: william
tags: [mobile, react native, JSX, state, props, to-do, aplicação]
---

> Um guia com o passo a passo de uma aplicação To-Do em React Native, explicando a lógica das funções, arquivos e decisões.

> Esse guia é um resumo do que entendi e aprendi durante um curso para que eu possa aplicar os conceitos em outros projetos.

<!--truncate-->
### Alteração de nome no header  

De acordo com a quantidade de tarefas que forem adicionadas ao TO-DO será necessário alterar a palavra `tarefa` para  plural ou vice-versa.

```tsx showLineNumbers title="/src/components/Header.tsx"
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

### Adicionando alterações para o label `TextInput` 

Quando realizamos alguma ação no campo de texto podemos passar algumas ações, como por exemplo escrever algo no campo de texto, ou clicar no botão de enviar, ou OK no teclado do device.

No exemplo abaixo são três campos que serã adicionados informações.

```tsx showLineNumbers title="/src/components/TodoInput.tsx"
return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        // highlight-star
        value={task}
        onChangeText={setTask}
        onSubmitEditing = {handleAddNewTask}
        // highlight-end
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  )
```
O campo `value={task}` recebe um valor, que pode ser alguma informação ou variável, nesse caso estamos recebendo a informação da variável `task`, isso quer dizer que o valor desse `<TextInput>` será a task que estamos inserindo.

O campo `onChangeText={setTask}` recebe a váriavel `setTask`, que é utilizada para alterar o `estado` da variável `task`, isso é necessário para manter a imutabilidade do `useState`. Ou seja, o `onChangeText` vai armazenar todo o texto que estiver sendo escrito na varial setTask, que depois será passada para a variável task, e posteriormente será o `value` do `TextInput`.

O Campo `onSubmitEditing` é acionado quando o botão de OK do teclado do device é pressionado, ou o botão do `<TouchableOpacity>`. Esse evento deve chamar uma função que será acionada ao apertar o botão, no caso da aplicação, deverá chamar a função `handleAddNewTask`, responsável por adicionar uma nova Task.

### Exibição de alertas 

Ao tentar adicionar um To-do com o mesmo nome, aparecerá um alerta no device informando que ja esta cadastrado.

```tsx showLineNumbers title="/src/pages/Home.tsx"
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

Depois de criar essa variavel a passar o método `find` verificamos através de um `if` a condição que queremos.

```js showLineNumbers title="Método find"
if(taskWithSameTitle){
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }
```

Se `taskWithSameTitle` atender a condição que passamos na variavel, então irá retornar um `Alert.alert`, o primeiro texto é o título do alerta (que é obrigatório), e o segundo a mensagem que será exibida.

O `return` é colocado para que depois que sexa exibido, continue a rodar as próximas etapas.

### Alerta ao remover task

Quando clicamos no ícone para remover uma task, irá aparecer um `Alert` informando se tem certeza que deseja excluir.

O Alert é composto pela seguinte expressão:

```js title="Alert"
Alert.alert(title, message?, buttons?, options?)
```
O primeiro é o título, o segundo é a mensagem que será mostrado, o terceiro os botões, e o quarto as opções. Nesse exemplo estmoas indo até o terceiro. Seguindo essa lógica, preenchemos da seguinte forma:

```tsx showLineNumbers title="/src/pages/Home.tsx"
function handleRemoveTask(id: number) {
    Alert.alert('Remover item','Tem certeza que você deseja remover esse To-DO?',[
      {
        style: 'cancel',
        text: 'Não'
      },
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          const updateTasks = tasks.filter(task => task.id !== id);

          setTasks(updateTasks);
        }
      }
    ])
  }
```

Na função `handleRemoveTask` inserimos um `Alert.alert` e passamos alguns atributos, que são o título, a mensagem e os botões.

O primeiro tem a propriedade `cancel` com o texto `Não`, o segundo tem a propriedade `destructive`, com o texto `Sim`, em seguida temos uma lógica.

Se o botão Sim for pressionado, então prosseguirá com a função que remove a Task.

### Editando uma Task - parte 1

Será necessário criar uma nova função, que será responsável por editar a task.

Primeiro precisamso criar um `type`, passando algumas variaveis e tipando elas.

```tsx showLineNumbers title="/src/pages/Home.tsx"
type EditTaskArgs = {
  taskId: number;
  tassNewTitle: string;
}
```


```tsx showLineNumbers title="/src/pages/Home.tsx"
  function handleEditTask({taskId, taskNewTitle}: EditTaskArgs){
    // highlight-start
    const updatedTasks = tasks.map(task => ({...task}))

    const taskToBeUpdate = updatedTasks.find(task => task.id === task.id);

    if(!taskToBeUpdate)
    return;

    taskToBeUpdate.title = taskNewTitle;

    setTasks(updatedTasks);
    // highlight-end
  }
```
// highlight-next-line

  Primeiramente atuallizamos a variável `updateTasks` com o array onde estão as tasks, depois fazemos uma verifição se ela não existia, da apenas um `return` e nada acontece, caso a task exista, fazemos a alteração do nome e colocamos na variável `taskToBeUpdate`, em seguida tempos o `setTasks` que fará o update no nome.


```tsx showLineNumbers title="/src/pages/Home.tsx"
  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />
      // highlight-start
      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTasks}
      />
      // highlight-end
    </View>
  )

```

No `<TaskList>` precisamos inserir o `editTask` e passar a função responsável pela edição.

### Editando uma Task - parte 2

Agora precisamso refatorar alguams partes do código, começando pelo arquivo `TaskList.tsx`

Criaremos um novo arquivo com o nome `TaskItem.tsx` na pasta components para criar um componente com os itens que estão dentro o `<ItemWrapper>`

```tsx showLineNumbers title="/src/components/TaskList.tsx"
<ItemWrapper index={index}>
            
          </ItemWrapper>
```

O novo arquivo ficara da forma abixo, copiando todas as informaçãoes a partir do `<View>`

```tsx showLineNumbers title="/src/components/TaskLItem.tsx"
import React from 'react';
import { View } from 'react-native';

import trashIcon from '../assets/icons/trash/trash.png'

export function TaskItem(){
    return (
        <View>
        <View>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
                //TODO - use onPress (toggle task) prop
              >
                <View 
                  testID={`marker-${index}`}
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  { item.done && (
                    <Icon 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}
                </View>

                <Text 
                  style={item.done ? styles.taskTextDone : styles.taskText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeTask(item.id)}
              //TODO - use onPress (remove task) prop
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
        </View>
    )
}
```

Outra parte que deve ser transferida para o novo arquivo são os estilos, responsável pela customização da interface.

```tsx showLineNumbers title="/src/components/TaskItem.tsx"
const styles = StyleSheet.create({
    taskButton: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 15,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#B2B2B2',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskText: {
      color: '#666',
      fontFamily: 'Inter-Medium'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 4,
      backgroundColor: '#1DB863',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskTextDone: {
      color: '#1DB863',
      textDecorationLine: 'line-through',
      fontFamily: 'Inter-Medium'
    }
  })
```