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

// async await が使えるように別の関数に切り離す
async function _emitFizzBuzz(eventEmitter, until){
	eventEmitter.emit('start')
	let count = 1
	while(count <= until){
		await new Promise(resolve => setTimeout(resolve, 100))
		if(count % 15 === 0){
			eventEmitter.emit('FizzBuzz',count)
		} else if (count % 3 === 0){
			eventEmitter.emit('FizzBuzz')
		} else if (count % 5 === 0){
			eventEmitter.emit('Buzz', count)
		}
		count+= 1
	}
}

function startListener(){
	console.log('start')
}

function fizzListener(count){
	console.log('Fizz', count)
}

function buzzListener(count){
  console.log('Buzz', count)
}

function fizzBuzzListener(count){
 console.log('FizzBuzz', count)
}

function endListener(){
 console.log('end')
	this // this は EventEmitterのインスタンス
		.off('start', startListener)
		.off('Fizz', fizzListener)
		.off('Buzz', buzzListener)
		.off('FizzBuzz', fizzBuzzListener)
		.off('end', endListener)
}

createFizzBuzzEventEmitter(40)
	.on('start', startListener)
	.on('Fizz', fizzListener)
	.once('Buzz', buzzListener)
	.on('FizzBuzz', fizzBuzzListener)
	.once('end', endListener)


const http = require('http');




