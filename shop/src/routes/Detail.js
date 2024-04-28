/* eslint-disable */

import { useParams } from "react-router-dom"

function Detail(props) {
  let { id } = useParams();
  let curData = props.restaurant.find((item) => {return(item.id == id)})
  return (
    <div className="container">
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