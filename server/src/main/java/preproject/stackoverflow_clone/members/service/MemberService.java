package preproject.stackoverflow_clone.members.service;

import java.util.Optional;
import org.springframework.stereotype.Service;
import preproject.stackoverflow_clone.exception.BusinessLogicException;
import preproject.stackoverflow_clone.exception.ExceptionCode;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.members.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * USER-01
     */
    public Member signupMember(Member member) {
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    /**
     * USER-02
     */
    public Member loginMember(Member member) {
        Member verifiedExistsMember = verifyExistsEmailAndPassword(member.getMemberEmail(),
            member.getMemberPassword());

        verifiedExistsMember.setLoginOk(true);

        return verifiedExistsMember;
    }

    /**
     * USER-03
     */
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getMemberEmail())
            .ifPresent(memberEmail -> findMember.setMemberEmail(memberEmail));
        Optional.ofNullable(member.getMemberName())
            .ifPresent(memberName -> findMember.setMemberName(memberName));
        Optional.ofNullable(member.getMemberPassword())
            .ifPresent(memberPassword -> findMember.setMemberPassword(memberPassword));

        return memberRepository.save(findMember);
    }

    /**
     * USER-04
     */
    public Member logoutMember(Member member) {
        Member verifiedExistsMember = verifyExistsEmail(member.getMemberEmail());

        verifiedExistsMember.setLoginOk(false);

        return verifiedExistsMember;
    }

    /**
     * 유저 Id 찾기
     */
    public Member findVerifiedMember(Long MemberId) {
        Optional<Member> optionalMember = memberRepository.findByMemberId(MemberId);

        Member findMember = optionalMember.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }

    /**
     * 유저 이메일, 비밀번호 찾기
     */
    public Member verifyExistsEmailAndPassword(String memberEmail, String memberPassword) {
        Optional<Member> optionalMember = memberRepository.findByMemberEmailAndMemberPassword(
            memberEmail, memberPassword);

        Member existsEmailAndPassword = optionalMember.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_EXISTS));

        return existsEmailAndPassword;
    }

    /**
     * 유저 이메일 찾기
     */
    public Member verifyExistsEmail(String memberEmail) {
        Optional<Member> optionalMember = memberRepository.findByMemberEmail(memberEmail);

        Member existsEmailAndPassword = optionalMember.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_EXISTS));

        return existsEmailAndPassword;
    }

    /**
     * 유저 이름 찾기
     */
    public Member verifyExistsName(String memberName) {
        Optional<Member> optionalMember = memberRepository.findByMemberName(memberName);

        Member existsName = optionalMember.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.MEMBER_EXISTS));

        return existsName;
    }
}
