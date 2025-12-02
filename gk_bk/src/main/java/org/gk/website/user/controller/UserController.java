package org.gk.website.user.controller;


import org.gk.website.user.dto.request.UserLoginRequest;
import org.gk.website.user.dto.response.UserLoginResponse;
import org.gk.website.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody UserLoginRequest request) { //클라이언트가 보낸 json을 읽기 위해 userLoginRequest 객체로 매핑.
        UserLoginResponse result = userService.login(request);
        return ResponseEntity.ok(result);
    }
}
