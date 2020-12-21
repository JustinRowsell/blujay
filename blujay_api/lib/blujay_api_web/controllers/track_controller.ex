defmodule BlujayApiWeb.TrackController do
    use BlujayApiWeb, :controller
    alias BlujayApi.Tracks

    def index(conn, _params) do
        tracks = Tracks.list_tracks()
        json(conn, tracks)
    end

    def new(conn, args) do
        case Tracks.create_track(args) do
            {:ok, track} -> {:ok, track}
            error -> {:error, "failed"}
        end
    end
end