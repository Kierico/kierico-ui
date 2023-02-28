# Kiérico UI

## #01 A base de um Design System

### #1.4 Criando pacote de tokens

**<img src="imgMd\1.4criandoPacoteDeTokens.png">**

#### Na pasta `tokens`:

- `npm init -y`

- `npm i -D typescript`

- `npx tsc --init`

    Se quiser `npx tsc`, para converter o código de TS para JS.

<br/><hr/><br/>

### #1.6 Build do pacote com TSUP

<!-- Agora vamos entender o que é o TSUP e como configurar ele para converter nosso código de TS para JS. -->

[TSUP](https://github.com/egoist/tsup)

#### Na pasta `tokens`:

- `npm i tsup -D`

**<img src="imgMd\1.6buildDoPacoteComTSUP.png">**

```json
"scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
```

- `npm run build`

- `npm run dev`

<br/><hr/><br/>

### #1.7 Configurando Monorepo

**<img src="imgMd\1.7.0configurandoMonorepo.png">**

#### Na pasta `react`:

- `npm init -y`

- `npm i typescript -D`

- `npm i tsup -D`

**<img src="imgMd\1.7.1package-jsonReact.png">**

```json
"name": "@kierico-ui/react",

"scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
```

- `npm run build`

#### Na raiz ( cd .. cd .. )

**<img src="imgMd\1.7.2raiz.png">**

- `npm init -y`

**<img src="imgMd\1.7.3package-jsonGlobal.png">**

apagar tudo e reescrever:

```json
{
  /** global/package-json */
  "private": true,
  "workspaces": [
      "packages/*"
  ]
}
```

***Excluir*** a pasta *`node_modules`* das pastas '**react**' e '**tokens**'.

***Excluir*** o arquivo *`package-lock.json`* das pastas '**react**' e '**tokens**'.

**<img src="imgMd\1.7.4package-jsonReact.png">**

```json
"devDependencies": {
  "@kierico-ui/tokens": "*", // <--
  "tsup": "^6.6.3",
  "typescript": "^4.9.5"
}
```

Na raiz:

**<img src="imgMd\1.7.5raiz.png">**

- `npm i`

**<img src="imgMd\1.7.6package-jsonTokens.png">**

```json
{
  "name": "@kierico-ui/tokens",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js", // <--
  "module": "./dist/index.mjs", // <--
  "types": "./dist/index.d.ts", // <--
  "scripts": { "..." }
}
```

**<img src="imgMd\1.7.7package-jsonReact.png">**

```json
{
  "name": "@kierico-ui/react",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js", // <--
  "module": "./dist/index.mjs", // <--
  "types": "./dist/index.d.ts", // <--
  "scripts": {"..."}
}
```
Na raiz:

**<img src="imgMd\1.7.8raiz.png">**

- `npm i`

Na pasta `tokens`:

**<img src="imgMd\1.7.9tokens.png">**

- `npm run build`

> OBS: Aqui pode está gerando algum erro, pois as tipagens do Typescript ainda vão ser configuradas.

<br/><hr/><br/>

