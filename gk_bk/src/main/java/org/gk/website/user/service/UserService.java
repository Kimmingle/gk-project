package org.gk.website.user.service;

import lombok.RequiredArgsConstructor;
import org.gk.website.user.dto.request.UserLoginRequest;
import org.gk.website.user.dto.response.UserLoginResponse;
import org.gk.website.user.vo.User;
import org.springframework.stereotype.Service;

public interface UserService {
    UserLoginResponse login(UserLoginRequest request);
}
