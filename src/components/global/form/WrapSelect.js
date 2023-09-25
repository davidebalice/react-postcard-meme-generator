import styled, { css } from 'styled-components';

const WrapSelect = styled.div`
    margin-bottom: 30px;
    display: flex;
    margin-bottom:50px;
    align-items:center;
    min-width:120px;
    gap:20px;
    & > Label {
        margin:0
    }
    & > Select {
        width:30%
    }

`;

export default WrapSelect;
