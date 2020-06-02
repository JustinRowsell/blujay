defmodule BlujayApi.Repo.Migrations.CreateTracks do
  use Ecto.Migration

  def change do
    create table(:tracks) do
      add :title, :text
      add :description, :text
      add :image, :text
      add :price, :float
      add :file, :text

      timestamps()
    end

  end
end
