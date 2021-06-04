/*
    CIT 281: Lab 7
    Name: Edwin Gutierrez
*/

// 
class CustomError {
    constructor(message) {
        this.message = message;
        this.name = 'CustomError';
    }
}

// Throws a generic error message
function throwGenericError() {
    throw new Error('Generic error');
}

// Throws a custom error message
function throwCustomError() {
    throw new CustomError('Custom error');
}

// Block that force throws a generic error using the ThrowCustomError function
try {
    console.log('Force generic error');
    console.log('Generic error try block');
    throwGenericError();
} catch(err) {
    console.log('Generic error catch block');
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log('Generic error finally block');
}

// Block that force throws a custom error using the ThrowCustomError function
try {
    console.log('Force custom error');
    console.log('Custom error custom try block');
    throwCustomError();
} catch (err) {
    console.log('Custom error catch block');
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log('Custom error finally block');
}