import styled from 'styled-components';

const CardContainer = styled.div`
    margin-bottom: 1rem;
    display:flex;
    justify-content:space-around;
    min-height:300px;
    padding-top:70px;
    @media (max-width: 768px) {
      flex-direction:column;
    }
`;

export default CardContainer;