---
slug: comandos-em-terminais
title: Comandos em terminais
authors: william
tags: [comandos, mobile, react, terminal, powershell]
---

Para executar algumas ações no dia-a-dia precisamos executar alguns comandos através de terminais. Abaixo uma listagem com os principais para quem esta estudando React Native.

<!--truncate-->

:::info

Esses comandos são para executar um app em um emulador android, depois de seguir todo um processo de instalação e configuração.

:::

Executar o `Metro` para emular o app no emulador:
```git showLineNumbers title="Iniciar Metro"
npm start
```

Em seguida executar o comando para iniciar o emulador do android:
```git showLineNumbers title="Iniciar Emulador Android"
yarn android
```


:::info

Esses comandos são para executar o Docosaurus, plataforma de documenação e blog.

:::

Executar o `Build` para gerar os arquivos estáticos que vão para o GitHub Pages
```bash showLineNumbers title="Iniciar build"
npm run build
```

Executar o `Serve` para iniciar no servidor local localhost.
```bash showLineNumbers title="Iniciar servidor local"
npm run build
```

Executar o `GIT_USER` para iniciar o deploy no GitHub Pages.
```bash showLineNumbers title="Iniciar deploy"
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

No caso trocar o `<GITHUB_USERNAME>` pelo nome configurado no terminal.

Se for executar pelo terminal do PowerShell deve ser inserido o código abaixo.

```bash showLineNumbers title="Iniciar deploy pelo Poweshell"
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```


**Bora codar!!!**