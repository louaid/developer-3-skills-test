(function () {
  var pollutedCase1 = 'https://www.google.com/?firstname=louai&lastname=drissi&email=louaidpro@gmail.com&country=morocco';
  var pollutedCase2 = 'https://www.google.com/wecantest/louaidpr@gmail.com/moreandmore/somemore';
  var pollutedCase3 = 'https://www.google.com/wecantest/moreandmore/somemore';
  // location.href
  var emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  var pollutedURL = pollutedCase1
  var emailKeyExist = pollutedURL.indexOf('email='); // try to see what we testing against
  var checkURL = pollutedURL.match(emailPattern);
  var j;
  var newChar;
  
  // locate the email and position
  function strLocator(URL, emailRegExp) {
    var locatedStr = emailRegExp.exec(URL);
    if (locatedStr != null) {
      var emailposition = URL.indexOf(locatedStr[0]);
      return emailposition;
    }
  }
  
  var emailKeyPostion = strLocator(pollutedURL, emailPattern);
  
  if (emailKeyExist) {
    newChar = pollutedURL.charAt(emailKeyPostion - 1);
  }
  else {
    newChar = pollutedURL.charAt(emailKeyPostion - 1)
  }
  
  var queryString = pollutedURL.split(newChar);
  
  if (checkURL) {
    for (var i = 0; i < queryString.length; i++) {
      if (queryString[i].match(emailPattern) != null) {
        j = i;
      }
    }
    queryString.splice(j, 1);
    console.log(queryString.join(newChar));
      // we can send it to url location.href = queryString.join(newChar);
  }
  else {
    console.log('The address is clean');
  
  }
})();