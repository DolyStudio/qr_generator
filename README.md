# 🎯 QR 코드 생성기 - CSR 최적화 버전

> 다양한 형태의 QR 코드를 무료로 생성할 수 있는 Client-Side Rendering 기반 웹 애플리케이션

## ✨ 주요 기능

- 📝 **텍스트 QR 코드**: 일반 텍스트를 QR 코드로 변환
- 🌐 **URL QR 코드**: 웹사이트 링크를 QR 코드로 변환
- 📧 **이메일 QR 코드**: 이메일 주소와 내용을 QR 코드로 변환
- 📞 **전화번호 QR 코드**: 전화번호를 QR 코드로 변환
- 👤 **연락처 QR 코드**: vCard 형식의 연락처 정보를 QR 코드로 변환
- 📶 **Wi-Fi QR 코드**: Wi-Fi 연결 정보를 QR 코드로 변환
- 📍 **위치 QR 코드**: GPS 좌표를 QR 코드로 변환

## 🚀 CSR 최적화 특징

### 📦 **코드 스플리팅**
- React.lazy()를 사용한 페이지별 코드 분할
- 초기 로딩 시간 단축
- 필요에 따른 동적 로딩

### 🔄 **클라이언트 사이드 라우팅**
- React Router를 사용한 SPA 라우팅
- 페이지 간 빠른 전환
- 브라우저 히스토리 지원

### ⚡ **성능 최적화**
- 로딩 스피너를 통한 사용자 경험 개선
- 에러 바운더리를 통한 안정적인 에러 처리
- Web Vitals 모니터링

### 🛡️ **에러 처리**
- React Error Boundary 구현
- 사용자 친화적인 에러 메시지
- 자동 복구 기능

### 🎨 **동적 메타데이터**
- 페이지별 동적 제목 및 메타태그 설정
- SEO 최적화
- 소셜 미디어 공유 최적화

### 💾 **PWA 기능**
- Service Worker를 통한 캐싱
- 오프라인 지원
- 앱 설치 기능

## 🛠️ 기술 스택

- **Frontend**: React 19, TypeScript
- **스타일링**: Styled-Components
- **라우팅**: React Router DOM
- **QR 생성**: qrcode 라이브러리
- **빌드 도구**: Create React App
- **PWA**: Service Worker

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```

### 빌드
```bash
npm run build
```

### 빌드 파일 서빙
```bash
npx serve -s build
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── QRGenerator.tsx  # 메인 QR 생성기
│   ├── LoadingSpinner.tsx # 로딩 스피너
│   ├── ErrorBoundary.tsx # 에러 바운더리
│   └── Layout.tsx       # 공통 레이아웃
├── pages/              # 페이지 컴포넌트
│   ├── HomePage.tsx    # 홈페이지
│   └── AboutPage.tsx   # 소개 페이지
├── hooks/              # 커스텀 훅
│   └── useDocumentTitle.ts # 동적 메타데이터
├── App.tsx             # 메인 앱 컴포넌트
└── index.tsx           # 엔트리 포인트
```

## 🎯 CSR 최적화 상세

### 1. 코드 스플리팅
```typescript
// 동적 import를 통한 코드 분할
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
```

### 2. 로딩 상태 관리
```typescript
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</Suspense>
```

### 3. 에러 처리
```typescript
<ErrorBoundary>
  {children}
</ErrorBoundary>
```

### 4. 동적 메타데이터
```typescript
useMetaData({
  title: '페이지 제목',
  description: '페이지 설명',
  ogImage: '/logo512.png'
});
```

## 🔧 설정 파일

### Service Worker (`public/sw.js`)
- 정적 자원 캐싱
- 오프라인 지원
- 캐시 관리

### Manifest (`public/manifest.json`)
- PWA 설정
- 앱 아이콘
- 테마 색상

## 📊 성능 지표

- **초기 로딩 시간**: 코드 스플리팅으로 최적화
- **번들 크기**: 메인 번들 84.67 kB (gzip)
- **라우팅 성능**: 클라이언트 사이드 라우팅으로 빠른 전환
- **에러 복구**: 에러 바운더리로 안정적인 사용자 경험

## 🌐 배포

이 프로젝트는 정적 호스팅에 최적화되어 있습니다:

- **Netlify**: 자동 배포 및 CDN
- **Vercel**: 서버리스 배포
- **GitHub Pages**: 무료 호스팅
- **AWS S3**: 정적 웹사이트 호스팅

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**QR 코드 생성기** - CSR 최적화를 통한 빠르고 안정적인 웹 애플리케이션 🚀
