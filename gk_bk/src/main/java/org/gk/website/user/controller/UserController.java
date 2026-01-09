package org.gk.website.user.controller;


import lombok.RequiredArgsConstructor;
import org.gk.website.user.dto.request.UserLoginRequest;
import org.gk.website.user.dto.response.UserLoginResponse;
import org.gk.website.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @PostMapping("/api/user")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest request) {

        System.out.println("받은 userId = " + request.getUserId());
        System.out.println("받은 password = " + request.getPassword());

        UserLoginResponse result = userService.login(request);

        System.out.println(result);

        return ResponseEntity.ok(result);
    }

}
