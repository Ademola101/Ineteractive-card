import styled from 'styled-components';

export const FrontCardStyle = styled.div`
/* background-color: hsl(249, 99%, 64%);
background-image: linear-gradient( to left, hsl(249, 99%, 64%), hsl(249, 99%, 64%) 65%, hsl(278, 68%, 11%)); */
background: url('/bg-card-front.png');
background-repeat: no-repeat;
height: 200px;
border-radius: 10px;

width: 80%;
position: relative;
bottom: 120px;
left: 10px;

.tiny {
  height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid white;
    margin-left: 100px;
    margin-top: 3px;
}

.number {

  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  letter-spacing: 2px;
}

.flex {
  display: flex;
}

.circle {
  width: 40px;
  border-radius: 50%;
  background-color: white;
  height: 40px;
  position: relative;
  top: 30px;
  left: 40px;
}

.month {
  color: white;
  letter-spacing: 2px;
}
.name {

  color: white;
  margin-left: 10px;
  width: 70%;
}

.four {
  color: white;
  margin: 5px;
  letter-spacing: 2px;
}

  @media (min-width:768px) {
position: relative;
bottom: 550px;
width: 35%;
margin-left: 50px;
width: 350px;


  }
`;