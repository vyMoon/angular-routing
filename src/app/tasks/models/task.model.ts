export class TaskModel {
  constructor(
    public id: number = null,
    public action: string = '',
    public priority: number = 0,
    public estHours: number = 0,
    public actHours?: number,
    public done?: boolean
  ) { }
}
