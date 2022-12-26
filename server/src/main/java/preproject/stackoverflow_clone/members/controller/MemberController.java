package preproject.stackoverflow_clone.members.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import preproject.stackoverflow_clone.members.dto.MemberDto;
import preproject.stackoverflow_clone.members.dto.MemberDto.Response;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.members.mapper.MemberMapper;
import preproject.stackoverflow_clone.members.service.MemberService;
import preproject.stackoverflow_clone.dto.SingleResponseDto;

@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/signup")
    public ResponseEntity signupMember(@Valid @RequestBody MemberDto.Signup requestBody) {
        Member member = mapper.signupDtoToMember(requestBody);
        Member signup = memberService.signupMember(member);
        Response response = mapper.memberToMemberResponse(signup);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity loginMember(@Valid @RequestBody MemberDto.Login requestBody) {
        Member member = mapper.loginDtoToMember(requestBody);
        Member login = memberService.loginMember(member);
        MemberDto.loginResponse response = mapper.memberToLoginResponse(login);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity logoutMember(@Valid @RequestBody MemberDto.Login requestBody) {
        Member member = mapper.loginDtoToMember(requestBody);
        Member login = memberService.logoutMember(member);
        MemberDto.loginResponse response = mapper.memberToLoginResponse(login);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{memberId}")
    public ResponseEntity findMemberQuestions(@PathVariable("memberId") @Positive Long memberId) {
        Member findMember = memberService.findVerifiedMember(memberId);
        Response response = mapper.memberToMemberResponse(findMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }
}