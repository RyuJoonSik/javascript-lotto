# 미션 - 로또 기능 목록

- MissionUtils.Random.pickUniqueNumbersInRange로 범위, 개수에 맞추어 로또 번호 생성
  - 범위: 1~45
  - 개수: 중복없이 6개
- Console.readLine로 구입 금액을 입력
  - 단위: 1,000원
  - 예외
    - 1,000원으로 나누어 떨어지지 않는 경우
    - 수가 아닐 경우
- Console.readLine로 당첨 번호 입력
  - 개수: 중복없이 6개
  - 범위: 1~45
  - 예외
    - 6개가 아닐 경우
    - 1~45의 수가 아닐 경우
- Console.readLine로 보너스 번호 입력
  - 개수: 1개
  - 예외
    - 1~45의 수가 아닐 경우
    - 1개가 아닐 경우
- 각 로또의 번호와 사용자의 당첨, 보너스 번호 비교
  - 최대 일치 개수, 보너스 볼 일치 여부 반환
- 일치 개수, 보너스 볼 일치 여부를 각 등수의 조건과 비교
  - 해당 등수의 조건을 만족하면 출력
  - 모든 등수를 순회하며 종합 결과 생성
- 종합 결과를 토대로 수익률 계산
