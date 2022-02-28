package com.mid.test.repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data					// Get, Set, 생성자 등을 자동으로 생성
@AllArgsConstructor		// 모든 필드 값을 받는 생성자 자동 생성
@NoArgsConstructor		// 기본 생성자 자동 생성
@Entity					// MySql의 Data 임을 명시하는 어노테이션
//@Table(name="token")  // 테이블의 이름을 명시하는 어노테이션 / 테이블 이름과 클래스 이름이 같은 경우 생략 가능 
public class token {
	
	@Column	// 실제 데이터 베이스의 컬럼명 @Column(name="name") 이런 형태로 선언, 컬럼명과 변수 이름이 같은 경우 생략 가능
	private String date;
	private String event;
	private String token;
	private int count;
	@Id		// 해당 컬럼의 Id 여부. Primary 키로 지정 가능
	//@GeneratedValue(strategy = GenerationType.IDENTITY) // Primary Key로 지정 하면서 MySQL의 AUTO_INCREMENT를 사용
	private Long key_pk;
}

