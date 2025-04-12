export interface ValidationResult {
    isValid: boolean;
    errorMessage?: string;
}

export interface Todo {
    task: string;
    completed: boolean;
    priority: 1 | 2 | 3;
}