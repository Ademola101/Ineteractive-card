import styled from 'styled-components';
export const FormStyle = styled.form`

display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
margin: 20px;
position: relative;
bottom: 100px;

input::placeholder {

    color: hsl(240deg 22% 84%);
    font-size: 1.2rem;
    
    padding: 10px;

    
}


input:focus {
  border: solid #6767ab 2px;
  outline: 0;
  outline-color: transparent;
  outline-style: none;
}
.nameinput {
  width: 80vw;
  height: 40px;
  border:  solid hsl(240deg 7% 62%) 2px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  padding-left: 10px;
}
.numberinput {
  width: 80vw;
  height: 40px;
  border:  hsl(240deg 7% 62%) solid 2px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  padding-left: 10px;
}

.namelabel {
  margin-top: 10px;
  letter-spacing: 1px;
  font-size: small;
}
.numberlabel {
  margin-top: 10px;
  letter-spacing: 1px;
  font-size: small;
  
}

.monthlabel {
  letter-spacing: 1px;
  font-size: small;
  
}

.monthinput {
  width: 80px;
  padding: 10px;
  margin-top: 10px;
  border:  solid hsl(240deg 7% 62%);
  border-radius: 5px;
  
}
.yearinput {
  width: 80px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  border:  hsl(240deg 7% 62%) solid 2px;
  border-radius: 5px;
}

.cvvinput {
  margin-left: 10px;
  border:  hsl(240deg 7% 62%) solid 2px;
  border-radius: 5px;
  padding: 10px;
  width: 135px;
}

.cvvlabel {
margin-left: 10px;
font-size: small;

}

.error {
  color: red;
  margin-bottom: 20px;
}
.error-month {
  color: red;
  margin-bottom: 20px;
  width: 80px;
}
.error-year {
  color: red;
  margin-bottom: 20px;
  width: 80px;
  position: relative;
  left: 90px;
  bottom: 65px;

}
.error-cvv {
  color: red;
  margin-bottom: 20px;
  width: 120px;
  position: relative;
  left: 200px;
  bottom: 130px;

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
`;
