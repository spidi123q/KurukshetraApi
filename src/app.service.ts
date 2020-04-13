import { InitFirebase } from './config/settings';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor() {
    console.log("AppService -> started")
    InitFirebase()
  }
  async getHello() {
    return 'await createdCat.save();'
  }
}
