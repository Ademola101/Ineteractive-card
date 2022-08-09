import styled from 'styled-components';

export const SubmitStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
bottom: 60px;

.thank {
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 50px;
  

}

.added {
  color: hsl(240deg 14% 77%);
  margin-top: 20px;
}

.logo{
  width: 100px;
  height: 100px;
  
}

button {

width: 80vw;
background-color:hsl(278, 68%, 11%) ;
color: white;
border: none;
border-radius: 5px;
height: 50px;
margin-top: 30px;
font-size: large;

}

@media (min-width:768px) {

  bottom: 600px;
  left: 200px;

  button {
    width: 300px;
  }
}
`;

