import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Component ,Inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resultado-dialog',
  standalone: true,
  imports: [CommonModule,MatDialogModule, MatButtonModule],
  templateUrl: './resultado-dialog.component.html',
  styleUrls: ['./resultado-dialog.component.css']
})
export class ResultadoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
