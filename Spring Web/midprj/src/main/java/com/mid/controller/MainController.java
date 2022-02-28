package com.mid.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mid.test.repository.token;
import com.mid.test.service.TestService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class MainController {
	
	// 사용할 서비스 클래스 선언
	private final TestService testService;

	// 워드 클라우드를 가져오는 함수
    @GetMapping(value = "getcloud")
    public List<token> getcloudList(String cldate) {
    	System.out.println("getcloudList() --- " + cldate);
        return testService.getcloudList(cldate);
    }
    
    // 카드 리스트를 가져오는 함수
    @GetMapping(value = "getcarddata")
    public List<token> getcardList(String date, String event) {
    	System.out.println("getcarddata() --- " + date + " " + event);
    	return testService.getCarddataList(date, event);
    }
}
