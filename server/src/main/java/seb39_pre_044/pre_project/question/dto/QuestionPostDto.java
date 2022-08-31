package seb39_pre_044.pre_project.question.dto;


import lombok.Getter;
import lombok.Setter;
import seb39_pre_044.pre_project.member.entity.Member;

@Getter
public class QuestionPostDto {

    private Long memberId;

    private String questionTitle;

    private String questionBody;

    private String tag;

}
