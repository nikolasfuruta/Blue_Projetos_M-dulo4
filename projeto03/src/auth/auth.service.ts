/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/api/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtPayLoad } from './jwt.strategy';


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
