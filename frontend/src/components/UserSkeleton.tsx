import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function UsersTableSkeleton() {
    return (
        <div className="overflow-x-auto">
            <Table className="bg-[#FFFFFF] border border-[#EEF9FF] p-6 shadow-lg rounded-[20px] py-5 mb-5 min-w-[700px] w-full">
                <TableHeader className="bg-[#eaecf075] w-full">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email address</TableHead>
                        <TableHead>Date joined</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(9)].map((_, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="h-4 w-[150px]" />
                                </div>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[180px]" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[100px]" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[80px]" />
                            </TableCell>
                            <TableCell className="text-right">
                                <Skeleton className="h-4 w-4 ml-auto" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter className="bg-[#eaecf075] w-full">
                    <TableRow>
                        <TableCell colSpan={6}>
                            <div className="flex justify-between mt-4">
                                <Skeleton className="h-10 w-[100px]" />
                                <Skeleton className="h-10 w-[120px]" />
                                <Skeleton className="h-10 w-[100px]" />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
