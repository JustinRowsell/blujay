# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :blujay_api,
  ecto_repos: [BlujayApi.Repo]

# Configures the endpoint
config :blujay_api, BlujayApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "CVwGQaZ3wJ+5KRALXoWK3sdlclnu5JMqoA1wnxtH6Ghe42PRP25IQdgUQBIA5RYs",
  render_errors: [view: BlujayApiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: BlujayApi.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :stripity_stripe, api_key: System.get_env("STRIPE_SECRET")

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
