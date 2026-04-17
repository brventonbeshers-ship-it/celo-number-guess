// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CeloNumberGuess {
    uint256 public constant MIN_NUMBER = 1;
    uint256 public constant MAX_NUMBER = 100;
    uint256 public constant WIN_DISTANCE = 3;

    uint256 public totalGuesses;
    mapping(address => uint256) public userGuesses;
    mapping(address => uint256) public userWins;
    mapping(address => uint256) public lastGuess;
    mapping(address => uint256) public lastSecret;
    mapping(address => uint256) public lastDistance;

    address[10] public topAddresses;
    uint256[10] public topScores;

    event NumberGuessed(
        address indexed player,
        uint256 guess,
        uint256 secret,
        uint256 distance,
        bool won,
        uint256 userGuesses,
        uint256 totalGuesses
    );

    function guess(uint256 number) external {
        require(number >= MIN_NUMBER && number <= MAX_NUMBER, "number must be 1-100");

        totalGuesses += 1;
        userGuesses[msg.sender] += 1;

        uint256 secret = _random(100) + 1;
        uint256 distance = number > secret ? number - secret : secret - number;
        bool won = distance <= WIN_DISTANCE;

        lastGuess[msg.sender] = number;
        lastSecret[msg.sender] = secret;
        lastDistance[msg.sender] = distance;

        if (won) {
            userWins[msg.sender] += 1;
        }

        _updateLeaderboard(msg.sender, userWins[msg.sender]);

        emit NumberGuessed(
            msg.sender,
            number,
            secret,
            distance,
            won,
            userGuesses[msg.sender],
            totalGuesses
        );
    }

    function getUserStats(address player)
        external
        view
        returns (
            uint256 guesses,
            uint256 wins,
            uint256 latestGuess,
            uint256 latestSecret,
            uint256 latestDistance
        )
    {
        return (
            userGuesses[player],
            userWins[player],
            lastGuess[player],
            lastSecret[player],
            lastDistance[player]
        );
    }

    function getLeaderboard() external view returns (address[10] memory, uint256[10] memory) {
        return (topAddresses, topScores);
    }

    function _random(uint256 modulo) internal view returns (uint256) {
        return uint256(
            keccak256(
                abi.encodePacked(blockhash(block.number - 1), block.timestamp, msg.sender, totalGuesses)
            )
        ) % modulo;
    }

    function _updateLeaderboard(address user, uint256 score) internal {
        int256 existingIdx = -1;
        for (uint256 i = 0; i < 10; i++) {
            if (topAddresses[i] == user) {
                existingIdx = int256(i);
                topScores[i] = score;
                break;
            }
        }

        if (existingIdx < 0) {
            uint256 minIdx = 0;
            uint256 minScore = topScores[0];
            for (uint256 i = 1; i < 10; i++) {
                if (topScores[i] < minScore) {
                    minScore = topScores[i];
                    minIdx = i;
                }
            }

            if (score > minScore) {
                topAddresses[minIdx] = user;
                topScores[minIdx] = score;
                existingIdx = int256(minIdx);
            }
        }

        if (existingIdx >= 0) {
            uint256 idx = uint256(existingIdx);
            while (idx > 0 && topScores[idx] > topScores[idx - 1]) {
                (topAddresses[idx], topAddresses[idx - 1]) = (topAddresses[idx - 1], topAddresses[idx]);
                (topScores[idx], topScores[idx - 1]) = (topScores[idx - 1], topScores[idx]);
                idx--;
            }
        }
    }
}
