import React, {useState} from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import logo from '../../../public/images/logo.png'
import {ACTIVE, BREAK_POINT, COLORS, FLEX, mediaQuery, NormalTransition} from "../../../styles/globalStyles";
import {css} from "@emotion/react";
import SidebarData from "../../../constants/dashboard/Datas";
import ExpandableSideBar from "../BehaviorCompontents/ExpandableSideBar";



const Logo = styled.div`
  font-weight: bold;
  font-size: 22px;
  gap: 1rem;
  ${FLEX.center};
  ${mediaQuery(BREAK_POINT.tablet)} {
    display: none;
  }

  ${mediaQuery(BREAK_POINT.mobile)} {
    display: flex;
  }


`
const Menus = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface ActiveProps {
    $active: boolean
}

const ActiveCss = css`
  background-color: ${ACTIVE.item};
  margin-left: 0;

  :before {
    content: "";
    width: 8px;
    height: 100%;
    background: ${COLORS.pink};
    margin-right: calc(1rem - 8px);
  }
`

const MenuItem = styled.div<ActiveProps>`
  ${NormalTransition};
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  margin-left: 2rem;
  position: relative;
  border-radius: 0.7rem;
  font-size: 14px;

  :last-child {
    position: absolute;
    bottom: 2.3rem;
    width: 100%;
  }

  :hover {
    cursor: pointer;
  }

  ${props => props.$active && ActiveCss}
  ${mediaQuery(BREAK_POINT.tablet)} {
    > span {
      display: none;
    }

    ${mediaQuery(BREAK_POINT.mobile)} {
      > span {
        display: block;
      }

      :last-child {
        position: relative;
        margin-top: 6rem;
      }

    }
`



const SideBar = () => {
    const [selected, setSelected] = useState(0)
    return (
        <ExpandableSideBar>
            <Logo>
                <Image src={logo} width={48} height={48} layout={"intrinsic"} alt='logo'/>
                <span>
                    Sp
                    <span style={{color: COLORS.pink}}>0</span>
                    ps
                </span>
            </Logo>
            <Menus>
                {SidebarData.map(({icon: Icon, heading}, index) => (
                    <MenuItem $active={selected === index} key={index} onClick={() => setSelected(index)}>
                        <Icon/>
                        <span>
                        {heading}
                    </span>
                    </MenuItem>))}
            </Menus>
        </ExpandableSideBar>

    );
};

export default SideBar;