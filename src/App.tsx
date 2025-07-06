import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// 코드 스플리팅을 위한 동적 import
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const AppContainer = styled.div`
  min-height: 100vh;
`;

const AppLoadingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <ErrorBoundary>
        <Router>
          <Suspense 
            fallback={
              <AppLoadingContainer>
                <LoadingSpinner message="페이지 로딩 중..." />
              </AppLoadingContainer>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* 404 페이지 */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </AppContainer>
  );
}

export default App;
