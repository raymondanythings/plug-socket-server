import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { DocumentBuilder } from '@nestjs/swagger/dist'
import { AppModule } from './app.module'
async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')
  const config = new DocumentBuilder()
    .setTitle('Plug Api')
    .setVersion('0.0.1')
    .setDescription('Plug Webrtc socket server')
    .build()
  const documnet = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documnet)
  await app.listen(PORT)
  console.log(`app listen on port : ${PORT}`)
}
bootstrap()
