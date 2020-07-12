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

%Track{file: "https://www.wavsource.com/snds_2020-06-10_7014036401687385/tv/south_park/titties_huge.wav", 
      description: "A fire ass beat", title: "J. Cole Type Beat", image: "/assets/images/j_cole.jpg"} |> Repo.insert!
%Track{file: "https://www.wavsource.com/snds_2020-06-10_7014036401687385/tv/south_park/drugs_x.wav", description: "Another fire ass beat", title: "Pop Smoke Type Beat", image: "/assets/images/popsmoke.jpg"} |> Repo.insert!
%Track{file: "https://www.wavsource.com/snds_2020-06-10_7014036401687385/tv/south_park/bitch_ass_in_kitchen_z.wav", 
       description: "That new new", title: "The butterfly effect", image: "/assets/images/bonfire1.jpg"} |> Repo.insert!
%Track{file: "https://www.wavsource.com/snds_2020-06-10_7014036401687385/tv/south_park/good_night.wav", 
       description: "Anova one bruv.", title: "Fish and Chips", image: "/assets/images/bonfire2.jpg"} |> Repo.insert!
