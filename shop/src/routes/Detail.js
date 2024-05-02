/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"

//styled-components 실습
// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : ${ props=>props.bg == 'blue' ? 'white' : 'black'}
//   padding : 10px;
// `

function Detail(props) {

  let { id } = useParams();
  let curData = props.restaurant.find((item) => { return (item.id == id) })
  let [count,setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [textAlert, settextAlert] = useState(false);

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])

  useEffect(() => {
    if(isNaN(num) == true){
      settextAlert(true);
    }
  })

  return (
    <div className="container">
      {/* <YellowBtn bg='blue'>버튼</YellowBtn> */}
      {
        alert == true
          ? <div className="alert alert-warning">2초이내 구매시 할인</div>
          : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + '/img/' + curData.title + '.jpg'} width="100%" alt={curData.title} />
        </div>
        <div className="col-md-6">
          {
            textAlert == true ? <p>숫자만 적으셈</p> : null
          }
          <input type="text" onChange={(e)=>{setNum(e.target.value)}}></input>
          <h4 className="pt-5">{curData.title}</h4>
          <p>{curData.ment}</p>
          <p>{curData.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail