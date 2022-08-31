package seb39_pre_044.pre_project.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb39_pre_044.pre_project.exception.BusinessLogicException;
import seb39_pre_044.pre_project.exception.ExceptionCode;
import seb39_pre_044.pre_project.likes.entity.Likes;
import seb39_pre_044.pre_project.likes.repository.LikesRepository;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.member.service.MemberService;
import seb39_pre_044.pre_project.question.dto.QuestionPatchDto;
import seb39_pre_044.pre_project.question.entity.Question;
import seb39_pre_044.pre_project.question.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {

    private final MemberService memberService;
    private final QuestionRepository questionRepository;
    private final LikesRepository likesRepository;

    public QuestionService(MemberService memberService, QuestionRepository questionRepository, LikesRepository likesRepository) {
        this.memberService = memberService;
        this.questionRepository = questionRepository;
        this.likesRepository = likesRepository;
    }

    public Question createQuestion(Question question){

        return saveQuestion(question);
    }


    public Page<Question> findQuestions(Pageable pageable){
        return questionRepository.findAll(pageable);
    }

    //특정 질문 찾기
    public Question findQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.increaseView();
        return findQuestion;
    }

    //특정 질문 수정
    public Question updateQuestion(QuestionPatchDto patchDto){
        Question findQuestion = findVerifiedQuestion(patchDto.getQuestionId());

            Optional.ofNullable(patchDto.getQuestionTitle())
                    .ifPresent(title -> findQuestion.setQuestionTitle(title));
            Optional.ofNullable(patchDto.getQuestionBody())
                    .ifPresent(body -> findQuestion.setQuestionBody(body));
            Optional.ofNullable(patchDto.getTag())
                    .ifPresent(tag -> findQuestion.setTag(tag));

        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }


    //특정 질문 삭제
    public void deleteQuestion(long questionId){
        //먼저 해당 질문이 유효한지 체크하고 삭제
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    //특정 질문 좋아요
    public void doLikeQuestion(long questionId, long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        Question question = this.findVerifiedQuestion(questionId);

        /*question.getLikes().add(new Likes());
        member.getLikes().add(new Likes());*/
        //exception 알림을 프론트 쪽에서 어떻게 받아볼지 찾아보기 (지금은 500만 나옴)
        likesRepository.findByQuestionAndMember(question, member).ifPresent(none -> {
            throw new RuntimeException("이미 좋아요를 눌렀습니다.");});

        likesRepository.save(Likes.builder()
                .question(question)
                .member(member)
                .build());
    }


    private void verifyQuestion(Question question) {
        memberService.findVerifiedMember(question.getMember().getMemberId());
    }

    private Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }


    //유효한 질문인지 먼저 검증할때 사용 (질문이 존재하는지)
    @Transactional(readOnly = true)
    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalQuestion =
                questionRepository.findById(questionId);

        Question findQuestion = optionalQuestion.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findQuestion;
    }


}
