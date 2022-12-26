package preproject.stackoverflow_clone.answers.mapper;

import org.mapstruct.Mapper;
import preproject.stackoverflow_clone.answers.dto.AnswerDto;
import preproject.stackoverflow_clone.answers.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPostDtoToAnswer(AnswerDto.Post requestBody);

    Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody);

    AnswerDto.Response answerToAnswerResponseDto(Answer response);
}