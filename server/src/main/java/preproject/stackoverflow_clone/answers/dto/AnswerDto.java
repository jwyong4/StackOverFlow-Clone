package preproject.stackoverflow_clone.answers.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.questions.entity.Question;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

public class AnswerDto {

    @Getter
    public static class Post {

        @NotBlank(message = "답변은 공백이 될 수 없습니다.")
        private String content;

        private Long memberId;

        private Long questionId;

        public Question getQuestion() {
            Question question = new Question();
            question.setQuestionId(questionId);
            return question;
        }

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }
    }

    @Getter
    public static class Patch {

        @NotBlank(message = "본문은 공백이 될 수 없습니다.")
        private String content;
        private Long answerId;

        public void setAnswerId(Long answerId) {
            this.answerId = answerId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {

        private Long answerId;

        private String content;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
        private LocalDateTime createdTime;

        private Long questionId;

        private Long memberId;

        private String memberName;

        public void setQuestion(Question question) {
            this.questionId = question.getQuestionId();
        }

        public void setMember(Member member) {
            this.memberId = member.getMemberId();
            this.memberName = member.getMemberName();
        }
    }
}
