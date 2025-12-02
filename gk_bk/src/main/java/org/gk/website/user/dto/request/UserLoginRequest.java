package org.gk.website.user.dto.request;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserLoginRequest {
    private String user_id;
    private String password;
}