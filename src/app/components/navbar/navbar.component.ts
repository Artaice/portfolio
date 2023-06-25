import { Component } from '@angular/core';
import { faBook, faBriefcase, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faHouse = faHouse;
  faUser = faUser;
  faFile = faFile;
  faBook = faBook;
  faBriefcase = faBriefcase;
}
