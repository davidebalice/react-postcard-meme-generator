import styled from 'styled-components';

const MainContent = styled.section`
    display: flex;
    margin:0 auto;
    margin-bottom: 3rem;
    max-width: ${({ theme }) => theme.layout.maxWidth};

    @media all and (max-width: ${({ theme }) => theme.layout.smWidth}) {
        flex-direction: column;
    }
`;

export default MainContent;
