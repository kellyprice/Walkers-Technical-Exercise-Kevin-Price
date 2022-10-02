import React, { useEffect, useState } from 'react';
import { Button, Form, InputNumber, notification, PageHeader } from 'antd';

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
            <PageHeader
                className="site-page-header"
                title="Walkers Global"
                subTitle="Technical Exercise"
            />
            <div className='container'>
                <Form layout='inline'>
                    <Form.Item
                        layout='inline'
                        label="Enter a number between 1 and 200">
                        <InputNumber
                            min={0}
                            max={200}
                            value={count}
                            onChange={(e) => setCount(e)} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='primary'
                            onClick={updateFizzBuzzCount}>
                            Go
                        </Button>
                    </Form.Item>
                </Form>

                <Form layout='inline' hidden={!fizzBuzzCount}>
                    <Form.Item>
                        <Button
                            className='m-t-15'
                            disabled={start === 1}
                            onClick={() => setStart(start - 20)}>
                            Prev 20
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className='m-t-15'
                            disabled={start + 20 > fizzBuzzCount}
                            onClick={() => setStart(start + 20)}>
                            Next 20
                        </Button>
                    </Form.Item>
                </Form>

                {
                    Array.from({ length: Math.min(20, fizzBuzzCount - start + 1) }, (_, i) => i + start).map((number) => (
                        <div key={number} className='list-item'>
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