import styled from 'styled-components';

export const InnerCardStyle = styled.div`

height: 200px;
width: 80%;
background-color: hsl(0, 0%, 100%);


position: relative;
top: 25px;
left: 60px;
border-radius: 10px;

.black {
  height: 40px;
  background-color: black;
  position: relative;
  top: 20px;
  
}


.cvv {
  background-color:hsl(270deg 4% 61%);
  height: 30px;
  position: relative;
  top: 54px;
  width: 80%;
  margin: auto;
  border-radius: 5px;
}

.cvvnumber {
  margin: 5%;
  text-align: end;
  color: hsl(240deg 6% 87%);

}

@media (min-width:768px) {
  position: relative;
  top: 350px;
  left: 200px;
  background-color: hsl(240deg 36% 86%);
  width: 300px;
}
`;