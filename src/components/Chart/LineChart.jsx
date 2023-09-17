import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, bioMarks: 92 },
        { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 82, bioMarks: 90 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 88, bioMarks: 94 },
        { id: 4, name: "David", mathMarks: 88, physicsMarks: 75, bioMarks: 89 },
        { id: 5, name: "Emma", mathMarks: 76, physicsMarks: 79, bioMarks: 85 },
        { id: 6, name: "Fiona", mathMarks: 95, physicsMarks: 90, bioMarks: 96 },
        { id: 7, name: "Grace", mathMarks: 89, physicsMarks: 82, bioMarks: 91 },
        { id: 8, name: "Henry", mathMarks: 82, physicsMarks: 88, bioMarks: 84 },
        { id: 9, name: "Isabelle", mathMarks: 91, physicsMarks: 87, bioMarks: 93 },
        { id: 10, name: "Jack", mathMarks: 84, physicsMarks: 80, bioMarks: 88 },
    ];


    return (
        <div>

            <LChart width={900} height={400} data={studentData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="mathMarks" stroke="green"></Line>
                <Line dataKey="physicsMarks" stroke="blue"></Line>
                <Line dataKey="bioMarks" stroke="red"></Line>


            </LChart>


        </div>
    );
};

export default LineChart;