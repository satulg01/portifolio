import { Component } from '@angular/core';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
	faLinkedin = faLinkedin;

	imagePath = '/assets/favicon.png'
	userPath = '/assets/user.png'

	darkModeSwitch (element : any) {
		if (element.target.checked) {
			// Checkbox está checado, adiciona a classe 'dark' ao body
			document.body.classList.add('dark');
		} else {
			// Checkbox não está checado, remove a classe 'dark' do body
			document.body.classList.remove('dark');
		}
	}
}
