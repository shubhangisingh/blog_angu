class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :refrence
      t.text :short_description
      t.text :content
      t.boolean :active

      t.timestamps null: false
    end
  end
end
