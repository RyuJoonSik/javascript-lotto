const Lotto2ndWinning = require('./Lotto2ndWinning');
const LottoResult = require('../LottoResult/LottoResult');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const { getLogSpy } = require('../../testFunction');

describe('Lotto2ndWinning 클래스 테스트', () => {
  test('로또 결과들 중 2등 당첨 개수(0개)를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`;
    new Lotto2ndWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('로또 결과들 중 2등 당첨 개수(1개)를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치, 보너스 볼 일치 (30,000,000원) - 1개`;
    new Lotto2ndWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('로또 결과들 중 2등 당첨 개수(2개)를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치, 보너스 볼 일치 (30,000,000원) - 2개`;
    new Lotto2ndWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('당첨 개수가 2개면 60_000_000을 반환한다.', () => {
    const totalWinningMoney = new Lotto2ndWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
    ]).getTotalWinningMoney();

    expect(totalWinningMoney).toBe(60_000_000);
  });
});
