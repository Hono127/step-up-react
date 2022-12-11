import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import styled from 'styled-components';
import StyledCompoents from './components/StyledCompoents';

function BasicRouter() {
  const Container = styled.div`
    align-items: center;
    border-radius: 20px;
    border: solid 2px #392eff;
    display:flex;
    flex-direction: column;
    font-size: 25px;
    margin: 8px;
    padding: 8px;
    justify-content: space-around;
  `;

  return (
    <>
      <BrowserRouter>
        <Container>
          <Link to="/"><Home /></Link>
          <br />
          <Link to="/page1"><Page1 /></Link>
          <br />
          <Link to="/page2"><Page2 /></Link>
          <br />
          <Link to="/page3"><Page3 /></Link>
          <br />
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default BasicRouter