import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        padding: 0px;
        flex-direction: column;
    }
`