import React, {useState} from "react";
import styled from "@emotion/styled";
import {BREAK_POINT, mediaQuery, NormalTransition} from "../../../styles/globalStyles";
import {UilBars} from '@iconscout/react-unicons'

const SideBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;

  ${NormalTransition}
  ${mediaQuery(BREAK_POINT.mobile)} {
    position: fixed;
    z-index: 9;
    background: #ffe0e0;
    width: 55%;
    min-width: 11rem;
    padding-right: 1rem;
    height: 100%;
  }
`

const HamburgerBar = styled.div`
  display: none;

  ${NormalTransition}
  ${mediaQuery(BREAK_POINT.mobile)} {
    display: flex;
    position: fixed;
    top: 2rem;
    left: 60%;
    background: #ffe0e0;
    padding: 10px;
    border-radius: 10px;
    z-index: 9;
  }
`


const ExpandableSideBar = ({children}: { children: React.ReactNode }) => {
    const [expended, setExpanded] = useState(true)
    return (
        <>
            <HamburgerBar style={{left: expended ? '60%' : '5%'}} onClick={() => setExpanded(p => !p)}>
                <UilBars/>
            </HamburgerBar>
            <SideBarWrapper style={{left: expended ? '0%' : '-100%'}}>
                {children}
            </SideBarWrapper>
        </>

    )
}

export default ExpandableSideBar