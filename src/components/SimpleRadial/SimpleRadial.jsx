import { RadialBarChart, RadialBar, Legend } from 'recharts';

const SimpleRadial = () => {

    const data = [
        {
            name: 'Category A',
            uv: 42.3,
            pv: 3200,
            fill: '#8884d8',
        },
        {
            name: 'Category B',
            uv: 35.8,
            pv: 5800,
            fill: '#83a6ed',
        },
        {
            name: 'Category C',
            uv: 19.5,
            pv: 2100,
            fill: '#8dd1e1',
        },
        {
            name: 'Category D',
            uv: 12.1,
            pv: 7500,
            fill: '#82ca9d',
        },
        {
            name: 'Category E',
            uv: 6.7,
            pv: 4200,
            fill: '#a4de6c',
        },
        {
            name: 'Category F',
            uv: 3.2,
            pv: 6500,
            fill: '#d0ed57',
        },
        {
            name: 'Other',
            uv: 8.9,
            pv: 4800,
            fill: '#ffc658',
        },
    ];

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -100%)',
        lineHeight: '24px',
    };



    return (
        <div className='bg-gray-400 flex justify-center mx-7'>
            <RadialBarChart width={800} height={500} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar minAngle={15}
                    label={{ position: 'start', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv">

                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />

                </RadialBar>
            </RadialBarChart>

        </div>
    );
};

export default SimpleRadial;