package seb39_pre_044.pre_project.answer.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb39_pre_044.pre_project.answer.dto.AnswerPostDto;
import seb39_pre_044.pre_project.answer.entity.Answer;
import seb39_pre_044.pre_project.answer.mapper.AnswerMapper;
import seb39_pre_044.pre_project.answer.service.AnswerService;
import seb39_pre_044.pre_project.dto.SingleResponseDto;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.member.service.MemberService;
import seb39_pre_044.pre_project.question.entity.Question;
import seb39_pre_044.pre_project.question.service.QuestionService;

import java.net.URI;

@RestController
@RequestMapping("/questions")
public class AnswerController {

    private final QuestionService questionService;
    private final AnswerService answerService;
    private final MemberService memberService;
    private final AnswerMapper mapper;

    public AnswerController(QuestionService questionService, MemberService memberService, AnswerService answerService, AnswerMapper mapper) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId,
                                     @RequestBody AnswerPostDto answerPostDto) {
        Question question = questionService.findVerifiedQuestion(questionId);
        Member member = memberService.findMember(answerPostDto.getMemberId());
        answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto,question,member));

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create("/questions/" + questionId));
        return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
    }
}
