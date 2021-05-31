defmodule BlujayApiWeb.PaymentView do
    use BlujayApiWeb, :view
    require Logger

    def render("new.json", %{data: data}) do
        Map.take(data, ["created", "amount", "id", "currency", "client_secret"])
    end
end