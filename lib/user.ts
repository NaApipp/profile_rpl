/**
 * user.ts
 * ----------
 * Dummy / mock data user untuk login dashboard RPL.
 * 
 * Format: TypeScript
 */

// type DemoUser
export type DemoUser = {
  username: string;
  password: string;
};

export const USERS: DemoUser[] = [
  { username: "testing_user", password: "Testing1#" },
];  
