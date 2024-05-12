import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'email-ui';
  to: string = '';
  subject: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  sendData() {
    const data = {
      to: this.to,
      subject: this.subject,
      message: this.message
    }

    this.http.post('backend-url', data).subscribe(response => {
      console.log('Message sent!', response);

      this.to = '';
      this.subject = '';
      this.message = '';
    })
  }
}
