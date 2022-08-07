import styled from 'styled-components';

export const FrontCardStyle = styled.div`
background-color: hsl(249, 99%, 64%);
background-image: linear-gradient( to left, hsl(249, 99%, 64%), hsl(249, 99%, 64%) 65%, hsl(278, 68%, 11%));
height: 200px;

width: 80%;
position: relative;
bottom: 120px;
left: 10px;

.number {

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}

.name {

  color: white;
  margin-left: 50px;
}

.four {
  color: white;
  margin: 10px;
}
`;