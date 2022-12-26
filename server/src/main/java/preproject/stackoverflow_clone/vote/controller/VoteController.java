//package preproject.stackoverflow_clone.vote.controller;
//
//import javax.validation.Valid;
//import javax.validation.constraints.Positive;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import preproject.stackoverflow_clone.dto.SingleResponseDto;
//import preproject.stackoverflow_clone.vote.dto.VoteDto;
//import preproject.stackoverflow_clone.vote.entity.Vote;
//import preproject.stackoverflow_clone.vote.mapper.VoteMapper;
//import preproject.stackoverflow_clone.vote.service.VoteService;
//
//@RestController
//@RequestMapping("/question")
//public class VoteController {
//
//    private final VoteService voteService;
//    private final VoteMapper mapper;
//
//    public VoteController(VoteService voteService, VoteMapper mapper) {
//        this.voteService = voteService;
//        this.mapper = mapper;
//    }
//
//    @PostMapping("/{questionId}/vote/{memberId}")
//    public ResponseEntity voteUp(@PathVariable("questionId") @Positive Long questionId,
//        @PathVariable("memberId") @Positive Long memberId,
//        @Valid @RequestBody Vote requestBody) {
//        requestBody.setMemberId(memberId);
//        requestBody.setQuestionId(questionId);
//        Vote vote = voteService.voteUp(mapper.voteDtoToVote(requestBody));
//        VoteDto.Response response = mapper.voteToVoteResponse(vote);
//
//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
//    }
//
//}
