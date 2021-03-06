---
slug: app-gocal-criando-um-app-parte-1
title: App goCal - Criando um App - Parte 1
authors: william
tags: [mobile, react native, aplicação, app]
---

> Um guia com o passo a passo de como criar uma aplicação em React Native, explicando a lógica das funções, arquivos e decisões.

> Esse guia é um resumo do que entendi e aprendi durante um curso para que eu possa aplicar os conceitos em outros projetos.

<!--truncate-->
### Iniciando um novo projeto em React Native  

No VS Code abrimos um novo terminal e iniciamos com o comando abaixo.

```bash title="Criar novo projeto"
npx react-native init AppGoCal
```

Depois de executar o comando será feito o download do template do React Native e criado a pasta do projeto com o nome AppGoCal

Para iniciar o projeto e verificar como o App está execute o comando abaixo:

```bash title="Iniciar emulador Metro"
npx react-native start
```

Isso irá executar o `Metro`, compilador responsável por gerar os códigos em Javascript para o emulador, na sequência abra um novo terminal e execute o comando abaixo para iniciar o emulador.

```bash title="Iniciar emulador android"
npx react-native run-android
```

### Limpando os arquivos

Para iniciar a contrução do aplicativo vamos deletar e modificar alguns arquivos que vem no template padrão do React Native quando criamos o projeto.

Para começar vamos criar uma pasta na raiz do projeto chamada `src`, dentro dela criaremos duas pastas, a `pages` e `components`. Essas modificações são feitas por questões de organização.

Podemos apagar o arquivo `.eslintrc.js` e `.prettierrc.js`, no momento não vamos utilizá-los.

No arquivo `App.js` vamos apagar todo o código inicial e colocar o código abaixo.

```js showLineNumbers title="@/App.js"
import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}
```
O `StatusBar` é um componente utilziado para controla a barra de status do iOS e Android, onde é exibido, a hora, notificações, baterias, etc.

Dessa forma estamos passando um estilo "claro" e o background da barra de status como transparente.

Depois vamos criar um novo arquivo em `src/pages` chamado `Home.js`, é ele que é refenciado no código acima como `{ Home }`, ele será responsável pela página inicial do App.

Nele colocaremos o seguinte código


```js showLineNumbers title="./src/pages/Home.js"
import React from 'react';
import { View, Text } from 'react-native';

export function Home() {
  return (
    <View>
        <Text>
        // highlight-next-line
                Welcome in App for calculate calories, William!
        </Text>
    </View>
  )
};
```
Na tela deverá aparecer o texto Welcome in App for calculate calories, William!.

### Começando a estilizar o App

Para começar a estilizar o App vamos utilizar o componente `StyleSheet`.

Primeiro vamos criar uma variável responsável pelos estilos chamado `styles` e passar algumas informações envolvendo em um container.

```js showLineNumbers title="./src/pages/Home.js"
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DCDCE5',
        paddingVertical:70,
        paddingHorizontal:30,
    }
    
})
```

Depois vamos passar esse estilo para a View principal.

```js showLineNumbers title="./src/pages/Home.js"
import React from 'react';
import { View, Text } from 'react-native';


export function Home() {
  return (
    // highlight-next-line
     <View style={styles.container}>
        <Text>
                Para começar como podemos te chamar?
        </Text>
    </View>
  )
};
```

Nos componentes que desejamos passar um estilo, basta colocar no formato do código abaixo.

```js showLineNumbers title="./src/pages/Home.js"
     <View style={styles.nomedoobjeto}>
        <Text style={styles.nomedoobjeto2}>
                Exemplo
        </Text>
    </View>
```
### Adicionando TextInput

Vamos acresentar o TextInput na aplicação e depois fazer as estilizações por último.

```js title="./src/pages/Home.js"
import { StyleSheet, View, Text, TextInput } from 'react-native';
```

Quando for acrescentado um componente core do React Native é necessário fazer a importação como no código acima.

Depois vamos adicionar o campo do TextInput e passar algumas propriedades para ele.

```js showLineNumbers title="./src/pages/Home.js"
export function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
                Para começar como podemos te chamar?
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Digite o seu nome"
        />
    </View>
  )
};
```

### Adicionando TouchableOpacity

Para adicionar o TouchableOpacity vamos acrescentar a importação no ínicio do código e colocar dentro da View principal.

```js showLineNumbers title="./src/pages/Home.js"
<View style={styles.container}>
        <Text style={styles.title}>
                Para começar como podemos te chamar?
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Digite o seu nome"
        />
        <TouchableOpacity style={styles.buttonAvancar}>
            <Text style={styles.buttonsText}>Avançar</Text>
        </TouchableOpacity>
    </View>
```

### Estilizando Input e Button

Para finalizar essa etapa vamos estilzar com o seguinte código:

```js showLineNumbers title="./src/pages/Home.js"
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DCDCE5',
        paddingVertical:70,
        paddingHorizontal:20,
    },
    title:{
        fontFamily: 'Poppins',
        fontSize: 18,
        color: '#2C2C2C',
        fontWeight: 'bold',
    },
    input:{
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#969CB3',
        backgroundColor: 'white',
        textAlign: 'left',
        paddingHorizontal:20,
        paddingVertical:18,
        height: 56,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10
    },
    buttonAvancar:{
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#37B874',
        paddingVertical: 18
    },
    buttonsText:{
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    }
})
```