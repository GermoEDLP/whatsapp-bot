import { Injectable } from '@nestjs/common';
import { WhatsappService } from 'src/services/whatsapp.service';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly wpSvc: WhatsappService) {}
  async send(dto: SendMessageDto): Promise<any> {
    const { to, message } = dto;
    const resp = await this.wpSvc.sendMessage(dto);
    return resp;
  }
}
