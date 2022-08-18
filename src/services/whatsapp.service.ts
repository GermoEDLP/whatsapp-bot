import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as twilio from 'twilio';
import { SendMessageDto } from '../modules/messages/dto/send-message.dto';

@Injectable()
export class WhatsappService {
  private accountSID: string;
  private authToken: string;
  private from: string;
  constructor(private readonly config: ConfigService) {
    this.accountSID = this.config.get('TWILIO_ACCOUNT_SID');
    this.authToken = this.config.get('TWILIO_AUTH_TOKEN');
    this.from = this.config.get('TWILIO_FROM');
  }

  sendMessage(dto: SendMessageDto) {
    const { to, message } = dto;
    const client = twilio(this.accountSID, this.authToken);
    return client.messages.create({
      body: message,
      from: this.from,
      to: `whatsapp:${to}`,
    });
  }
}
