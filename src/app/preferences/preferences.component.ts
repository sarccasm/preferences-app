import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent {
  subjectInterests: string = '';
  isSaveEnabled: boolean = false;

  onSubjectChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.subjectInterests = input.value;
    this.isSaveEnabled = input.value.trim() !== '';
  }

  saveChanges(): void {
    console.log('Saved:', this.subjectInterests);
    alert(`Saved: ${this.subjectInterests}`);
    this.subjectInterests = '';
    this.isSaveEnabled = false;
  }
}
