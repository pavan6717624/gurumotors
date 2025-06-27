import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router
   ) { }

  marks:any;

  exam: string = 'YES';

    home()
  {   
       
        this.router.navigate(['start']);
  }

  next()
  {   
        if(this.exam==='YES')
        this.router.navigate(['video']);
        else
        alert('Join the Course for Rupees 999/- only');
  }

  ngOnInit(): void {

     this.route.queryParams.subscribe(
      params => {
        console.log('Got the data as: ', params['data']);
        this.marks =  params['data'];

        var sum=0;

         for(var i=0;i<this.marks.length;i++)
        {
          sum+=parseInt(this.marks[i]);
        }

        console.log(sum);

        for(var i=0;i<this.marks.length;i++)
        {
          this.marks[i]=(this.marks[i]/sum)*100;
          console.log(this.marks[i]);
        }

        this.exam=params['exam'];
      }
    )

this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Computer Science', 'Electrical', 'Mechanical', 'Civil' ], 
           datasets: [
          {
            label: "Score",
            data: this.marks,
            backgroundColor: 'lightgreen'
          },
         
        ]
      },
      options: {
        aspectRatio:1
      }

    });

  }
public chart: any;



}
