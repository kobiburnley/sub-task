export class Task {
  constructor(
    public name: string = "",
    public subTasks: Task[] = [],
    public est: number = 0
  ) {
  }
}
