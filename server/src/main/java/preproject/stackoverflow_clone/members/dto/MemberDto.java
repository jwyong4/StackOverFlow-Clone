package preproject.stackoverflow_clone.members.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import preproject.stackoverflow_clone.questions.dto.QuestionDto;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Signup {

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String memberName;

        @NotBlank(message = "이메일은 공백이 아니어야 합니다.")
        private String memberEmail;

        @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
        private String memberPassword;

    }

    @Getter
    @AllArgsConstructor
    public static class Login {

        @NotBlank(message = "이메일은 공백이 아니어야 합니다.")
        private String memberEmail;

        @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
        private String memberPassword;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {

        private Long memberId;

        private String memberName;

        private String memberEmail;

        private String memberPassword;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
        private LocalDateTime createdTime;

        private List<QuestionDto.Response> questions;
    }

    @Getter
    @AllArgsConstructor
    public static class loginResponse {

        private Long memberId;

        private String memberName;

        private boolean loginOk;
    }

}
