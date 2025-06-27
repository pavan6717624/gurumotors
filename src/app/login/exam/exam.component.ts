import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class Question {
  question: string = '';
  answers: string[] = [];
  weightage: number[] = [];
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  answers:any;

  questions: any = [
  {
    "question": "How do you prefer to work on tasks?",
    "options": [
      { "text": "I prefer to plan and organize before starting", "weight": [4,3,2,1], "value":"A" },
      { "text": "I dive in and figure it out as I go", "weight": [2,3,4,1], "value":"B" },
      { "text": "I wait for inspiration or urgency", "weight": [1,3,2,4], "value":"C" },
      { "text": "I get started with small steps and build momentum", "weight": [3,1,4,2], "value":"D" }
      
    ],
    "answer":""
  },
  {
    "question": "In a group setting, you usually:",
    "options": [
      { "text": "Take the lead and guide the team", "weight": [4,3,2,1], "value":"A" },
      { "text": "Offer support and help where needed", "weight": [3,1,4,2], "value":"B" },
      { "text": "Prefer to observe and speak only when needed", "weight": [2,3,4,1], "value":"C" },
      { "text": "Avoid group situations when possible", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "When making decisions, you rely more on:",
    "options": [
      { "text": "Logic and analysis", "weight": [4,3,2,1], "value":"A" },
      { "text": "Gut feeling or intuition", "weight": [3,1,4,2], "value":"B" },
      { "text": "Advice from others", "weight": [2,3,4,1], "value":"C" },
      { "text": "Whichever feels right in the moment", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "What motivates you the most at work?",
    "options": [
      { "text": "Achieving goals and results", "weight": [4,3,2,1], "value":"A" },
      { "text": "Being appreciated by others", "weight": [3,1,4,2], "value":"B" },
      { "text": "Learning and exploring new things", "weight": [2,3,4,1], "value":"C" },
      { "text": "Having freedom and flexibility", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "How do you respond to conflict?",
    "options": [
      { "text": "I address it head-on and resolve it", "weight": [4,3,2,1], "value":"A" },
      { "text": "I try to find common ground", "weight": [3,1,4,2], "value":"B" },
      { "text": "I avoid it until it passes", "weight": [2,3,4,1], "value": "C" },
      { "text": "I walk away to keep the peace", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "Which best describes your working style?",
    "options": [
      { "text": "Structured and disciplined", "weight": [4,3,2,1], "value":"A" },
      { "text": "Flexible and adaptive", "weight": [3,1,4,2], "value":"B" },
      { "text": "Casual and creative", "weight": [2,3,4,1], "value":"C" },
      { "text": "Relaxed and spontaneous", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "What do you value most in others?",
    "options": [
      { "text": "Responsibility and reliability", "weight": [4,3,2,1], "value":"A" },
      { "text": "Compassion and kindness", "weight": [3,1,4,2], "value":"B" },
      { "text": "Curiosity and intelligence", "weight": [2,3,4,1], "value":"C" },
      { "text": "Humor and friendliness", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "How do you recharge after a long day?",
    "options": [
      { "text": "Reflecting or journaling alone", "weight": [4,3,2,1], "value":"A" },
      { "text": "Having a deep conversation", "weight": [3,1,4,2], "value":"B" },
      { "text": "Watching something light or fun", "weight": [2,3,4,1], "value":"C" },
      { "text": "Sleeping or napping", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "What best describes your approach to deadlines?",
    "options": [
      { "text": "I complete things well in advance", "weight": [4,3,2,1], "value":"A" },
      { "text": "I meet them just in time", "weight": [3,1,4,2], "value":"B" },
      { "text": "I work best under pressure", "weight": [2,3,4,1], "value":"C" },
      { "text": "I often miss or reschedule them", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  },
  {
    "question": "In unfamiliar situations, you:",
    "options": [
      { "text": "Analyze before acting", "weight": [4,3,2,1], "value":"A" },
      { "text": "Ask questions and explore", "weight": [3,1,4,2], "value":"B" },
      { "text": "Follow others’ leads", "weight": [2,3,4,1], "value":"C" },
      { "text": "Stay back and wait it out", "weight": [1,3,2,4], "value":"D" }
    ],
    "answer":""
  }
];

submit()
{
  if(this.questions[this.currquestion].answer==="")
  {
    alert("Select the answer to contine");
    return;
  }
  if(this.currquestion<9)
    this.currquestion=this.currquestion+1;
  else
   if(confirm("would like to submit?"))
   {
    this.calculate()
   }
}
calculate()
{
  var marks=[0,0,0,0];
  for(var i=0;i<this.questions.length;i++)
  {
    var answer=this.questions[i].answer;
    for(var j=0;j<4;j++)
    {
      if(this.questions[i].options[j].value==answer)
      {
        marks[j]+=this.questions[i].options[j].weight[j];
        break;
      }
    }
  }

   this.router.navigate(['graph'], { queryParams: {data: marks, exam: this.exam}});
}

currquestion:number=0;


  constructor(private router: Router, private route: ActivatedRoute,) { 

    


  }

  exam: string='YES';

  ngOnInit(): void {

     this.route.queryParams.subscribe(
      params => {
        console.log('Got the data as: ', params['data']);
        this.exam =  params['exam'];
      }
    );
  }

}
