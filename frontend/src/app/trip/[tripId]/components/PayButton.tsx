'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DialogDemo } from './DialogDemo';
import { ITrip } from '@/components/TripCard';


export default function PayButton({ trip }: { trip: ITrip }) {
    return (
        <>
            <DialogDemo trip={trip} />
        </>
    );
}
