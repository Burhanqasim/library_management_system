import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateBorrowingDto } from './dto/create_borrowing.dto';
import { BorrowingService } from './providers/borrowing.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Borrowing")
@Controller('borrowing')
export class BorrowingController {
  constructor(private readonly borrowingService: BorrowingService) {}

  // ✅ Borrow Book
  @Post()
  @ApiOperation({ summary: "Create a new member" })
  @ApiResponse({ status: 201, description: "Member created successfully" })
  @ApiResponse({ status: 400, description: "Validation error" })
  create(@Body() dto: CreateBorrowingDto) {
    return this.borrowingService.create(dto);
  }

  // ✅ Get All Borrowings
  @Get()
  findAll() {
    return this.borrowingService.findAll();
  }
}