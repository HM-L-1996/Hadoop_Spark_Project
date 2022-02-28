package com.mid.test.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// 외부 I/O 처리 클래스, 여기선 JpaRepository를 상속 받아 사용
@Repository
public interface tokenRepository extends JpaRepository<token, Long> {

	// 날짜와 종목 조건으로 Count로 내림차순 정렬 후 상위 5개 항목만 찾는 함수
	List<token> findTop5ByDateAndEventOrderByCountDesc(String date, String event);
	
	// 날짜 조건으로 Count로 내림차순 후 상위 50개 항목만 찾는 함수
	List<token> findTop50ByDateOrderByCountDesc(String date);
}