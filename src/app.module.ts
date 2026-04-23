import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { MembershipCardModule } from './membership-card/membership-card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowingModule } from './borrowing/borrowing.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import dbConfig from './config/db.config';

@Module({
  imports: [MemberModule, BookModule, AuthorModule, MembershipCardModule,BorrowingModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: ".env",
      load: [appConfig, dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService : ConfigService)=>({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities: configService.get("database.autoLoadEntities"),
        synchronize: configService.get("database.synchronize"),
        port: configService.get("database.port"),
        host: configService.get("database.host"),
        username: configService.get("database.username"),
        password: configService.get("database.password"),
        database: configService.get("database.database"),
      })
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
