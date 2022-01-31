
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from '../hook/useFetch';
import Word from "./Word";

export default function Day() {

    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
        <h2>
            Day {day}
        </h2>
        <table>
            <tbody>
                {words.map((word)=>(
                    <Word word = {word} key = {word.id}/>
                ))}
            </tbody>
        </table>
        </>
    );
}