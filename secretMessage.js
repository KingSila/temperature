let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to');
secretMessage.push('Program');


 secretMessage[7] = 'right';

secretMessage.shift();


secretMessage.splice(5, 5, 'know');
//console.log(secretMessage.join(' '));
secretMessage[15] = 'Silas';
secretMessage[16] = 'Mokone';
console.log(secretMessage.join(' '));
