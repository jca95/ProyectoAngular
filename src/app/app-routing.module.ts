import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandaComponent } from './componentes/banda/banda.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [

  {path:'', component: PrincipalComponent},
  {path:'banda/:id',component:BandaComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
