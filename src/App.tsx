import styled from 'styled-components';
import './App.css';
import QRGenerator from './components/QRGenerator';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const AppWrapper = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1.1rem;
`;

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <Title>QR 코드 생성기</Title>
        <Subtitle>다양한 형태의 QR 코드를 쉽게 생성하세요</Subtitle>
        <QRGenerator />
      </AppWrapper>
    </AppContainer>
  );
}

export default App;
