defmodule BlujayApiWeb.Schema do
  use Absinthe.Schema

  alias BlujayApiWeb.TracksResolver

  object :track do
    field :id, non_null(:id)
    field :title, non_null(:string)
    field :file, non_null(:string)
    field :description, non_null(:string)
    field :image, :string
    field :price, non_null(:float)
  end

  query do
    field :all_tracks, non_null(list_of(non_null(:track))) do
      resolve &TracksResolver.all_tracks/3
    end
  end
end
