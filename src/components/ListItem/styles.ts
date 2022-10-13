import styled from "styled-components";
type ContainerProps = {
done: boolean
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
display: flex;
background-color: #20212e;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

input {
   width: 25px;
   height: 25px;
   margin: 5px;
}

label{
color: ${done ? '#444' : '#CCC'};
text-decoration: ${done ? 'line-through' : 'none'};
transition: 0.2s;
}
`
))
