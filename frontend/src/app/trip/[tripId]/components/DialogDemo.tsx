'use client';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function DialogDemo() {
    const [guests, setGuests] = useState(1);
    const [isReady, setIsReady] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="bg-blueAccent hover:bg-blueAccent-hover w-full mt-6 text-white hover:text-white font-semibold"
                >
                    Pay and join trip
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#FFFFFF]">
                <DialogHeader>
                    <DialogTitle className="text-midnight">Join Trip</DialogTitle>
                    <DialogDescription className="text-midnight">
                        Choose how many guests you're booking for and confirm you're ready to join.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Number of Guests */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="guests" className="text-midnight">Number of Guests</Label>
                        <Input
                            id="guests"
                            type="number"
                            min={1}
                            max={10}
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    {/* Ready Checkbox */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="ready"
                            checked={isReady}
                            onCheckedChange={(checked) => setIsReady(!!checked)}
                        />
                        <Label htmlFor="ready">I'm ready to join the trip</Label>
                    </div>
                </div>

                <DialogFooter className="mt-6">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        className="bg-blueAccent text-white hover:bg-blueAccent-hover"
                        disabled={!isReady || guests < 1}
                    >
                        Pay $555
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}