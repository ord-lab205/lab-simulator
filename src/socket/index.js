const oracleController = require('../controller/oracleController');

module.exports = io => {
  io.on('connection', socket => {
    // 위험 요소에 대한 이벤트
    socket.on('_on_warning', data => {});

    // 일정 간격으로 데이터를 클라이언트로 전송
    // 데이터 변경 시 콜백 처리를 할 수 있는 oracledb의 메서드가 있다면 변경 예정.
    // 추가로 현재는 테스트 중이므로, 이후 [Start] 버튼을 누를 시 이벤트가 처리 될 수 있도록 변경 예정. (변경 완료. 클라이언트 부분 추가로 변경해야함.)
    socket.on('_on_residenceArea', () => {
      setInterval(() => {
        const table = '';
        await oracleController._fn_selectSensors(table).then(result => {
          io.emit('_emit_residenceArea', result);
        });
      }, 2000);
    })

    socket.on('Bridge Monitoring', () => {
      setInterval(() => {
        const table = '';
        await oracleController._fn_selectSensors(table).then(result => {
          io.emit('_emit_residenceArea', result);
        });
      }, 2000);
    })
  
    socket.on('Tunnel Monitoring', () => {
      setInterval(() => {
        selectRun('intergrated_sensor').then(result => {
          io.emit('Tunnel', result);
        });
        truncateExecute();
      }, 2000);
    })
  
    socket.on('Animals Monitoring', () => {
      setInterval(() => {
        selectRun('intergrated_sensor').then(result => {
          io.emit('Animals', result);
        });
        truncateExecute();
      }, 2000);
    })
    
    socket.on('End Monitoring', () => {
      socket.disconnect();
    })
  })
}