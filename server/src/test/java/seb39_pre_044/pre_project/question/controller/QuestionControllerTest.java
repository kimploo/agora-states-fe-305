package seb39_pre_044.pre_project.question.controller;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import seb39_pre_044.pre_project.answer.dto.AnswerResponseDto;
import seb39_pre_044.pre_project.answer.entity.Answer;
import seb39_pre_044.pre_project.member.dto.MemberDto;
import seb39_pre_044.pre_project.member.entity.Member;
import seb39_pre_044.pre_project.member.service.MemberService;
import seb39_pre_044.pre_project.question.dto.QuestionPostDto;
import seb39_pre_044.pre_project.question.dto.QuestionResponseDto;
import seb39_pre_044.pre_project.question.entity.Question;
import seb39_pre_044.pre_project.question.mapper.QuestionMapper;
import seb39_pre_044.pre_project.question.repository.QuestionRepository;
import seb39_pre_044.pre_project.question.service.QuestionService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static java.time.LocalTime.now;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class QuestionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private MemberService memberService;

    @MockBean
    private QuestionMapper mapper;

    @Test
    @WithMockUser
    void getQuestions() throws Exception {
        // given
        long questionId = 1L;

        MemberDto.Response memberResponseDto1 = new MemberDto.Response(1L, "Kevin", "kkk@gmail.com", 1, 0);
        MemberDto.Response memberResponseDto2 = new MemberDto.Response(2L, "David", "ddd@gmail.com", 3, 5);
        AnswerResponseDto answerResponseDto = new AnswerResponseDto(1L,"answer1",memberResponseDto2, 1L,LocalDateTime.now(),LocalDateTime.now());
        List<AnswerResponseDto> answerResponseDtos = List.of(answerResponseDto);
        QuestionResponseDto questionResponseDto = new QuestionResponseDto(1L, "title1", "body1", "tag1", 0, 0,
                memberResponseDto1, answerResponseDtos, LocalDateTime.now(), LocalDateTime.now());

//        given(mapper.questionPostDtoToQuestion(Mockito.any(QuestionPostDto.class), Mockito.any(Member.class))).willReturn(new Question());
        given(questionService.findQuestion(Mockito.anyLong())).willReturn(new Question());
        given(mapper.questionToQuestionResponseDto(Mockito.any(Question.class))).willReturn(questionResponseDto);

        // when
        ResultActions actions = mockMvc.perform(RestDocumentationRequestBuilders.get("/questions/{question-id}", questionId)
                .accept(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data.questionId").value(questionResponseDto.getQuestionId()))
                .andExpect(jsonPath("$.data.questionTitle").value(questionResponseDto.getQuestionTitle()))
                .andExpect(jsonPath("$.data.questionBody").value(questionResponseDto.getQuestionBody()))
//                .andExpect(jsonPath("$.data.memberResponseDto").value(memberResponseDto1))
//                .andExpect(jsonPath("$.data.answerResponseDtos").value(questionResponseDto.getAnswerResponseDtos()))
//                .andExpect(jsonPath("$.data.createdAt").value(questionResponseDto.getCreatedAt()))
//                .andExpect(jsonPath("$.data.modifiedAt").value(questionResponseDto.getModifiedAt()))
                .andDo(document("get-question",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("question-id").description("?????? ?????????")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("?????? ?????????"),
                                        fieldWithPath("data.questionId").type(JsonFieldType.NUMBER).description("?????? ?????????"),
                                        fieldWithPath("data.questionTitle").type(JsonFieldType.STRING).description("??????"),
                                        fieldWithPath("data.questionBody").type(JsonFieldType.STRING).description("??????"),
                                        fieldWithPath("data.questionView").type(JsonFieldType.NUMBER).description("?????????"),
                                        fieldWithPath("data.tag").type(JsonFieldType.STRING).description("??????"),
                                        fieldWithPath("data.likes").type(JsonFieldType.NUMBER).description("????????? ???"),
                                        subsectionWithPath("data.memberResponseDto").type(JsonFieldType.OBJECT).description("????????? ??????"),
                                        subsectionWithPath("data.answerResponseDtos").type(JsonFieldType.ARRAY).description("?????? ?????????"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("?????? ??????"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("?????? ??????")
                                )
                        )
                ));


    }

    @Test
    void getQuestion() {
    }

    @Test
    void postQuestion() {
    }

    @Test
    void patchQuestion() {
    }

    @Test
    void deleteQuestion() {
    }
}