'use client';
import { loadStripe } from '@stripe/stripe-js'
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
import { ITrip } from "@/components/TripCard";
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export function DialogDemo({ trip }: { trip: ITrip }) {
    const [guests, setGuests] = useState<number>(1);
    const [isReady, setIsReady] = useState<boolean>(false);
    const PRICE = Number(trip.price) * guests;

    async function handleCreateCheckoutSession() {
        const stripe = await stripePromise;
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments/create-checkout-session`, {
            tripId: trip._id,
            tripTitle: trip.title,
            tripSubTitle: trip.subTitle,
            image: trip.images[0],
            tripPrice: trip.price,
            guests,
        });
        const session = await response.data;
        const result = await stripe?.redirectToCheckout({
            sessionId: session.sessionId,
        });
        if(result?.error) {
            alert(result.error.message);
        }
    }

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
                        onClick={handleCreateCheckoutSession}
                    >
                        Pay ${PRICE}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}