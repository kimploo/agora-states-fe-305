package seb39_pre_044.pre_project.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import seb39_pre_044.pre_project.answer.entity.Answer;
import seb39_pre_044.pre_project.question.entity.Question;
import seb39_pre_044.pre_project.validator.NotSpace;

import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

public class MemberDto {
    @Getter
    @Setter
    @AllArgsConstructor // TODO 테스트를 위해 추가됨
    public static class Post {
        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password;

        private String roles;

//        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
//                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
//        private String phone;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;

        @NotSpace(message = "회원 이름은 공백이 아니어야 합니다")
        private String name;

//        @NotSpace(message = "휴대폰 번호는 공백이 아니어야 합니다")
//        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
//                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다")
//        private String phone;


        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private long memberId;
        private String name;
        private String email;
        private long questionCount;
        private long answerCount;
    }
}
