import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [restaurant] = useState(data)
  let fileAddress = ['/img/MealPlanB.jpg', '/img/GoGos.jpg', '/img/ChinaHouse.jpg']
  let restaurant_name = ['밀플랜비', '고고스', '중국집']

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">혼밥근절</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {
          //홈페이지입니다.
        }
        <Route path="/" element={
          <div>
            <div className="main-bg">
              <input type='text' className='search'></input>
            </div>
            <div>
              <h2>맛집 리스트</h2>
            </div>
            <div className="container">
              <div className="row">
                {
                  restaurant.map((a, i) => {
                    return (
                      <RestaurantList restaurant={restaurant} fileAddress={fileAddress} i={i} restaurant_name={restaurant_name}></RestaurantList>
                    )
                  })
                }

              </div>
            </div>
          </div>
        } />

        {
          //디테일 페이지입니다.
        }
        {
          restaurant.map((a, i) => {
            return (
              <Route path={'/detail' + restaurant[i].title} element={
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={fileAddress[i]} width="100%" />
                    </div>
                    <div className="col-md-6">
                      <h4 className="pt-5">{restaurant[i].title}</h4>
                      <p>{restaurant[i].ment}</p>
                      <p>{restaurant[i].price}</p>
                      <button className="btn btn-danger">주문하기</button>
                      <Link to="/">홈으로 가기</Link>
                    </div>
                  </div>
                </div>
              }
              ></Route>
            )
          })
        }
      </Routes>

    </div>
  );
}
{
  //식당리스트 카드입니다.
}
function RestaurantList(props) {
  return (
    <div className="col-md-4">
      <Link to={'detail' + props.restaurant[props.i].title} style={{ textDecorationLine: 'none' }}>
        <img src={process.env.PUBLIC_URL + props.fileAddress[props.i]} height={200} width={200} alt={props.restaurant_name} />
        <h4 style={{ color: 'black' }}>{props.restaurant[props.i].title}</h4>
        <p style={{ color: 'black' }}>{props.restaurant[props.i].content}</p>
      </Link>
    </div>
  )
}

export default App;
