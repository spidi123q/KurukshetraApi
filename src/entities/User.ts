import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop()
  name?: string;
}

export default User
