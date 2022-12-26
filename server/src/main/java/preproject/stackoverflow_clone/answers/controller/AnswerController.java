package preproject.stackoverflow_clone.answers.controller;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import preproject.stackoverflow_clone.answers.dto.AnswerDto;
import preproject.stackoverflow_clone.answers.entity.Answer;
import preproject.stackoverflow_clone.answers.mapper.AnswerMapper;
import preproject.stackoverflow_clone.answers.service.AnswerService;
import preproject.stackoverflow_clone.dto.SingleResponseDto;


@RestController
@RequestMapping("/question")
@Validated
@Slf4j
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 등록
    @PostMapping("/{questionId}/answers")
    public ResponseEntity postAnswer(@PathVariable("questionId") @Positive Long questionId,
        @Valid @RequestBody AnswerDto.Post requestBody) {

        Answer answer = mapper.answerPostDtoToAnswer(requestBody);
        Answer createAnswer = answerService.createAnswer(answer);
        AnswerDto.Response response = mapper.answerToAnswerResponseDto(createAnswer);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    // 답변 수정
    @PatchMapping("/{questionId}/answers/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") @Positive Long answerId,
        @Valid @RequestBody AnswerDto.Patch requestBody) {

        requestBody.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(
            mapper.answerPatchDtoToAnswer(requestBody));
        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
            HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{questionId}/answers/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable("answerId") @Positive Long answerId) {

        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();

    }
}

