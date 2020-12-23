defmodule BlujayApiWeb.TrackView do
    use BlujayApiWeb, :view
    require Logger

    def render("show-all.json", %{data: data}) do
        Enum.map(data, & Map.take(&1, [:description, :title, :image, :price, :title]))
    end
end