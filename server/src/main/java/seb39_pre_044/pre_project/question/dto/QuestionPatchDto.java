package seb39_pre_044.pre_project.question.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionPatchDto {
    private long questionId;

    private String questionTitle;
    private String questionBody;
    private String tag;
    private LocalDateTime modifiedAt;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}
