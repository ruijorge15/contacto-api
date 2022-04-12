import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContactoModule } from './contacto/contacto.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/contactos', {
      autoCreate: true,
    }),
    UserModule,
    ContactoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
