import { PieChart, Pie, Sector, Cell } from 'recharts';

const PieItems = () => {

    const studentArray = [
        { name: "Student 1", values: 90 },
        { name: "Student 2", values: 88 },
        { name: "Student 3", values: 78 },
        { name: "Student 4", values: 95 },
        { name: "Student 5", values: 87 }
    ];

    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];

    return (
        
            <div className='flex justify-center'>
                 <PieChart width={400} height={500}>
                    <Pie data={studentArray} dataKey="value" cx="50%" cy="50%"
                        outerRadius={60} fill="red"></Pie>

                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70}
                        outerRadius={90} fill="green" label></Pie>
                        <Sector></Sector>
                        <Cell></Cell>
                </PieChart>
            </div>
               
          

        
    );
};

export default PieItems;