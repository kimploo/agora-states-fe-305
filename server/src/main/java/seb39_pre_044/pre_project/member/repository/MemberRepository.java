package seb39_pre_044.pre_project.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb39_pre_044.pre_project.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);
}
