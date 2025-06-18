import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export function SelectDemo({ labelN, option, placeHolder }: { labelN: string, option: { name: string, code?: string }[], placeHolder: string }) {
    return (
        <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>{labelN}</SelectLabel>
            {option.map((opt, idx) => (
                <SelectItem key={idx} value={opt.name}>
                    {opt.code && <Image src={`https://flagcdn.com/w40/${opt.code}.png`} alt="country" width={20} height={20}/>}
                    {opt.name}
                </SelectItem>
            ))}
            </SelectGroup>
        </SelectContent>
        </Select>
    )
}
