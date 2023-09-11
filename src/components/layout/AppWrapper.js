import styled from 'styled-components';

const AppWrapper = styled.div`
    min-height:calc(100vh - 200px);

    @media all and (max-width: ${({ theme }) => theme.layout.smWidth}) {
        margin: 1rem 0;
    }
`;

export default AppWrapper;
