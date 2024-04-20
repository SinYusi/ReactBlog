import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './App.css';

function App() {
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
                </NavDropdown. Item>
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
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/img/MealPlanB.jpg'} height={200} width={200} alt = "밀플랜비"/>
            <h4>밀플랜비</h4>
            <p>브리또</p>
          </div>
          
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/img/GoGos.jpg'} height={200} width={200} alt="고고스"/>
            <h4>고고스카페</h4>
            <p>커피</p>
          </div>

          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/img/ChinaHouse.jpg'} height={200}width={200} alt='중국집'/>
            <h4>중국집</h4>
            <p>짜장면</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
