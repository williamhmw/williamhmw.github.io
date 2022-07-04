---
slug: app-gocal-inserindo-navegacao-parte-2
title: App goCal - Inserindo navegação - Parte 2
authors: william
tags: [mobile, react native, aplicação, app, react navegation]
---

> Para navegar entre telas precisamos inserir uma nova biblioteca na aplicação.

> Uma das mais utilizadas no mercado é o React Navegation, que possui uma ótima documentação e aplicabilidade

<!--truncate-->
### Inserindo biblioteca na aplicação

No VS Code abrimos um novo terminal no projeto e iniciamos com o comando abaixo para instalar os pacotes necessários.

```bash title="Instalar pacote"
npm install @react-navigation/native
```

Em seguida vamos instalar as dependências que vamos utilizar inicialmente.

```bash title="Instalar dependência"
npm install react-native-screens react-native-safe-area-context
```

### Organizando as rotas

Precisamos envolver toda a aplicação dentro do `NavigationContainer`, em um app isso é feito geralmente no index.js ou App.js, no nosso caso, por questão de organização e adição de futuras rotas, vamos separar em partes.

Para organizar as rotas da navegação vamos criar uma nova pasta chamada `routes` dentro do `src`, dentro dela vamos criar o arquivo `stack.routes.js`, nela vamos organizar as rotas que são utilizadas para navegar entre as telas.

Vamos colocar o seguinte código:

```js showLineNumbers title="./routes/stack.routes.js"
import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import {Home} from '../pages/Home';
import {Data} from '../pages/Data';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="Home"
            component={Home}
            />
            <Screen
            name="Data"
            component={Data}
            />
        </Navigator>
    )
}
```

Dessa forma, quando chamarmos a Screen `Home`, ela que vai ser renderizada, quando chamarmos a Screen `Data`, ela que será renderizada.

Assim conseguimos organizar as rotas em um arquivo separado.

### Envolvendo aplicação no  NavigationContainer

Vamos criar mais um arquivo chamado `index.js` na pasta `routes` e colocar o seguinte código:

```js showLineNumbers title="./routes/index.js"
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}
```

Aqui colocamos o `NavigationContainer`, responsável por organizar toda a rota da aplicação, dentro dela chamamos o StackRoutes que criamos no arquivo `stack.routes.js`.

Dessa forma, se precisarmos adicionar novas rotas basta adicionar campos no `stack.routes.js` e se precisarmos separar diferentes rotas para diferentes situaçõs modificamos o `index.js`.

No `App.js` precisa ser adicionado o `<Routes/>` onde antes era o `Home`.

```js showLineNumbers title="@App.js"
export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      // highlight-next-line
      <Routes/>
    </>
  );
}
```

### Colocando navegação em um botão

Quando clicamos no `TouchableOpacity` "Avançar" na nossa aplicação, precisamos que seja carregado a próxima tela.

Para isso vamos criar uma função em `Home.js`.

```js showLineNumbers title="./src/pages/Home.js"
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
// highlight-next-line
import { useNavigation } from '@react-navigation/native';

  // highlight-start
export function Home() {
  const navigation = useNavigation()

  function openData(){
      navigation.navigate('Data');
  }
  // highlight-end
   return (
    <View style={styles.container}>
        <Text style={styles.title}>
                Para começar como podemos te chamar?
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Digite o seu nome"
        />
        <TouchableOpacity 
            style={styles.buttonAvancar}
            // highlight-next-line
            onPress={openData}
        >
            <Text style={styles.buttonsText}>Avançar</Text>
        </TouchableOpacity>
    </View>
  )
};
```
Nas linhas em destaque precisamos criar uma função que será chamada ao clicar no botão, vamos dar o nome de `openData` a ela.

Na função vamos utilizar o `useNavigation`, que é um recurso nativo de naevgação, precisamos fazer oimport dele o ínicio do código.

Depois vamos criar uma cont chamada `navigation` e passar a função nativa de navegação.

Na função `openData` colocamos nossa constante e passamos o método `navigate`, em seguida colocamos o nome da nossa rota que colocamos no arquivo `stack.routes.js`.
