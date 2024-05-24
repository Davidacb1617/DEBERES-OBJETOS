import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
