import { Logger, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');
  async getNewCheckoutSession(
    name: string,
    unit_amount: number,
    url: string,
  ): Promise<string> {
    this.logger.log(`amount: ${unit_amount}, name: ${name}, url: ${url}`)
    const stripe = new Stripe(
      'sk_test_51HgjeuFVImSmLfhbOJmGYf6ypinBNfoCNbFqIwSWsHabePh0hXscMc8dLW28iudOnbHGSjk5kmRbUugYXGKCdgao00gWxSo4CZ',
      {
        apiVersion: '2020-08-27',
      },
    );
    const product = await stripe.products.create({
      name,
      description: 'Comfortable cotton t-shirt',
      images: ['https://example.com/t-shirt.png'],
    });
    
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount,
      currency: 'usd',
    });
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        description: 'Comfortable cotton t-shirt',
        price: price.id,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${url}/success`,
      cancel_url: `${url}/cancel`,
    });
    return session.id;
  }
}
