import { Component, OnInit,ViewChildren,ElementRef,QueryList} from '@angular/core';
import { Part1Service } from 'src/app/services/service-part1.service';
import { $ } from 'protractor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  questions: any;
  currentAnswer :any={}
  otherAnswer:any;
  unattempted: Number=0;
  @ViewChildren('otherAns') otherAns: QueryList<ElementRef>;
  @ViewChildren('qHeader') qHeader: QueryList<ElementRef>;

  constructor(private part1Service: Part1Service) { }

  ngOnInit() { 
    
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    this.part1Service.getAll()
      .subscribe(
        data => {
          this.questions = data;
          this.unattempted=this.questions.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  
  refreshList() {
    this.retrieveQuestions();
   
  }

  
updateAnswer(ans,i,id,rType){
  this.currentAnswer[i]=ans;
  if(rType==1){
    
    // this[id].nativeElement.style.visibility = "visible";
    id.style.visibility = "visible";
    id.focus();
  }else{
    
    id.style.visibility = "hidden";
  }
}  



saveAnswer(qid,i,otherAnser,f:NgForm,otherAns,qHeader) {
  var ans;
  if(this.currentAnswer[i]=="OTHER"){
    ans=otherAnser
  }else{
    ans=this.currentAnswer[i]
  }

  const data = {
    question: qid[0],
    answer_text: ans
  };
console.log(data)
  this.part1Service.update(data)
    .subscribe(
      response => {
        console.log(response);
        otherAns.style.visibility = "hidden";
        otherAns.value = "";
        f.reset();
        
        if(qHeader.classList.contains("bg-success")==false){
        qHeader.classList.add('bg-success')
        this.unattempted=Number(this.unattempted)-1;
        }
      },
      error => {
        alert("Error")
        console.log(error);
      });
}

log(x){
  console.log(x)
}
setFocus(id: string) {
  
    this[id].nativeElement.focus();
  
}
}