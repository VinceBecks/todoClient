// todo: Package Trennung so sinnvoll? domain,app...ggf noch infrastructure mit dem Service?

export class Todo {
  todoId: number;
  title: string;
  description: string;
  state: string;
}
