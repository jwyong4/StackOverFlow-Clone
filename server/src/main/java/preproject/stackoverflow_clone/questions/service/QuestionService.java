package preproject.stackoverflow_clone.questions.service;

import java.time.LocalDateTime;
import javax.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.stackoverflow_clone.exception.BusinessLogicException;
import preproject.stackoverflow_clone.exception.ExceptionCode;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.members.service.MemberService;
import preproject.stackoverflow_clone.questions.entity.Question;
import preproject.stackoverflow_clone.questions.repository.QuestionRepository;

import java.util.Optional;
import preproject.stackoverflow_clone.vote.entity.Vote;
import preproject.stackoverflow_clone.vote.repository.VoteRepository;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    private final VoteRepository voteRepository;

    public QuestionService(QuestionRepository questionRepository, MemberService memberService,
        VoteRepository voteRepository) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
        this.voteRepository = voteRepository;
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public Question createQuestion(Question question) {
        Member member = memberService.findVerifiedMember(question.getMember().getMemberId());
        question.setMember(member);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        Optional.ofNullable(question.getTitle())
            .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
            .ifPresent(content -> findQuestion.setContent(content));

        findQuestion.setCreatedTime(LocalDateTime.now());
        return questionRepository.save(findQuestion);
    }

    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findByQuestionId(questionId);
        Question findQuestion =
            optionalQuestion.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    public void view(Question question) {
        Optional.ofNullable(question.getView())
            .ifPresent(view -> question.setView(question.getView() + 1));
        questionRepository.save(question);
    }

    public void voteUp(Long questionId, Long memberId) {
        Question question = findVerifiedQuestion(questionId);
        Member member = memberService.findVerifiedMember(memberId);
        Optional<Vote> checkVoteUp = voteRepository.findByMemberAndQuestion(member, question);

        checkVoteUp.ifPresentOrElse(
            vote -> {
                Vote findVote = voteRepository.findByVoteId(checkVoteUp.get().getVoteId());
                if (findVote.isVoteUp() == true && findVote.isVoteDown() == false
                    && findVote.isVoteZero() == false) {
                    findVote.setVoteUp(false);
                    findVote.setVoteZero(true);
                    findVote.setVoteDown(false);

                    voteRepository.save(findVote);

                    question.setVoteCount(question.getVoteCount() - 1);
                    questionRepository.save(question);

//                    throw new BusinessLogicException(ExceptionCode.VOTE_ALREADY);
                } else if (findVote.isVoteUp() == false && findVote.isVoteDown() == true
                    && findVote.isVoteZero() == false) {
                    findVote.setVoteUp(false);
                    findVote.setVoteZero(true);
                    findVote.setVoteDown(false);

                    voteRepository.save(findVote);

                    question.setVoteCount(question.getVoteCount() + 1);
                    questionRepository.save(question);
                } else if (findVote.isVoteUp() == false && findVote.isVoteDown() == false
                    && findVote.isVoteZero() == true) {
                    findVote.setVoteUp(true);
                    findVote.setVoteZero(false);
                    findVote.setVoteDown(false);

                    voteRepository.save(findVote);

                    question.setVoteCount(question.getVoteCount() + 1);
                    questionRepository.save(question);
                }
            },
            () -> {
                Vote vote = new Vote();
                vote.setMember(member);
                vote.setQuestion(question);
                vote.setVoteUp(true);
                vote.setVoteZero(false);
                vote.setVoteDown(false);

                voteRepository.save(vote);

                question.setVoteCount(question.getVoteCount() + 1);
                questionRepository.save(question);
            }
        );
    }

    public void voteDown(Long questionId, Long memberId) {
        Question question = findVerifiedQuestion(questionId);
        Member member = memberService.findVerifiedMember(memberId);
        Optional<Vote> checkVoteUp = voteRepository.findByMemberAndQuestion(member, question);

        checkVoteUp.ifPresentOrElse(
            vote -> {
                Vote findVote = voteRepository.findByVoteId(checkVoteUp.get().getVoteId());
                if (findVote.isVoteUp() == false && findVote.isVoteDown() == true
                    && findVote.isVoteZero() == false) {
                    findVote.setVoteUp(false);
                    findVote.setVoteZero(true);
                    findVote.setVoteDown(false);

                    voteRepository.save(findVote);

                    question.setVoteCount(question.getVoteCount() + 1);
                    questionRepository.save(question);

//                    throw new BusinessLogicException(ExceptionCode.VOTE_ALREADY);
                } else if (findVote.isVoteUp() == true && findVote.isVoteDown() == false
                    && findVote.isVoteZero() == false) {
                    findVote.setVoteUp(false);
                    findVote.setVoteZero(true);
                    findVote.setVoteDown(false);

                    voteRepository.save(findVote);

                    question.setVoteCount(question.getVoteCount() - 1);
                    questionRepository.save(question);
                } else if (findVote.isVoteUp() == false && findVote.isVoteDown() == false
                    && findVote.isVoteZero() == true) {
                    findVote.setVoteUp(false);
                    findVote.setVoteZero(false);
                    findVote.setVoteDown(true);

                    voteRepository.save(findVote);

                    question.setVoteCount(question.getVoteCount() - 1);
                    questionRepository.save(question);
                }
            },
            () -> {
                Vote vote = new Vote();
                vote.setMember(member);
                vote.setQuestion(question);
                vote.setVoteUp(false);
                vote.setVoteZero(false);
                vote.setVoteDown(true);

                voteRepository.save(vote);

                question.setVoteCount(question.getVoteCount() - 1);
                questionRepository.save(question);
            }
        );
    }

}
