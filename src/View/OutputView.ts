import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages';

interface ErrorExtends extends Error {
  cause: string;
}

interface PrintHint {
  ball: number;
  strike: number;
}

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printHint({ ball, strike }: PrintHint) {
    if (!ball && !strike) {
      return Console.print(OUTPUT_MESSAGE.noting);
    }
    if (ball && strike) {
      return Console.print(OUTPUT_MESSAGE.ball_and_strike(ball, strike));
    }
    if (strike) {
      return Console.print(OUTPUT_MESSAGE.strike(strike));
    }
    return Console.print(OUTPUT_MESSAGE.ball(ball));
  },

  printSuccess() {
    Console.print(OUTPUT_MESSAGE.success);
  },

  printError({ name, message, cause }: ErrorExtends) {
    Console.print(OUTPUT_MESSAGE.error(name, message, cause));
  },

  printGameEnd() {
    Console.print(OUTPUT_MESSAGE.end);
    Console.close();
  },

  finishGame() {
    Console.close();
  },
};

export default OutputView;
