defmodule BuljayWebApi.PaymentController do
  alias Stripe
  def gen_intent() do
    {:ok, setup_intent} = Stripe.SetupIntent.create(%{})

    # Return the ID to your frontend, and pass it to the confirmCardSetup method from Stripe elements
    {:ok, setup_intent.id}
  end
end
