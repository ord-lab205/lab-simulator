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