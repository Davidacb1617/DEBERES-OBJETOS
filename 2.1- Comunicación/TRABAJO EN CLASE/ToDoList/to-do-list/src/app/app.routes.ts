import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/todo' },
  {
    path: 'todo',
    loadChildren: () =>
      import('./pages/todo/todo.routes').then((n) => n.TODO_ROUTES),
  },
];
