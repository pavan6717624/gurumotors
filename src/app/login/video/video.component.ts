import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, private router: Router) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/FbDNVDXG5q8");
  }

  ngOnInit(): void {
  }

  click()
  {
        this.router.navigate(['exam'], { queryParams: {exam:'NO'}});
  }

}
