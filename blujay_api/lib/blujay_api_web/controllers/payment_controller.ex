defmodule BlujayApiWeb.PaymentController do
    use BlujayApiWeb, :controller
    require Logger

    def index(conn, _params) do
        render conn, "show-all.json", data: %{}
    end

    def new(conn, params) do
        headers = [{"Content-type", "application/x-www-form-urlencoded"}, {"Authorization", "Bearer sk_test_51HgjeuFVImSmLfhbOJmGYf6ypinBNfoCNbFqIwSWsHabePh0hXscMc8dLW28iudOnbHGSjk5kmRbUugYXGKCdgao00gWxSo4CZ"}]
        url = "https://api.stripe.com/v1/payment_intents"
        body = {:multipart, [{"amount", Map.get(params, "amount")}, {"currency", "USD"}]}
        case HTTPoison.post!(url, body, headers, []) do
            {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
              render conn, "new.json", data: body
            {:error, %HTTPoison.Error{reason: reason}} ->
              render conn, "error.json", data: reason
        end
    end
end