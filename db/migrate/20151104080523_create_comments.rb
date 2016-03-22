class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.string :name
      t.references :blog, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end