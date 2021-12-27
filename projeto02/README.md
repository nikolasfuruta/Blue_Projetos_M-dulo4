# Blue Projeto 02 Módulo - 4

#### API de controle de Tweets

## INICIANDO

### Para iniciar o projeto, primeiro foi instalado o NestJS.

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

### Agora iniciamos a biblioteca do prisma para configurá-la
```
npx prisma init
```

### Com isso, é gerado o diretório 'prisma' com o arquivo 'schema.prisma' e o arquivo '.env' no root do projeto.

### No arquivo '.env', configuramos a string de conexão com o banco de dados e no 'schema.prisma' definimos os Models que serão sincronizados com o banco de dados.

### Ao terminar toda a configuração da estrutura do banco de dados, enviamos os dados para sincronizar com o banco de dados com os seguintes comandos.

```
npx prisma db push
```

## Criando o diretório Prisma dentro do diretório src

### Antes de criar as rotas, precisamos criar um diretório prisma contendo um arquivo 'module' e 'service' para podemos interagir com o banco de dados.

```
nest g mo prisma
nest g s prisma
```

### No arquivo 'module', adicionamos às configurações já existentes

```
exports: [PrismaService],
```

### No arquivo 'service', definimos um script padrão obtida através do próprio site do NestJS

```
https://docs.nestjs.com/recipes/prisma
```

## Criando as Rotas BASE

### Para criar as rotas, dividimos cada uma em um diretório. Cada diretório será composto por um arquivo 'module', 'controller' e 'service'.

### Assim, primeiro criamos o diretório com o comando

```
nest g res [nome do diretório]
```

### Com isso, o NestJS automaticamente criará os arquivos que necessários.

### No arquivo 'module', adicionamos às configurações existentes o 'imports: [PrismaModule]' para que consigamos integrar o banco com a rota.

### No arquivo 'service', instanciamos o PrismaService dentro da classe

```
contructor(private readonly prisma:PrismaService) {}
```

### Agora basta 'chamar' o this.prisma para manipular o banco

## Definindo o DTO

### Antes de iniciar o CRUD, devemos configurar a classe DTO.

### Primeiro devemos instalar as dependências de validações do NestJS

```
npm i npm i --save class-validator class-transformer
```

### Agora basta adicionar no arquivo main, após definir app, o seguinte script

```
app.useGlobalPipes(new ValidationPipe())
```

### Voltando na classe CreateDto utilizaremos o próprio 'tipo' gerado pelo Prisma atráves do Model, assim definiremos a classe como uma implementação desse tipo.

```
class CreateDto implements Prisma.[Tipo Prisma] {}
```

### Com isso podemos utilizar as várias validações que o NestJS nos fornece bastando acrescentar um Decorator nas propriedades da classe.

```
class CreateDto implements Prisma.[Tipo Prisma] {
	@IsString()
	nome: string
}
```

## CRUD

### Para o crud, será utilizado como exemplo a rota 'usuario'. Para visualizar todas as rotas, basta acessar o arquivo  swagger digitando a URL: localhost:3000/api

### /add

```
Exemplo:
{
  "nome":"teste",
  "senha":"teste123",
  "imagem":"teste.jpeg",
  "bio":"teste",
  "nascimento":"1989-05-26"
}
      
Sucesso: 201 				
{
  "id": 4,
  "nome": "teste",
  "senha": "$2b$12$OVFMhDzbgWC4BZg8r5M2/eQhph9XIoKPnT.FtGX6sgsopzPl0dELO",
  "imagem": "teste.jpeg",
  "bio": "teste",
  "nascimento": "1989-05-26T03:00:00.000Z",
  "criado_em": "2021-12-27T18:30:58.304Z",
  "modificado_em": "2021-12-27T18:30:58.305Z"
}

Falha: 400 - Error: Bad Request
```

### /listall

```
Exemplo:
No parameters
      
Sucesso: 200 				
{
    "id": 4,
    "nome": "teste",
    "senha": "$2b$12$OVFMhDzbgWC4BZg8r5M2/eQhph9XIoKPnT.FtGX6sgsopzPl0dELO",
    "imagem": "teste.jpeg",
    "bio": "teste",
    "nascimento": "1989-05-26T03:00:00.000Z",
    "criado_em": "2021-12-27T18:30:58.304Z",
    "modificado_em": "2021-12-27T18:30:58.305Z",
    "seguidores": [],
    "seguindo": [],
    "tweet": []
  }
```

