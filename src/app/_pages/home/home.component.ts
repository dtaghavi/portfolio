import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
    target_text = "Daniel Taghavi, Full Stack Developer & Blockchain Engineer";
    text = "";
    i = 0;
    
    constructor() { 
        // this.typeWriter();
    }

    ngAfterViewInit() {
        setTimeout(this.typeWriter.bind(this), 500);
    }

    typeWriter() {

        if (this.i < this.target_text.length) {
            this.text = this.target_text.substring(0, this.i + 1);
            this.i++;
            setTimeout(this.typeWriter.bind(this), 100); // Adjust typing speed (100ms)
        }
    }
}
