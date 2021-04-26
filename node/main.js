// on()
// $B;XDj$7$?%$%Y%s%H$KBP$7$F?7$7$$%j%9%J$rEPO?$9$k(B
//
// once()
// $B;XDj$7$?%$%Y%s%H$KBP$7$F0lEY$@$1?7$7$$%j%9%J$rEPO?$9$k(B
//
// off()
// $B;XDj$7$?%$%Y%s%H$KEPO?$7$?%j%9%J$r:o=|$9$k(B
//
// emit()
// $B;XDj$7$?%$%Y%s%H$r;XDj$7$?0z?t$GH/9T$9$k(B 

function createFizzBuzzEventEmitter(until){
	const eventEmitter = new events.EventEmitter()
	_emitFizzBuzz( eventEmitter, until)
	return eventEmitter
}

// async await $B$,;H$($k$h$&$KJL$N4X?t$K@Z$jN%$9(B
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
	this // this $B$O(B EventEmitter$B$N%$%s%9%?%s%9(B
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


// $B%5!<%P%*%V%8%'%/%H$N@8@.(B

// request$B%$%Y%s%H$N%j%9%JEPO?(B
// $B%/%i%$%"%s%H$+$i$N%j%/%(%9%H$KBP$9$k=hM}(B

// listening$B%$%Y%s%H$N%j%9%JEPO?(B
// $B%]!<%H$NBT5!$r3+;O$7$?:]$N=hM}(B

// 8000$B%]!<%H$G%j%/%(%9(Bt$B5!(B


// $BFI$_9~$_$,40N;$7$?ItJ,$+$i=q$-9~$s$G$$$/=hM}$r(B"$B%9%H%j!<%`(B"$B$C$F8@$&$i$7$$(B


// Node.js 
// $BFI$_9~$_%9%H%j!<%`(B
// $B=q$-9~$_%9%H%j!<%`(B
// $BFs=E%9%H%j!<%`(B $B$,$"$k$i$7$$(B
const http = require('http');