### /listid/:id

```
Exemplo:
parâmetro: id
      
Sucesso: 200 				
{
    "id": 4,
    "nome": "teste",
    "senha": "$2b$12$OVFMhDzbgWC4BZg8r5M2/eQhph9XIoKPnT.FtGX6sgsopzPl0dELO",
    "imagem": "teste.jpeg",
    "bio": "teste",
    "nascimento": "1989-05-26T03:00:00.000Z",
    "criado_em": "2021-12-27T18:30:58.304Z",
    "modificado_em": "2021-12-27T18:30:58.305Z",
    "seguidores": [],
    "seguindo": [],
    "tweet": []
  }
```

### /update

```
Exemplo:
parâmetro: id
body: {
  		"bio": "programador"
	  }
      
Sucesso: 200 				
{
  "id": 4,
  "nome": "teste",
  "senha": "$2b$12$OVFMhDzbgWC4BZg8r5M2/eQhph9XIoKPnT.FtGX6sgsopzPl0dELO",
  "imagem": "teste.jpeg",
  "bio": "programador",
  "nascimento": "1989-05-26T03:00:00.000Z",
  "criado_em": "2021-12-27T18:30:58.304Z",
  "modificado_em": "2021-12-27T18:34:39.177Z"
}
```

### /delete

```
Exemplo:
parâmetro: id 
Sucesso: 200 				
{
  "id": 4,
  "nome": "teste",
  "senha": "$2b$12$OVFMhDzbgWC4BZg8r5M2/eQhph9XIoKPnT.FtGX6sgsopzPl0dELO",
  "imagem": "teste.jpeg",
  "bio": "programador",
  "nascimento": "1989-05-26T03:00:00.000Z",
  "criado_em": "2021-12-27T18:30:58.304Z",
  "modificado_em": "2021-12-27T18:34:39.177Z"
}
```

### Com isso conclui-se todo o processo do CRUD

## Autenticação

### Primeiro, para o processo de autenticação, instalamos as dependências necessárias
```
npm i passport @nestjs/passport passport-local @nestjs/jwt passport-jwt
```
```
npm install --save-dev @types/passport-local @types/passport-jwt
```
### Agora criamos um diretório auth com:
```
nest g res auth
```
### Com isso é gerado os arquivos 'module', 'controller' e 'service' do auth
### No 'module', configuramos da seguinte maneira:
```
@Module({
  imports: [
    PrismaModule,
    UsuarioModule,
    PassportModule.register(
      {
        defaultStrategy: "jwt",
        property:"usuario",
        session: false,
      }
    ),
    JwtModule.register(
      {
        secret: process.env.SECRETKEY,
        signOptions: { 
          expiresIn: process.env.EXPIRESIN
        },
      }
    ),
  ],
  controllers: [AuthController],
  providers: [UsuarioService, AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
```
### Para o 'controller', criamos uma rota para efetuar o login
```
@Post()
async login(@Body() info: LoginDto) {
    return this.authService.login(info);
  }
```
### Antes de proseguirmos para o 'service', configuraremos os arquivos LoginDto e o Jwt.Strategy.ts.
### Assim, dentro do diretório auth, criamos um sub-diretório 'dto' com o arquivo LoginDto
```
export class LoginDto{
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}
```
Para a configuração do jwt.strategy
```
export interface JwtPayLoad {
    nome: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRETKEY,
        })
    }

    validate(payLoad: JwtPayLoad) {
        return payLoad;
    }
}
```
### Agora configuramos o 'service'
```
@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}

    async login(info: LoginDto) {
        const usuario = await this.usuarioService.findByNome(info.nome);
        if(!usuario) {
            throw new HttpException("USUARIO NÃO ENCONTRADO", HttpStatus.NOT_FOUND);
        }

        const senhaValida = await bcrypt.compare(info.senha, usuario.senha);
        if(!senhaValida) {
            throw new HttpException("SENHA INVÁLIDA", HttpStatus.UNAUTHORIZED);
        }

        const token = this._createToken(usuario);
        return { nome: usuario.nome, ...token }
    }

    private _createToken({ nome }: LoginDto) {
        const payLoad: JwtPayLoad = { nome }
        const accessToken = this.jwtService.sign(payLoad);
        return {
            expiresIn: process.env.EXPIRESIN,
            accessToken
        }
    }
}
```
### Feito isso, ao logar, o usuário receberá um token de validação
