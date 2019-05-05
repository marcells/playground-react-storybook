import React, { useState, useEffect, MouseEvent} from "react";
import axios from 'axios';

interface MyAwesomeComponentProps {
    title: string;
    onClick(date: Date): void
}

interface Employee {
    employee_name: string
}

export const MyAwesomeComponent = (props: MyAwesomeComponentProps) => {
    const [time, setTime] = useState(new Date());
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()));

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const loadStuff = async () => {
            const response = await axios.get<Employee[]>('http://dummy.restapiexample.com/api/v1/employees');
            
            setEmployees(response.data);
        }
        
        loadStuff(); 
    }, []);

    const onLinkClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onClick(time);
    }

    return (
        <div>
            <h1><button type="button" onClick={onLinkClick}>{props.title}</button></h1>
            <ul>
                { employees.map(x => <li >{x.employee_name}</li>) }
            </ul><br />
            <span>{time.toLocaleTimeString()}</span>
        </div>
    );
};
