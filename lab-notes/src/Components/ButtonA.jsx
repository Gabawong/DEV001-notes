import styled from 'styled-components';

const StyledButton = styled.button`

background: transparent;
border:0;
width: 100px;
height: 100px;
color: #c65314;
&:hover svg {
    color: #c65314
  }
`

const ButtonA = ({ children }) => {
    return <StyledButton>{children}</StyledButton>
}

export default ButtonA;