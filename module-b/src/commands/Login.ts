import { getClientRequest } from '@poc/core/app'

export default class Login {
  token: string;
  constructor(token: string) {
    this.token = token;
  }
  async execute() {
    const client = await getClientRequest();
    return client('/login', {
      method: 'POST',
      body: JSON.stringify({ token: this.token }),
    });
  }
}