package com.mid.test.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mid.test.repository.token;
import com.mid.test.repository.tokenRepository;

import lombok.AllArgsConstructor;

// 서비스 클래스
@AllArgsConstructor
@Service
public class TestService {
	
	// 사용할 레포지토리 선언;
	private tokenRepository tokenRepos;
	
	// 워드 클라우드 리스트를 불러오기 위한 함수
    public List<token> getcloudList(String cldate) {
    	return tokenRepos.findTop50ByDateOrderByCountDesc(cldate);
    }
    
    // 카드에 들어갈 리스트를 불러오기 위한 함수
    public List<token> getCarddataList(String date, String event) {
    	return tokenRepos.findTop5ByDateAndEventOrderByCountDesc(date, event);
    }
	    
}

