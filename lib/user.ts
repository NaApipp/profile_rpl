// lib/users.ts
export type DemoUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.    
};

export const USERS: DemoUser[] = [
  { username: "testing_user", password: "Testing1#" },
];  
