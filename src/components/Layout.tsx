import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0 0 16px 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${props => props.$isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  min-height: 400px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  color: white;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "QR 코드 생성기" 
}) => {
  const location = useLocation();
  
  return (
    <LayoutContainer>
      <Header>
        <Logo>{title}</Logo>
        <Navigation>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            🏠 홈
          </NavLink>
          <NavLink to="/about" $isActive={location.pathname === '/about'}>
            ℹ️ 소개
          </NavLink>
        </Navigation>
      </Header>
      
      <MainContent>
        <ContentWrapper>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ContentWrapper>
      </MainContent>
      
      <Footer>
        <p>© 2024 QR 코드 생성기. 모든 권리 보유.</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout; 