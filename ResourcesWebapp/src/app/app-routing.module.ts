import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrbanResourcesPageComponent } from './urban-resources-page/urban-resources-page.component';

const routes: Routes = [
  {
    path: '',
    //FIXME: reroute to a main component first
    component: UrbanResourcesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
