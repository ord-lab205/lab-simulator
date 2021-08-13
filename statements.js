module.exports = {
  SD: [
    // 날짜 형식 세션 설정
    `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,
    
    `DROP TABLE sound_sensor_a PURGE`,
    `DROP SEQUENCE sound_sensor_a_seq`,
    
    // 사운드A 테이블과 시퀸스 생성
    `CREATE TABLE sound_sensor_a (idx NUMBER NOT NULL, data NUMBER, occurred DATE)`,
    `CREATE SEQUENCE sound_sensor_a_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE`,
    
    // 테스트 케이스
    `INSERT INTO sound_sensor_a values(sound_sensor_a_seq.NEXTVAL, 111, '2021-07-11 15:00:00')`,
    `INSERT INTO sound_sensor_a values(sound_sensor_a_seq.NEXTVAL, 56, '2021-07-11 16:00:00')`,
    `INSERT INTO sound_sensor_a values(sound_sensor_a_seq.NEXTVAL, 89, '2021-07-11 17:30:00')`,
    
    
    
    `DROP TABLE sound_sensor_b PURGE`,
    `DROP SEQUENCE sound_sensor_b_seq`,
    
    // 사운드B 테이블과 시퀸스 생성
    `CREATE TABLE sound_sensor_b (idx NUMBER NOT NULL, data NUMBER, occurred DATE)`,
    `CREATE SEQUENCE sound_sensor_b_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE`,
    
    // 테스트 케이스
    `INSERT INTO sound_sensor_b values(sound_sensor_b_seq.NEXTVAL, 111, '2021-07-11 15:00:00')`,
    `INSERT INTO sound_sensor_b values(sound_sensor_b_seq.NEXTVAL, 56, '2021-07-11 16:00:00')`,
    `INSERT INTO sound_sensor_b values(sound_sensor_b_seq.NEXTVAL, 89, '2021-07-11 17:30:00')`,
    
    
    
    `DROP TABLE sound_sensor_c PURGE`,
    `DROP SEQUENCE sound_sensor_c_seq`,
    
    // 사운드C 테이블과 시퀸스 생성
    `CREATE TABLE sound_sensor_c (idx NUMBER NOT NULL, data NUMBER, occurred DATE)`,
    `CREATE SEQUENCE sound_sensor_c_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE`,
    
    // 테스트 케이스
    `INSERT INTO sound_sensor_c values(sound_sensor_c_seq.NEXTVAL, 111, '2021-07-11 15:00:00')`,
    `INSERT INTO sound_sensor_c values(sound_sensor_c_seq.NEXTVAL, 56, '2021-07-11 16:00:00')`,
    `INSERT INTO sound_sensor_c values(sound_sensor_c_seq.NEXTVAL, 89, '2021-07-11 17:30:00')`
  ],

  VB: [
    // 날짜 형식 세션 설정
    `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,
    
    `DROP TABLE vibration_sensor_a PURGE`,
    `DROP SEQUENCE vibration_sensor_a_seq`,
    
    // 사운드A 테이블과 시퀸스 생성
    `CREATE TABLE vibration_sensor_a (idx NUMBER NOT NULL, data NUMBER, occurred DATE)`,
    `CREATE SEQUENCE vibration_sensor_a_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE`,
    
    // 테스트 케이스
    `INSERT INTO vibration_sensor_a values(vibration_sensor_a_seq.NEXTVAL, 111, '2021-07-11 15:00:00')`,
    `INSERT INTO vibration_sensor_a values(vibration_sensor_a_seq.NEXTVAL, 56, '2021-07-11 16:00:00')`,
    `INSERT INTO vibration_sensor_a values(vibration_sensor_a_seq.NEXTVAL, 89, '2021-07-11 17:30:00')`,
    
    
    
    `DROP TABLE vibration_sensor_b PURGE`,
    `DROP SEQUENCE vibration_sensor_b_seq`,
    
    // 사운드B 테이블과 시퀸스 생성
    `CREATE TABLE vibration_sensor_b (idx NUMBER NOT NULL, data NUMBER, occurred DATE)`,
    `CREATE SEQUENCE vibration_sensor_b_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE`,
    
    // 테스트 케이스
    `INSERT INTO vibration_sensor_b values(vibration_sensor_b_seq.NEXTVAL, 111, '2021-07-11 15:00:00')`,
    `INSERT INTO vibration_sensor_b values(vibration_sensor_b_seq.NEXTVAL, 56, '2021-07-11 16:00:00')`,
    `INSERT INTO vibration_sensor_b values(vibration_sensor_b_seq.NEXTVAL, 89, '2021-07-11 17:30:00')`,
    
    
    
    `DROP TABLE vibration_sensor_c PURGE`,
    `DROP SEQUENCE vibration_sensor_c_seq`,
    
    // 사운드C 테이블과 시퀸스 생성
    `CREATE TABLE vibration_sensor_c (idx NUMBER NOT NULL, data NUMBER, occurred DATE)`,
    `CREATE SEQUENCE vibration_sensor_c_seq START WITH 1 INCREMENT BY 1 MAXVALUE 100 CYCLE NOCACHE`,
    
    // 테스트 케이스
    `INSERT INTO vibration_sensor_c values(vibration_sensor_c_seq.NEXTVAL, 111, '2021-07-11 15:00:00')`,
    `INSERT INTO vibration_sensor_c values(vibration_sensor_c_seq.NEXTVAL, 56, '2021-07-11 16:00:00')`,
    `INSERT INTO vibration_sensor_c values(vibration_sensor_c_seq.NEXTVAL, 89, '2021-07-11 17:30:00')`
  ],

  IS: [
    `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,

    `DROP TABLE intergrated_sensor PURGE`,
    `DROP SEQUENCE intergrated_sensor_seq`,


    `CREATE TABLE intergrated_sensor (
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
    )`,

    `CREATE SEQUENCE intergrated_sensor_seq START WITH 1 INCREMENT BY 1 NOMAXVALUE NOCYCLE NOCACHE`,


    `INSERT INTO intergrated_sensor
    VALUES(intergrated_sensor_seq.NEXTVAL, 111, 123, 234, 56, 78, 89, 1, 'risk:sound-C', '2021-07-11 15:00:00')`,

    `INSERT INTO intergrated_sensor
    VALUES(intergrated_sensor_seq.NEXTVAL, 56, 123, 62, 75, 61, 80, 1, 'risk:sound-B', '2021-07-11 16:00:00')`,

    `INSERT INTO intergrated_sensor
    VALUES(intergrated_sensor_seq.NEXTVAL, 89, 111, 65, 90, 97, 136, 1, 'risk:vibration-C', '2021-07-11 17:30:00')`
  ],

  DRF: [
    // 날짜 형식 세션 설정
    `ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS'`,

    `DROP TABLE discovered_risk_factor PURGE`,
    `DROP SEQUENCE discovered_risk_factor_seq`,

    // 통합된 소리, 진동 테이블과 시퀸스 생성
    `CREATE TABLE discovered_risk_factor (
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
    )`,

    `CREATE SEQUENCE discovered_risk_factor_seq START WITH 1 INCREMENT BY 1 NOMAXVALUE NOCYCLE NOCACHE`,

    // 테스트 케이스
    `INSERT INTO discovered_risk_factor
    VALUES(discovered_risk_factor_seq.NEXTVAL, 111, 123, 234, 56, 78, 89, 1, 'risk:sound-C', '2021-07-11 15:00:00')`,

    `INSERT INTO discovered_risk_factor
    VALUES(discovered_risk_factor_seq.NEXTVAL, 56, 123, 62, 75, 61, 80, 1, 'risk:sound-B', '2021-07-11 16:00:00')`,

    `INSERT INTO discovered_risk_factor
    VALUES(discovered_risk_factor_seq.NEXTVAL, 89, 111, 65, 90, 97, 136, 1, 'risk:vibration-C', '2021-07-11 17:30:00')`
  ],

  intergrationSensors: [
    `DROP TABLE tmp_all_sensor PURGE`,

    `CREATE TABLE tmp_all_sensor
     AS
     SELECT AVG(sa.data) "SOUND_A"
         , AVG(sb.data) "SOUND_B"
         , AVG(sc.data) "SOUND_C"
         , AVG(va.data) "VIBRATION_A"
         , AVG(vb.data) "VIBRATION_B"
         , AVG(vc.data) "VIBRATION_C"
     FROM sound_sensor_a sa
        , sound_sensor_b sb
        , sound_sensor_c sc        
        , vibration_sensor_a va
        , vibration_sensor_b vb
        , vibration_sensor_c vc`,
  ],

  allSensorsAverage:
    `SELECT AVG(sa.data) "SOUND_A"
          , AVG(sb.data) "SOUND_B"
          , AVG(sc.data) "SOUND_C"
          , AVG(va.data) "VIBRATION_A"
          , AVG(vb.data) "VIBRATION_B"
          , AVG(vc.data) "VIBRATION_C"
     FROM sound_sensor_a sa
        , sound_sensor_b sb
        , sound_sensor_c sc        
        , vibration_sensor_a va
        , vibration_sensor_b vb
        , vibration_sensor_c vc`,

  allSensorsTruncate: [
    `TRUNCATE TABLE sound_a`,
    `TRUNCATE TABLE sound_b`,
    `TRUNCATE TABLE sound_c`,
    `TRUNCATE TABLE vibration_a`,
    `TRUNCATE TABLE vibration_b`,
    `TRUNCATE TABLE vibration_c`,
  ]

  
}