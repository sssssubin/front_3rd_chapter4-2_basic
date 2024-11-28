# VR Headsets Shop 성능 최적화 보고서

![CI/CD Status](https://github.com/sssssubin/front_3rd_chapter4-2_basic/actions/workflows/deployment.yml/badge.svg)

> Last Updated: 2024.11.28

## 목차

1. [배포 링크](#배포-링크)
2. [성능 측정 결과](#🔍-성능-측정-결과)
3. [성능 개선 결과](#📊-성능-개선-결과)
4. [Core Web Vitals 개선](#📈-core-web-vitals-개선)
5. [주요 개선 사항](#🎯-주요-개선-사항)
6. [개선 방법 상세](#💡-개선-방법-상세)
7. [향후 개선 계획](#🚀-향후-개선-계획)
8. [결론](#📈-결론)
9. [시작하기](#시작하기)

## 배포 링크

CloudFront(CDN) 배포: [https://d2icfx053w3v0p.cloudfront.net/](https://d2icfx053w3v0p.cloudfront.net/)

## 🔍 성능 측정 결과

### 개선 전

![개선 전 성능 측정 결과](https://github.com/user-attachments/assets/39b9b185-fdbb-4a77-89e0-5525346b6d76)

### 개선 후

![개선 후 성능 측정 결과](https://github.com/user-attachments/assets/00d7bef8-7f75-43f0-a51b-de6f91888b6e)

> **비교**: 성능 점수 및 주요 지표는 다음 표에서 확인 가능합니다.

## 📊 성능 개선 결과

| 카테고리       | 개선 전 | 개선 후 | 개선율 |
| -------------- | ------- | ------- | ------ |
| Performance    | 87%     | 98%     | +11%   |
| Accessibility  | 89%     | 95%     | +6%    |
| Best Practices | 100%    | 96%     | -4%    |
| SEO            | 82%     | 91%     | +9%    |

## 📈 Core Web Vitals 개선

| 메트릭                   | 개선 전 | 개선 후 | 변화   |
| ------------------------ | ------- | ------- | ------ |
| First Contentful Paint   | 0.7초   | 0.6초   | -0.1초 |
| Largest Contentful Paint | 2.5초   | 1.1초   | -1.4초 |
| Total Blocking Time      | 0ms     | 0ms     | -      |
| Cumulative Layout Shift  | 0.011   | 0.049   | +0.038 |
| Speed Index              | 0.7초   | 0.7초   | -      |

> **Note**: CLS 증가 원인은 특정 동적 로드 이미지의 레이아웃 변동으로 확인되었으며, 정적 크기 설정 및 리팩토링을 통해 추가 개선할 예정입니다.

## 🎯 주요 개선 사항

### 1. 이미지 최적화

| 개선 항목   | 개선 전                 | 개선 후                        |
| ----------- | ----------------------- | ------------------------------ |
| 이미지 포맷 | JPG만 사용              | AVIF, WebP, JPG 순차적 제공    |
| 이미지 용량 | Hero Desktop: 1054.57kb | Hero Desktop: 179.29kb (-83%)  |
| CLS 방지    | width/height 미설정     | 모든 이미지에 적절한 크기 설정 |

### 2. 로딩 최적화

| 개선 항목   | 개선 내용            | 효과                      |
| ----------- | -------------------- | ------------------------- |
| 중요 이미지 | loading="eager" 설정 | LCP 1.4초 감소            |
| 지연 로딩   | loading="lazy" 적용  | 초기 로딩 속도 향상       |
| 이미지 압축 | Vite 플러그인 최적화 | 전체 이미지 크기 85% 감소 |

### 3. 코드 최적화

| 개선 항목 | 개선 내용                               |
| --------- | --------------------------------------- |
| HTML 구조 | Picture 태그 활용으로 이미지 포맷 분기  |
| 빌드 도구 | Sharp + Vite 이미지 최적화 적용         |
| 접근성    | alt 텍스트 개선으로 접근성 점수 6% 향상 |

## 💡 개선 방법 상세

### 1. **이미지 변환 자동화**

- Sharp 라이브러리로 이미지 변환 스크립트 구현
- JPG/PNG → WebP/AVIF 자동 변환
- 빌드 시 이미지 자동 최적화

### 2. **마크업 최적화**

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="설명" width="800" height="600" />
</picture>
```

### 3. **빌드 설정 최적화**

- vite-plugin-imagemin 설정으로 추가 압축
- 4kb 이하 이미지 자동 인라인화
- 최적화된 에셋 관리를 위한 폴더 구조 정리

## 🚀 향후 개선 계획

### 1. PWA 지원

- 현재 PWA 점수 0%에서 개선 필요
- Service Worker 구현
- Manifest 파일 설정

### 2. JavaScript 최적화

- 코드 스플리팅 적용
- 번들 크기 최적화

### 3. 캐싱 전략 수립

- 브라우저 캐싱 최적화
- CDN 캐싱 정책 검토

## 📈 결론

이미지 최적화를 통해 전반적인 성능 지표가 크게 개선되었습니다. 특히 Largest Contentful Paint가 2.5초에서 1.1초로 개선되어 Core Web Vitals 기준을 충족하게 되었습니다. Performance 점수도 87%에서 98%로 11% 향상되었습니다. 하지만 PWA 지원 등 추가 개선이 필요한 영역이 있어, 지속적인 최적화 작업이 필요합니다.

## 시작하기

### 요구사항

- pnpm

### 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```
