import { Body, Controller, Post } from '@nestjs/common';
import { ResponseData } from '../shared/response.model';
import { RegisterDto, LoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(
    @Body() authCredentialsDto: RegisterDto
  ): Promise<ResponseData> {
    const responseData = await this.authService.register(authCredentialsDto);
    return responseData;
  }

  @Post('/login')
  async login(@Body() loginDTO: LoginDto) {
    const responseData = await this.authService.login(loginDTO);
    return responseData;
  }
}
