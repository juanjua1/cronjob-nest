import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  
  imports: [
    ScheduleModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'rodriguezjuanjua@gmail.com',  // Tu correo
          pass: 'oyqu mxkt abio bdbq',         // Tu contraseña (NO recomendado en producción)
        },
      },
      template: {
        dir: __dirname + '/../src/templates',
        adapter: new HandlebarsAdapter(),
      },
    }),
  ],
  providers: [EmailService],
})
export class AppModule {}