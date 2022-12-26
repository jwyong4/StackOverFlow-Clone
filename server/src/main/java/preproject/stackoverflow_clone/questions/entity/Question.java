package preproject.stackoverflow_clone.questions.entity;

import static javax.persistence.CascadeType.REMOVE;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.stackoverflow_clone.answers.entity.Answer;
import preproject.stackoverflow_clone.members.entity.Member;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import preproject.stackoverflow_clone.vote.entity.Vote;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private int view;

    @Column
    private int voteCount;

    @Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdTime = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE})
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE})
    private List<Vote> votes = new ArrayList<>();

    public int getVoteSize() {
        return this.votes.size();
    }

}
