class User < ActiveRecord::Base
	validates :name, presence: true, uniqueness: true

	include BCrypt

    def password
	    @password ||= Password.new(password_hash)
	end

	def password=(pass)
	    @entered_password = pass
	    @password = Password.create(pass)
	    self.password_hash = @password
	end

	def self.authenticate(name, password)
	    user = User.find_by_name(name)
	    return user if user && (user.password == password)
	    nil # either invalid name or wrong password
	end
end
