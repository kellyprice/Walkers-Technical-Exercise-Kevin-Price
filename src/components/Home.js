import { useState } from 'react';
import { InputNumber } from 'antd';

function Home() {
    const [fizzBuzzCount, setFizzBuzzCount] = useState(0);

    return (
        <div className='container'>
            <InputNumber
                value={fizzBuzzCount}
                onChange={(e) => setFizzBuzzCount(e)} />
        </div>
    );
}

export default Home;