defmodule BlujayApiWeb.PaymentView do
    use BlujayApiWeb, :view
    require Logger

    def render("new.json", %{data: data}) do
        Map.take(data, [:amount])
    end
end