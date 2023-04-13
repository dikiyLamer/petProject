import { Injectable } from "@nestjs/common";
import { Admin } from "src/modules/admin/model/admin";
import { AdminRepository } from "src/modules/admin/service/admin.repository";

@Injectable()
export class AuthService{

    constructor(private adminRepository: AdminRepository){

    }

    async validateAdmin (login: string, pass: string): Promise<Admin | undefined>{
        const admin = await this.adminRepository.findByLogin(login)
        console.log(admin)

        if (admin && admin.password === pass){
            const {password, ...secureAdmin} = admin
            return secureAdmin
        }
        else {
            return null
        }
    }
}