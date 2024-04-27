/* eslint-disable */

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, Navigate } from 'react-router-dom'
import Detail from './routes/Detail.js';
import Event from './routes/Event.js';

function App() {

  let [restaurant] = useState(data)
  let fileAddress = ['/img/MealPlanB.jpg', '/img/GoGos.jpg', '/img/ChinaHouse.jpg']
  let restaurant_name = ['밀플랜비', '고고스', '중국집']
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">혼밥근절</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link href="#event" onClick={() => { navigate('/event') }}>Event</Nav.Link>
              <NavDropdown title="Event" id="basic-nav-dropdown">
                <NavDropdown.Item href="#one" onClick={() => { navigate('/event/one') }}>One</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#two" onClick={() => { navigate('/event/two') }}>
                  Two
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
                <Detail fileAddress={fileAddress} restaurant={restaurant} i={i} />
              }
              ></Route>
            )
          })
        }
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지</div>} />
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
