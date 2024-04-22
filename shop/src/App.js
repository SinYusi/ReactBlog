import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';

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
  );
}

function RestaurantList(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + props.fileAddress[props.i]} height={200} width={200} alt={props.restaurant_name} />
      <h4>{props.restaurant[props.i].title}</h4>
      <p>{props.restaurant[props.i].content}</p>
    </div>
  )
}

export default App;
