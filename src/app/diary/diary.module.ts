import { NgModule } from '@angular/core';
import { DiaryComponent } from './diary.component';
import { DiaryRouter } from './diary.router';
import { CreatediaryComponent } from './creatediary/creatediary.component';
import { EditdiaryComponent } from './editdiary/editdiary.component';

@NgModule({
    declarations: [
        CreatediaryComponent,
        EditdiaryComponent,
        DiaryComponent
    ],
    imports: [DiaryRouter]

})
export class DiaryModule {

}