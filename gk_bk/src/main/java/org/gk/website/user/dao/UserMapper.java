package org.gk.website.user.dao;

import org.apache.ibatis.annotations.Mapper;
import org.gk.website.user.dto.response.UserLoginDTO;
import org.gk.website.user.dto.response.UserLoginResponse;


@Mapper
public interface UserMapper {
    UserLoginDTO findByUserId(String userId);



}
