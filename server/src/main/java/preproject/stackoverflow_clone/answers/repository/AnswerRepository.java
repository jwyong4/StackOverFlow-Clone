package preproject.stackoverflow_clone.answers.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import preproject.stackoverflow_clone.answers.entity.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    Optional<Answer> findByAnswerId(Long answerId);

}
