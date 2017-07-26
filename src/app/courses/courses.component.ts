import { Component, OnInit } from '@angular/core';
import {CoursesService} from 'app/shared/model/courses.service';
import {Observable} from 'rxjs/Rx';
import {Course} from 'app/shared/model/course';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	courses$: Observable<Course[]>;

	constructor(private courseService: CoursesService) { }

	ngOnInit() {
		this.courses$ = this.courseService.findAllCourses();
	}

}
