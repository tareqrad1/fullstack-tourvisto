import { SelectDemo } from '@/components/SelectDemo'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    budget,
    countries,
    groupType,
    interests,
    travelStyle,
} from '@/constant/data'
import React from 'react'

const TripForm = (): React.JSX.Element => {
    return (
        <form className="w-full space-y-6">
        {/* Title */}
        <div className="space-y-2">
            <Label className="text-sm font-normal text-ash">Title</Label>
            <Input placeholder="Your Trip Title" />
        </div>
        {/* Sub Title */}
        <div className="space-y-2">
            <Label className="text-sm font-normal text-ash">Sub Title</Label>
            <Input placeholder="Your Trip Subtitle" />
        </div>
        {/* Country + Duration */}
        <div className="flex gap-4">
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Country</Label>
            <SelectDemo
                labelN="Country"
                option={countries.map((c) => ({ code: c.code, name: c.name }))}
                placeHolder="Select Country"
            />
            </div>
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Duration</Label>
            <Input placeholder="e.g., 5, 12" />
            </div>
        </div>
        {/* Group Type + Travel Style */}
        <div className="flex gap-4">
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Group Type</Label>
            <SelectDemo
                labelN="Group Type"
                option={groupType.map((opt) => ({ name: opt.name }))}
                placeHolder="Select a group type"
            />
            </div>
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Travel Style</Label>
            <SelectDemo
                labelN="Travel Style"
                option={travelStyle.map((opt) => ({ name: opt.name }))}
                placeHolder="Select your travel style"
            />
            </div>
        </div>
        {/* Interests + Budget */}
        <div className="flex gap-4">
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Interests</Label>
            <SelectDemo
                labelN="Interests"
                option={interests.map((opt) => ({ name: opt.name }))}
                placeHolder="Select your interests"
            />
            </div>
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Budget Estimate</Label>
            <SelectDemo
                labelN="Budget"
                option={budget.map((opt) => ({ name: opt.name }))}
                placeHolder="Select your budget"
            />
            </div>
        </div>
        {/* Price + Start Date + Seats */}
        <div className="flex gap-4">
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Price</Label>
            <Input placeholder="$" type="number" />
            </div>
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Start Date</Label>
            <Input type="date" />
            </div>
            <div className="flex-1 space-y-2">
            <Label className="text-sm font-normal text-ash">Available Seats</Label>
            <Input placeholder="Seats" type="number" />
            </div>
        </div>
        {/* Image Upload */}
        <div className="space-y-2">
            <Label className="text-sm font-normal text-ash">Upload Images</Label>
            <Input type="file" multiple />
        </div>
        {/* Description */}
        <div className="space-y-2">
            <Label className="text-sm font-normal text-ash">Trip Description</Label>
            <Textarea
            placeholder="Type your trip description here."
            className="h-[200px]"
            />
        </div>
        </form>
    )
}

export default TripForm
