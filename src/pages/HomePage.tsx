import React, { Suspense } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import { useMetaData } from '../hooks/useDocumentTitle';

// 동적 import로 코드 스플리팅
const QRGenerator = React.lazy(() => import('../components/QRGenerator'));

const HomeContent = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 16px;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 32px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`;

const Feature = styled.div`
  padding: 16px;
  background: #f8f9ff;
  border-radius: 12px;
  border: 1px solid #e1e5e9;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const FeatureText = styled.p`
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
`;

const HomePage: React.FC = () => {
  // 동적 메타데이터 설정
  useMetaData({
    title: 'QR 코드 생성기 - 무료 온라인 QR 코드 생성 도구',
    description: '텍스트, URL, 이메일, 연락처, Wi-Fi 등 다양한 형태의 QR 코드를 무료로 생성할 수 있는 온라인 도구입니다.',
    keywords: 'QR코드, QR생성기, 무료QR, 온라인QR, 큐알코드, QR코드만들기',
    ogTitle: 'QR 코드 생성기 - 무료 온라인 QR 코드 생성 도구',
    ogDescription: '텍스트, URL, 이메일, 연락처, Wi-Fi 등 다양한 형태의 QR 코드를 무료로 생성할 수 있는 온라인 도구입니다.',
    ogImage: '/logo512.png'
  });

  return (
    <Layout title="QR 코드 생성기">
      <HomeContent>
        <Title>다양한 형태의 QR 코드를 쉽게 생성하세요</Title>
        <Subtitle>
          간편하고 빠르게 QR 코드를 만들어보세요.<br />
          무료로 다양한 형태의 QR 코드를 지원합니다.
        </Subtitle>
        
        <Features>
          <Feature>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureText>텍스트</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>🌐</FeatureIcon>
            <FeatureText>URL</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>📧</FeatureIcon>
            <FeatureText>이메일</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>📞</FeatureIcon>
            <FeatureText>전화번호</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>👤</FeatureIcon>
            <FeatureText>연락처</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>📶</FeatureIcon>
            <FeatureText>Wi-Fi</FeatureText>
          </Feature>
        </Features>
        
        <Suspense fallback={<LoadingSpinner message="QR 생성기 로딩 중..." />}>
          <QRGenerator />
        </Suspense>
      </HomeContent>
    </Layout>
  );
};

export default HomePage; 