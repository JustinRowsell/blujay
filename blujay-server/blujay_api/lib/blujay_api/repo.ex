defmodule BlujayApi.Repo do
  use Ecto.Repo,
    otp_app: :blujay_api,
    adapter: Ecto.Adapters.Postgres
end
