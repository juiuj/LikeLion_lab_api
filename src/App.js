import {Outlet} from 'react-router-dom';
import Header from './Component/Header';
import styled from 'styled-components'

function App() {
  return (
  <Container>
    <Header></Header>
    <Outlet></Outlet>
  </Container>
  );
}

const Container = styled('div')`
width: 70%;
margin:auto;
`

export default App;


