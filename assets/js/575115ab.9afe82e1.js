"use strict";(self.webpackChunkwilliamhmw_github_io=self.webpackChunkwilliamhmw_github_io||[]).push([[1497],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={slug:"app-gocal-criado-a-tela-de-resultado-parte-4",title:"App goCal - Criando a tela de resultado - Parte 4",authors:"william",tags:["mobile","react native","aplica\xe7\xe3o","app","react navegation"]},s=void 0,c={permalink:"/blog/app-gocal-criado-a-tela-de-resultado-parte-4",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-02-app-gocal-criado-a-tela-de-resultado-parte-4.md",source:"@site/blog/2022-07-02-app-gocal-criado-a-tela-de-resultado-parte-4.md",title:"App goCal - Criando a tela de resultado - Parte 4",description:"Deposi de criar as 2 primeiras telas vamos continuar para a \xfaltima, onde exibiremos o resultado do c\xe1lculo.",date:"2022-07-02T00:00:00.000Z",formattedDate:"July 2, 2022",tags:[{label:"mobile",permalink:"/blog/tags/mobile"},{label:"react native",permalink:"/blog/tags/react-native"},{label:"aplica\xe7\xe3o",permalink:"/blog/tags/aplicacao"},{label:"app",permalink:"/blog/tags/app"},{label:"react navegation",permalink:"/blog/tags/react-navegation"}],readingTime:1.705,truncated:!0,authors:[{name:"William Honorio",title:"Desenvolvedor em aprendizado",url:"https://github.com/williamhmw",imageURL:"https://raw.githubusercontent.com/williamhmw/williamhmw.github.io/main/blog/william.jpg",key:"william"}],frontMatter:{slug:"app-gocal-criado-a-tela-de-resultado-parte-4",title:"App goCal - Criando a tela de resultado - Parte 4",authors:"william",tags:["mobile","react native","aplica\xe7\xe3o","app","react navegation"]},prevItem:{title:"App goCal - Inserindo funcionalidades - Parte 5",permalink:"/blog/app-gocal-inserindo-funcionalidades-parte-5"},nextItem:{title:"App goCal - Criando a segunda tela - Parte 3",permalink:"/blog/app-gocal-criando-segunda-tela-parte-3"}},p={authorsImageUrls:[void 0]},u=[{value:"Inserindo TextInput e TouchableOpacity",id:"inserindo-textinput-e-touchableopacity",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deposi de criar as 2 primeiras telas vamos continuar para a \xfaltima, onde exibiremos o resultado do c\xe1lculo.")),(0,r.kt)("p",null,"Nessa fase, ser\xe1 mostrado somente o c\xf3digo pois todos o processo de ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," e estiliza\xe7\xe3o ja foi feito nos passo a passo anteriores."),(0,r.kt)("h3",{id:"inserindo-textinput-e-touchableopacity"},"Inserindo TextInput e TouchableOpacity"),(0,r.kt)("p",null,"Para esta tela, adicionar o c\xf3dgio abaixo, onde ja foi apontado nos posts anteriores as suas funionalides."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="./pages/Result.js"',showLineNumbers:!0,title:'"./pages/Result.js"'},"import React, { useState } from 'react';\nimport { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';\nimport { useNavigation, useRoute } from '@react-navigation/native';\n\nexport function Result (){\n    const navigation = useNavigation();\n\n    return(\n        <View style={styles.container}>\n            <Text style={styles.titleSecondScreen}>\n                Aqui est\xe1 o seu\n                {\"\\n\"}\n                <Text style={styles.titleSecondScreenColor}>\n                    resultado\n                </Text>\n            </Text>\n            <Text style={styles.titleNoBold}>\n                Seu <Text style={styles.title}>metabolismo basal</Text> \xe9 de: \n                {\"\\n\"}\n                <Text style={styles.titleColorGreen}>1606 calorias.</Text>\n            </Text>\n            <Text style={styles.titleNoBold}>\n                Para <Text style={styles.title}>manter o seu peso</Text> voc\xea precisa consumir em m\xe9dia: \n                {\"\\n\"}\n                <Text style={styles.titleColorGreen}>1928 calorias.</Text>\n            </Text>\n            <Text style={styles.titleNoBold}>\n                Para <Text style={styles.title}>perder peso</Text> voc\xea precisa sonsumir em m\xe9dia: \n                {\"\\n\"}\n                <Text style={styles.titleColorGreen}>1638 calorias.</Text>\n            </Text>\n            <Text style={styles.titleNoBold}>\n                Para <Text style={styles.title}>ganhar peso</Text> voc\xea precisa consumir em m\xe9dia: \n                {\"\\n\"}\n                <Text style={styles.titleColorGreen}>1638 calorias.</Text>\n            </Text>\n            <TouchableOpacity \n            style={styles.buttonAvancar}\n            onPress={() => navigation.goBack()}\n            >\n                <Text style={styles.buttonsText}>Reiniciar</Text>\n            </TouchableOpacity>\n        </View>\n    )\n};\n\nconst styles = StyleSheet.create({\n    container:{\n    flex: 1,\n    backgroundColor: '#DCDCE5',\n    paddingVertical:70,\n    paddingHorizontal:20,\n  },\n  picker:{\n    fontFamily: 'Poppins',\n    fontSize: 14,\n    color: '#969CB3',\n    backgroundColor: 'white',\n    height: 56,\n    borderRadius: 8,\n    marginBottom: 10\n  },\n  title:{\n    fontFamily: 'Poppins',\n    fontSize: 18,\n    color: '#2C2C2C',\n    fontWeight: 'bold',\n    paddingTop: 45,\n    paddingBottom: 20\n  },\n  titleNoBold:{\n    fontFamily: 'Poppins',\n    fontSize: 18,\n    color: '#2C2C2C',\n    fontWeight: 'normal',\n    paddingBottom: 30\n  },\n  titleColorGreen:{\n    fontFamily: 'Poppins',\n    fontSize: 18,\n    color: '#37B874',\n    fontWeight: 'bold',\n    paddingTop: 45,\n    paddingBottom: 20\n  },\n  titleSecondScreen:{\n    fontFamily: 'Poppins',\n    fontSize: 34,\n    color: '#2C2C2C',\n    fontWeight: 'bold',\n    paddingBottom: 40\n  },\n  titleSecondScreenColor:{\n    fontFamily: 'Poppins',\n    fontSize: 34,\n    fontWeight: 'bold',\n    color:'#37B874'\n  },\n  input:{\n    fontFamily: 'Poppins',\n    fontSize: 14,\n    color: '#969CB3',\n    backgroundColor: 'white',\n    textAlign: 'left',\n    paddingHorizontal:20,\n    paddingVertical:18,\n    height: 56,\n    borderRadius: 8,\n    marginBottom: 10\n  },\n  buttonAvancar:{\n    alignItems: 'center',\n    borderRadius: 5,\n    backgroundColor: '#37B874',\n    paddingVertical: 18\n  },\n  buttonVoltar:{\n    alignItems: 'center',\n    borderRadius: 5,\n    backgroundColor: '#F3F3F3',\n    paddingVertical: 18\n  },\n  buttonsText:{\n    fontFamily: 'Poppins',\n    fontSize: 14,\n    color: 'white',\n    fontWeight: 'bold'\n  },\n  buttonsTextGreen:{\n    fontFamily: 'Poppins',\n    fontSize: 14,\n    color: '#37B874',\n    fontWeight: 'bold'\n  }\n})\n\n")))}m.isMDXComponent=!0}}]);