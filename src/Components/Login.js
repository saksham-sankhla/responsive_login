import styled from "styled-components";

const VectorCont = styled.div`
  padding: 15px;
`;

const PageCont = styled.div`
  display: flex;  

  @media (min-width: 320px) {
    padding: 8px 8px 8px 16px;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  }
  }
  @media (min-width: 480px) {
    padding: 8px 8px 8px 16px;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  }
  }

  @media (min-width:600px)  {padding: 8px 8px 8px 16px;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  }
  @media (min-width:801px)  {padding: 12px 12px 12px 30px;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  
  }}
  @media (min-width:1025px) {padding: 16px 16px 16px 35px;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  
  @media (min-width:1281px) {padding: 20px 20px 20px 71px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
`;

const VectorImg = styled.img`
  @media (max-width: 801px) {
    width: 0px;
    height: 0px;
  }
  @media (min-width: 1025px) {
    width: 343.219px;
    height: 433.601px;
  }
  @media (min-width: 1281px) {
    width: 443.219px;
    height: 533.601px;
  }
`;

const LoginCont = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  @media (min-width: 320px) {
    padding: 56px 22px 56px 22px;
  }
  @media (min-width: 480px) {
    padding: 56px 22px 56px 22px;
  }
  @media (min-width: 600px) {
    padding: 56px 22px 56px 22px;
  }
  @media (min-width: 801px) {
    padding: 76px 46px 76px 46px;
  }
  @media (min-width: 1025px) {
    padding: 86px 56px 86px 56px;
  }
  @media (min-width: 1281px) {
    padding: 86px 56px 86px 56px;
  }
`;

const Heading = styled.h1`
  color: var(--Text-color, #04072f);
  text-align: center;
  font-family: "Poppins", sans-serif;

  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  margin: 0px;
  @media (min-width: 320px) {
    font-size: 28px;
  }
  @media (min-width: 480px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
  }
  @media (min-width: 801px) {
    font-size: 38px;
  }
  @media (min-width: 1025px) {
    font-size: 48px;
  }
  @media (min-width: 1281px) {
    font-size: 48px;
  }
`;

const TextField = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  @media (min-width: 320px) {
    padding: 10px 8px 10px 8px;
    width: 270px;
    height: 16px;
  }
  @media (min-width: 480px) {
    padding: 10px 8px 10px 8px;
    width: 270px;
    height: 16px;
  }
  @media (min-width: 600px) {
    padding: 12px 10px 12px 10px;
    width: 400px;
    height: 16px;
  }
  @media (min-width: 801px) {
    padding: 14px 12px 14px 12px;
    width: 650px;
    height: 16px;
  }
  @media (min-width: 1025px) {
    padding: 16px 14px 16px 14px;
    width: 700px;
    height: 16px;
  }
  @media (min-width: 1281px) {
    padding: 18px 16px 18px 16px;
    width: 790px;
    height: 18px;
  }
`;

const Label = styled.label`
  color: var(--Text-color, #04072f);
  font-family: "Poppins", sans-serif;

  font-style: normal;

  @media (min-width: 320px) {
    padding-top: 25px;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 80%;
  }
  @media (min-width: 480px) {
    padding-top: 25px;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 80%;
  }
  @media (min-width: 600px) {
    padding-top: 25px;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 80%;
  }
  @media (min-width: 801px) {
    padding-top: 30px;
    padding-bottom: 12px;
    font-size: 15px;
    font-weight: 400;
    line-height: 90%;
  }
  @media (min-width: 1025px) {
    padding-top: 40px;
    padding-bottom: 16px;
    font-size: 18px;
    font-weight: 500;
    line-height: 110%;
  }
  @media (min-width: 1281px) {
    padding-top: 40px;
    padding-bottom: 16px;
    font-size: 18px;
    font-weight: 500;
    line-height: 110%;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  background: #00004d;
  font-family: "Poppins", sans-serif;
  color: white;

  @media (min-width: 320px) {
    width: 250px;
    height: 28px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 480px) {
    width: 250px;
    height: 28px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 600px) {
    width: 250px;
    height: 28px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 801px) {
    width: 250px;
    height: 28px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 1025px) {
    width: 338px;
    height: 36px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 1281px) {
    width: 338px;
    height: 36px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Register = styled.p`
  margin: 0px;
`;

export default function Login() {
  return (
    <PageCont>
      <VectorCont>
        <VectorImg src="./media/vectorimg.png" />
      </VectorCont>

      <LoginCont>
        <Heading>Login</Heading>

        <Label for="login_id">Login ID</Label>
        <TextField id="login_id" placeholder="Enter Login ID" />

        <Label for="password">Password</Label>
        <TextField id="password" placeholder="Enter Password" />

        <Button>Login</Button>

        <Register>
          Don't Have an account?
          <a href="register">Register Here</a>
        </Register>
      </LoginCont>
    </PageCont>
  );
}
