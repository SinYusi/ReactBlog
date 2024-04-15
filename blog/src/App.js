/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  //html 문법으로 변수 집어 넣는 방법
  //document.querySelector('h4').innerHTML = post;

  let [logo,setLogo] = useState('ReactBlog');
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학', '리액트 강의']);
  let [따봉, 따봉변경] = useState(new Array(글제목.length).fill(0));
  let [modal, setModal] = useState(new Array(글제목.length).fill(false));
  return (
    <div className="App">
      
      <div className="black-nav">
        <h4 style = {{color : 'red', fontSize : '16px'}}>{logo}</h4>
      </div>
      
      <button onClick={()=>{
        let copy=[...글제목];
        copy.sort();
        글제목변경(copy)
      }}>정렬버튼</button>

      <button onClick={()=>{
        let copy=[...글제목];
        copy[0]='여자 코트 추천'
        글제목변경(copy);
      }}>글수정</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick = {() => { 따봉변경(따봉+1)}}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>

              <h4 onClick={()=>{
                let modalCopy = [...modal];
                modalCopy[i] == false ? modalCopy[i] = true : modalCopy[i] = false
                setModal(modalCopy);
              }}>{글제목[i]} 
                <span onClick = {() => {
                  let copy = [...따봉];
                  copy[i] = copy[i]+1;
                  따봉변경(copy)
                }}>👍</span> { 따봉[i] } 
              </h4>

              <p>2월 17일 발행</p>
              {
                modal[i] == true ? <Modal/> : null
              }
              
            </div>
          )
        })
      }
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;