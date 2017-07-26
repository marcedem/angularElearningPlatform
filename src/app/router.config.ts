

import { Route } from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {CoursesComponent} from 'app/courses/courses.component';
import {CourseDetailComponent} from 'app/course-detail/course-detail.component';

// Simply an array
export const routerConfig: Route [] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses',
        children: [
            {
                path: ':id',
                component: CourseDetailComponent
            },
            {
                path: '',
                component: CoursesComponent
            }
        ]

    },
     {
        path: '**',
        redirectTo: 'home'
    }
];