/* eslint-disable */

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, Navigate } from 'react-router-dom'
import Detail from './routes/Detail.js';
import Event from './routes/Event.js';
import axios from 'axios'
import Cart from './routes/Cart.js'

function App() {

  let [restaurant, setRestaurant] = useState(data)
  let restaurant_name = ['밀플랜비', '고고스', '중국집']
  let navigate = useNavigate();
  let [countClick, setCountClick] = useState(1);
  let [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" onClick={() => { navigate('/') }}>혼밥근절</Navbar.Brand>
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
            {
              loading == true ? <h4>로딩 중...</h4> : null
            }
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
                      <RestaurantList restaurant={restaurant} i={i} restaurant_name={restaurant_name}></RestaurantList>
                    )
                  })
                }

              </div>
            </div>
            <button onClick={() => {
              setLoading(true);
              setCountClick(countClick + 1)
              countClick < 3 ? axios.get('https://codingapple1.github.io/shop/data' + (countClick + 1) + '.json')
                .then((결과) => {
                  let copy = restaurant.concat(결과.data)
                  setRestaurant(copy)
                  setLoading(false)
                })
                .catch(() => {
                  console.log('실패함ㅅㄱ')
                  setLoading(false)
                }) : <h4>9개 이상은 안됨</h4>

            }}>버튼</button>
          </div>
        } />

        {
          //디테일 페이지입니다.
        }
        {
          restaurant.map((a, i) => {
            return (
              <Route path={'/detail/:id'} element={
                <Detail restaurant={restaurant} i={i} />
              }
              ></Route>
            )
          })
        }
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart></Cart>}/>
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
      <Link to={'detail/' + props.restaurant[props.i].id} style={{ textDecorationLine: 'none' }}>
        <img src={process.env.PUBLIC_URL + '/img/' + props.restaurant[props.i].title + '.jpg'} height={200} width={200} alt={props.restaurant_name[props.i]} />
        <h4 style={{ color: 'black' }}>{props.restaurant[props.i].title}</h4>
        <p style={{ color: 'black' }}>{props.restaurant[props.i].content}</p>
      </Link>
    </div>
  )
}


export default App;
