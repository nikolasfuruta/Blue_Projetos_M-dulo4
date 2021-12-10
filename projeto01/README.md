# Blue Projeto 01 Módulo - 4  

#### API de integração com o banco de dados PostgreSQL utilizando NestJS e Prisma 



## INICIANDO

### 	Para iniciar o projeto, primeiro foi instalado o NestJS.

```
npm i -g @nestjs/cli
```

### Em seguida iniciado um novo projeto.

```
nest new [nome do projeto]
```

### Após a criação do diretório principal, que consideraremos como o ROOT, foi instalado as seguintes dependências.

```
npm i prisma -D / npm i @prisma/client
```

### No arquivo '.env', configuramos a string de conexão com o banco de dados e em seguida definimos os Models no arquivo 'prisma' do diretório "prisma".

### Ao terminar toda a configuração da estrutura do banco de dados, enviamos os dados para sincronizar com o banco de dados com os seguintes comandos.

```
npx prisma db push
```



## Criando o diretório Prisma

### Antes de criar as rotas, precisamos criar um diretório prisma contendo um arquivo 'module' e 'service'

```
nest g mo prisma
nest g s prisma
```

### No arquivo 'module', adicionamos

```
exports: [PrismaService],
```

### Já no arquivo 'service', definimos um script padrão obtida através do próprio site do NestJS

```
https://docs.nestjs.com/recipes/prisma
```



## Criando as Rotas BASE

###  Para criar as rotas, dividimos cada uma em um diretório. Cada diretório será composto por um arquivo 'module', 'controller' e 'service'.

### Assim, primeiro criamos o diretório com o comando

```
nest g res [nome do diretório]
```

### Com isso, o NestJS automaticamente criará os arquivos que necessitaremos.

### No arquivo 'module', adicionamos um 'imports: [PrismaModule]' para que consigamos integrar o banco com a rota.

### No arquivo 'service', instanciamos o PrismaService dentro da classe 

```
contructor(private readonly prisma:PrismaService) {}
```

### Agora basta 'chamar' o this.prisma para manipular o banco  



## Definindo o DTO

### Antes de iniciar o CRUD, devemos configurar a classe DTO.

### Primeiro devemos instalar uma dependência de validação do NestJS

```
npm i npm i --save class-validator class-transformer
```

### Agora basta adicionar no arquivo main, após definir app, o seguinte script

```
app.useGlobalPipes(new ValidationPipe())
```

### Na classe CreateDto utilizaremos o próprio tipo gerado pelo Prisma atráves do Model, assim definiremos a classe como uma implementação desse tipo.

```
class CreateDto implements Prisma.[Tipo Prisma] {}
```

### com isso podemos utilizar as várias validações que o NestJS nos fornece bastando acrescentar um Decorator nas propriedades da classe.

```
class CreateDto implements Prisma.[Tipo Prisma] {
	@IsString()
	nome: string
}
```



## CRUD

### Para o crud, será utilizado como exemplo a rota 'generos'. Para visualizar todas as rotas pode utilizar o arquivo swagger digitando a URL: localhost:3000/api



### /add

```
Exemplo:
body: {
  		"nome": "Ação"
	  }
      
Sucesso: 201 				
{
  "id": 14,
  "nome": "Ação"
}

Falha: 400 - Error: Bad Request
```



### /listall

```
Exemplo:
No parameters
      
Sucesso: 200 				
{
    "id": 7,
    "nome": "ação",
    "Filmes": [
      {
        "id": 10
      },
      {
        "id": 12
      },
      {
        "id": 9
      }
    ]
  },
```



### /listid/:id

```
Exemplo:
parâmetro: id
      
Sucesso: 200 				
{
  "id": 7,
  "nome": "ação",
  "Filmes": [
    {
      "id": 10
    },
    {
      "id": 12
    },
    {
      "id": 9
    }
  ]
}
```



### /update

```
Exemplo:
parâmetro: id
body: {
  		"nome": "Ação"
	  }
      
Sucesso: 200 				
{
  "id": 14,
  "nome": "Ação"
}
```



### /delete

```
Exemplo:
parâmetro: id 
Sucesso: 200 				
{
  "id": 14,
  "nome": "Ação"
}
```

