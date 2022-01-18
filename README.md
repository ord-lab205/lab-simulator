# 연구실 시뮬레이션

## 프로젝트 구조

```
app.js         # App entry point
api
config
jobs
loaders
models3
services
subscribers
types
```


```js
function fn_REST_GET__connect_SSE() {
  console.log(`Success. Function 'fnBehaviorSSE' is in operation.`);
  let sse = new EventSource(`http://127.0.0.1:80/sse`);
  sse.addEventListener("message", (e) => {
    general(e);
  })
  // sse.onmessage = e => {
  //   general(e);
  // }
  setTimeout(() => {
    sse.close();
    console.log(`SSE Connection is close.`);
  }, 1000 * 15);
}

function general() {
    var arr_a_row = e.data.split(',');
    console.log(arr_a_row);

    var e_noise1 = arr_a_row[1];
    var e_noise2 = arr_a_row[2];
    var e_noise3 = arr_a_row[3];
    var e_vibration1 = arr_a_row[4];
    var e_vibration2 = arr_a_row[5];
    var e_vibration3 = arr_a_row[6];
}
```