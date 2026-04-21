import { Injectable } from '@nestjs/common';
import { BadGatewayException } from '@nestjs/common';

type HasuraGraphQLResponse<T> = {
  data?: T;
  errors?: Array<{
    message: string;
    extensions?: Record<string, unknown>;
  }>;
};

@Injectable()
export class HasuraService {
  private readonly hasuraUrl: string;
  private readonly adminSecret?: string;

  constructor() {
    this.hasuraUrl =
      process.env.HASURA_URL?.trim() ??
      'https://steady-shrimp-32.hasura.app/v1/graphql';
    this.adminSecret = process.env.HASURA_ADMIN_SECRET?.trim();
  }

  async request<TData>(
    query: string,
    variables?: Record<string, unknown>,
  ): Promise<TData> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (this.adminSecret) {
      headers['x-hasura-admin-secret'] = this.adminSecret;
    }

    const response = await fetch(this.hasuraUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    const payload = (await response.json()) as HasuraGraphQLResponse<TData>;

    if (!response.ok) {
      throw new BadGatewayException('Hasura request failed.');
    }

    if (payload.errors?.length) {
      const message = payload.errors.map((e) => e.message).join(' | ');
      throw new BadGatewayException(`Hasura error: ${message}`);
    }

    if (!payload.data) {
      throw new BadGatewayException('Hasura response missing data.');
    }

    return payload.data;
  }
}
