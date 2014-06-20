class CreateTasks < ActiveRecord::Migration
  def change
  	create_table :tasks do |t|
  		t.string :content, null: false
  		t.string :category
  		t.boolean :complete, default: false
  		t.integer :user_id

  		t.timestamps
  	end
  end
end
