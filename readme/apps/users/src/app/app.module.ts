import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ENV_FILE_PATH } from './app.constant';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '../config/database.config';
import envSchema from './env.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
      validationSchema: envSchema
    }),
    UserModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
