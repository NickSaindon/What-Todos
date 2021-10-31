class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :category
      t.string :title
      t.string :description
      t.string :scheduled
      t.boolean :completed
      t.timestamps
    end
  end
end
