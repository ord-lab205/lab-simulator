-- 날짜 형식 세션 설정
ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS';

DROP TABLE intergrated_sensor PURGE;
DROP SEQUENCE intergrated_sensor_seq;

-- 통합된 소리, 진동 테이블과 시퀸스 생성
CREATE TABLE intergrated_sensor (
  idx NUMBER NOT NULL,
  sound_a NUMBER,
  sound_b NUMBER,
  sound_c NUMBER,
  vibration_a NUMBER,
  vibration_b NUMBER,
  vibration_c NUMBER,
  intergrated DATE
);

CREATE SEQUENCE intergrated_sensor_seq START WITH 1 INCREMENT BY 1 NOMAXVALUE NOCYCLE NOCACHE;

-- 테스트 케이스
INSERT INTO intergrated_sensor
VALUES(intergrated_sensor_seq.NEXTVAL, 111, 123, 234, 56, 78, 89, '2021-07-11 15:00:00');

INSERT INTO intergrated_sensor
VALUES(intergrated_sensor_seq.NEXTVAL, 56, 123, 62, 75, 61, 80, '2021-07-11 16:00:00');

INSERT INTO intergrated_sensor
VALUES(intergrated_sensor_seq.NEXTVAL, 89, 111, 65, 90, 97, 136, '2021-07-11 17:30:00');