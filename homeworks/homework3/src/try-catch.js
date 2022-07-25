let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  console.log( user.name ); // doesn't work

} catch (e) {
  // ...çalışma buradan devam eder.
  console.log( "Kusura bakmayın, veride hata var.Talep tekrar yapacaktır" );
  console.log( e.name );
  console.log( e.message );
}