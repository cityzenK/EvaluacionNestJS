import Strategy from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'headerapikey') {
  constructor(private authService: AuthService) {
    super({ header: 'x-api-key', prefix: '' }, false);
  }

  async validate(apiKey: string) {
    return this.authService.validateApiKey(apiKey);
  }
}
