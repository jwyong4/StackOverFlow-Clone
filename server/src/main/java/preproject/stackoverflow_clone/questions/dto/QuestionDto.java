package preproject.stackoverflow_clone.questions.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import preproject.stackoverflow_clone.answers.dto.AnswerDto;
import preproject.stackoverflow_clone.answers.dto.AnswerDto.Response;
import preproject.stackoverflow_clone.members.entity.Member;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import preproject.stackoverflow_clone.vote.dto.VoteDto;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "제목은 공백이 될 수 없습니다.")
        private String title;

        @NotBlank(message = "본문은 공백이 될 수 없습니다.")
        private String content;

        private Long memberId;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {

        private Long questionId;

        @NotBlank(message = "제목은 공백이 될 수 없습니다.")
        private String title;

        @NotBlank(message = "본문은 공백이 될 수 없습니다.")
        private String content;

        public void setQuestionId(Long questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {

        private Long questionId;

        private String title;

        private String content;

        private int view;

        private int voteCount;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
        private LocalDateTime createdTime;

        private Long memberId;

        private String memberName;

        public void setMember(Member member) {
            this.memberId = member.getMemberId();
            this.memberName = member.getMemberName();
        }

        private List<VoteDto.Response> votes;
        private List<AnswerDto.Response> answers;

    }
}
