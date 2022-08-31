package seb39_pre_044.pre_project.likes.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.question.entity.Question;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Likes {

    // Member와 Question 의 N:N 관계 가운데에 위치하게 됨 (Member(1) : Likes(N) - Question(1)
    // questionService와 memberService에 각각 구현?

    //questionMapping / QuestionController / QuestionService / Question에 구현

    // 좋아요 취소 / 싫어요 / 싫어요 취소
    // 현재 추천수 계산은 어떻게??

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likesId;

    //Question과 연결
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    //Member와 연결
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;


    @Builder
    public Likes (Question question, Member member){
        this.question = question;
        this.member = member;
    }

}
