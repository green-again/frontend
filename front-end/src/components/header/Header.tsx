import React from 'react';
import styled from 'styled-components';
import { FlexEvenly } from '../../themes/flex';
import { AiOutlineMenu, AiOutlineShoppingCart,AiOutlineSearch,AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <HeaderContainer>
            <LeftContainer>
                <Navbar><AiOutlineMenu/></Navbar>
            </LeftContainer>
            <CenterContainer>
                <h1>GreenAgin</h1>
            </CenterContainer>
            <RightContainer>
                <RightIconsContainer>
                <Carticon><AiOutlineShoppingCart/></Carticon>
                <Searchicon><AiOutlineSearch/></Searchicon>
                <Loginicon><AiOutlineUser/></Loginicon>
                </RightIconsContainer>
            </RightContainer>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.header`
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.01), 0 2px 2px rgba(0, 0, 0, 0.05);
    height: 8vh;
    ${FlexEvenly};
`;

const LeftContainer = styled.section`
    font-size: 25px;
`;

const Navbar = styled.nav`
    cursor: pointer;
    padding-top: 0.8rem;
    padding-left: 3rem;
`;

const CenterContainer = styled.section`
    h1{
        cursor: pointer;
        padding-left: 8rem;
    }
`;

const RightContainer = styled.section`
    font-size: 25px;
    display: flex;
`;

const RightIconsContainer = styled.ul`
    display: flex;
    padding-top: 0.6rem;
    svg{
        cursor: pointer;
        padding-right: 2rem;
    }
`;

const Carticon = styled.li`
`;

const Searchicon = styled.li`
`;

const Loginicon = styled.li`
`;

export default Header;
