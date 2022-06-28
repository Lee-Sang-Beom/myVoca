import React from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hook/useFetch';

export default function CreateDay(){

    const days = useFetch(`http://localhost:3001/days`);
    const history = useHistory();

    function addDay(e : React.FormEvent){
        e.preventDefault();
        fetch(`http://localhost:3001/days`,{
            // 두번째 인자로 객체 입력
            method : 'POST', // method는 뭘할지
            headers : {
                'Content-Type' : 'application/json', // content-type은 보내는 자원의 타입이 뭔지 명시
            },
            body : JSON.stringify({
                day : days.length + 1
            })// 수정을 위한 정보를 body에 입력한다. 단 여기입력하는건 문자열이므로, json문자열로 마지막에 변경
        }).then(res => {
            if (res.ok){
                alert("설정 완료");
                history.push('/');
            }
        })
    }
    
    return (
        <div>
            <h3> 현재 일수 : {days.length} </h3>
            <button onClick={addDay}> Day 추가 </button>
        </div>
    )
}