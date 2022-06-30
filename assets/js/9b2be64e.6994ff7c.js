"use strict";(self.webpackChunkwilliamhmw_github_io=self.webpackChunkwilliamhmw_github_io||[]).push([[3814],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={slug:"o-basico-do-react-native",title:"O b\xe1sico do React Native",authors:"william",tags:["mobile","react native","JSX","state","props"]},l=void 0,p={permalink:"/blog/o-basico-do-react-native",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-17-o-basico.md",source:"@site/blog/2022-06-17-o-basico.md",title:"O b\xe1sico do React Native",description:"Aqui vai um resumo sobre os recursos b\xe1sicos de como funciona uma aplica\xe7\xe3o no React Native.",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"mobile",permalink:"/blog/tags/mobile"},{label:"react native",permalink:"/blog/tags/react-native"},{label:"JSX",permalink:"/blog/tags/jsx"},{label:"state",permalink:"/blog/tags/state"},{label:"props",permalink:"/blog/tags/props"}],readingTime:2.44,truncated:!0,authors:[{name:"William Honorio",title:"Desenvolvedor em aprendizado",url:"https://github.com/williamhmw",imageURL:"https://raw.githubusercontent.com/williamhmw/williamhmw.github.io/main/blog/william.jpg",key:"william"}],frontMatter:{slug:"o-basico-do-react-native",title:"O b\xe1sico do React Native",authors:"william",tags:["mobile","react native","JSX","state","props"]},prevItem:{title:"Criando o App goCal",permalink:"/blog/passo-a-passo-to-do"},nextItem:{title:"Comandos em terminais",permalink:"/blog/comandos-em-terminais"}},m={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aqui vai um resumo sobre os recursos b\xe1sicos de como funciona uma aplica\xe7\xe3o no React Native."),(0,r.kt)("p",null,"Primeiramente fazemos a importa\xe7\xe3o do React para que seja poss\xedvel utilizar o JSX, depois importamos alguns componentes que s\xe3o do React native."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="Import"',showLineNumbers:!0,title:'"Import"'},"import React from 'react';\nimport { Text, View } from 'react-native';\n")),(0,r.kt)("p",null,"O c\xf3digo abaixo tem algumas l\xf3gcas para analisar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="Hello world"',showLineNumbers:!0,title:'"Hello','world"':!0},'const HelloWorldApp = () => {\n  return (\n    // highlight-next-line\n    <View\n      style={{\n        flex: 1,\n        justifyContent: "center",\n        alignItems: "center"\n      }}>\n      // highlight-next-line\n      <Text>Hello, world!</Text>\n      // highlight-next-line\n    </View>\n  )\n}\nexport default HelloWorldApp;\n')),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"<View>")," e o ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text>")," s\xe3o componentes do React, sendo o ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," para renderizar textos e o ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," para renderizar um cont\xeainer."),(0,r.kt)("p",null,"No c\xf3digo acima passamos um estilo para tudo que estiver dentro do componente ",(0,r.kt)("inlineCode",{parentName:"p"},"View"),"."),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorldApp")," \xe9 um novo componente que criamos, dentrod e uma aplica\xe7\xe3o possu\xedmos deversos componentes."),(0,r.kt)("p",null,"O pr\xf3ximo conceito s\xe3o os ",(0,r.kt)("inlineCode",{parentName:"p"},"Props"),", que s\xe3o componentes criados por n\xf3s que podem ser utilizados em v\xe1rios locais diferentes no aplicativo, capaz de alterar alguns par\xe2metros dependendo de onde estiver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="Hello props"',showLineNumbers:!0,title:'"Hello','props"':!0},"import React from 'react';\nimport { Text, View, StyleSheet } from 'react-native';\n// highlight-start\nconst styles = StyleSheet.create({\n  center: {\n    alignItems: 'center'\n  }\n})\n// highlight-end\n\n// highlight-start\nconst Greeting = (qualquernome) => {\n  return (\n    <View style={styles.center}>\n      <Text>Hello {qualquernome.name}!</Text>\n    </View>\n  );\n}\n// highlight-end\n\n// highlight-start\nconst LotsOfGreetings = () => {\n  return (\n    <View style={[styles.center, {top: 50}]}>\n      <Greeting name='Rexxar' />\n      <Greeting name='Jaina' />\n      <Greeting name='Valeera' />\n    </View>\n  );\n}\n\n// highlight-end\n// highlight-next-line\nexport default LotsOfGreetings;\n")),(0,r.kt)("p",null,"1 - O c\xf3digo ",(0,r.kt)("inlineCode",{parentName:"p"},"const styles")," cria uma vari\xe1vel de estilo que pode ser utilizada diversas vezes para v\xe1rios componentes, isso permite por exemplo clocar somente o tipo de fonte, cor, etc uma vez, depois quando se quer passar o mesmo atributo para outro componente basta passar a var\xedavel criada."),(0,r.kt)("p",null,"2 - No c\xf3digo criamos a vari\xe1vel ",(0,r.kt)("inlineCode",{parentName:"p"},"Greeting")," e passamos um nome para ela, no caso ",(0,r.kt)("inlineCode",{parentName:"p"},"qualquernome"),".\nEm ",(0,r.kt)("inlineCode",{parentName:"p"},"<View>")," colocamos o estilo j\xe1 parametrizado acima, em ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text>")," passamos o texto a ser renderiado e acresentamos dentro das chaves ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," o nome do nosso props, no caso ",(0,r.kt)("inlineCode",{parentName:"p"},"qualquernome")," e inserimos um ",(0,r.kt)("inlineCode",{parentName:"p"},".")," e colocamos qualquer outro nome a frente, no caso ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),".\nA vari\xe1vel que passamos precisa ser escrita no formato ",(0,r.kt)("inlineCode",{parentName:"p"},"{qualquernome.name}")," funciona da seguinte forma, o primeiro \xe9 o nome passado para a fun\xe7\xe3o, e o segundo o nome do props."),(0,r.kt)("p",null,"3 - Criamos outra vari\xe1vel na qual receberemos outros valores para o props, alterando assim os nomes.\nEm ",(0,r.kt)("inlineCode",{parentName:"p"},"<View>")," colocamos o estilo j\xe1 parametrizado acima e acresentamos mais um estilo na pr\xf3rpia linha do view.\nLogo abaixo colocamos o nome da fun\xe7\xe3o acima, no caso ",(0,r.kt)("inlineCode",{parentName:"p"},"Greeting")," e passamos para o props o nome que desejamos.\nQuando chamamos ",(0,r.kt)("inlineCode",{parentName:"p"},"<Greeting")," estamos puxando a fun\xe7\xe3o logo acima e colocando ou valor para ",(0,r.kt)("inlineCode",{parentName:"p"},"name=")),(0,r.kt)("p",null,"4 - Pra finalizar exportamos a fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"LotsOfGreetings")," para ela ser renderizada na tela."))}d.isMDXComponent=!0}}]);