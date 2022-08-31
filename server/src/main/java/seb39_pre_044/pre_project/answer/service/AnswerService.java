package seb39_pre_044.pre_project.answer.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb39_pre_044.pre_project.answer.entity.Answer;
import seb39_pre_044.pre_project.answer.repository.AnswerRepository;
import seb39_pre_044.pre_project.question.entity.Question;

@Service
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer){
        return saveAnswer(answer);
    }

    private Answer saveAnswer(Answer answer) {
        return answerRepository.save(answer);
    }
}
