import styled from 'styled-components';

export const FrontCardStyle = styled.div`
/* background-color: hsl(249, 99%, 64%);
background-image: linear-gradient( to left, hsl(249, 99%, 64%), hsl(249, 99%, 64%) 65%, hsl(278, 68%, 11%)); */
background: url('/bg-card-front.png');
height: 200px;

width: 80%;
position: relative;
bottom: 120px;
left: 10px;

.number {

  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
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
}
.name {

  color: white;
  margin-left: 10px;
  width: 75%;
}

.four {
  color: white;
  margin: 10px;
}
`;