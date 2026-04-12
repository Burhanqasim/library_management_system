import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { MembershipCardModule } from './membership-card/membership-card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowingModule } from './borrowing/borrowing.module';

@Module({
  imports: [MemberModule, BookModule, AuthorModule, MembershipCardModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: ()=>({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities: true,
        synchronize: true,
        port: 5432,
        host: 'localhost',
        username: "postgres",
        password: 'burhan123',
        database: 'library_management',
      })
    }),
    BorrowingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
