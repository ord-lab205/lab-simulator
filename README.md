# 철도 부착 센서 모니터링 시스템

## 작성자

**`이진형`**(bya2, byaa1972@gmail.com)

## 개발 계획

```
1. HTTP(port:80)에서 웹 애플리케이션을 배포하여 외부 네트워크에서 도메인을 통해 접근할 수 있도록 설정.
2. IIS와 Docker 연동.
3. Swarm을 이용하여 클러스터를 구축.

- Express & WebSocket
(완료) Static files 브라우저에 출력.

- Arduino
(구매) 아두이노 무선 연결
   - Wireless module (x5)
   - Arudino Uno (+1)
   - Each Sensor (+1)
   - 

(완료) 스트림 데이터 연산 후 데이터베이스에 저장.
(완료) 아두이노와 PC 연결 및 런타임 환경 제어 테스트 (케이블, 무선x)
(완료) 아두이노 통합 개발 환경에서 소스를 업로드해서 시리얼 모니터에 데이터 출력.

- Database
(완료) demoSetup 파일로 테이블, 시퀸스 생성하는 소스 작성.
(완료) 테이블, 시퀸스 생성. (센싱 로그 테이블, 에러 로그 테이블)
(완료) 런타임 환경에서 오라클 데이터베이스 제어 및 DML 테스트.
(완료) Oracle Database 18c 설치 및 계정 생성 및 권한 부여.
```

## 고려 사항

```
(진행) 오류를 포함할 수 있는 함수는 'try catch'을 통해 오류 발생 시 위치를 식별할 수 있도록 작성.
(진행) 일정량 이상의 코드를 포함하는 함수는 'Strict mode'로 작성.
(진행) 변수 및 함수명을 'Snake case'에 따라 작성.
```

## 아키텍처

## 진행 상황

### 배포
**`IIS`**
![image](https://user-images.githubusercontent.com/61080445/138863424-8746d58b-b897-4a6d-831a-99f2b765da62.png)

**`Browser`**
![스크린샷(1)](https://user-images.githubusercontent.com/61080445/138863298-dacd5a61-ee79-43b0-b835-3175b1341d83.png)

## 에러 처리

### iisnode

**`에러`**
```
```

**`해결`**
```
웹 애플리케이션을 퍼블리시하는 포트가 환경 변수 process.env.PORT가 되도록 변경.
```

### Oracle Database 18c

**`에러`**
```
Error in oc.fn_truncate__table:
Error: ORA-00054: resource busy and acquire with NOWAIT specified or timeout expired
```
**`해결`**
```sql
COMMIT;

테스트를 위해 CMD에서 SQLPLUS를 실행하고, 테이블에 INSERT
DML이 실행된 후 COMMIT되지 않음.
따라서 COMMIT 후, 해당 코드 실행.
```

