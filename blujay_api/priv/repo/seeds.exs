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

Track |> Repo.delete_all

%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
      description: "A fire ass beat", title: "J. Cole Type Beat", image: "/assets/images/j_cole.jpg",
      price: 4.99}
      |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Another fire ass beat", title: "Pop Smoke Type Beat",
       image: "/assets/images/popsmoke.jpg", price: 10.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "That new new", title: "The butterfly effect", image: "/assets/images/bonfire1.jpg", price: 99.99}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
%Track{file: "https://blujay-free.s3.us-east-2.amazonaws.com/Mac_Miller-Salamander.mp3",
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg", price: 0.0}
       |> Repo.insert!
