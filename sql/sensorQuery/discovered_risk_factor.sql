-- 날짜 형식 세션 설정
ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS';

DROP TABLE discovered_risk_factor PURGE;
DROP SEQUENCE discovered_risk_factor_seq;

-- 통합된 소리, 진동 테이블과 시퀸스 생성
CREATE TABLE discovered_risk_factor (
  idx NUMBER NOT NULL,
  sound_a NUMBER,
  sound_b NUMBER,
  sound_c NUMBER,
  vibration_a NUMBER,
  vibration_b NUMBER,
  vibration_c NUMBER,
  risk CHAR(1),
  detail VARCHAR2(100),
  intergrated DATE
);

CREATE SEQUENCE discovered_risk_factor_seq START WITH 1 INCREMENT BY 1 NOMAXVALUE NOCYCLE NOCACHE;

-- 테스트 케이스
INSERT INTO discovered_risk_factor
VALUES(discovered_risk_factor_seq.NEXTVAL, 111, 123, 234, 56, 78, 89, 1, 'risk:sound-C', '2021-07-11 15:00:00');

INSERT INTO discovered_risk_factor
VALUES(discovered_risk_factor_seq.NEXTVAL, 56, 123, 62, 75, 61, 80, 1, 'risk:sound-B', '2021-07-11 16:00:00');

INSERT INTO discovered_risk_factor
VALUES(discovered_risk_factor_seq.NEXTVAL, 89, 111, 65, 90, 97, 136, 1, 'risk:vibration-C', '2021-07-11 17:30:00');