import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../themes/flex';
import maincontent from './../../utils/images/maincontent.jpg';

const MainContent = () => {

    return (
        <MainContentsContainer>
        <BackgroundImages style={{ backgroundImage: `url(${maincontent})`}}>
        <EnterContentButton>
            <button>READ THIS STORY</button>
        </EnterContentButton>
        </BackgroundImages>
        </MainContentsContainer>
    )
};

const MainContentsContainer = styled.article`
    margin-right: 2rem;
    margin-left: 2rem;
`;

const BackgroundImages = styled.div`
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    ${FlexCenter}
`;

const EnterContentButton = styled.div`
button{
    height: 40px;
    width: 200px;
    margin-top: 500px;
    background: transparent;
    color: white;
    border: solid 2px white;
    font-weight: 700;
    :hover{
        background: white;
        transition: 0.8s;
        color: black;
    }
}
`;

export default MainContent;
