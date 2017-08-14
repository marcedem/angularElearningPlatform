

import { Route } from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {CoursesComponent} from 'app/courses/courses.component';
import {CourseDetailComponent} from 'app/course-detail/course-detail.component';
import {LessonDetailComponent} from 'app/lesson-detail/lesson-detail.component';
import {NewLessonComponent} from 'app/new-lesson/new-lesson.component';
import {EditLessonComponent} from 'app/edit-lesson/edit-lesson.component';
import {LessonResolver} from 'app/shared/model/lesson.resolver';
import {LoginComponent} from 'app/login/login.component';
import {RegisterComponent} from 'app/register/register.component';
import {AuthGard} from 'app/shared/security/auth.guards';

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
                children: [
                    {
                        path: '',
                        component: CourseDetailComponent
                    },
                    {
                        path: 'new',
                        component: NewLessonComponent
                    }
                ]
            },
            {
                path: '',
                component: CoursesComponent
            }
        ]

    },
    {
        path: 'lessons/:id',
        children: [
            {
                path: '',
                component: LessonDetailComponent,
                canActivate: [AuthGard]
            },
            {
                path: 'edit',
                component: EditLessonComponent,
                resolve: {
                    lesson: LessonResolver
                }
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
