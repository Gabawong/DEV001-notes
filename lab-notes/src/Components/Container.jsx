import styled from 'styled-components';

const StyledDiv = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
max-height: 350px;
border-bottom: 5px solid #c65314;
padding: 15px;
font-family: 'Prompt', sans-serif;
font-size: 20px;

`;


const Container = ({children}) => {
    return<StyledDiv >{children}</StyledDiv >  
}

export default Container; 