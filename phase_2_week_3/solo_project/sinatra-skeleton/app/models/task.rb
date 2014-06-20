class Task < ActiveRecord::Base
	validates :content, presence: true
	validates :complete, :inclusion => {:in => [true, false]}

	
end
