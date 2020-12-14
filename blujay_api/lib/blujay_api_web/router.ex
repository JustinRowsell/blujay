defmodule BlujayApiWeb.Router do
  use BlujayApiWeb, :router

  pipeline :api do
    plug CORSPlug, origin: "*"
    plug :accepts, ["json"]
  end

  scope "/payment", BlujayApiWeb do
    pipe_through :browser # Use the default browser stack

    get "/intent", PaymentController, :gen_intent
  end

  scope "/" do
    pipe_through :api

    forward "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: BlujayApiWeb.Schema,
      interface: :simple,
      context: %{pubsub: BlujayApiWeb.Endpoint},
      json_codec: Jason

    forward "/",
      Absinthe.Plug,
      schema: BlujayApiWeb.Schema
  end
end
