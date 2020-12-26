defmodule BlujayApiWeb.PaymentController do
    use BlujayApiWeb, :controller

    def index(conn, _params) do
        render conn, "show-all.json", data: %{}
    end

    def new(conn, amount) do
        case HTTPoison.post!("https://api.stripe.com/v1/payment_intents", %{ amount: amount, currency: "USD" }) do
            {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
              render conn, "new.json", data: body
            {:error, %HTTPoison.Error{reason: reason}} ->
              render conn, "error.json", data: reason
        end
    end
end