/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  //html 문법으로 변수 집어 넣는 방법
  //document.querySelector('h4').innerHTML = post;

  let [logo,setLogo] = useState('ReactBlog');
  let [글제목,a] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style = {{color : 'red', fontSize : '16px'}}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick = {() => { 따봉변경(따봉+1)}}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
