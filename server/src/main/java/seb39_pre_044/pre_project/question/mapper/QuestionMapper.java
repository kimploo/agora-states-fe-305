package seb39_pre_044.pre_project.question.mapper;

import org.mapstruct.Mapper;
import seb39_pre_044.pre_project.answer.dto.AnswerResponseDto;
import seb39_pre_044.pre_project.member.dto.MemberDto;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.question.dto.QuestionPatchDto;
import seb39_pre_044.pre_project.question.dto.QuestionPostDto;
import seb39_pre_044.pre_project.question.dto.QuestionResponseDto;
import seb39_pre_044.pre_project.question.entity.Question;
import seb39_pre_044.pre_project.question.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto, Member member) {
        Question question = new Question();
        question.setMember(member);
        question.setQuestionTitle(questionPostDto.getQuestionTitle());
        question.setQuestionBody(questionPostDto.getQuestionBody());
        question.setTag(questionPostDto.getTag());
        question.setCreatedAt(LocalDateTime.now());
        question.setModifiedAt(LocalDateTime.now());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        Member member = question.getMember();

        MemberDto.Response memberResponseDto = MemberDto.Response.builder()
                .memberId(member.getMemberId())
                .name(member.getName())
                .email(member.getEmail())
                .questionCount(member.getQuestions().size())
                .build();

        List<AnswerResponseDto> answerResponseDtos = question.getAnswers()
                        .stream().map(answer -> {
                    AnswerResponseDto answerResponseDto = AnswerResponseDto.builder()
                            .answer_id(answer.getAnswerId())
                            .answer_body(answer.getAnswerBody())
                            .memberResponseDto(new MemberDto.Response(answer.getMember().getMemberId(),
                                    answer.getMember().getName(), answer.getMember().getEmail(), answer.getMember().getQuestions().size(),
                                    answer.getMember().getAnswers().size()))
                            .questionId(question.getQuestionId())
                            .createdAt(answer.getCreatedAt())
                            .modifiedAt(answer.getModifiedAt())
                            .build();
                            return answerResponseDto;
                        }).collect(Collectors.toList());

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionTitle(question.getQuestionTitle());
        questionResponseDto.setQuestionBody(question.getQuestionBody());
        questionResponseDto.setLikes(question.getLikes().size());
        questionResponseDto.setTag(question.getTag());
        questionResponseDto.setQuestionView(question.getQuestionView());
        questionResponseDto.setMemberResponseDto(memberResponseDto);
        questionResponseDto.setAnswerResponseDtos(answerResponseDtos);
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());

        return questionResponseDto;
    }

    /*//patch 용으로 만들었으나 확실하지 않아 일단 주석처리
    //questionResponseDto 만들고 값만 넣어주기
    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {

        *//*Question question = new Question();
        question.setQuestionTitle(questionPatchDto.getQuestionTitle());
        question.setQuestionBody(questionPatchDto.getQuestionBody());
        question.setModifiedAt(LocalDateTime.now());*//*
        QuestionResponseDto dto = new QuestionResponseDto();
        questionPatchDto.
        *//*dto.setQuestionTitle(questionPatchDto.getQuestionTitle());
        dto.setQuestionBody(questionPatchDto.getQuestionBody());
        dto.setTag(questionPatchDto.getTag());*//*
        return question;
    }*/


    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}
