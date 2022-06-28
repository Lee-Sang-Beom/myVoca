import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import { IDay } from './DayList';
export default function CreateWord(){

    const days : IDay[] = useFetch(`http://localhost:3001/days`);
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    function onSubmit(e : React.FormEvent){
        e.preventDefault();

        if(!isLoading && engRef.current && korRef.current && dayRef.current){

            const eng = engRef.current.value;
            const kor = korRef.current.value;
            const day = dayRef.current.value;

            setIsLoading(true);
            fetch(`http://localhost:3001/words`,{
                // 두번째 인자로 객체 입력
                method : 'POST', // method는 뭘할지
                headers : {
                    'Content-Type' : 'application/json', // content-type은 보내는 자원의 타입이 뭔지 명시
                },
                body : JSON.stringify({
                    eng,
                    kor,
                    day,
                    isDone : false
                })// 수정을 위한 정보를 body에 입력한다. 단 여기입력하는건 문자열이므로, json문자열로 마지막에 변경
            }).then(res => {
                if (res.ok){
                    alert("설정 완료");
                    history.push(`/day/${day}`);
                    setIsLoading(false); // 통신중에 여러번 클릭했을때의 오류방지
                }
            })

        }

        
    }


    return (
    <form onSubmit={onSubmit}>
        <div className='input_area'>
            <label> Eng </label>
            <input type="text" placeholder='computer' ref = {engRef}/>
        </div>
        <div className='input_area'>
            <label> Kor </label>
            <input type="text" placeholder = "컴퓨터" ref = {korRef}/>
        </div>
        <div className='input_area'>
            <label> Day </label>
            <select ref = {dayRef}>
                {days.map((day)=>(
                    <option key = {day.id}> {day.day} </option>
                ))}
            </select>
        </div>
        <button style={{
            opacity : isLoading ? 0.3 : 1}
        }>{isLoading ? `저장 중...` : `저장`}</button>
    </form>
    )
}