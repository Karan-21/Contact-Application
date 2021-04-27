import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    component: ListUserComponent,
    path: '',
  },
  {
    component: ShowComponent,
    path: 'show/:id',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
