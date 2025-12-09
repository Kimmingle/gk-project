package org.gk.website.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;


//로그인이 완료된 후, 프론트에 보내줄 정보. pw넣으면 안됨.

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginResponse {
    private String userId;
    private String nickName;
    private boolean success;


}

