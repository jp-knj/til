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
const http = require('http');



