defmodule BlujayApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      BlujayApi.Repo,
      # Start the Telemetry supervisor
      BlujayApiWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: BlujayApi.PubSub},
      # Start the Endpoint (http/https)
      BlujayApiWeb.Endpoint
      # Start a worker by calling: BlujayApi.Worker.start_link(arg)
      # {BlujayApi.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: BlujayApi.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    BlujayApiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
