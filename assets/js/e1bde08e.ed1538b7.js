"use strict";(self.webpackChunkwilliamhmw_github_io=self.webpackChunkwilliamhmw_github_io||[]).push([[9617],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return o.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?o.createElement(g,i(i({ref:a},c),{},{components:t})):o.createElement(g,i({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3518:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=t(7462),n=t(3366),r=(t(7294),t(3905)),i=["components"],l={slug:"app-gocal-criando-um-app-parte-1",title:"App goCal - Criando um App - Parte 1",authors:"william",tags:["mobile","react native","aplica\xe7\xe3o","app"]},s=void 0,p={permalink:"/blog/app-gocal-criando-um-app-parte-1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-29-app-gocal-criando-um-app-parte-1.md",source:"@site/blog/2022-06-29-app-gocal-criando-um-app-parte-1.md",title:"App goCal - Criando um App - Parte 1",description:"Um guia com o passo a passo de como criar uma aplica\xe7\xe3o em React Native, explicando a l\xf3gica das fun\xe7\xf5es, arquivos e decis\xf5es.",date:"2022-06-29T00:00:00.000Z",formattedDate:"June 29, 2022",tags:[{label:"mobile",permalink:"/blog/tags/mobile"},{label:"react native",permalink:"/blog/tags/react-native"},{label:"aplica\xe7\xe3o",permalink:"/blog/tags/aplicacao"},{label:"app",permalink:"/blog/tags/app"}],readingTime:3.77,truncated:!0,authors:[{name:"William Honorio",title:"Desenvolvedor em aprendizado",url:"https://github.com/williamhmw",imageURL:"https://raw.githubusercontent.com/williamhmw/williamhmw.github.io/main/blog/william.jpg",key:"william"}],frontMatter:{slug:"app-gocal-criando-um-app-parte-1",title:"App goCal - Criando um App - Parte 1",authors:"william",tags:["mobile","react native","aplica\xe7\xe3o","app"]},prevItem:{title:"App goCal - Inserindo navega\xe7\xe3o - Parte 2",permalink:"/blog/app-gocal-inserindo-navegacao-parte-2"},nextItem:{title:"Passo a passo da aplica\xe7\xe3o To-Do",permalink:"/blog/passo-a-passo-todo"}},c={authorsImageUrls:[void 0]},m=[{value:"Iniciando um novo projeto em React Native",id:"iniciando-um-novo-projeto-em-react-native",level:3},{value:"Limpando os arquivos",id:"limpando-os-arquivos",level:3},{value:"Come\xe7ando a estilizar o App",id:"come\xe7ando-a-estilizar-o-app",level:3},{value:"Adicionando TextInput",id:"adicionando-textinput",level:3},{value:"Adicionando TouchableOpacity",id:"adicionando-touchableopacity",level:3},{value:"Estilizando Input e Button",id:"estilizando-input-e-button",level:3}],u={toc:m};function d(e){var a=e.components,t=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Um guia com o passo a passo de como criar uma aplica\xe7\xe3o em React Native, explicando a l\xf3gica das fun\xe7\xf5es, arquivos e decis\xf5es.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esse guia \xe9 um resumo do que entendi e aprendi durante um curso para que eu possa aplicar os conceitos em outros projetos.")),(0,r.kt)("h3",{id:"iniciando-um-novo-projeto-em-react-native"},"Iniciando um novo projeto em React Native"),(0,r.kt)("p",null,"No VS Code abrimos um novo terminal e iniciamos com o comando abaixo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Criar novo projeto"',title:'"Criar',novo:!0,'projeto"':!0},"npx react-native init AppGoCal\n")),(0,r.kt)("p",null,"Depois de executar o comando ser\xe1 feito o download do template do React Native e criado a pasta do projeto com o nome AppGoCal"),(0,r.kt)("p",null,"Para iniciar o projeto e verificar como o App est\xe1 execute o comando abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Iniciar emulador Metro"',title:'"Iniciar',emulador:!0,'Metro"':!0},"npx react-native start\n")),(0,r.kt)("p",null,"Isso ir\xe1 executar o ",(0,r.kt)("inlineCode",{parentName:"p"},"Metro"),", compilador respons\xe1vel por gerar os c\xf3digos em Javascript para o emulador, na sequ\xeancia abra um novo terminal e execute o comando abaixo para iniciar o emulador."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Iniciar emulador android"',title:'"Iniciar',emulador:!0,'android"':!0},"npx react-native run-android\n")),(0,r.kt)("h3",{id:"limpando-os-arquivos"},"Limpando os arquivos"),(0,r.kt)("p",null,"Para iniciar a contru\xe7\xe3o do aplicativo vamos deletar e modificar alguns arquivos que vem no template padr\xe3o do React Native quando criamos o projeto."),(0,r.kt)("p",null,"Para come\xe7ar vamos criar uma pasta na raiz do projeto chamada ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),", dentro dela criaremos duas pastas, a ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"components"),". Essas modifica\xe7\xf5es s\xe3o feitas por quest\xf5es de organiza\xe7\xe3o."),(0,r.kt)("p",null,"Podemos apagar o arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," e ",(0,r.kt)("inlineCode",{parentName:"p"},".prettierrc.js"),", no momento n\xe3o vamos utiliz\xe1-los."),(0,r.kt)("p",null,"No arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," vamos apagar todo o c\xf3digo inicial e colocar o c\xf3digo abaixo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="@/App.js"',showLineNumbers:!0,title:'"@/App.js"'},"import React from 'react';\nimport { StatusBar } from 'react-native';\n\nimport { Home } from './src/pages/Home';\n\nexport default function App() {\n  return (\n    <>\n      <StatusBar \n        barStyle=\"light-content\" \n        translucent \n        backgroundColor=\"transparent\" \n      />\n      <Home />\n    </>\n  );\n}\n")),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusBar")," \xe9 um componente utilziado para controla a barra de status do iOS e Android, onde \xe9 exibido, a hora, notifica\xe7\xf5es, baterias, etc."),(0,r.kt)("p",null,'Dessa forma estamos passando um estilo "claro" e o background da barra de status como transparente.'),(0,r.kt)("p",null,"Depois vamos criar um novo arquivo em ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages")," chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"Home.js"),", \xe9 ele que \xe9 refenciado no c\xf3digo acima como ",(0,r.kt)("inlineCode",{parentName:"p"},"{ Home }"),", ele ser\xe1 respons\xe1vel pela p\xe1gina inicial do App."),(0,r.kt)("p",null,"Nele colocaremos o seguinte c\xf3digo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},"import React from 'react';\nimport { View, Text } from 'react-native';\n\nexport function Home() {\n  return (\n    <View>\n        <Text>\n        // highlight-next-line\n                Welcome in App for calculate calories, William!\n        </Text>\n    </View>\n  )\n};\n")),(0,r.kt)("p",null,"Na tela dever\xe1 aparecer o texto Welcome in App for calculate calories, William!."),(0,r.kt)("h3",{id:"come\xe7ando-a-estilizar-o-app"},"Come\xe7ando a estilizar o App"),(0,r.kt)("p",null,"Para come\xe7ar a estilizar o App vamos utilizar o componente ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,r.kt)("p",null,"Primeiro vamos criar uma vari\xe1vel respons\xe1vel pelos estilos chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," e passar algumas informa\xe7\xf5es envolvendo em um container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},"const styles = StyleSheet.create({\n    container:{\n        flex: 1,\n        backgroundColor: '#DCDCE5',\n        paddingVertical:70,\n        paddingHorizontal:30,\n    }\n    \n})\n")),(0,r.kt)("p",null,"Depois vamos passar esse estilo para a View principal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},"import React from 'react';\nimport { View, Text } from 'react-native';\n\n\nexport function Home() {\n  return (\n    // highlight-next-line\n     <View style={styles.container}>\n        <Text>\n                Para come\xe7ar como podemos te chamar?\n        </Text>\n    </View>\n  )\n};\n")),(0,r.kt)("p",null,"Nos componentes que desejamos passar um estilo, basta colocar no formato do c\xf3digo abaixo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},"     <View style={styles.nomedoobjeto}>\n        <Text style={styles.nomedoobjeto2}>\n                Exemplo\n        </Text>\n    </View>\n")),(0,r.kt)("h3",{id:"adicionando-textinput"},"Adicionando TextInput"),(0,r.kt)("p",null,"Vamos acresentar o TextInput na aplica\xe7\xe3o e depois fazer as estiliza\xe7\xf5es por \xfaltimo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./src/pages/Home.js"',title:'"./src/pages/Home.js"'},"import { StyleSheet, View, Text, TextInput } from 'react-native';\n")),(0,r.kt)("p",null,"Quando for acrescentado um componente core do React Native \xe9 necess\xe1rio fazer a importa\xe7\xe3o como no c\xf3digo acima."),(0,r.kt)("p",null,"Depois vamos adicionar o campo do TextInput e passar algumas propriedades para ele."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},'export function Home() {\n  return (\n    <View style={styles.container}>\n        <Text style={styles.title}>\n                Para come\xe7ar como podemos te chamar?\n        </Text>\n        <TextInput\n            style={styles.input}\n            placeholder="Digite o seu nome"\n        />\n    </View>\n  )\n};\n')),(0,r.kt)("h3",{id:"adicionando-touchableopacity"},"Adicionando TouchableOpacity"),(0,r.kt)("p",null,"Para adicionar o TouchableOpacity vamos acrescentar a importa\xe7\xe3o no \xednicio do c\xf3digo e colocar dentro da View principal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},'<View style={styles.container}>\n        <Text style={styles.title}>\n                Para come\xe7ar como podemos te chamar?\n        </Text>\n        <TextInput\n            style={styles.input}\n            placeholder="Digite o seu nome"\n        />\n        <TouchableOpacity style={styles.buttonAvancar}>\n            <Text style={styles.buttonsText}>Avan\xe7ar</Text>\n        </TouchableOpacity>\n    </View>\n')),(0,r.kt)("h3",{id:"estilizando-input-e-button"},"Estilizando Input e Button"),(0,r.kt)("p",null,"Para finalizar essa etapa vamos estilzar com o seguinte c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./src/pages/Home.js"',showLineNumbers:!0,title:'"./src/pages/Home.js"'},"const styles = StyleSheet.create({\n    container:{\n        flex: 1,\n        backgroundColor: '#DCDCE5',\n        paddingVertical:70,\n        paddingHorizontal:20,\n    },\n    title:{\n        fontFamily: 'Poppins',\n        fontSize: 18,\n        color: '#2C2C2C',\n        fontWeight: 'bold',\n    },\n    input:{\n        fontFamily: 'Poppins',\n        fontSize: 14,\n        color: '#969CB3',\n        backgroundColor: 'white',\n        textAlign: 'left',\n        paddingHorizontal:20,\n        paddingVertical:18,\n        height: 56,\n        borderRadius: 8,\n        marginTop: 20,\n        marginBottom: 10\n    },\n    buttonAvancar:{\n        alignItems: 'center',\n        borderRadius: 5,\n        backgroundColor: '#37B874',\n        paddingVertical: 18\n    },\n    buttonsText:{\n        fontFamily: 'Poppins',\n        fontSize: 14,\n        color: 'white',\n        fontWeight: 'bold'\n    }\n})\n")))}d.isMDXComponent=!0}}]);