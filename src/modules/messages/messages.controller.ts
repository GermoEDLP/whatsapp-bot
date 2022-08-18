import { Controller, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { ApiTags } from '@nestjs/swagger';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('messages')
@ApiTags('Mensages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  send(@Body() sendMessageDto: SendMessageDto) {
    return this.messagesService.send(sendMessageDto);
  }
}
