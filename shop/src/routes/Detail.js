function Detail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.fileAddress[props.i]} width="100%" alt={props.restaurant[props.i].title}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.restaurant[props.i].title}</h4>
          <p>{props.restaurant[props.i].ment}</p>
          <p>{props.restaurant[props.i].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail