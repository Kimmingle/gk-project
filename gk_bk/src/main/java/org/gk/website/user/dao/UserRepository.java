package org.gk.website.user.dao;

import org.gk.website.user.dto.request.UserLoginRequest;
import org.gk.website.user.dto.response.UserLoginDTO;
import org.gk.website.user.dto.response.UserLoginResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.gk.website.user.vo.User;

//@Repository
public interface UserRepository  {
    UserLoginDTO findByUserId(String userId);
}
