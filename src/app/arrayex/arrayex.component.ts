import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrayex',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './arrayex.component.html',
  styleUrl: './arrayex.component.css'
})
export class ArrayexComponent {

  students:any[]=[{rno:1,name:'prasad'},{rno:2,name:'sakshi'}];

}
