defmodule BlujayApiWeb.TrackController do
    use BlujayApiWeb, :controller
    alias BlujayApi.Tracks

    def index(conn, _params) do
        tracks = Tracks.list_tracks()
        render conn, "show-all.json", data: tracks
    end

    def new(conn, args) do
        case Tracks.create_track(args) do
            {:ok, track} -> json(conn, track)
            error -> {:error, "failed"}
        end
    end
end