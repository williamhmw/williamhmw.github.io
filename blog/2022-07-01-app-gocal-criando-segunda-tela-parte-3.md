---
slug: app-gocal-criando-segunda-tela-parte-3
title: App goCal - Criando a segunda tela - Parte 3
authors: william
tags: [mobile, react native, aplicação, app, react navegation]
---

> Vamos iniciar agora a montagem da segunda Tela

> Primeiro vamos começar adicionando os campos visuais da aplicação.

<!--truncate-->
### Inserindo os TextInputs na tela

Vamos iniciar modificando o texto do cabeçalho e depois seguir para os inputs.

Esta etapa vai ser basicamente a estilização da Screen.

```js showLineNumbers title="./pages/Data.js"
return (
        <View style={styles.container}>
            <Text style={styles.titleSecondScreen}>
                Olá,
            </Text>
            <Text style={styles.titleSecondScreenColor}>
                William Honorio
            </Text>
            <Text style={styles.title}>
                Vamos calcular o seu gasto energético basal!
            </Text>
            <TouchableOpacity style={styles.buttonAvancar}>
                <Text style={styles.buttonsText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
```

Depois vamos estilizar adicionar uns parâmetros no `style`.

```js showLineNumbers title="./pages/Data.js"
title:{
        fontFamily: 'Poppins',
        fontSize: 18,
        color: '#2C2C2C',
        fontWeight: 'bold',
        paddingTop: 45
      },
      titleSecondScreen:{
        fontFamily: 'Poppins',
        fontSize: 34,
        color: '#2C2C2C',
        fontWeight: 'bold'
      },
      titleSecondScreenColor:{
        fontFamily: 'Poppins',
        fontSize: 34,
        fontWeight: 'bold',
        color:'#37B874'
      },
```

### Inserindo um menu dropdown

Para inserir um menu dropdown para selecionarmos o sexo da pessoa, precisamos importar uma biblioteca, para isso vamos utilizar o comando abaixo.

```bash title="Adicionar input dropdown"
yarn add @react-native-picker/picker
```
Depois precisamos fazer a importação para o nosso `Data.js`

```js showLineNumbers title="./pages/Data.js"
import  { Picker }  from  '@react-native-picker/picker' ;
```

Criar um useState, que vai fazer a alteração das seleções.

```js showLineNumbers title="./pages/Data.js"
const [selectedGender, setSelectedGender] = useState();
    const [selectePhysicalActivity, setSelectedPhysicalActivity] = useState();
```

E depois inserir o código abaixo dentro do `return`.

```js showLineNumbers title="./pages/Data.js"
<Picker
            style={styles.picker}
            selectedValue={selectedGender}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) =>
                setSelectedGender(itemValue)
            }>
                <Picker.Item label="Feminino" value="feminino" fontFamily='Poppins' color='#2C2C2C'/>
                <Picker.Item label="Masculino" value="masculino" />
            </Picker>
```
Preciamos tambem estilizar o `Picker` para que fique semelhante aos outros inputs.

```js showLineNumbers title="./pages/Data.js"
picker:{
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#969CB3',
        backgroundColor: 'white',
        height: 56,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10
      },
```

Para acessar o reposítorio com mais instruções, [docusaurus.new](https://www.npmjs.com/package/@react-native-picker/picker)


Ao final, a Screen Data.js ficara com o seguinte código dentro da função `Data`.

```js showLineNumbers title="./pages/Data.js"
export function Data() {
    const [selectedGender, setSelectedGender] = useState();
    const [selectePhysicalActivity, setSelectedPhysicalActivity] = useState();


    return (
        <View style={styles.container}>
            <Text style={styles.titleSecondScreen}>
                Olá,
            </Text>
            <Text style={styles.titleSecondScreenColor}>
                William Honorio
            </Text>
            <Text style={styles.title}>
                Vamos calcular o seu gasto energético basal!
            </Text>
            <Picker
            style={styles.picker}
            selectedValue={selectedGender}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) =>
                setSelectedGender(itemValue)
            }>
                <Picker.Item label="Feminino" value="female" fontFamily='Poppins' color='#2C2C2C'/>
                <Picker.Item label="Masculino" value="male" />
            </Picker>
            <TextInput
            style={styles.input}
            placeholder="Sua idade"
            />
            <TextInput
            style={styles.input}
            placeholder="Seu peso"
            />
            <TextInput
            style={styles.input}
            placeholder="Sua altura"
            />
            <Picker
            style={styles.picker}
            selectedValue={selectePhysicalActivity}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) =>
                setSelectedPhysicalActivity(itemValue)
            }>
                <Picker.Item label="Nenhuma atividade física" value="noPhysicalActivity" />
                <Picker.Item label="Atividade física moderada" value="moderatePhysicalActivity" />
                <Picker.Item label="Atividade física intensa" value="intensePhysicalActivity" />
            </Picker>
            <TouchableOpacity style={styles.buttonAvancar}>
                <Text style={styles.buttonsText}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonVoltar}
            onPress={openHome}
            >
                <Text style={styles.buttonsTextGreen}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
};
```