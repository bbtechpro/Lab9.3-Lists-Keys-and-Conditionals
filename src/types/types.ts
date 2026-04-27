export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
}
