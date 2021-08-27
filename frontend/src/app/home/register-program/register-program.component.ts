import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-register-program',
  templateUrl: './register-program.component.html',
  styleUrls: ['./register-program.component.css'],
})
export class RegisterProgramComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPostion: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _snackBar: MatSnackBar,
    private _programService: ProgramService
  ) {
    this.registerData = {};
    this.message = '';
  }

  ngOnInit(): void {}

  registerProgram() {
    if (
      !this.registerData.name ||
      !this.registerData.description ||
      !this.registerData.id ||
      !this.registerData.teacherId
    ) {
      console.log('Failed process: Incomplete data');
      this.message = 'Failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      this._programService.registerProgram(this.registerData).subscribe(
        (res) =>{
          console.log(res);
          this.message = 'Successfull program registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (err) =>{
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      )
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPostion,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPostion,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
