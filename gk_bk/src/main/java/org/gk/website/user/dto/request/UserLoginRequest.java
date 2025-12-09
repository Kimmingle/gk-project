package org.gk.website.user.dto.request;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginRequest {
    @JsonProperty("user_id")
    private String userId;
    private String password;
}