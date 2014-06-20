require 'faker'

User.create(name: "KimpossibleG", password: "cake")
Task.create(content: "Walk the dog", category: "Personal", user_id: 1)
Task.create(content: "Rule the earth", category: "Professional", user_id: 1)

categories = ["Personal", "Professional", "Physical", "Financial", "Spiritual"]

10.times do |task|
	Task.create(content: Faker::Company.bs, category: categories.sample, user_id: 1)
end

10.times do |user|
	User.create(name: Faker::Name.name, password: "cake")
end

20.times do |task|
	Task.create(content: Faker::Company.bs, category: categories.sample, user_id: (1..10).to_a.sample)
end