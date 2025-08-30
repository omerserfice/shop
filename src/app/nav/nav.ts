import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,                // ✅ CLI bunu otomatik koyar
  imports: [],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']   // ✅ styleUrls çoğul
})
export class Nav {}

