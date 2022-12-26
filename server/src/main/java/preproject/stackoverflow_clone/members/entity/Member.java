package preproject.stackoverflow_clone.members.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import javax.validation.constraints.Email;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.stackoverflow_clone.answers.entity.Answer;
import preproject.stackoverflow_clone.questions.entity.Question;
import preproject.stackoverflow_clone.vote.entity.Vote;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Email
    @Column(unique = true, nullable = false)
    private String memberEmail;

    @Column(nullable = false)
    private String memberPassword;

    @Column(unique = true, nullable = false)
    private String memberName;

    @Column(nullable = false)
    private boolean loginOk;

    @Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdTime = LocalDateTime.now();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.REMOVE})
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.REMOVE})
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.REMOVE})
    private List<Vote> votes = new ArrayList<>();

}
