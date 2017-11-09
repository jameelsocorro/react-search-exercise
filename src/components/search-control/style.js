import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const SearchControlContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const SearchText = styled(DebounceInput)`
    border: 1px solid #E6E6E6;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: none;
    outline: none;
    padding: 8px;
    width: 100%;
    max-width: 400px;
`;

export const SearchButton = styled.button`
    background-color: #68D034;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: white;
    cursor: pointer;
    outline: none;
    padding: 0 16px;
    text-transform: uppercase;
`;
