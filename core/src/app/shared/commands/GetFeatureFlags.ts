import { getClientRequest } from "../helpers";

export default class Login {
  flags: string[];
  constructor(flags: string[]) {
    this.flags = flags;
  }
  async execute(): Promise<{
    flag: string;
    isActive: boolean;
  }[]> {
    const client = await getClientRequest();
    return client('/feature-flags', {
      method: 'GET',
      params: { flags: this.flags },
    });
  }
}