import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatediaryComponent } from "./creatediary/creatediary.component";
import { EditdiaryComponent } from "./editdiary/editdiary.component";
import { DiaryComponent } from "./diary.component";

const diaryRoutes:Routes = [
    {path: 'diary', component: DiaryComponent, children: [
        {path: '', component: CreatediaryComponent },
        {path: 'creatediary', component: CreatediaryComponent },
        {path: 'editdiary', component: EditdiaryComponent }
    ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(diaryRoutes)],
    exports: [RouterModule]
})
export class DiaryRouter {

}