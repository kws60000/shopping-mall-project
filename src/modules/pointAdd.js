const POINTADD = "pointAdd/POINTADD";
export const pointPlus = (point) => ({
  type: POINTADD,
  point,
});

const array = [];
// 포인트를 입력할 때 마다 추가되는 배열

export default function pointAdd(state = [], action) {
  switch (action.type) {
    // 포인트를 추가하는 경우의 액션타입
    case POINTADD:
      // 액션이 발생할 때 마다 포인트를 숫자형으로 바꾸고 배열에 추가
      array.push(parseInt(action.point));

      // reduce함수를 사용하여 배열 내의 모든 값을 더한다
      const reducer = (a, c) => a + c;
      const answer = array.reduce(reducer);

      // 모두 더한 값이 point가 된다
      const result = [...state, { point: answer }];

      // shift를 사용해서 result의 마지막 값만 반환
      if (result.length > 1) {
        result.shift();
      }
      return result;

    default:
      return state;
  }
}
