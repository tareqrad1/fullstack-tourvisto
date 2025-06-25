'use client';

import { SelectDemo } from '@/components/SelectDemo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  budget,
  countries,
  groupType,
  interests,
  travelStyle,
} from '@/constant/data';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Map from '@/components/MapLeaflet';
import { useCreateTrip } from '@/hooks/useCreateTrip';
import Loading from '@/components/Loading';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface TFormInputs {
    title: string;
    subTitle: string;
    country: string;
    latitude: string;
    longitude: string;
    duration: number;
    groupType: string;
    travelStyle: string;
    interest: string;
    budgetEstimate: string;
    price: string;
    startDate: string;
    availableSeats: number;
    images: FileList;
    description: string;
}

const TripForm = (): React.JSX.Element => {
    const { register, handleSubmit, control } = useForm<TFormInputs>();
    const { loading, createTrip } = useCreateTrip();
    const router = useRouter();

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        });
    };

    const submitForm: SubmitHandler<TFormInputs> = async (data) => {
        try {
        const imagesBase64: string[] = [];
        if (data.images && data.images.length > 0) {
            const files = Array.from(data.images);
            for (const file of files) {
            const base64 = await convertToBase64(file);
            imagesBase64.push(base64);
            }
        }

        const tripData = {
            ...data,
            images: imagesBase64,
            startDate: new Date(data.startDate).toISOString(),
            location: {
            coordinates: [
                Number(data.latitude),
                Number(data.longitude),
            ],
            },
        };

        await createTrip(tripData);
        router.push('/dashboard');
        toast.success('Trip created successfully');
        } catch (error: any) {
        console.error('Error:', error.response?.data || error.message);
        toast.error(error.response?.data?.error || 'Failed to create trip.');
        }
    };

    return (
        <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full space-y-6 p-4 sm:p-6 md:p-8 lg:p-10 relative"
        >
        <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Your Trip Title" {...register('title')} />
        </div>

        <div className="space-y-2">
            <Label>Sub Title</Label>
            <Input placeholder="Your Trip Subtitle" {...register('subTitle')} />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 space-y-2">
            <Label>Country</Label>
            <Controller
                name="country"
                control={control}
                render={({ field }) => (
                <SelectDemo
                    labelN="Country"
                    option={countries.map((c) => ({ code: c.code, name: c.name }))}
                    placeHolder="Select Country"
                    value={field.value}
                    onChange={field.onChange}
                />
                )}
            />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 space-y-2">
                <Label>Latitude</Label>
                <Input placeholder="e.g., 54.35" {...register('latitude')} />
            </div>
            <div className="flex-1 space-y-2">
                <Label>Longitude</Label>
                <Input placeholder="e.g., -90.11" {...register('longitude')} />
            </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label>Group Type</Label>
            <Controller
                name="groupType"
                control={control}
                render={({ field }) => (
                <SelectDemo
                    labelN="Group Type"
                    option={groupType.map((c) => ({ name: c.name }))}
                    placeHolder="Select a group type"
                    value={field.value}
                    onChange={field.onChange}
                />
                )}
            />
            </div>
            <div className="space-y-2">
            <Label>Travel Style</Label>
            <Controller
                name="travelStyle"
                control={control}
                render={({ field }) => (
                <SelectDemo
                    labelN="Travel Style"
                    option={travelStyle.map((c) => ({ name: c.name }))}
                    placeHolder="Select your travel style"
                    value={field.value}
                    onChange={field.onChange}
                />
                )}
            />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label>Interests</Label>
            <Controller
                name="interest"
                control={control}
                render={({ field }) => (
                <SelectDemo
                    labelN="Interests"
                    option={interests.map((c) => ({ name: c.name }))}
                    placeHolder="Select your interests"
                    value={field.value}
                    onChange={field.onChange}
                />
                )}
            />
            </div>
            <div className="space-y-2">
            <Label>Budget Estimate</Label>
            <Controller
                name="budgetEstimate"
                control={control}
                render={({ field }) => (
                <SelectDemo
                    labelN="Budget"
                    option={budget.map((c) => ({ name: c.name }))}
                    placeHolder="Select your budget"
                    value={field.value}
                    onChange={field.onChange}
                />
                )}
            />
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
            <Label>Price</Label>
            <Input type="number" placeholder="$" {...register('price')} />
            </div>
            <div className="space-y-2">
            <Label>Start Date</Label>
            <Input type="date" {...register('startDate')} />
            </div>
            <div className="space-y-2">
            <Label>Available Seats</Label>
            <Input type="number" placeholder="Seats" {...register('availableSeats')} />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label>Upload Images</Label>
            <Input type="file" multiple {...register('images')} />
            </div>
            <div className="space-y-2">
            <Label>Duration</Label>
            <Input type="number" placeholder="Days" {...register('duration')} />
            </div>
        </div>

        <div className="space-y-2">
            <Label>Trip Description</Label>
            <Textarea
            className="h-[200px]"
            placeholder="Type your trip description here."
            {...register('description')}
            />
        </div>

        <div className="mt-4">
            <Map latitude={31.5} longitude={34.47} />
        </div>

        <Button
            disabled={loading}
            type="submit"
            className="w-full bg-blueAccent hover:bg-blueAccent-hover text-white my-4"
        >
            <img src="/mynaui_sparkles.svg" alt="sparkle icon" />
            {loading ? <Loading name="Generating" /> : 'Generate a trip'}
        </Button>
        </form>
    );
};

export default TripForm;