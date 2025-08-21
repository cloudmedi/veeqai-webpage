import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import { Copy, Check, ExternalLink } from 'lucide-react'

const StripeIntegrationPage: React.FC = () => {
  const { t } = useTranslation()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="bg-gray-900 rounded-lg p-4 relative">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400 text-sm font-medium">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          {copiedCode === id ? (
            <>
              <Check className="w-4 h-4" />
              {t('stripeIntegration.copied')}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              {t('stripeIntegration.copy')}
            </>
          )}
        </button>
      </div>
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )

  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('stripeIntegration.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('stripeIntegration.description')}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 id="setup-stripe" className="text-2xl font-bold text-black mb-6">{t('stripeIntegration.setup.title')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-3">1. Install Stripe SDK</h4>
            <CodeBlock
              language="bash"
              id="stripe-install"
              code={`# Install Stripe SDK
npm install stripe @stripe/stripe-js

# For React applications
npm install @stripe/react-stripe-js`}
            />
          </div>

          <div>
            <h4 className="font-bold text-black mb-3">2. Initialize Stripe</h4>
            <CodeBlock
              language="javascript"
              id="stripe-init"
              code={`import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_live_...');

// For server-side
const stripe = require('stripe')('sk_live_...');`}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 id="create-payment-intent" className="text-2xl font-bold text-black mb-6">{t('stripeIntegration.paymentIntent.title')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-3">API Endpoint</h4>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <code className="text-black font-mono">POST /api/billing/stripe/create-payment-intent</code>
            </div>
            
            <CodeBlock
              language="javascript"
              id="create-payment-intent"
              code={`// Create payment intent
const response = await fetch('/api/billing/stripe/create-payment-intent', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 2000, // $20.00 in cents
    currency: 'usd',
    planId: 'pro-monthly',
    paymentMethodId: 'pm_1234567890'
  })
});

const { clientSecret } = await response.json();`}
            />
          </div>

          <div>
            <h4 className="font-bold text-black mb-3">Frontend Implementation</h4>
            <CodeBlock
              language="jsx"
              id="stripe-frontend"
              code={`import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
    });

    if (error) {
      console.error('Payment failed:', error);
    } else {
      console.log('Payment succeeded:', paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};`}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 id="webhook-handling" className="text-2xl font-bold text-black mb-6">{t('stripeIntegration.webhooks.title')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-3">Setup Webhook Endpoint</h4>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <code className="text-black font-mono">POST /api/billing/stripe/webhook</code>
            </div>
            
            <CodeBlock
              language="javascript"
              id="stripe-webhook"
              code={`// Webhook handler
app.post('/api/billing/stripe/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = 'whsec_...';

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log('Webhook signature verification failed.', err.message);
    return res.status(400).send('Webhook signature verification failed.');
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      // Update user subscription status
      break;
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      console.log('Invoice payment succeeded!');
      // Add credits to user account
      break;
    default:
      console.log('Unhandled event type \${event.type}');
  }

  res.json({received: true});
});`}
            />
          </div>

          <div>
            <h4 className="font-bold text-black mb-3">Webhook Events</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-bold text-black mb-1">payment_intent.succeeded</h5>
                <p className="text-gray-600 text-sm">Payment completed successfully</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-bold text-black mb-1">invoice.payment_succeeded</h5>
                <p className="text-gray-600 text-sm">Recurring payment successful</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-bold text-black mb-1">payment_intent.payment_failed</h5>
                <p className="text-gray-600 text-sm">Payment failed or declined</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h5 className="font-bold text-black mb-1">customer.subscription.updated</h5>
                <p className="text-gray-600 text-sm">Subscription plan changed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 id="test-cards" className="text-2xl font-bold text-black mb-6">{t('stripeIntegration.testCards.title')}</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-black">Card Number</th>
                <th className="text-left py-3 px-4 font-bold text-black">Brand</th>
                <th className="text-left py-3 px-4 font-bold text-black">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">4242424242424242</td>
                <td className="py-3 px-4">Visa</td>
                <td className="py-3 px-4 text-gray-700">Successful payment</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">4000000000000002</td>
                <td className="py-3 px-4">Visa</td>
                <td className="py-3 px-4 text-gray-700">Card declined</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">4000000000009995</td>
                <td className="py-3 px-4">Visa</td>
                <td className="py-3 px-4 text-gray-700">Insufficient funds</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">5555555555554444</td>
                <td className="py-3 px-4">Mastercard</td>
                <td className="py-3 px-4 text-gray-700">Successful payment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 id="best-practices" className="text-2xl font-bold text-black mb-6">{t('stripeIntegration.bestPractices.title')}</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Use HTTPS</h5>
            <p className="text-gray-600 text-sm">Always use HTTPS in production for secure payments</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Verify Webhooks</h5>
            <p className="text-gray-600 text-sm">Always verify webhook signatures to prevent fraud</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Handle Errors Gracefully</h5>
            <p className="text-gray-600 text-sm">Provide clear error messages to users</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Use Idempotency Keys</h5>
            <p className="text-gray-600 text-sm">Prevent duplicate charges with idempotency keys</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700">
            For more information, visit the{' '}
            <a 
              href="https://stripe.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              Stripe Documentation <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </DocsLayout>
  )
}

export default StripeIntegrationPage