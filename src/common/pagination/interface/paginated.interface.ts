export interface Paginated<T> {
    data: T[],
    meta: {
        totalPages: number,
        currentPage: number,
        totalItems: number,
        itemsPerPage: number
    }
}