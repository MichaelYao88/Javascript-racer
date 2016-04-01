get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  if request.xhr?
    erb :"horses/_new", layout: false, locals: {post: @post}
  else
    "turn on javascript because I'm not writing this part out"
  end
end

post '/horses' do
  params[:horse][:age]
  @horse = Horse.new(age: params[:horse][:age], name: params[:horse][:name], breed: params[:horse][:breed])
  @horse.save
  if request.xhr?
    erb :"horses/_listed_horse", layout: false, locals: {post: @horse}
  else
    "turn on javascript because I'm not writing this part out"
  end

end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  if request.xhr?
    erb :"horses/_show", layout: false, locals: {post: @horse}
  else
    "turn on javascript because I'm not writing this part out"
  end
end
