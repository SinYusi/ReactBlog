/* eslint-disable */

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
  return (
    <div className="container">
      {/* <YellowBtn bg='blue'>버튼</YellowBtn> */}

      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + '/img/' + curData.title + '.jpg'} width="100%" alt={curData.title} />
        </div>
        <div className="col-md-6">
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