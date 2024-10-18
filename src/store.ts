import { writable, derived, type Writable } from "svelte/store";

interface User {
  email?: string;
  [key: string]: any;
}

interface Task {
  user: string;
  [key: string]: any;
}

export const isAuthenticated: Writable<boolean> = writable(false);
export const user: Writable<User> = writable({});
export const popupOpen: Writable<boolean> = writable(false);
export const error: Writable<any> = writable();

export const tasks: Writable<Task[]> = writable([]);

export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks: Task[] = [];

  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
  }

  return logged_in_user_tasks;
});
