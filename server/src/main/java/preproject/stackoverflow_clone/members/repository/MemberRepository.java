package preproject.stackoverflow_clone.members.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import preproject.stackoverflow_clone.members.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByMemberId(Long memberId);

    Optional<Member> findByMemberEmailAndMemberPassword(String memberEmail, String memberPassword);

    Optional<Member> findByMemberEmail(String memberEmail);

    Optional<Member> findByMemberName(String memberName);

    Boolean MemberEmailAndMemberPassword(String memberEmail, String memberPassword);
}