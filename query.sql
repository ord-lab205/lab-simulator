/*
-- 계정 앞에 'C##'을 붙이지 않고 생성하기 위한 세션 설정
alter session set "_ORACLE_SCRIPT"=true;

-- 유저 생성
create user lee identified by lee;

-- 세션 할당
grant create session to lee;

-- DB 사용 권한 할당
grant connect, resource to lee;

-- 데이터베이스 이름 확인
select name from v$database;
*/

-- 테이블 생성
create table anyT (
  id int primary key,
  name varchar2(20) not null
);

-- 튜플 삽입
insert into anyT values(1, '이진형');
insert into anyT values(2, 'Jinhyeong');