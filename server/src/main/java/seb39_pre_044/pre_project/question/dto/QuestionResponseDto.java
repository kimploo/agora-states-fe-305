package seb39_pre_044.pre_project.question.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb39_pre_044.pre_project.answer.dto.AnswerResponseDto;
import seb39_pre_044.pre_project.member.dto.MemberDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDto {
    private Long questionId;

    private String questionTitle;

    private String questionBody;

    private String tag;

    private int questionView;

    private int likes;

    private MemberDto.Response memberResponseDto;

    private List<AnswerResponseDto> answerResponseDtos;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
