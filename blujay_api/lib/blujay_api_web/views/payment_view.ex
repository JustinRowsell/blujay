defmodule BlujayApiWeb.PaymentView do
    use BlujayApiWeb, :view
    require Logger

    def render("new.json", %{data: data}) do
        Logger.debug(data)
        Map.take(data, [:id])
    end
end