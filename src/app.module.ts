import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/customConfig.module';
import { DatabaseModule } from './database/database.module';
import { ServicesModule } from './services/services.module';
import { RegisterModule } from './modules/register/register.module';
import { MessagesModule } from './modules/messages/messages.module';
import { UsersModule } from './modules/users/users.module';
import { GroupsModule } from './modules/groups/groups.module';

@Module({
  imports: [CustomConfigModule, DatabaseModule, RegisterModule, MessagesModule, UsersModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService, ServicesModule],
})
export class AppModule {}
