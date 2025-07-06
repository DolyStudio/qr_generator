import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useMetaData } from '../hooks/useDocumentTitle';

const AboutContent = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 24px;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Content = styled.div`
  color: #666;
  line-height: 1.8;
  margin-bottom: 32px;
  text-align: left;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const AboutPage: React.FC = () => {
  // 동적 메타데이터 설정
  useMetaData({
    title: 'QR 코드 생성기 소개 - 무료 온라인 QR 코드 생성 도구',
    description: 'QR 코드 생성기는 텍스트, URL, 이메일, 연락처, Wi-Fi 등 다양한 형태의 QR 코드를 무료로 생성할 수 있는 온라인 도구입니다.',
    keywords: 'QR코드, QR생성기, 무료QR, 온라인QR, 큐알코드, 소개',
    ogTitle: 'QR 코드 생성기 소개 - 무료 온라인 QR 코드 생성 도구',
    ogDescription: 'QR 코드 생성기는 텍스트, URL, 이메일, 연락처, Wi-Fi 등 다양한 형태의 QR 코드를 무료로 생성할 수 있는 온라인 도구입니다.',
    ogImage: '/logo512.png'
  });

  return (
    <Layout title="QR 코드 생성기 소개">
      <AboutContent>
        <Title>QR 코드 생성기 소개</Title>
        
        <Content>
          <Section>
            <SectionTitle>🎯 서비스 목적</SectionTitle>
            <p>
              QR 코드 생성기는 누구나 쉽고 빠르게 다양한 형태의 QR 코드를 생성할 수 있는 
              무료 온라인 도구입니다. 복잡한 설치나 회원가입 없이 바로 사용할 수 있습니다.
            </p>
          </Section>

          <Section>
            <SectionTitle>✨ 주요 기능</SectionTitle>
            <ul>
              <li>📝 텍스트 QR 코드 생성</li>
              <li>🌐 URL 링크 QR 코드 생성</li>
              <li>📧 이메일 QR 코드 생성</li>
              <li>📞 전화번호 QR 코드 생성</li>
              <li>👤 연락처 정보 QR 코드 생성</li>
              <li>📶 Wi-Fi 연결 QR 코드 생성</li>
              <li>📍 위치 정보 QR 코드 생성</li>
            </ul>
          </Section>

          <Section>
            <SectionTitle>🔧 기술 스택</SectionTitle>
            <p>
              React, TypeScript, Styled-Components를 사용하여 개발되었으며, 
              CSR(Client-Side Rendering) 방식으로 빠른 사용자 경험을 제공합니다.
            </p>
          </Section>

          <Section>
            <SectionTitle>🆓 무료 사용</SectionTitle>
            <p>
              모든 기능을 완전히 무료로 사용할 수 있으며, 생성된 QR 코드는 
              PNG 형태로 다운로드하여 자유롭게 활용할 수 있습니다.
            </p>
          </Section>
        </Content>
        
        <BackButton to="/">
          ← 홈으로 돌아가기
        </BackButton>
      </AboutContent>
    </Layout>
  );
};

export default AboutPage; 