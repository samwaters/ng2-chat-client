import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import {UserService} from './services/user.service';
import {WebsocketService} from './services/websocket.service';
import {MaterialModule} from '@angular/material';
import {StoreModule, combineReducers} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {userReducer} from './reducers/user.reducer';
import {compose} from '@ngrx/core/compose';
import {FlexDirective, LayoutDirective} from './directives/flex.directive';
import { UserComponent } from './components/user/user.component';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './effects/user.effects';
import { MessagingInputComponent } from './components/ui/messaging-input/messaging-input.component';
import {MessageService} from './services/message.service';
import {messageReducer} from './reducers/message.reducer';
import {MessageEffects} from './effects/message.effects';
import { MessageComponent } from './components/message/message.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthComponent } from './components/auth/auth.component';
import {routing} from './app.routes';
import {ThemeService} from './services/theme.service';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig, firebaseAuthConfig} from '../../config/firebase.config';
import {FirebaseService} from './services/firebase.service';
import {ChatAuthGuard} from './guards/chat.guard';
import { CaptchaComponent } from './components/captcha/captcha.component';
import {CaptchaService} from './services/captcha.service';
import { MaterialInputComponent } from './components/ui/material-input/material-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavigationComponent,
    MessagingComponent,
    FlexDirective,
    LayoutDirective,
    UserComponent,
    MessagingInputComponent,
    MessageComponent,
    SignupComponent,
    LoginComponent,
    ChatComponent,
    AuthComponent,
    CaptchaComponent,
    MaterialInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    EffectsModule.run(UserEffects),
    EffectsModule.run(MessageEffects),
    StoreModule.provideStore(
      compose(storeLogger(), combineReducers)({messages:messageReducer, users: userReducer})
    ),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [UserService, WebsocketService, MessageService, ThemeService, FirebaseService, CaptchaService, ChatAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
