import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { AuthService } from './auth.service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(MagicLoginStrategy.name);

  constructor(private authService: AuthService) {
    super({
      secret: process.env.MAGIC_SECRET || 'default-secret', // Use env vars here
      jwtOptions: {
        expiresIn: '3m',
      },
      callbackUrl: `http://${process.env.HOST}:${process.env.PORT}/auth/login/callback`,
      sendMagicLink: async (destination, href) => {
        // TODO send magic link
        this.logger.debug(`sendMagicLink to ${destination} with link ${href}`);
        console.log('sendMagicLink', destination, href);
      },
      verify: async (payload, callback) =>
        callback(null, this.validate(payload)),
    });
  }

  validate(payload: { destination: string }) {
    const user = this.authService.validateUser(payload.destination);
    return user;
  }
}
