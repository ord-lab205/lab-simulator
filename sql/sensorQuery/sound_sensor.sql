-- 날짜 형식 세션 설정
ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS';

DROP TABLE sound_sensor_a PURGE;
DROP SEQUENCE sound_sensor_a_seq;

-- 사운드A 테이블과 시퀸스 생성
CREATE TABLE sound_sensor_a (idx NUMBER NOT NULL, data NUMBER, occurred DATE);
CREATE SEQUENCE sound_sensor_a_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE;

-- 테스트 케이스
INSERT INTO sound_sensor_a values(sound_sensor_a_seq.NEXTVAL, 111, '2021-07-11 15:00:00');
INSERT INTO sound_sensor_a values(sound_sensor_a_seq.NEXTVAL, 56, '2021-07-11 16:00:00');
INSERT INTO sound_sensor_a values(sound_sensor_a_seq.NEXTVAL, 89, '2021-07-11 17:30:00');



DROP TABLE sound_sensor_b PURGE;
DROP SEQUENCE sound_sensor_b_seq;

-- 사운드B 테이블과 시퀸스 생성
CREATE TABLE sound_sensor_b (idx NUMBER NOT NULL, data NUMBER, occurred DATE);
CREATE SEQUENCE sound_sensor_b_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE;

-- 테스트 케이스
INSERT INTO sound_sensor_b values(sound_sensor_a_seq.NEXTVAL, 111, '2021-07-11 15:00:00');
INSERT INTO sound_sensor_b values(sound_sensor_a_seq.NEXTVAL, 56, '2021-07-11 16:00:00');
INSERT INTO sound_sensor_b values(sound_sensor_a_seq.NEXTVAL, 89, '2021-07-11 17:30:00');



DROP TABLE sound_sensor_c PURGE;
DROP SEQUENCE sound_sensor_c_seq;

-- 사운드C 테이블과 시퀸스 생성
CREATE TABLE sound_sensor_c (idx NUMBER NOT NULL, data NUMBER, occurred DATE);
CREATE SEQUENCE sound_sensor_c_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE;

-- 테스트 케이스
INSERT INTO sound_sensor_c values(sound_sensor_a_seq.NEXTVAL, 111, '2021-07-11 15:00:00');
INSERT INTO sound_sensor_c values(sound_sensor_a_seq.NEXTVAL, 56, '2021-07-11 16:00:00');
INSERT INTO sound_sensor_c values(sound_sensor_a_seq.NEXTVAL, 89, '2021-07-11 17:30:00');