import styled from "styled-components";

const LineMiddle = styled.hr`
opacity: 0.5;
width: 50%;
height: 100px;
display: flex;
margin-left:25%;
`;

function Line() {
    return(
        <LineMiddle></LineMiddle>
    )
}

export default Line;