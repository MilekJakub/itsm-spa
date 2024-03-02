export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export function isUser(obj: any): obj is User {
    return typeof obj === 'object' && obj !== null &&
        typeof obj.id === 'string' &&
        typeof obj.firstName === 'string' &&
        typeof obj.lastName === 'string' &&
        typeof obj.email === 'string' &&
        typeof obj.password === 'string';
}
