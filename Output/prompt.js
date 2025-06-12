// dislay all 3 types of displays that uses prompt

const displayType = prompt("Enter the display type (alert, console, document):").toLowerCase();
const result = prompt("Enter the result you want to display:");

switch (displayType) {
    case 'alert':
        alert(`This is the result of the prompt: ${result}`);
        break;     
    case 'console':
        console.log(`This is the result of the prompt: ${result}`);
        break;
    case 'document':
        document.write(`This is the result of the prompt: ${result}`);
        break;
    default:
        console.error('Invalid display type specified.');
        break;
}