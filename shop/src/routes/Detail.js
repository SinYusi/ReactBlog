/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Nav } from "react-bootstrap"

//styled-components 실습
// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : ${ props=>props.bg == 'blue' ? 'white' : 'black'}
//   padding : 10px;
// `

function Detail(props) {

  let { id } = useParams();
  let curData = props.restaurant.find((item) => { return (item.id == id) })
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [textAlert, settextAlert] = useState(false);
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])

  useEffect(() => {
    if (isNaN(num) == true) {
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
          <img src={process.env.PUBLIC_URL + '/img/' + curData.title + '.jpg'} width="50%" alt={curData.title} />
        </div>
        <div className="col-md-6">
          {
            textAlert == true ? <p>숫자만 적으셈</p> : null
          }
          <input type="text" onChange={(e) => { setNum(e.target.value) }}></input>
          <h4 className="pt-5">{curData.title}</h4>
          <p>{curData.ment}</p>
          <p>{curData.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  )
}

function TabContent({ tab }) {
  // if (props.tab == 0)
  //   return (<div>내용 0</div>)
  // if (props.tab == 1)
  //   return (<div>내용 1</div>)
  // if (props.tab == 2)
  //   return (<div>내용 2</div>)
  return (
    <div className="start end">
      {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>
  )
}

export default Detail