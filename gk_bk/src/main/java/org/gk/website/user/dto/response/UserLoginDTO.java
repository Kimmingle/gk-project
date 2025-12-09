package org.gk.website.user.dto.response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//db조회용 dto

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginDTO {
    private String userId;
    private String nickName;
    private String password;
    private int loginAttempts;

}