import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// QR 코드 타입 정의
export type QRType = 'text' | 'url' | 'email' | 'phone' | 'contact' | 'wifi' | 'location';

interface QRData {
  type: QRType;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TypeSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const TypeButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: 2px solid ${props => props.active ? '#667eea' : '#e1e5e9'};
  background: ${props => props.active ? '#667eea' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    border-color: #667eea;
    background: ${props => props.active ? '#5a6fd8' : '#f8f9ff'};
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const QRPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 15px;
  border: 1px solid #e1e5e9;
`;

const QRImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const DownloadButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const QRGenerator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<QRType>('text');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [qrContent, setQrContent] = useState<string>('');

  const qrTypes = [
    { type: 'text' as QRType, label: '📝 텍스트', emoji: '📝' },
    { type: 'url' as QRType, label: '🌐 URL', emoji: '🌐' },
    { type: 'email' as QRType, label: '📧 이메일', emoji: '📧' },
    { type: 'phone' as QRType, label: '📞 전화번호', emoji: '📞' },
    { type: 'contact' as QRType, label: '👤 연락처', emoji: '👤' },
    { type: 'wifi' as QRType, label: '📶 Wi-Fi', emoji: '📶' },
    { type: 'location' as QRType, label: '📍 위치', emoji: '📍' }
  ];

  // QR 코드 내용 생성
  const generateQRContent = (type: QRType, data: Record<string, string>): string => {
    switch (type) {
      case 'text':
        return data.text || '';
      case 'url':
        return data.url || '';
      case 'email':
        return `mailto:${data.email}?subject=${encodeURIComponent(data.subject || '')}&body=${encodeURIComponent(data.body || '')}`;
      case 'phone':
        return `tel:${data.phone}`;
      case 'contact':
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${data.name}\nORG:${data.organization}\nTEL:${data.phone}\nEMAIL:${data.email}\nURL:${data.website}\nEND:VCARD`;
      case 'wifi':
        return `WIFI:T:${data.security};S:${data.ssid};P:${data.password};H:${data.hidden === 'true' ? 'true' : 'false'};;`;
      case 'location':
        return `geo:${data.latitude},${data.longitude}`;
      default:
        return '';
    }
  };

  // QR 코드 생성
  const generateQRCode = async (content: string) => {
    if (!content) {
      setQrDataUrl('');
      return;
    }

    try {
      const url = await QRCode.toDataURL(content, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrDataUrl(url);
    } catch (error) {
      console.error('QR 코드 생성 실패:', error);
    }
  };

  // 폼 데이터 변경 처리
  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
  };

  // QR 코드 다운로드
  const downloadQRCode = () => {
    if (!qrDataUrl) return;
    
    const link = document.createElement('a');
    link.download = `qr-code-${selectedType}-${Date.now()}.png`;
    link.href = qrDataUrl;
    link.click();
  };

  // 타입 변경 시 폼 데이터 초기화
  useEffect(() => {
    setFormData({});
  }, [selectedType]);

  // 폼 데이터 변경 시 QR 코드 업데이트
  useEffect(() => {
    const content = generateQRContent(selectedType, formData);
    setQrContent(content);
    generateQRCode(content);
  }, [selectedType, formData]);

  // 폼 렌더링
  const renderForm = () => {
    switch (selectedType) {
      case 'text':
        return (
          <InputGroup>
            <Label>텍스트 내용</Label>
            <TextArea
              placeholder="QR 코드에 포함할 텍스트를 입력하세요"
              value={formData.text || ''}
              onChange={(e) => handleInputChange('text', e.target.value)}
            />
          </InputGroup>
        );

      case 'url':
        return (
          <InputGroup>
            <Label>URL 주소</Label>
            <Input
              type="url"
              placeholder="https://example.com"
              value={formData.url || ''}
              onChange={(e) => handleInputChange('url', e.target.value)}
            />
          </InputGroup>
        );

      case 'email':
        return (
          <>
            <InputGroup>
              <Label>이메일 주소</Label>
              <Input
                type="email"
                placeholder="example@email.com"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>제목 (선택사항)</Label>
              <Input
                type="text"
                placeholder="이메일 제목"
                value={formData.subject || ''}
                onChange={(e) => handleInputChange('subject', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>내용 (선택사항)</Label>
              <TextArea
                placeholder="이메일 내용"
                value={formData.body || ''}
                onChange={(e) => handleInputChange('body', e.target.value)}
              />
            </InputGroup>
          </>
        );

      case 'phone':
        return (
          <InputGroup>
            <Label>전화번호</Label>
            <Input
              type="tel"
              placeholder="010-1234-5678"
              value={formData.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </InputGroup>
        );

      case 'contact':
        return (
          <>
            <InputGroup>
              <Label>이름</Label>
              <Input
                type="text"
                placeholder="홍길동"
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>조직/회사 (선택사항)</Label>
              <Input
                type="text"
                placeholder="회사명"
                value={formData.organization || ''}
                onChange={(e) => handleInputChange('organization', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>전화번호 (선택사항)</Label>
              <Input
                type="tel"
                placeholder="010-1234-5678"
                value={formData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>이메일 (선택사항)</Label>
              <Input
                type="email"
                placeholder="example@email.com"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>웹사이트 (선택사항)</Label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={formData.website || ''}
                onChange={(e) => handleInputChange('website', e.target.value)}
              />
            </InputGroup>
          </>
        );

      case 'wifi':
        return (
          <>
            <InputGroup>
              <Label>네트워크 이름 (SSID)</Label>
              <Input
                type="text"
                placeholder="WiFi 네트워크 이름"
                value={formData.ssid || ''}
                onChange={(e) => handleInputChange('ssid', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>비밀번호</Label>
              <Input
                type="password"
                placeholder="WiFi 비밀번호"
                value={formData.password || ''}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>보안 방식</Label>
              <Input
                as="select"
                value={formData.security || 'WPA'}
                onChange={(e) => handleInputChange('security', e.target.value)}
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">보안 없음</option>
              </Input>
            </InputGroup>
            <InputGroup>
              <Label>숨겨진 네트워크</Label>
              <Input
                as="select"
                value={formData.hidden || 'false'}
                onChange={(e) => handleInputChange('hidden', e.target.value)}
              >
                <option value="false">아니오</option>
                <option value="true">예</option>
              </Input>
            </InputGroup>
          </>
        );

      case 'location':
        return (
          <>
            <InputGroup>
              <Label>위도 (Latitude)</Label>
              <Input
                type="number"
                step="any"
                placeholder="37.5665"
                value={formData.latitude || ''}
                onChange={(e) => handleInputChange('latitude', e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>경도 (Longitude)</Label>
              <Input
                type="number"
                step="any"
                placeholder="126.9780"
                value={formData.longitude || ''}
                onChange={(e) => handleInputChange('longitude', e.target.value)}
              />
            </InputGroup>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <TypeSelector>
        {qrTypes.map(({ type, label }) => (
          <TypeButton
            key={type}
            active={selectedType === type}
            onClick={() => setSelectedType(type)}
          >
            {label}
          </TypeButton>
        ))}
      </TypeSelector>

      <FormContainer>
        {renderForm()}
      </FormContainer>

      {qrDataUrl && (
        <QRPreview>
          <QRImage src={qrDataUrl} alt="Generated QR Code" />
          <DownloadButton onClick={downloadQRCode}>
            QR 코드 다운로드
          </DownloadButton>
        </QRPreview>
      )}
    </Container>
  );
};

export default QRGenerator; 