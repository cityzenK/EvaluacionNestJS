import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('apiKey');
    if (!this.apiKey) {
      throw new Error('API key is missing');
    }
  }

  validateApiKey(apiKey: string) {
    return this.apiKey === apiKey;
  }
}
