


SELECT DATABASE();
SHOW DATABASES;
CREATE DATABASE gk_db;
USE gk_db;
SHOW TABLES;
ed



-- 사용자 테이블
CREATE TABLE users (
    user_id VARCHAR(20) NOT NULL COMMENT '사용자아이디',
    password VARCHAR(20) NOT NULL COMMENT '비밀번호',
    nickname VARCHAR(100) NOT NULL COMMENT '닉네임',
    email VARCHAR(200) NOT NULL COMMENT '이메일',
    birth_date CHAR(8) COMMENT '생년월일 (YYYYMMDD)',
    login_attempts TINYINT DEFAULT 0 COMMENT '로그인시도횟수',
    data_inps_id VARCHAR(20) NOT NULL COMMENT '데이터입력자ID',
    data_inpt_dttm DATETIME NOT NULL COMMENT '데이터입력일시',
    data_inpt_pgm_id VARCHAR(50) NOT NULL COMMENT '데이터입력프로그램ID',
    data_mfpn_id VARCHAR(20) NOT NULL COMMENT '데이터수정자ID',
    data_upd_dttm DATETIME NOT NULL COMMENT '데이터수정일시',
    data_upd_pgm_id VARCHAR(50) NOT NULL COMMENT '데이터수정프로그램ID',
    PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사용자';

-- 게시판 테이블
CREATE TABLE board (
    board_id INT NOT NULL AUTO_INCREMENT COMMENT '게시판ID',
    title VARCHAR(255) NOT NULL COMMENT '제목',
    content VARCHAR(2000) NOT NULL COMMENT '내용',
    user_id VARCHAR(20) NOT NULL COMMENT '작성자ID',
    created_date DATETIME NOT NULL COMMENT '작성일시',
    data_inps_id VARCHAR(20) NOT NULL COMMENT '데이터입력자ID',
    data_inpt_dttm DATETIME NOT NULL COMMENT '데이터입력일시',
    data_inpt_pgm_id VARCHAR(50) NOT NULL COMMENT '데이터입력프로그램ID',
    data_mfpn_id VARCHAR(20) NOT NULL COMMENT '데이터수정자ID',
    data_upd_dttm DATETIME NOT NULL COMMENT '데이터수정일시',
    data_upd_pgm_id VARCHAR(50) NOT NULL COMMENT '데이터수정프로그램ID',
    PRIMARY KEY (board_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='게시판';