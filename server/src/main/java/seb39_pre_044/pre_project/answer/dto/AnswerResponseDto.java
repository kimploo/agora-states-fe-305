package seb39_pre_044.pre_project.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import seb39_pre_044.pre_project.audit.Auditable;
import seb39_pre_044.pre_project.member.dto.MemberDto;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.question.dto.QuestionResponseDto;
import seb39_pre_044.pre_project.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto extends Auditable {
    private Long answer_id;

    private String answer_body;

    private MemberDto.Response memberResponseDto;

    private long questionId;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
