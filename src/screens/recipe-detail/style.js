import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecipeButton = styled(Link)`
    background-color: #68D034;
    border: none;
    color: white;
    cursor: pointer;
    display: inline-block;
    outline: none;
    padding: 8px 16px;
    position: absolute;
    text-transform: uppercase;
`;

export const RecipeSearchButton = styled(RecipeButton)`
    @media (min-width: 480px) {
        font-size: 1.2rem;
    }

    @media (min-width: 769px) {
        font-size: 1.4rem;
    }
`;

export const RecipeBackButton = styled(RecipeButton)`
    background-color: rgba(0,0,0,0.32);
    left: 16px;
    position: absolute;
    top: 16px;

    @media (min-width: 480px) {
        background-color: #68D034;
        margin-bottom: 16px;
        position: relative;
        top: 0;
        left: 0;
    }
`;

export const RecipeDetailContainer = styled.div`
    background-color: white;
    height: 100%;
    position: relative;

    @media (min-width: 480px) {
        background-color: transparent;
        padding: 16px;
    }
`;

export const RecipeDetailCard = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 480px) {
        background-color: white;
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
        flex-direction: row;
        padding: 16px;
    }

    @media (min-width: 1150px) {
        padding: 32px;
    }
`;

export const RecipeDetailImage = styled.div`
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 100%;

    @media (min-width: 480px) {
        max-width: 300px;
        max-height: 300px;
        flex-grow: 1;
    }
`;

export const RecipeDetailInfoContainer = styled.div`
    background-color: white;
    padding: 16px;

    @media (min-width: 480px) {
        padding: 0px;
        padding-left: 16px;
        flex-grow: 1;
    }
`;

export const RecipeDetailTitle = styled.div`
    color: #363636;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.125;
    margin-bottom: 24px;
`;

export const RecipeDetailRow = styled.div`
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 16px;
    padding-bottom: 16px;

    &:last-child {
        border: none;
        margin-bottom: 0px;
    }
`;

export const RecipeDetailRowTitle = styled.div`
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 8px;
`;

export const RecipeDetailRowValue = styled.div`
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;
