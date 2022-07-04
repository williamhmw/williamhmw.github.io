---
slug: app-gocal-inserindo-funcionalidades-parte-5
title: App goCal - Inserindo funcionalidades - Parte 5
authors: william
tags: [mobile, react native, aplicação, app, react navegation]
---

> Deposi de criar as 2 primeiras telas vamos continuar para a última, onde exibiremos o resultado do cálculo.

<!--truncate-->
### Mudar o nome dinâmicamente - Variável e função

Para inserir ou alterar o nome na primeira tela e atualizar na tela seguinte, precisamos passar alguns parâmetros.

```js title="./src/pages/Home.js"
import React, {useState} from 'react';
```

```js showLineNumbers title="./src/pages/Home.js"
const [nameUser, setnameUser] = useState()

function openData(){
      navigation.navigate('Data', {nameUser});
  }
```

Vamos criar uma variável onde o nome do usuário será armazenado, utilizando o `useState`, para isso precisamos fazer o import desse componente no começo do código.

Depois precisamos passar para a função `openData` a variável com o valor que queremos passar para a próxima tela, no caso o `nameUser`, que é o valor imutável devido ao useState.

### Mudar o nome dinâmicamente - TextInput e TouchableOpacity

Vamos adicionar agora algums propriedades para o `TextInput` e `TouchableOpacity` para que eles recebam os valores, aramazenem na variável e executem a função `openData` para abrir a segunda tela.

O código será o seguinte:

```js showLineNumbers title="./src/pages/Home.js"
<TextInput
            style={styles.input}
            placeholder="Digite o seu nome"
            onChangeText={setNameUser}
            value={nameUser}
        />
        <TouchableOpacity 
            style={styles.buttonAvancar}
            onPress={openData}
        >
            <Text style={styles.buttonsText}>Avançar</Text>
        </TouchableOpacity>
```
No `TextInput` em `onChangeText` estamos armazenando o valor digitado na variável `setNameUser`, no `value` estamos recebendo o valor da variável imutável.

Em seguida quando acionamos o `TouchableOpacity`, com o `onPress` executamos a função `openData`.

### Recebendo valores na próxima tela

Para receber os valores na tela `Data.js` precisamos adicionar o componente `useRoute`.

```js title="./src/pages/Data.js"
import { useNavigation, useRoute } from '@react-navigation/native';
```

Em seguida precisamos adicionar a propriedade para receber esse valor da tela anterior e informar no campo onde o nome deve aparecer.

```js title="./src/pages/Data.js"
    const route = useRoute();
    const { nameUser } = route.params;
```

```js title="./src/pages/Data.js"
    <Text style={styles.titleSecondScreen}>
                Olá,
            </Text>
            <Text style={styles.titleSecondScreenColor}>
            // highlight-next-line
                {nameUser}
            </Text>
            <Text style={styles.title}>
                Vamos calcular o seu gasto energético basal!
            </Text>
```

### Verificar se o nome está em branco

Para verificar se o nome foi preenchido na tela principal, `Home.js`, vamos criar uma condição na função `openData`, que será acionada quando clicarmos em "Avançar" e irá exbir um alerta.

Para utlizar o componente `Alert` precisamos fazer o import no ínicio do arquivo.

```js title="./src/pages/Home.js"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
```

```js title="./src/pages/Home.js"
    function openData(){
    if(nameUser === ""){
      Alert.alert("Nome não foi preenchido", "Por favor, inserir o seu nome no campo indicado.")
    }else{
      navigation.navigate('Data', {nameUser});
    }
  }
```

Dessa forma, se o `nameUser` não tiver valor, ele irá gerar um alerta, caso contrário ele seguirá para a próxima tela.

### Adicionar teclado numero

para os `TextInput` da tela `Data` podemos colocar como parametro o código `keyboardType='numeric'`, dessa forma quando abrirmos o campo para digitar, será exibido apenas os números.