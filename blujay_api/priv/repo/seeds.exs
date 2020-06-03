# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     BlujayApi.Repo.insert!(%BlujayApi.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias BlujayApi.Repo
alias BlujayApi.Tracks.Track

%Track{file: "http://graphql.org/", description: "A fire ass beat", title: "I love Justin"} |> Repo.insert!
%Track{file: "http://dev.apollodata.com/", description: "Another fire ass beat", title: "I love my big brother"} |> Repo.insert!
