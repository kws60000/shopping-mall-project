const POINTADD = "pointAdd/POINTADD";
const POINTDOWN = "pointAdd/POINTDOWN";

export const pointPlus = (point) => ({
  type: POINTADD,
  point,
});

export const pointMinus = ({ price, point, many }) => ({
  type: POINTDOWN,
  price,
  point,
  many,
});

let array = [];
// 포인트를 입력할 때 마다 추가되는 배열

export default function pointAdd(state = [{ point: 0 }], action) {
  switch (action.type) {
    // 포인트를 추가하는 경우의 액션타입
    case POINTADD:
      // 액션이 발생할 때 마다 포인트를 숫자형으로 바꾸고 배열에 추가
      array.push(parseInt(action.point));

      // reduce함수를 사용하여 배열 내의 모든 값을 더한다
      const reducer = (a, c) => a + c;
      const answer = array.reduce(reducer);

      // 배열 정리, 배열에 더한 결과값만 존재하게 한다
      array = [answer];

      // 모두 더한 값이 point가 된다
      const result = [...state, { point: answer }];

      // shift를 사용해서 result의 마지막 값만 반환
      if (result.length > 1) {
        result.shift();
      }
      return result;

    // 포인트를 사용하는 경우의 액션타입
    case POINTDOWN:
      const total = action.price * action.many;
      // 총 가격 = 가격 * 수량

      // 상품의 총 가격을 배열에 넣어 준다.
      array.push(total);

      // 포인트에서 가격을 빼는 리듀서
      const minusReducer = (a, c) => a - c;
      const minusAnswer = array.reduce(minusReducer);

      // 배열 정리, 배열에는 뺄셈 후 결과값만 존재
      array = [minusAnswer];

      // 모두 뺄셈한 값이 point가 된다
      const minusResult = [...state, { point: minusAnswer }];

      //shift를 사용해서 result의 마지막 값만 반환
      if (minusResult.length > 1) {
        minusResult.shift();
      }
      return minusResult;

    default:
      return state;
  }
}
