-- cmd: lsnrctl status (오라클 리스너 동작 확인)

-- 자동으로 인덱스 값을 증가시키기 위해 시퀸스 생성
-- Example
drop table tmp;
drop sequence tmp_seq;
create table tmp( idx_tmp number(10), name varchar(20) );
create sequence tmp_seq start with 1 increment by 1 maxvalue 100 cycle nocache;
insert into tmp values(tmp_seq.nextval, 'tmptmp');
insert into tmp values(tmp_seq.nextval, 'tmptmp');
insert into tmp values(tmp_seq.nextval, 'tmptmp');
insert into tmp values(tmp_seq.nextval, 'tmptmp');
insert into tmp values(tmp_seq.nextval, 'tmptmp');
select * from tmp;

-- anyT
create sequence anyT_seq start with 1 increment by 1 nocache;
