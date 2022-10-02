import React, { useState } from 'react';
import { InputNumber } from 'antd';

function Home() {
    const [fizzBuzzCount, setFizzBuzzCount] = useState(0);

    return (
        <React.Fragment>
            <div className='container'>
                <InputNumber
                    value={fizzBuzzCount}
                    onChange={(e) => setFizzBuzzCount(e)} />

                {
                    Array.from({ length: fizzBuzzCount }, (_, i) => i + 1).map((number) => (
                        <div key={number}>
                            {number}.
                            {number % 3 === 0 ? ' walkers' : ''}
                            {number % 5 === 0 ? ' assessment' : ''}
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default Home;