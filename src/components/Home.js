import React, { useEffect, useState } from 'react';
import { Button, InputNumber, notification } from 'antd';

function Home() {
    const [count, setCount] = useState(0);
    const [daySuffix, setDaySuffix] = useState('');
    const [fizzBuzzCount, setFizzBuzzCount] = useState(0);
    const [start, setStart] = useState(1);

    useEffect(() => {
        setDaySuffix(new Date().getDay() === 1 ? '-m' : '');
    }, []);

    const updateFizzBuzzCount = () => {
        if (validate()) {
            setStart(1);
            setFizzBuzzCount(count);
        }
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
                <div>
                    <Button
                        disabled={start + 20 > fizzBuzzCount}
                        onClick={() => setStart(start + 20)}>
                        Next 20
                    </Button>
                </div>

                {
                    Array.from({ length: Math.min(20, fizzBuzzCount - start + 1) }, (_, i) => i + start).map((number) => (
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