import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo() {
    return (
        <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious className='bg-[#FFFFFF] text-midnight text-sm shadow-sm py-[8px] px-[14px] rounded-full cursor-pointer' />
            </PaginationItem>
            <PaginationItem>
            <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink isActive>
                2
            </PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
            <PaginationNext className='bg-[#FFFFFF] text-midnight text-sm shadow-sm py-[8px] px-[14px] rounded-full cursor-pointer' />
            </PaginationItem>
        </PaginationContent>
        </Pagination>
    )
}