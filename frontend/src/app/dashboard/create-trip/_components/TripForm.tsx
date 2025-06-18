// 'use client';

import { SelectDemo } from '@/components/SelectDemo'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { budget, countries, groupType, interests, travelStyle } from '@/constant/data'

import React from 'react'

const TripForm = (): React.JSX.Element => {
    return (
        <form className='w-full space-y-4'>
            <div className='space-y-2'>
                <Label className='text-sm font-normal text-ash'>Country</Label>
                <SelectDemo labelN='Country' option={countries.map((country) => { return { code: country.code, name: country.name } })} placeHolder='Select Country' />
            </div>
            <div className='space-y-2'>
                <Label className='text-sm font-normal text-ash'>Duration</Label>
                <Input placeholder='Enter number of days (e.g., 5, 12)'/>
            </div>
            <div className='space-y-2'>
                <Label className='text-sm font-normal text-ash'>Group Type</Label>
                <SelectDemo labelN='Country' option={groupType.map((opt) => { return { name: opt.name } })} placeHolder='Select a group type' />
            </div>
            <div className='space-y-2'>
                <Label className='text-sm font-normal text-ash'>Travel style</Label>
                <SelectDemo labelN='Country' option={travelStyle.map((opt) => { return { name: opt.name } })} placeHolder='Select your travel style' />
            </div>
            <div className='space-y-2'>
                <Label className='text-sm font-normal text-ash'>Interests</Label>
                <SelectDemo labelN='Country' option={interests.map((opt) => { return { name: opt.name } })} placeHolder='Select your travel style' />
            </div>
            <div className='space-y-2'>
                <Label className='text-sm font-normal text-ash'>Budget Estimate</Label>
                <SelectDemo labelN='Country' option={budget.map((opt) => { return { name: opt.name } })} placeHolder='Select your budget preference' />
            </div>
        </form>
    )
}

export default TripForm