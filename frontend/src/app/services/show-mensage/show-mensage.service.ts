import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShowMensageService {
  constructor(private mensage : MatSnackBar) {}

  openMensage(msg : string){
    this.mensage.open(msg, 'X',{
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }
}
