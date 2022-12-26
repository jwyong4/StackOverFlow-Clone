package preproject.stackoverflow_clone.vote.mapper;

import org.mapstruct.Mapper;
import preproject.stackoverflow_clone.vote.dto.VoteDto;
import preproject.stackoverflow_clone.vote.dto.VoteDto.Post;
import preproject.stackoverflow_clone.vote.entity.Vote;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    Vote voteDtoToVote(Post requestBody);
    VoteDto.Response voteToVoteResponse(Vote response);
}
