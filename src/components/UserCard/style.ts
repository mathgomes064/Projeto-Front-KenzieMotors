import styled from "styled-components";


export const Container = styled.div`
  section {
  background-color: #191B21;
  margin: 65px 20px 31px 20px;
  justify-content: center;
  align-items: center;
  padding: 40px 29px 43px 35px;
  border-radius: 4px;
}
#profile-pic {
  background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
  width: 104px;
  height: 104px;
  border-radius: 50px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-bottom: 45px;
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
}

#profile-name {
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 30px;
}

#profile-name > h3 {
  color: var(--white);
  font-size: 24px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  margin-right: 9px;
}

#container-anunciante  {
  padding: 5px 7px;
  background-color: var(--white);
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: var(--brand-1);
  border: none;
}

#container {
  display: flex;
  flex-direction: column;
}

span {
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--white);
  
}


#button-blue-1-big {
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: #191B21;
  border: 1.5px solid var(--brand-1);
  border-radius: 4px;
  gap: 10px;
  cursor: pointer;

  color: var(--brand-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-blue-1-big:hover {
  transition: all 0.4s;
  background-color: #5126ea;
  border: 1.5px solid var(--brand-1);
  border: none;
  color: var(--white);
}


@media (min-width: 450px) {
  section {
    margin-left: 10%;
    margin-right: 10%;
  }

  #profile-pic {
    margin-bottom: 4px;
  }
}

`;