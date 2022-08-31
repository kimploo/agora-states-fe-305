package seb39_pre_044.pre_project.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb39_pre_044.pre_project.dto.MultiResponseDto;
import seb39_pre_044.pre_project.dto.SingleResponseDto;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.member.service.MemberService;
import seb39_pre_044.pre_project.question.dto.QuestionPatchDto;
import seb39_pre_044.pre_project.question.dto.QuestionPostDto;
import seb39_pre_044.pre_project.question.dto.QuestionResponseDto;
import seb39_pre_044.pre_project.question.entity.Question;
import seb39_pre_044.pre_project.question.mapper.QuestionMapper;
import seb39_pre_044.pre_project.question.service.QuestionService;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final MemberService memberService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, MemberService memberService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.memberService = memberService;
        this.mapper = mapper;

    }

    //전체 조회
    @GetMapping
    public ResponseEntity getQuestions(@PageableDefault(size = 3, sort = "questionId", direction = Sort.Direction.DESC) Pageable pageable) {

        Page<Question> pageQuestions = questionService.findQuestions(pageable);
        List<Question> questions = pageQuestions.getContent();


        return new ResponseEntity<>(new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions), pageQuestions)
                , HttpStatus.OK);
    }

    //하나의 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId) {
        Question question = questionService.findQuestion(questionId);

        return ResponseEntity.ok(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)));
    }


    @PostMapping("/ask")
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {
        Member findMember = memberService.findMember(questionPostDto.getMemberId());
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto,findMember));

//        원래 Dto를 반환하려 했으나 질문등록시 곧바로 getQuestion 되는 점을 고려해서 redirect로 수정
//        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question))
//                , HttpStatus.CREATED);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create("/questions/" + question.getQuestionId()));
        return new ResponseEntity<>(headers,HttpStatus.MOVED_PERMANENTLY);
    }


    //좋아요 기능
    @PostMapping("/{question-id}/dolikes")
    public void doLikes(@PathVariable("question-id") Long questionId) {
        Question question = questionService.findQuestion(questionId);
        Long memberId = question.getMember().getMemberId();
        questionService.doLikeQuestion(questionId, memberId);
    }

    //질문 수정
    @PatchMapping("/{question-id}/update")
    public ResponseEntity patchQuestion(@PathVariable("question-id") Long questionId,
                                        @RequestBody QuestionPatchDto patchDto) {


        Question updatedQuestion = questionService.updateQuestion(patchDto);
       /* question.setQuestionBody(patchDto.getQuestionBody());
        question.setQuestionTitle(patchDto.getQuestionTitle());
        question.setModifiedAt(LocalDateTime.now());*/

        //questionPatchToMember 필요 (mapper)???
        //Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(patchDto));

        //여기에 question 말고 questionResponseDto를 반환해야함
        /*return new ResponseEntity
                <>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(updatedQuestion)), HttpStatus.OK);*/
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create("/questions/" + updatedQuestion.getQuestionId()));
        return new ResponseEntity<>(headers,HttpStatus.MOVED_PERMANENTLY);
    }

    //질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId){
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>("question deleted.", HttpStatus.NO_CONTENT);
    }
}
