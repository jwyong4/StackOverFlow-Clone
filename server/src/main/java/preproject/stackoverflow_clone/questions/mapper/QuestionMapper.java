package preproject.stackoverflow_clone.questions.mapper;

import org.mapstruct.Mapper;
import preproject.stackoverflow_clone.questions.dto.QuestionDto;
import preproject.stackoverflow_clone.questions.dto.QuestionDto.Response;
import preproject.stackoverflow_clone.questions.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionPostDtoToQuestion(QuestionDto.Post requestBody);

    Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody);

    Response questionToQuestionResponse(Question response);

    List<Response> questionsToQuestionResponses(List<Question> responses);
}