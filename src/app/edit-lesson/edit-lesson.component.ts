import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import {Lesson} from '../shared/model/lesson';
import {LessonsService} from '../shared/model/lessons.service';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})

export class EditLessonComponent implements OnInit {

	confirmationMessage: string;
  	lesson: Lesson;

  constructor(private route: ActivatedRoute, private router: Router, private lessonsService: LessonsService){
      route.data
        .do(console.log)
        .subscribe(
			data => this.lesson = data['lesson']
		);
  }

  ngOnInit() {
  }


  save(lesson) {

      this.lessonsService.saveLesson(this.lesson.$key, lesson)
            .subscribe(
				() => {
					this.router.navigate(['lessons', lesson.url]);
					this.confirmationMessage = 'lesson saved successfully !';
					// $('.modal').modal();
					alert(this.confirmationMessage);
				},
				err => alert(`error saving lesson ${err}`)
            );

  }

}
