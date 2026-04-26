import { IntersectionType } from "@nestjs/swagger"
import { IsDate, IsOptional } from "class-validator"
import { PaginatedQueryDto } from "src/common/pagination/dto/paginated-query.dto"

class GetMemberBaseDto {
    @IsDate()
    @IsOptional()
    startDate?: Date
    @IsDate()
    @IsOptional()
    endDate?: Date
}

export class GetMemberDto extends IntersectionType(
    GetMemberBaseDto,
    PaginatedQueryDto,
) {}