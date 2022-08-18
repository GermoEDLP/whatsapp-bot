import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Group } from 'src/modules/groups/entities/group.entity';

export class User {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: Group.name,
      },
    ],
  })
  groups: Types.Array<Group>;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}
