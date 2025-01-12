import styled, {css, keyframes} from 'styled-components';

const blink = keyframes`
    50% {
        box-shadow: 0 0 10px red;
    }
`;

export const TableWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 6px 8px;
    text-align: center;
    background: #fff;
    ${({warning}) =>
            warning &&
            css`
                animation: ${blink} 0.7s infinite;
            `}
`;

export const TableImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`;

export const TableTitle = styled.h3`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #1a1a1a
`;
