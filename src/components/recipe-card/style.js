import styled from 'styled-components';

export const RecipeCardContainer = styled.div`
    background: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    margin-right: 16px;
    margin-bottom: 16px;
    transition: all 0.3s ease-in-out;
    width: 100%;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }

    @media (min-width: 480px) {
        width: calc(100% / 2 - 16px);
    }

    @media (min-width: 769px) {
        width: calc(100% / 3 - 16px);
    }

    @media (min-width: 1150px) {
        width: calc(100% / 4 - 16px);
    }
`;

export const RecipeCardImage = styled.div`
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 100%;

    @media (min-width: 480px) {
        height: 220px;
    }
`;

export const RecipeCardInfo = styled.div`
    padding: 16px;
    padding-bottom: 24px;
`;

export const RecipeCardTitle = styled.div`
    color: #363636;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.125;
    margin-bottom: 8px;
`;

export const RecipeCardDesc = styled.div`
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;
