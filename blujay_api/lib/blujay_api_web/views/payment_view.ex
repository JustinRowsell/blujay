defmodule BlujayApiWeb.TrackView do
    use BlujayApiWeb, :view
    require Logger

    def render("new.json", %{data: data}) do
        Map.take(data, [:id, :amount,- :image, :price, :title])
    end
end