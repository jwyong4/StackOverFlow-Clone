package preproject.stackoverflow_clone.answers.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import preproject.stackoverflow_clone.answers.entity.Answer;
import preproject.stackoverflow_clone.answers.repository.AnswerRepository;
import preproject.stackoverflow_clone.exception.BusinessLogicException;
import preproject.stackoverflow_clone.exception.ExceptionCode;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.members.service.MemberService;
import preproject.stackoverflow_clone.questions.entity.Question;
import preproject.stackoverflow_clone.questions.service.QuestionService;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService,
        QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    public Answer findAnswer(Long answerId) {
        return findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {
        return (List<Answer>) answerRepository.findAll();
    }

    public Answer createAnswer(Answer answer) {
        Member member = memberService.findVerifiedMember(answer.getMember().getMemberId());
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());
        answer.setMember(member);
        answer.setQuestion(question);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        findAnswer.setContent(answer.getContent());
        findAnswer.setCreatedTime(LocalDateTime.now());
        return answerRepository.save(findAnswer);
    }

    public void deleteAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findByAnswerId(answerId);
        Answer findAnswer =
            optionalAnswer.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findAnswer;
    }
}

