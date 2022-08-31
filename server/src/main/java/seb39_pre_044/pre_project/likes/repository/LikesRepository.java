package seb39_pre_044.pre_project.likes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb39_pre_044.pre_project.likes.entity.Likes;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.question.entity.Question;

import java.util.Optional;

public interface LikesRepository extends JpaRepository<Likes, Long> {
    Optional<Likes> findByQuestionAndMember(Question question, Member member);
}
