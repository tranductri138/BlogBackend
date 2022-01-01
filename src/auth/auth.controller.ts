import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // this is method dang nhap 
  @Post('/signup')
  signup() {
    this.authService.signup();
  }

  @Post('/signin')
  signin() {
    this.authService.signin();
  }

  @Post('/logout')
  logout() {
    this.authService.logout();
  }

  @Post('refresh')
  refreshToken() {
    this.authService.refreshToken();
  }

}
