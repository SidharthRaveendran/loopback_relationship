import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TodoList} from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({type: 'string', required: true})
  title: string;

  @property({type: 'string'})
  desc?: string;

  @property({type: 'boolean'})
  isComplete?: boolean;

  @property({
    type: 'string',
    mongodb: {
      dataType: 'ObjectID',
    },
  })
  todoListId: string;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
