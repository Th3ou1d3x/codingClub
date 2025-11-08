const searchParams = new URLSearchParams(window.location.search);
function getParam(name){
  return searchParams.get(name)
}
function hasParam(name){
  return searchParams.has(name)
}
if !hasParam("loading"){
  window.location.href = "/loading"
}
if getParam("loading") != "true" {
  window.location.href = "/loading"
}
