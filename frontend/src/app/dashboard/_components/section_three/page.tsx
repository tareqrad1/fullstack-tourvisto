'use client';

import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const ShowUsers = () => {
    return (
        <div className='grid gird-cols-1 md:grid-cols-2'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default ShowUsers