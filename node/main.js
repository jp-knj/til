// on()
// 指定したイベントに対して新しいリスナを登録する
//
// once()
// 指定したイベントに対して一度だけ新しいリスナを登録する
//
// off()
// 指定したイベントに登録したリスナを削除する
//
// emit()
// 指定したイベントを指定した引数で発行する 

function createFizzBuzzEventEmitter(until){
	const eventEmitter = new events.EventEmitter()
	_emitFizzBuzz( eventEmitter, until)
	return eventEmitter
}
const http = require('http');



