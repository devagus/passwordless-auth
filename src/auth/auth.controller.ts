import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magiclogin.strategy';
import { PasswordlessLoginReqDto } from './dto/passwordless-login-req.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private strategy: MagicLoginStrategy,
  ) {}

  @Post('login')
  async login(
    @Req() req: any,
    @Res() res: any,
    @Body(new ValidationPipe()) body: PasswordlessLoginReqDto,
  ) {
    this.authService.validateUser(body.email);
    req.body = { ...body, destination: body.email };
    return this.strategy.send(req, res);
  }

  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback')
  async callback(@Req() req: any) {
    return this.authService.generateAccessToken(req.user);
  }
}
