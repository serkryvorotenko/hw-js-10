const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 13, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
    {name: 'Product 4', quantity: 11, price: 25},
    {name: 'Product 5', quantity: 3, price: 55},
    {name: 'Product 6', quantity: 26, price: 35},
    {name: 'Product 7', quantity: 15, price: 25},
    {name: 'Product 8', quantity: 33, price: 55},
    {name: 'Product 9', quantity: 28, price: 35},
    {name: 'Product 10', quantity: 11, price: 25},
    {name: 'Product 11', quantity: 43, price: 55},
    {name: 'Product 12', quantity: 42, price: 35},
];

function createStack() {
    const stack = [];
    return {
        push(item) {
            stack.push(item);
        },
        pop() {
            return stack.pop();
        },
        getStack() {
            return stack;
        },
    };
}

function isBetween(min, max) {
    return function filterFunction(value) {
        return value >= min && value <= max;
    };
}

function calculate(operation) {
    return function a(a) {
        return function b(b) {
            switch (operation) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    return a / b;
                case 'pow':
                    return Math.pow(a, b);
            }
        };
    };
}

function sortByField(fieldName, sortType) {
    return function compare(a, b) {
        if (a[fieldName] > b[fieldName]) {
            return sortType === 'asc' ? 1 : -1;
        }
        if (a[fieldName] < b[fieldName]) {
            return sortType === 'asc' ? -1 : 1;
        }
        return 0;
    };
}

function askNumber(message) {
    let a;
    let number1;
    do {
        a = prompt(message);
        number1 = +a;
    } while (a === '' || +a !== number1);
    return number1;
}

function askSortType(message) {
    let sortType;
    do {
        sortType = prompt(message);
    } while (sortType !== 'asc'
        && sortType !== 'desc'
        );
    return sortType;

}

function askOperation(message) {
    let operation;
    do {
        operation = prompt(message);
    } while (operation !== '+'
        && operation !== '-'
        && operation !== '*'
        && operation !== '/'
        && operation !== 'pow'
        );
    return operation;
}

const stack = createStack();
stack.push(1);
stack.push(10);
console.log(stack.getStack());
stack.pop();
console.log(stack.getStack());


console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween(askNumber('number 1'), askNumber('number 2'))));


const result = calculate(askOperation('What operation should be performed? + , - , * , / , pow'))(askNumber('number 1'))(askNumber('number 2'));
console.log(result);

products.sort(sortByField('quantity', askSortType('sort Type desc?/asc?')));
console.log(products);