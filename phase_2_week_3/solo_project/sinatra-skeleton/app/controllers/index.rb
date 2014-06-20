get '/' do 

	redirect '/sessions/new'
end

# ---------SESSIONS--------------------
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

# -------------HOMEPAGE--------------------------
get '/users/:user_id' do
	if session[:user_id].to_s == params[:user_id]
		@user = User.find(params[:user_id])
		erb :home
	else
		@error = "You do not have permission to view this page."
		redirect '/sessions/new'
	end
end

post '/task/:task_id/complete' do
	# content_type "application/json"
	Task.find(params[:task_id]).complete = true


end
