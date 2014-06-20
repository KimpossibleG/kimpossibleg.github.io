get '/' do 

	redirect '/sessions/new'
end

get '/sessions/new' do
  erb :signin
end

post '/sessions' do
  # sign-in
  user = User.authenticate(params[:name], params[:password])
  if user
    # successfully authenticated; set up session and redirect
    session[:user_id] = user.id
    redirect "/users/#{user.id}"
  else
    # an error occurred, re-render the sign-in form, displaying an error
    @error = "Invalid email or password."
    erb :signin
  end
end

# delete '/sessions/:id' do
#   # sign-out -- invoked via AJAX
#   return 401 unless params[:id].to_i == session[:user_id].to_i
#   session.clear
#   200
# end
get '/users/:user_id' do
	logger.info(session[:user_id].to_s.class)
	logger.info(params[:user_id].class)
	logger.info(session[:user_id] == params[:user_id])
	if session[:user_id].to_s == params[:user_id]
		@user = User.find(params[:user_id])
	logger.info("I'm the user: ")
	logger.info(@user)
		erb :home
	else
		@error = "You do not have permission to view this page."
		redirect '/sessions/new'
	end
end
