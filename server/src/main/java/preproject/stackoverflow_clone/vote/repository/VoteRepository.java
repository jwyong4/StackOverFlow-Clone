package preproject.stackoverflow_clone.vote.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.questions.entity.Question;
import preproject.stackoverflow_clone.vote.entity.Vote;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
//    Optional<Vote> findVoteByMemberIdAndQuestionId(Long memberId, Long questionId);

    Vote findByVoteId(Long voteId);
    Optional<Vote> findByMemberAndQuestion(Member member, Question question);
}