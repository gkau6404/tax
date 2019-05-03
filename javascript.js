response = unirest.post("https://stylinandy-taxee.p.rapidapi.com/v2/calculate/{year}",
  headers={
    "X-RapidAPI-Host": "stylinandy-taxee.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  params={
    "pay_periods": 1
  }
)
response = unirest.get("https://stylinandy-taxee.p.rapidapi.com/v2/federal/{year}",
  headers={
    "X-RapidAPI-Host": "stylinandy-taxee.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU3Y2IyMWE2YmI4N2MxMDA0NGE2NmE2MiIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ3MzAxODA1OX0.xkn1_LHnLijhYMONl5iXhKD1vsdm0_5AtSKGsPrVtxI"
  }
)
response = unirest.get("https://stylinandy-taxee.p.rapidapi.com/v2/state/{year}/{state}",
  headers={
    "X-RapidAPI-Host": "stylinandy-taxee.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "Authorization": ""
  }
)