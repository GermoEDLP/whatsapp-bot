import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Group extends Document {
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  desc: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
