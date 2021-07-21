/*
-- 계정 앞에 'C##'을 붙이지 않고 생성하기 위한 세션 설정(SYS)
alter session set "_ORACLE_SCRIPT"=true;

-- 유저 생성(SYS)
create user lee identified by lee;

-- 세션 할당(SYS)
grant create session to lee;

-- DB 사용 권한 할당(SYS)
grant connect, resource to lee;

-- 데이터베이스 이름 확인(SYS)
select name from v$database;

-- 테이블 생성
create table anyT (
  id int primary key,
  name varchar2(20) not null
);

-- 튜플 삽입
insert into anyT values(1, '이진형');
insert into anyT values(2, 'Jinhyeong');
*/

-- Characterset 확인(2: SYS, 2:ANY)
select * from sys.props$ where name='NLS_CHARACTERSET';
select * from sys.props$ where name='NLS_NCHAR_CHARACTERSET'; 
select * from nls_database_parameters where parameter = 'NLS_CHARACTERSET';
select * from nls_database_parameters where parameter = 'NLS_NCHAR_CHARACTERSET';

-- Characterset 변경(SYS)
update props$ set value$='UTF8' where name='NLS_CHARACTERSET';
update props$ set value$='UTF8' where name='NLS_NCHAR_CHARACTERSET';
update props$ set value$='KOREAN_KOREA.UTF8' where name='NLS_LANGUAGE';
commit;
shutdown immediate;
startup mount;
alter system enable restricted session;
alter system set job_queue_processes=0;
alter system set aq_tm_processes=0;
alter database open;
alter database character set UTF8;
shutdown immediate;
startup;

-- KO16KSC5601: 완성형 한글- 일반적으로 많이 사용되며 2350자의 한글, 4888자의 한자, 히라카나, 카타카나, 영문 및 각종 기호를 포함하고 있음.  (한글바이트: 2byte)
-- KO16MSWIN949: 조합형 한글- 완성형을 포함하여 11172자의 한글을 표현함 (한글바이트: 2byte)
-- AL32UTF8: Unicode의 CES 중 하나- 11172자의 한글을 지원 (한글바이트: 3byte)

-- 튜플 삭제
delete from anyT where id=1;

-- 임의의 튜플 삽입
insert into anyT values(3, '이진형');