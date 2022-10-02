import React, { useEffect, useState } from 'react';
import { Button, InputNumber, notification } from 'antd';

function Home() {
    const [count, setCount] = useState(0);
    const [daySuffix, setDaySuffix] = useState('');
    const [fizzBuzzCount, setFizzBuzzCount] = useState(0);

    useEffect(() => {
        setDaySuffix(new Date().getDay() === 1 ? '-m' : '');
    }, []);

    const updateFizzBuzzCount = () => {
        if (validate())
            setFizzBuzzCount(count);
    }
    const validate = () => {
        if (count) return true;
        notification.error({
            message: 'Error',
            description: 'You must enter a number between 1 and 200',
            duration: 5,
        });
        return false;
    }

    return (
        <React.Fragment>
            <div className='container'>
                <InputNumber
                    min={0}
                    max={200}
                    value={count}
                    onChange={(e) => setCount(e)} />
                <Button
                    type='primary'
                    onClick={updateFizzBuzzCount}>
                    Go
                </Button>

                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
                        <div key={number}>
                            {number}.
                            {number % 3 === 0 ? <span className='fizz'>{' walkers' + daySuffix}</span> : ''}
                            {number % 5 === 0 ? <span className='buzz'>{' assessment' + daySuffix}</span> : ''}
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default Home;