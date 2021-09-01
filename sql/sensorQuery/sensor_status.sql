ALTER SESSION SET nls_date_format = 'YYYY-MM-DD HH24:MI:SS';

DROP TABLE intergrated_sensor PURGE;

CREATE TABLE sensor_status (
  idx NUMBER,
  risk CHAR(1),
  detail VARCHAR2(100),
  occured DATE
);