import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { never } from 'rxjs';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-pipe-ex',
  standalone: true,
  imports: [CommonModule, FormsModule, TitlePipe],
  templateUrl: './pipe-ex.component.html',
  styleUrl: './pipe-ex.component.css'
})
export class PipeExComponent {
    myDate:Date = new Date();

    course:string="prasad"

}
