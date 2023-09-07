<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

### Serverless Node.JS

- Reto serveless Indra

# Backend Development

![](http://www.accessyexcel.com/wp-content/uploads/2018/03/aws.png)

![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg)

> Proyecto realizado como parte del Reto Técnico de Indra
>  Serverless

### Importante

Existencia de 1 Modelos

- Vehicle (haciendo referencia a los vehículos del API Start War)

### Plugins

Este proyecto se uso Frameworkpara mejorar facilitar el desarollo.
Listado:

| Plugin                                 | README                                                                                        |
| -------------------------------------- | --------------------------------------------------------------------------------------------- |
| Serverless Framework                     | [https://www.serverless.com/framework/docs/getting-started]                        |


### Initialitation

This project requires [Node.js](https://nodejs.org/) v16+ to run.
Install the dependencies and devDependencies.

```sh
$ npm install -d
```

or

```sh
$ npm install --save
```

## Serverless Framework

This project requires [Serverless.js](https://www.serverless.com/) to run.

```sh
$ npm install serverless -g
```

### KEYs CONFIGURATION

- Es necesario configurar los KEYS de AWS

```sh
$ serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET_KEY
```

### Simulation Execute Lambdas

Para realizar pruebas antes de un DEPLOY, el siguiente comando:

```sh
serverless deploy
```

Esto levantará el proyecto por default en 'localhost' en el puerto '3000'

### Testing

Testeo con Jest.

Para poder realizar TDD con Jest realizar los siguientes comandos.

Para el modelo Vehicle

```sh
npm run test
```

Esto realizará las pruebas unitarias para el modelo Vehicle (haciendo referencia a lo vehículos del API StarWar)
|Apis| Url |
|--|--|
| Vehicles| [https://p7n9a6ya1g.execute-api.us-east-1.amazonaws.com/swapi/vehicles] |
|Vehicles/{id}|[https://p7n9a6ya1g.execute-api.us-east-1.amazonaws.com/swapi/vehicle/6]|


### Testing Usuarios (Api-Solicitada)

Testeo con Jest.

Para poder realizar TDD con Jest realizar los siguientes comandos.

Para el modelo usuarios

```sh
npm run test
```

Esto realizará las pruebas unitarias para el modelo usuarios
|Apis|Metodo| Url |
|--|--|--|
| Users --- {"name":  "jeanpierre","age":  "20"}|POST| [https://p7n9a6ya1g.execute-api.us-east-1.amazonaws.com/user] |
|Users/{id}|GET|[https://p7n9a6ya1g.execute-api.us-east-1.amazonaws.com/user/{id}]|

## License

Developer Software : Jeanpierre Espiritu Q. 
OPEN SOURCE