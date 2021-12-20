/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

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
