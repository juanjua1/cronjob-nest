import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly mailerService: MailerService) {}

  @Cron('*/1 * * * *')  // Cada 1 minutos
  async sendTestEmail() {
    await this.mailerService.sendMail({
      to: 'Penafortmarco@gmail.com',  // Correo destinatario
      subject: '¡Recordatorio de prueba!',
      template: 'test',
      context: {
        link: 'https://youtu.be/unoRzmIifew?si=zxmRZQtX2AcipYfA',
      },
    });
    this.logger.log('Correo enviado a arielmzametal@gmail.com');
  }
}