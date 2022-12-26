package preproject.stackoverflow_clone.vote.dto;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import preproject.stackoverflow_clone.members.entity.Member;
import preproject.stackoverflow_clone.questions.entity.Question;


public class VoteDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "질문 번호는 공백이 아니어야 합니다.")
        private Long questionId;

        @NotBlank(message = "유저 번호는 공백이 아니어야 합니다.")
        private Long memberId;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }

        public Question getQuestion() {
            Question question = new Question();
            question.setQuestionId(questionId);
            return question;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
//        private Long questionId;
        private Long memberId;

        private boolean voteUp;

        private boolean voteZero;

        private boolean voteDown;

//        public void setQuestion(Question question) {
//            this.questionId = question.getQuestionId();
//        }

        public void setMember(Member member) {
            this.memberId = member.getMemberId();
        }
    }
}