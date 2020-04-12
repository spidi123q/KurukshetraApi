import User from 'src/entities/User';
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}
    @Get()
    async getCats(): Promise<string | null> {
      const res =  await this.userService.hello()
      console.log("UserController -> constructor -> res", res)
      return "ad"
    }
}
