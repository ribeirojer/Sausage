import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(-45deg, #050404, #2e1c20, #4a1942, #893168);
  background-size: 400% 400%;
  animation: backgroundTransition 8s ease-in-out infinite;

  @keyframes backgroundTransition {
    0% {
      background-position: 0% 80%;
    }
    50% {
      background-position: 80% 100%;
    }
    100% {
      background-position: 0% 90%;
    }
  }
`;

function App() {

  return (
    <Wrapper>
      <Header/>
      <Outlet/>
      <Footer/>
    </Wrapper>
  )
}

export default App