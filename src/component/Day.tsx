
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import Word, { IWord } from "./Word";

export default function Day() {

    const {day} = useParams<{day : string}>();
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

    // if(words.length === 0){
    //     return <span>Loading...</span>
    // }
    
    return (
        <>
        <h2>
            Day {day}
        </h2>
        {words.length === 0 &&<span>Loading...</span>}
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
