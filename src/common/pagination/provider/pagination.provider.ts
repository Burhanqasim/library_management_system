import { Injectable } from '@nestjs/common';

import { ObjectLiteral, Repository } from 'typeorm';
import { response } from 'express';
import { Paginated } from '../interface/paginated.interface';
import { PaginatedQueryDto } from '../dto/paginated-query.dto';

@Injectable()
export class PaginationProvider<T extends ObjectLiteral>  {
    public async paginateQuery (
        paginationQuery : PaginatedQueryDto,
        repository: Repository<T>
    ): Promise<Paginated<T>>{
        const result = await repository.find({
            skip: paginationQuery.limit * (paginationQuery.page - 1),
            take: paginationQuery.limit
        })
        const totalItems = await repository.count();
        const totalPages = await Math.ceil(totalItems/ paginationQuery.limit);
        const finalResult : Paginated<T> = {
            data: result,
            meta : {
                totalItems,
                totalPages,
                itemsPerPage: paginationQuery.limit,
                currentPage: paginationQuery.page
            }
        }
        return finalResult;
    }
}
