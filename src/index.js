import mojs from 'mo-js';

let identity = s => s;
console.log(identity('Initialized'));
console.log(mojs);

// var shape = new mojs.Shape({
//       shape:        'circle',
//       isShowStart:  true
//     });

const burst = new mojs.Burst();
document.addEventListener( 'click' , (e) => {
  burst.replay();
});