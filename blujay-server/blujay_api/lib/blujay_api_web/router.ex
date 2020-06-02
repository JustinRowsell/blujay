defmodule BlujayApiWeb.Router do
  use BlujayApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BlujayApiWeb do
    pipe_through :api

    forward "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: BlujayApiWeb.Schema,
      interface: :simple,
      context: %{pubsub: BlujayApiWeb.Endpoint},
      json_codec: Jason
  end
end
