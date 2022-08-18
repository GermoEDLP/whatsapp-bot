import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { ServicesModule } from '../../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
