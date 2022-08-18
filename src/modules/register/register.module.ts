import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { ServicesModule } from '../../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
