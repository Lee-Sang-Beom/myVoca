import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useFetch from '../hook/useFetch';

export default function DayList() {

    const days = useFetch("http://localhost:3001/days");
    
    if(days.length === 0){
        return <span>Loading...</span>
    }
    return (
        <ul className="list_day">
            {days.map((day) => (
                <li key = {day.id}>
                    <Link to = {`/day/${day.day}`}> Day {day.day} </Link>
                    {/* 클릭시 저쪽으로 이동하겠다는 의미 */}
                </li>
            ))}
        </ul>
    );
}
