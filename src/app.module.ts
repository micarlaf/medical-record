import { Module } from '@nestjs/common';
import { RecordsExecutionModule } from './medical-record-execution/records-execution.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RecordsModule } from './medical-record/records.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "medical-record",
      autoLoadEntities: true,
      synchronize: true,
    }),
    RecordsModule,
    RecordsExecutionModule,
    AuthModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
