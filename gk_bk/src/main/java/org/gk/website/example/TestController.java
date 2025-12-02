package org.gk.website.example;

import org.gk.website.user.dto.request.UserLoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/")
    public String home() {
        return "Hello Spring!";
    }

    @PostMapping("/api/user")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> request) {

        String id = (String) request.get("user_id");
        String pw = (String) request.get("password");

        System.out.println(id);
        System.out.println(pw);

        return ResponseEntity.ok("success");
    };

    @PostMapping
    public ResponseEntity<?> login(@RequestBody UserLoginRequest request) { //클라이언트가 보낸 json을 userLoginRequest 객체로 자동 매핑.
        //ResponseEntity<?>: 응답으로 보낼 데이터 타입을 ? 로 지정해둬서 아무타입이나 넣을 수 있게 하겠다.
        //@RequestBody: 프론트가 json데이터를 보내지만 백엔드는 json데이터 못받음. 그래서 json 데이터를 userLoginRequest라는 자바 객체로 자동 변환할때 필요함.
        //이거 안쓰면 url에 있는 파라미터만 찾을 뿐 body 읽지 못함.
        return ResponseEntity.ok("success");
    }
}