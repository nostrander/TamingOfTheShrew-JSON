function displayMovie(movie)
{
  alert(movie.name);
  alert(movie.year);
  alert(movie.director);

  for(var x=0;x<movie.writer.length;x++)
  {
    alert(movie.writer[x]);
  }
  for(var y=0;y<movie.cast.length;y++)
  {
    var actor = movie.cast[y];
    alert(actor.firstName+" "+actor.lastName+" "+actor.role+".");
  }

}

function createMovieJSON()
{
  return
  {
    "name":"Taming of the Shrew",
    "year":1967,
    "director":"Franco Zeffirelli",
    "writer" : [
      {"William Shakespeare"},
	 {"Suso Cecchi D'Amico"},
	 {"Franco Zeffirelli"},
	 {"Paul Dehn"}
    ],
    "cast" : [
	{ "firstName" : "Elizabeth",
	  "lastName" : "Taylor",
	  "role" : "Katharina"
	},
	{ "firstName" : "Richard",
	  "lastName" : "Burton",
	  "role" : "Petruchio"
	},
	{
	  "firstName" : "Cyril",
	  "lastName" : "Cusack",
	  "role" : "Grumio"
	},
	{
	 "firstName" : "Michael",
	  "lastName" : "Hordern",
	  "role" : "Baptista"
	},
	{
	  "firstName" : "Alfred",
	  "lastName" : "Lynch",
	  "role" : "Tranio"
	},
	{
	  "firstName" : "Alan",
	  "lastName" : "Webb",
	  "role" : "Gremio"
	},
	{
	  "firstName" : "Giancarlo",
	  "lastName" : "Cobelli",
	  "role" : "Priest"
	},
	{
	  "firstName" : "Vernon",
	  "lastName" : "Dobtcheff",
	  "role" : "Pedant"
	},
	{
	  "firstName" : "Ken",
	  "lastName" : "Parry",
	  "role" : "Tailor"
	},
	{
	  "firstName" : "Anthony",
	  "lastName" : "Gardner",
	  "role" : "Haberdasher"
	},
	{
	  "firstName" : "Natasha",
	  "lastName" : "Pyne",
	  "role" : "Bianca"
	},
	{
	  "firstName" : "Michael",
	  "lastName" : "York",
	  "role" : "Lucentio"
	},
	{
	  "firstName" : "Victor",
	  "lastName" : "Spinetti",
	  "role" : "Hortensio"
	},
	{
	  "firstName" : "Roy",
	  "lastName" : "Holder",
	  "role" : "Biondello"
	},
	{
	  "firstName" : "Mark",
	  "lastName" : "Dignam",
	  "role" : "Widow"
	},
	{
	  "firstName" : "Alberto",
	  "lastName" : "Bonucci",
	  "role" : "Nathaniel"
	},
	{
	  "firstName" : "Roberto",
	  "lastName" : "Antonelli",
	  "role" : "Philip"
	},
	{
	  "firstName" : "Lino",
	  "lastName" : "Capolicchio",
	  "role" : "Gregory"
	},
	{
	  "firstName" : "Gianni",
	  "lastName" : "Magni",
	  "role" : "Curtis"
	}
    ]
  };
}

$(document).ready(function()
{
	$(".button").mouseover(function()
	{
		$(this).css("border", "2px solid lime");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "2px solid black");
	});

	$(".buttonMovie").click(function()
	{
		var movie = createMovieJSON();
		displayMovie(movie);
	});
});
