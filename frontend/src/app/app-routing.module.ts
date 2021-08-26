import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProgramComponent } from './home/register-program/register-program.component';
import { RegisterCourseComponent } from './home/register-course/register-course.component';

const routes: Routes = [
  {
    path:'',
    component: RegisterTeacherComponent,
    pathMatch: "full",
  },
  {
    path: 'registerTeacher',
    component:  RegisterTeacherComponent,
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerProgram',
    component: RegisterProgramComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
