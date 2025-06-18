import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function UsersTable() {
    const isAdmin = true;
    return (
        <Table className="bg-[#FFFFFF] border-[1px] border-[#EEF9FF] p-6 shadow-lg rounded-[20px] py-5 mb-5 w-full">
            <TableCaption>A list of all users.</TableCaption>
            <TableHeader className="bg-[#eaecf075] w-full">
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email address</TableHead>
                    <TableHead>Date joined</TableHead>
                    <TableHead>Itinerary Created</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="text-sm">
                    <TableCell className="flex items-center gap-2 text-midnight font-semibold text-sm cursor-pointer"><img src="/user.svg" alt="user-photo" />James Anderson</TableCell>
                    <TableCell className="text-sm">olivia@jsmastery.pro</TableCell>
                    <TableCell>Jan 6, 2022</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className={`${isAdmin ? 'text-[#344054]' : 'text-[#027A48]'}`}>User</TableCell>
                    <TableCell className="text-right hover:cursor-pointer"><img src="/trash.svg" alt="trash-svg" /></TableCell>
                </TableRow>
                <TableRow className="text-sm">
                    <TableCell className="flex items-center gap-2 text-midnight font-semibold text-sm cursor-pointer"><img src="/user.svg" alt="user-photo" />James Anderson</TableCell>
                    <TableCell className="text-sm">olivia@jsmastery.pro</TableCell>
                    <TableCell>Jan 6, 2022</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className={`${isAdmin ? 'text-[#344054]' : 'text-[#027A48]'}`}>User</TableCell>
                    <TableCell className="text-right hover:cursor-pointer"><img src="/trash.svg" alt="trash-svg" /></TableCell>
                </TableRow>
                <TableRow className="text-sm">
                    <TableCell className="flex items-center gap-2 text-midnight font-semibold text-sm cursor-pointer"><img src="/user.svg" alt="user-photo" />James Anderson</TableCell>
                    <TableCell className="text-sm">olivia@jsmastery.pro</TableCell>
                    <TableCell>Jan 6, 2022</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className={`${isAdmin ? 'text-[#344054]' : 'text-[#027A48]'}`}>User</TableCell>
                    <TableCell className="text-right hover:cursor-pointer"><img src="/trash.svg" alt="trash-svg" /></TableCell>
                </TableRow>
                <TableRow className="text-sm">
                    <TableCell className="flex items-center gap-2 text-midnight font-semibold text-sm cursor-pointer"><img src="/user.svg" alt="user-photo" />James Anderson</TableCell>
                    <TableCell className="text-sm">olivia@jsmastery.pro</TableCell>
                    <TableCell>Jan 6, 2022</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className={`${isAdmin ? 'text-[#344054]' : 'text-[#027A48]'}`}>User</TableCell>
                    <TableCell className="text-right hover:cursor-pointer"><img src="/trash.svg" alt="trash-svg" /></TableCell>
                </TableRow>
                <TableRow className="text-sm">
                    <TableCell className="flex items-center gap-2 text-midnight font-semibold text-sm cursor-pointer"><img src="/user.svg" alt="user-photo" />James Anderson</TableCell>
                    <TableCell className="text-sm">olivia@jsmastery.pro</TableCell>
                    <TableCell>Jan 6, 2022</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell className={`${isAdmin ? 'text-[#344054]' : 'text-[#027A48]'}`}>User</TableCell>
                    <TableCell className="text-right hover:cursor-pointer"><img src="/trash.svg" alt="trash-svg" /></TableCell>
                </TableRow>
            </TableBody>
            <TableFooter className="bg-[#eaecf075] w-full">
                <TableRow>
                    <TableCell colSpan={6}>
                    <div className="flex justify-between px-6">
                        <button className="text-midnight cursor-pointer flex items-center gap-1 py-[8px] px-[14px] bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#EAECF0] "><img src="/arrow-left.svg" alt="" />Previous</button>
                        <button className="text-midnight cursor-pointer flex items-center gap-1 py-[8px] px-[14px] bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#EAECF0]">Next<img src="/arrow-right.svg" alt="" /></button>
                    </div>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
