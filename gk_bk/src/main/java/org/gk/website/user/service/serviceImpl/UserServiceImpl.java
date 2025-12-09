package org.gk.website.user.service.serviceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.gk.website.user.dao.UserMapper;
import org.gk.website.user.dao.UserRepository;
import org.gk.website.user.dto.request.UserLoginRequest;
import org.gk.website.user.dto.response.UserLoginDTO;
import org.gk.website.user.dto.response.UserLoginResponse;
import org.gk.website.user.service.UserService;
import org.gk.website.user.vo.User;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    //private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder; - 빈 등록해줘야 쓸 수 있음.


    @Override
    public UserLoginResponse login(UserLoginRequest request){
        UserLoginDTO user = userMapper.findByUserId(request.getUserId());
        System.out.println(user);

        if (user == null) {
            System.out.println("존재하지 않는 아이디");
            throw new RuntimeException("존재하지 않는 아이디");
        }

        if (!user.getPassword().equals(request.getPassword())) {
            System.out.println("비밀번호 불일치");
            throw new RuntimeException("비밀번호 불일치");
        }

        // 2. 비밀번호 검사
//        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
//            throw new RuntimeException("비밀번호 불일치");
//        }

        // 3. 응답 반환
        return new UserLoginResponse(user.getUserId(), user.getNickName(),true);


    }
}
