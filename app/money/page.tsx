'use client';

import Child1 from '@/components/ChildOne';
import Child2 from '@/components/ChildTwo';
import React, { useState } from 'react';

const Money = () => {
    const [money, setMoney] = useState<number>(0);

    return (
        <div className="p-10">
            <h1 className="text-2xl mb-4">Money: {money}</h1>
            <div className="space-x-4">
                <Child1 setMoney={setMoney} />
                <Child2 setMoney={setMoney} />
            </div>
        </div>
    );
};

export interface ChildProps {
    setMoney: React.Dispatch<React.SetStateAction<number>>;
}





export default Money
