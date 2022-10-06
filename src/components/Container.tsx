import styled from "@emotion/styled";

const Container = styled('div')`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.bg};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Container