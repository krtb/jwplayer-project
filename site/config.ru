use Rack::Static,
  :urls => ["/js", "/css"],
  :root => "public"

# local server runs on =>  http://localhost:9292
run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}