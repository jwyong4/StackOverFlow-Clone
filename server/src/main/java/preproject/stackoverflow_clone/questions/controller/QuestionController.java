package preproject.stackoverflow_clone.questions.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.stackoverflow_clone.dto.MultiResponseDto;
import preproject.stackoverflow_clone.questions.dto.QuestionDto;
import preproject.stackoverflow_clone.questions.dto.QuestionDto.Response;
import preproject.stackoverflow_clone.questions.entity.Question;
import preproject.stackoverflow_clone.questions.mapper.QuestionMapper;
import preproject.stackoverflow_clone.questions.service.QuestionService;
import preproject.stackoverflow_clone.dto.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import preproject.stackoverflow_clone.vote.dto.VoteDto.Post;
import preproject.stackoverflow_clone.vote.entity.Vote;

@RestController
@RequestMapping
@Validated
@Slf4j
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    // 질문 전체 조회
    @GetMapping("/questions")
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
        @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions), pageQuestions),
            HttpStatus.OK);
    }

    // 질문 일부 조회
    @GetMapping("/question/{ID}")
    public ResponseEntity getQuestion(@PathVariable("ID") @Positive Long questionId) {
        Question question = questionService.findQuestion(questionId);
        questionService.view(question);
        Response response = mapper.questionToQuestionResponse(question);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 질문 등록
    @PostMapping("/question/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(
            post));
        question.setView(question.getView());
        Response response = mapper.questionToQuestionResponse(question);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/question/ask/{ID}")
    public ResponseEntity patchQuestion(
        @PathVariable("ID") @Positive Long questionId,
        @Valid @RequestBody QuestionDto.Patch patch) {
        patch.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(
            patch));
        Response response = mapper.questionToQuestionResponse(question);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 질문 삭제
    @DeleteMapping("/question/{ID}")
    public ResponseEntity deleteQuestion(@PathVariable("ID") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    // 질문 추천
    @PostMapping("/question/{questionId}/voteup/{memberId}")
    public ResponseEntity voteUp(@PathVariable("questionId") @Positive Long questionId,
        @PathVariable("memberId") @Positive Long memberId) {
        questionService.voteUp(questionId, memberId);

        return new ResponseEntity(HttpStatus.OK);
    }

    // 질문 비추천
    @PostMapping("/question/{questionId}/votedown/{memberId}")
    public ResponseEntity voteDown(@PathVariable("questionId") @Positive Long questionId,
        @PathVariable("memberId") @Positive Long memberId) {
        questionService.voteDown(questionId, memberId);

        return new ResponseEntity(HttpStatus.OK);
    }
}
