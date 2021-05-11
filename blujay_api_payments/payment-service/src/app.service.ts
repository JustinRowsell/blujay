import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
@Injectable()
export class AppService {
  async getNewCheckoutSession(
    name: string,
    unit_amount: number,
  ): Promise<string> {
    const stripe = new Stripe(
      'sk_test_51HgjeuFVImSmLfhbOJmGYf6ypinBNfoCNbFqIwSWsHabePh0hXscMc8dLW28iudOnbHGSjk5kmRbUugYXGKCdgao00gWxSo4CZ',
      {
        apiVersion: '2020-08-27',
      },
    );
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name,
            },
            unit_amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });
    return session.id;
  }
}
