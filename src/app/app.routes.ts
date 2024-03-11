import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { MessageComponent } from './message/message.component';
import { ArrayexComponent } from './arrayex/arrayex.component';
import { RoutingexComponent } from './routingex/routingex.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

{path:'addition',component:AdditionComponent},
{path:'arrayex',component:ArrayexComponent},
{path:'message',component:MessageComponent},
{path:'pipeEx',component:PipeExComponent},
{path:'routingex',component:RoutingexComponent},
{path:'userex',component:UserComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},





];
