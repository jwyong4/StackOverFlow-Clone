//package preproject.stackoverflow_clone.vote.service;
//
//import java.util.Optional;
//import org.springframework.stereotype.Service;
//import preproject.stackoverflow_clone.exception.BusinessLogicException;
//import preproject.stackoverflow_clone.exception.ExceptionCode;
//import preproject.stackoverflow_clone.members.entity.Member;
//import preproject.stackoverflow_clone.members.service.MemberService;
//import preproject.stackoverflow_clone.questions.entity.Question;
//import preproject.stackoverflow_clone.questions.service.QuestionService;
//import preproject.stackoverflow_clone.vote.entity.Vote;
//import preproject.stackoverflow_clone.vote.repository.VoteRepository;
//
//@Service
//public class VoteService {
//
//    private final VoteRepository voteRepository;
//    private final MemberService memberService;
//    private final QuestionService questionService;
//
//    public VoteService(VoteRepository voteRepository, MemberService memberService,
//        QuestionService questionService) {
//        this.voteRepository = voteRepository;
//        this.memberService = memberService;
//        this.questionService = questionService;
//    }
//
//    public Vote voteUp(Vote vote) {
//        if (findVote(vote.getMember().getMemberId(), vote.getQuestion().getQuestionId()).isPresent()) {
//            throw new BusinessLogicException(ExceptionCode.VOTE_ALREADY);
//        }
//
//        Member member = memberService.findVerifiedMember(vote.getMember().getMemberId());
//        Question question = questionService.findVerifiedQuestion(vote.getQuestion().getQuestionId());
//
//        vote.setMember(member);
//        vote.setQuestion(question);
//
//        Vote saveVote = voteRepository.save(vote);
//
////        question.setVoteCount(question.getVotes().size());
//
//        return saveVote;
//    }
//
//    public Optional<Vote> findVote(Vote vote) {
//        vote
//        return voteRepository.findByMemberAndQuestion(memberId, questionId);
//
////        return optionalVote;
//    }
//}
