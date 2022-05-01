import React from 'react';
import styled from "@emotion/styled";
import {BREAK_POINT, COLORS, mediaQuery} from "../../styles/globalStyles";
import SideBar from "./components/SideBar";
const AppDiv = styled.div`
  color: ${COLORS.black};
  background: linear-gradient(
          106.37deg,
          #ffe1bc 29.63%,
          #ffcfd1 51.55%,
          #f3c6f1 90.85%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
`

const AppGlassDiv = styled.div`
  display: grid;
  height: 97%;
  width: 97%;
  background: ${COLORS.glass};
  border-radius: 2rem;
  gap: 16px;
  grid-template-columns: 11rem auto 20rem;
  overflow: hidden;
  
  ${mediaQuery(BREAK_POINT.tablet)}{
    grid-template-columns: 11rem 50% auto;
    overflow-y: scroll;
  }
  ${mediaQuery(BREAK_POINT.mobile)}{
    grid-template-columns: 1fr;
  }
`

const Index = () => {
    return (
        <AppDiv>
            <AppGlassDiv>
                <SideBar/>
                <div>main</div>
                <div>status</div>
            </AppGlassDiv>
        </AppDiv>
    );
};

export default Index;