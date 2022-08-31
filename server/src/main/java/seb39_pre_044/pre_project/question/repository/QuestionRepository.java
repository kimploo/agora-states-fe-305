package seb39_pre_044.pre_project.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb39_pre_044.pre_project.question.entity.Question;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    //tag를 통해 조회할 경우 사용
    Optional<Question> findByTag(String tag);
}
