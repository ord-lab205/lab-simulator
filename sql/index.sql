-- -- Test with one table
-- SELECT idx
--      , data
--      , CASE WHEN data >= 100 THEN 1
--             ELSE 0
--        END AS risk
--      , CASE WHEN data >= 100 THEN 'SA'
--             ELSE NULL
--        END AS detail
-- FROM sound_sensor_a;


-- -- Test with several tables
CREATE TABLE tmp_all_sensor
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
   , vibration_sensor_c vc;

SELECT * FROM tmp_all_sensor;

-- INSERT INTO intergrated_sensor (sound_a
--                               , sound_b
--                               , sound_c)
--                               , vibration_a
--                               , vibration_b
--                               , vibration_c)
SELECT sound_a
     , sound_b
     , sound_c
     , vibration_a
     , vibration_b
     , vibration_c
     , CASE WHEN sound_a >= 100 THEN 1
            WHEN sound_b >= 100 THEN 1
            WHEN sound_c >= 100 THEN 1
            WHEN vibration_a >= 100 THEN 1
            WHEN vibration_b >= 100 THEN 1
            WHEN vibration_c >= 100 THEN 1
            ELSE 0
       END AS risk
    , CASE WHEN sound_a >= 100 THEN 'SA'
            WHEN sound_b >= 100 THEN 'SB'
            WHEN sound_c >= 100 THEN 'SC'
            WHEN vibration_a >= 100 THEN 'VA'
            WHEN vibration_b >= 100 THEN 'VB'
            WHEN vibration_c >= 100 THEN 'VC'
            ELSE null
       END AS detail
FROM tmp_all_sensor;

DROP TABLE tmp_all_sensor PURGE;