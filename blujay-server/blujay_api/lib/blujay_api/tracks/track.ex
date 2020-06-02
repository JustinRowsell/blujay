defmodule BlujayApi.Tracks.Track do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tracks" do
    field :description, :string
    field :file, :string
    field :image, :string
    field :price, :float
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(track, attrs) do
    track
    |> cast(attrs, [:title, :description, :image, :price, :file])
    |> validate_required([:title, :description, :image, :price, :file])
  end
end
