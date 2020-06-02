defmodule BlujayApiWeb.TracksResolver do
  alias BlujayApi.Tracks

  def all_tracks(_root, _args, _info) do
    tracks = Tracks.list_tracks()
    {:ok, tracks}
  end

  def create_track(_root, args, _info) do
    case Tracks.create_track(args) do
      {:ok, track} -> {:ok, track}
      error -> {:error, "failed"}
    end
  end
end
