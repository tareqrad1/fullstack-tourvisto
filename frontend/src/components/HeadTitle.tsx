import React from 'react';

const HeadTitle = ({ 
    title,
    description
}: {
    title: string,
    description: string
}): React.JSX.Element => {
    return (
        <div className="py-9">
            <h1 className="text-midnight text-2xl md:text-4xl font-bold">
                {title}
            </h1>
            <p className="text-ash text-lg font-normal">
                {description}
            </p>
        </div>
    )
}

export default HeadTitle