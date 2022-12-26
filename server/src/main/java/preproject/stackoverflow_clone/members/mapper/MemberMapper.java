package preproject.stackoverflow_clone.members.mapper;

import org.mapstruct.Mapper;
import preproject.stackoverflow_clone.members.dto.MemberDto;
import preproject.stackoverflow_clone.members.dto.MemberDto.Login;
import preproject.stackoverflow_clone.members.dto.MemberDto.Response;
import preproject.stackoverflow_clone.members.dto.MemberDto.Signup;
import preproject.stackoverflow_clone.members.entity.Member;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member signupDtoToMember(Signup requestBody);

    Member loginDtoToMember(Login requestBody);

    Response memberToMemberResponse(Member response);

    MemberDto.loginResponse memberToLoginResponse(Member loginResponse);

}

