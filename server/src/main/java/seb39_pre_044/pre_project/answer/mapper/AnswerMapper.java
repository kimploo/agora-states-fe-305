package seb39_pre_044.pre_project.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import seb39_pre_044.pre_project.answer.dto.AnswerPostDto;
import seb39_pre_044.pre_project.answer.entity.Answer;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.question.entity.Question;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {


    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto, Question question,
                                         Member member) {
        Answer answer = new Answer();
        answer.setAnswerBody(answerPostDto.getAnswerBody());
        answer.setMember(member);
        answer.setQuestion(question);
        answer.setCreatedAt(LocalDateTime.now());
        answer.setModifiedAt(LocalDateTime.now());

        return answer;
    }
}
