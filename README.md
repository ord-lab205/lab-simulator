# 철도 부착 센서 감지 시스템 시뮬레이터

## 특징

데이터베이스의 변화에 따라 브라우저에 데이터를 출력합니다.

## 주요 기능

1. 서버에서 클라이언트에게 정적 파일을 제공합니다.
2. 일정 시간동안 서버에서 클라이언트로 데이터를 지속적으로 보낼 수 있도록 SSE(Server Sent Event)라는 HTTP API를 이용해 서버와 클라이언트 간의 연결을 구축합니다.
3. 데이터베이스의 특정 테이블에서 변경이 감지되면, 해당 데이터를 가공하여 브라우저에 출력합니다.

## 사용 방법

### Development mode:

```
npm run build:dev
npm run start:dev
```

### Production mode:

```
npm run build
npm start
```

